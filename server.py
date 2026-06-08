import base64
import hashlib
import json
import os
import random
import re
import socket
import socketserver
import struct
import threading
import time
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer


HOST = "127.0.0.1"
PORT = int(os.environ.get("PORT", "8766"))
ROOT = os.path.dirname(os.path.abspath(__file__))
WS_GUID = "258EAFA5-E914-47DA-95CA-C5AB0DC85B11"

rooms = {}
clients = {}
lock = threading.RLock()


def load_auction_data():
    path = os.path.join(ROOT, "datossubasta.js")
    with open(path, "r", encoding="utf-8") as file:
        source = file.read()

    player_pattern = re.compile(
        r'\{\s*name:\s*"(?P<name>[^"]+)",\s*club:\s*"(?P<club>[^"]+)",\s*pos:\s*"(?P<pos>[^"]+)",\s*'
        r'rating:\s*(?P<rating>\d+),\s*rarity:\s*"(?P<rarity>[^"]+)",\s*price:\s*(?P<price>\d+),\s*'
        r'stats:\s*\{(?P<stats>[^}]+)\},\s*nat:\s*"(?P<nat>[^"]*)"\s*\}',
        re.MULTILINE,
    )
    stat_pattern = re.compile(r"([a-z]+):\s*(\d+)", re.IGNORECASE)

    players = []
    for match in player_pattern.finditer(source):
        players.append(
            {
                "name": match.group("name"),
                "club": match.group("club"),
                "pos": match.group("pos"),
                "rating": int(match.group("rating")),
                "rarity": match.group("rarity"),
                "price": int(match.group("price")),
                "stats": {key: int(value) for key, value in stat_pattern.findall(match.group("stats"))},
                "nat": match.group("nat"),
            }
        )

    positions_match = re.search(r"const\s+auctionPositions\s*=\s*\[(?P<body>[^\]]+)\]", source)
    positions = re.findall(r'"([^"]+)"', positions_match.group("body")) if positions_match else []
    return players, positions


subasta_players, auction_positions = load_auction_data()


def clean_room_name(value):
    value = re.sub(r"\s+", "-", str(value or "").strip())
    value = re.sub(r"[^a-zA-Z0-9_-]", "", value)
    return value[:24].upper()


def clean_username(value):
    value = re.sub(r"\s+", " ", str(value or "").strip())[:18]
    return value or "Jugador"


def random_room_name():
    alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"
    while True:
        code = "".join(random.choice(alphabet) for _ in range(5))
        if code not in rooms:
            return code


def create_auction_list():
    if not auction_positions:
        players = subasta_players[:]
        random.shuffle(players)
        return players

    used_names = set()
    selected = []
    for position in auction_positions:
        options = [player for player in subasta_players if player["pos"] == position and player["name"] not in used_names]
        if not options:
            continue
        player = random.choice(options)
        used_names.add(player["name"])
        selected.append(player)

    bench = [player for player in subasta_players if player["name"] not in used_names]
    random.shuffle(bench)
    return selected + bench[:8]


def public_users(room):
    return [
        {
            "id": user["id"],
            "username": user["username"],
            "budget": user["budget"],
            "roster": user["roster"],
            "connected": user["connected"],
        }
        for user in room["users"]
    ]


def send_to_room(room_name, event, data=None):
    room = rooms.get(room_name)
    if not room:
        return
    for user in list(room["users"]):
        client = clients.get(user["id"])
        if client and user["connected"]:
            client.send(event, data)


def emit_room_state(room_name):
    room = rooms.get(room_name)
    if not room:
        return
    send_to_room(
        room_name,
        "roomState",
        {
            "roomName": room_name,
            "adminId": room["admin"],
            "status": room["status"],
            "users": public_users(room),
            "config": room["config"],
        },
    )


def add_room_event(room_name, text, event_type="info"):
    send_to_room(room_name, "auctionEvent", {"text": text, "type": event_type, "time": int(time.time() * 1000)})


def cleanup_room(room_name):
    room = rooms.get(room_name)
    if not room:
        return
    if any(user["connected"] for user in room["users"]):
        return
    room["stop_timer"] = True
    rooms.pop(room_name, None)


def next_round(room_name):
    with lock:
        room = rooms.get(room_name)
        if not room or room["status"] != "active":
            return

        if room["currentPlayerIdx"] >= len(room["auctionList"]):
            room["status"] = "finished"
            room["stop_timer"] = True
            send_to_room(room_name, "auctionEnd", {"users": public_users(room)})
            emit_room_state(room_name)
            return

        player = room["auctionList"][room["currentPlayerIdx"]]
        room["currentBid"] = player["price"]
        room["lastBidderId"] = None
        room["timer"] = room["config"]["auctionTime"]
        room["stop_timer"] = False
        send_to_room(
            room_name,
            "nextPlayer",
            {
                "index": room["currentPlayerIdx"],
                "total": len(room["auctionList"]),
                "player": player,
                "price": room["currentBid"],
                "time": room["timer"],
                "roundLabel": f'{player["pos"]} {room["currentPlayerIdx"] + 1}/{len(room["auctionList"])}',
            },
        )

    while True:
        time.sleep(1)
        with lock:
            room = rooms.get(room_name)
            if not room or room["status"] != "active" or room["stop_timer"]:
                return

            room["timer"] -= 1
            send_to_room(room_name, "timerUpdate", room["timer"])
            if room["timer"] > 0:
                continue

            player = room["auctionList"][room["currentPlayerIdx"]]
            winner = next((user for user in room["users"] if user["id"] == room["lastBidderId"] and user["connected"]), None)
            if winner:
                winner["budget"] -= room["currentBid"]
                winner["roster"].append(player)

            send_to_room(
                room_name,
                "roundFinished",
                {
                    "player": player,
                    "winner": winner["username"] if winner else "Nadie",
                    "price": room["currentBid"] if winner else 0,
                    "users": public_users(room),
                },
            )
            emit_room_state(room_name)
            room["currentPlayerIdx"] += 1
            break

    time.sleep(3.5)
    next_round(room_name)


class WebSocketClient:
    def __init__(self, request, client_id):
        self.request = request
        self.id = client_id
        self.room_name = ""
        self.username = ""
        self.write_lock = threading.Lock()

    def send(self, event, data=None):
        packet = json.dumps({"event": event, "data": data}, ensure_ascii=False).encode("utf-8")
        header = bytearray([0x81])
        length = len(packet)
        if length < 126:
            header.append(length)
        elif length < 65536:
            header.append(126)
            header.extend(struct.pack("!H", length))
        else:
            header.append(127)
            header.extend(struct.pack("!Q", length))
        with self.write_lock:
            self.request.sendall(header + packet)

    def recv(self):
        header = self.request.recv(2)
        if len(header) < 2:
            return None
        opcode = header[0] & 0x0F
        if opcode == 0x8:
            return None
        masked = header[1] & 0x80
        length = header[1] & 0x7F
        if length == 126:
            length = struct.unpack("!H", self.request.recv(2))[0]
        elif length == 127:
            length = struct.unpack("!Q", self.request.recv(8))[0]

        mask = self.request.recv(4) if masked else b""
        payload = b""
        while len(payload) < length:
            chunk = self.request.recv(length - len(payload))
            if not chunk:
                return None
            payload += chunk

        if masked:
            payload = bytes(byte ^ mask[index % 4] for index, byte in enumerate(payload))
        return payload.decode("utf-8")


class Handler(SimpleHTTPRequestHandler):
    def translate_path(self, path):
        path = path.split("?", 1)[0].split("#", 1)[0]
        path = os.path.normpath(path.lstrip("/"))
        return os.path.join(ROOT, path)

    def do_GET(self):
        if self.path.split("?", 1)[0] == "/ws":
            self.handle_websocket()
            return
        return super().do_GET()

    def handle_websocket(self):
        key = self.headers.get("Sec-WebSocket-Key")
        if not key:
            self.send_error(400, "Missing WebSocket key")
            return

        accept = base64.b64encode(hashlib.sha1((key + WS_GUID).encode("ascii")).digest()).decode("ascii")
        self.request.sendall(
            (
                "HTTP/1.1 101 Switching Protocols\r\n"
                "Upgrade: websocket\r\n"
                "Connection: Upgrade\r\n"
                f"Sec-WebSocket-Accept: {accept}\r\n\r\n"
            ).encode("ascii")
        )

        client_id = f"py-{int(time.time() * 1000)}-{random.randint(1000, 9999)}"
        client = WebSocketClient(self.request, client_id)
        with lock:
            clients[client_id] = client
        client.send("socketId", {"id": client_id})

        try:
            while True:
                raw = client.recv()
                if raw is None:
                    break
                packet = json.loads(raw)
                dispatch(client, packet.get("event"), packet.get("data") or {})
        except (ConnectionError, OSError, socket.error, json.JSONDecodeError):
            pass
        finally:
            handle_disconnect(client)


def dispatch(client, event, data):
    if event == "createRoom":
        create_room(client, data)
    elif event == "joinRoom":
        join_room(client, data)
    elif event == "startAuction":
        start_auction(client, data)
    elif event == "placeBid":
        place_bid(client, data)
    elif event == "sendAuctionChat":
        send_chat(client, data)


def create_room(client, data):
    with lock:
        username = clean_username(data.get("username"))
        room_name = clean_room_name(data.get("roomName")) or random_room_name()
        if room_name in rooms:
            client.send("errorMsg", "La sala ya existe.")
            return

        auction_time = max(5, min(60, int(data.get("auctionTime") or 15)))
        initial_budget = max(100, min(5000, int(data.get("initialBudget") or 1000)))
        rooms[room_name] = {
            "admin": client.id,
            "users": [
                {"id": client.id, "username": username, "budget": initial_budget, "roster": [], "connected": True}
            ],
            "config": {"auctionTime": auction_time, "initialBudget": initial_budget},
            "status": "waiting",
            "auctionList": create_auction_list(),
            "currentPlayerIdx": 0,
            "currentBid": 0,
            "lastBidderId": None,
            "timer": 0,
            "stop_timer": False,
        }
        client.room_name = room_name
        client.username = username
        client.send("roomJoined", {"roomName": room_name, "username": username, "isAdmin": True})
        emit_room_state(room_name)
        add_room_event(room_name, f"{username} creó la sala.", "system")


def join_room(client, data):
    with lock:
        room_name = clean_room_name(data.get("roomName"))
        username = clean_username(data.get("username"))
        room = rooms.get(room_name)
        if not room:
            client.send("errorMsg", "La sala no existe.")
            return
        if room["status"] != "waiting":
            client.send("errorMsg", "La partida ya empezó.")
            return
        if any(user["username"].lower() == username.lower() and user["connected"] for user in room["users"]):
            client.send("errorMsg", "Ese nombre ya está usado en la sala.")
            return

        room["users"].append(
            {
                "id": client.id,
                "username": username,
                "budget": room["config"]["initialBudget"],
                "roster": [],
                "connected": True,
            }
        )
        client.room_name = room_name
        client.username = username
        client.send("roomJoined", {"roomName": room_name, "username": username, "isAdmin": client.id == room["admin"]})
        emit_room_state(room_name)
        add_room_event(room_name, f"{username} se unió.", "system")


def start_auction(client, data):
    with lock:
        room_name = clean_room_name(data or client.room_name)
        room = rooms.get(room_name)
        if not room:
            client.send("errorMsg", "La sala no existe.")
            return
        if client.id != room["admin"]:
            client.send("errorMsg", "Solo el creador puede empezar.")
            return
        if len([user for user in room["users"] if user["connected"]]) < 2:
            client.send("errorMsg", "Se necesitan al menos 2 jugadores.")
            return
        room["status"] = "active"
        send_to_room(room_name, "auctionStarted")
        emit_room_state(room_name)
        add_room_event(room_name, "La subasta empezó.", "system")

    threading.Thread(target=next_round, args=(room_name,), daemon=True).start()


def place_bid(client, data):
    with lock:
        room_name = clean_room_name(data.get("roomName") or client.room_name)
        room = rooms.get(room_name)
        if not room or room["status"] != "active":
            return
        user = next((item for item in room["users"] if item["id"] == client.id and item["connected"]), None)
        if not user:
            return
        increment = max(1, min(500, int(data.get("amount") or 0)))
        new_bid = room["currentBid"] + increment
        if new_bid > user["budget"]:
            client.send("errorMsg", "No te alcanza el presupuesto para esa oferta.")
            return
        room["currentBid"] = new_bid
        room["lastBidderId"] = client.id
        if room["timer"] < 6:
            room["timer"] = 6
        send_to_room(
            room_name,
            "bidUpdate",
            {"newBid": new_bid, "bidderName": user["username"], "bidderId": user["id"], "timeLeft": room["timer"]},
        )
        add_room_event(room_name, f'{user["username"]} ofertó ${new_bid}M.', "bid")


def send_chat(client, data):
    with lock:
        room_name = clean_room_name(data.get("roomName") or client.room_name)
        room = rooms.get(room_name)
        if not room:
            return
        user = next((item for item in room["users"] if item["id"] == client.id), None)
        text = str(data.get("text") or "").strip()[:120]
        if user and text:
            add_room_event(room_name, f'{user["username"]}: {text}', "chat")


def handle_disconnect(client):
    with lock:
        clients.pop(client.id, None)
        room = rooms.get(client.room_name)
        if not room:
            return
        user = next((item for item in room["users"] if item["id"] == client.id), None)
        if user:
            user["connected"] = False
        if room["lastBidderId"] == client.id:
            room["lastBidderId"] = None
        next_admin = next((item for item in room["users"] if item["connected"]), None)
        if next_admin:
            room["admin"] = next_admin["id"]
        add_room_event(client.room_name, f"{client.username or 'Un jugador'} salió.", "system")
        emit_room_state(client.room_name)
        cleanup_room(client.room_name)


class ReusableThreadingHTTPServer(ThreadingHTTPServer):
    allow_reuse_address = True


if __name__ == "__main__":
    os.chdir(ROOT)
    with ReusableThreadingHTTPServer((HOST, PORT), Handler) as httpd:
        print(f"Subasta Online lista en http://{HOST}:{PORT}/")
        httpd.serve_forever()
