const express = require('express');
const compression = require('compression');
const fs = require('fs');
const http = require('http');
const path = require('path');
const vm = require('vm');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';
const PUBLIC_DIR = __dirname;
const ROOM_IDLE_TTL_MS = readPositiveNumber(process.env.ROOM_IDLE_TTL_MS, 30 * 60 * 1000);
const ROOM_SWEEP_INTERVAL_MS = readPositiveNumber(process.env.ROOM_SWEEP_INTERVAL_MS, 5 * 60 * 1000);
const rooms = {};

app.disable('x-powered-by');

const allowedSocketOrigins = parseAllowedOrigins();
const io = new Server(server, {
    cors: {
        origin(origin, callback) {
            callback(null, isSocketOriginAllowed(origin));
        }
    },
    allowRequest(req, callback) {
        callback(null, isSocketOriginAllowed(req.headers.origin, req.headers.host));
    }
});

function readPositiveNumber(value, fallback) {
    const number = Number(value);
    return Number.isFinite(number) && number > 0 ? number : fallback;
}

function parseAllowedOrigins() {
    const raw = process.env.SOCKET_IO_ORIGINS || process.env.CORS_ORIGINS || process.env.PUBLIC_ORIGIN || '';
    return new Set(raw.split(',').map((item) => normalizeOrigin(item.trim())).filter(Boolean));
}

function normalizeOrigin(origin) {
    if (!origin || origin === '*') return origin || '';
    try {
        return new URL(origin).origin;
    } catch (error) {
        return '';
    }
}

function isLocalOrigin(origin) {
    try {
        const { hostname } = new URL(origin);
        return ['localhost', '127.0.0.1', '::1'].includes(hostname);
    } catch (error) {
        return false;
    }
}

function isSocketOriginAllowed(origin, host = '') {
    if (!origin) return true;
    const normalized = normalizeOrigin(origin);
    if (!normalized) return false;
    if (allowedSocketOrigins.has('*') || allowedSocketOrigins.has(normalized)) return true;
    if (isLocalOrigin(normalized)) return true;

    const requestHost = String(host || '').split(',')[0].trim().toLowerCase();
    if (!requestHost) return allowedSocketOrigins.size === 0;

    try {
        return new URL(normalized).host.toLowerCase() === requestHost;
    } catch (error) {
        return false;
    }
}

app.use(compression({ threshold: 1024 }));
app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
    next();
});

app.get('/health', (req, res) => {
    res.status(200).json({ ok: true, service: 'futbol-mix' });
});

app.get('/favicon.ico', (req, res) => {
    res.type('image/svg+xml').sendFile(path.join(PUBLIC_DIR, 'assets', 'favicon.svg'));
});

app.use(express.static(PUBLIC_DIR));

function loadAuctionData() {
    const source = fs.readFileSync(path.join(PUBLIC_DIR, 'datossubasta.js'), 'utf8');
    const context = {};
    vm.createContext(context);
    vm.runInContext(`${source}; this.subastaPlayers = subastaPlayers; this.auctionPositions = auctionPositions;`, context);
    return {
        players: context.subastaPlayers || [],
        positions: context.auctionPositions || []
    };
}

const { players: subastaPlayers, positions: auctionPositions } = loadAuctionData();

function cleanRoomName(roomName) {
    return String(roomName || '')
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^a-zA-Z0-9_-]/g, '')
        .slice(0, 24)
        .toUpperCase();
}

function cleanUsername(username) {
    return String(username || '')
        .trim()
        .replace(/\s+/g, ' ')
        .slice(0, 18) || 'Jugador';
}

function randomRoomName() {
    const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 5; i++) code += alphabet[Math.floor(Math.random() * alphabet.length)];
    return rooms[code] ? randomRoomName() : code;
}

function shuffle(list) {
    const copy = [...list];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function createAuctionList() {
    if (!auctionPositions.length) return shuffle(subastaPlayers);

    const used = new Set();
    const selected = [];
    auctionPositions.forEach((position) => {
        const options = subastaPlayers.filter((player, index) => player.pos === position && !used.has(index));
        if (!options.length) return;
        const player = options[Math.floor(Math.random() * options.length)];
        const originalIndex = subastaPlayers.indexOf(player);
        used.add(originalIndex);
        selected.push(player);
    });

    const bench = shuffle(subastaPlayers.filter((_, index) => !used.has(index))).slice(0, 8);
    return [...selected, ...bench];
}

function publicUsers(room) {
    return room.users.map(({ id, username, budget, roster, connected }) => ({
        id,
        username,
        budget,
        roster,
        connected
    }));
}

function emitRoomState(roomName) {
    const room = rooms[roomName];
    if (!room) return;
    touchRoom(roomName);
    io.to(roomName).emit('roomState', {
        roomName,
        adminId: room.admin,
        status: room.status,
        users: publicUsers(room),
        config: room.config
    });
}

function addRoomEvent(roomName, text, type = 'info') {
    touchRoom(roomName);
    io.to(roomName).emit('auctionEvent', { text, type, time: Date.now() });
}

function touchRoom(roomName) {
    const room = rooms[roomName];
    if (room) room.updatedAt = Date.now();
}

function cleanupRoom(roomName, force = false) {
    const room = rooms[roomName];
    if (!room || (!force && room.users.some((user) => user.connected))) return;
    if (room.interval) clearInterval(room.interval);
    delete rooms[roomName];
}

function sweepInactiveRooms() {
    const now = Date.now();
    Object.entries(rooms).forEach(([roomName, room]) => {
        const inactiveFor = now - (room.updatedAt || room.createdAt || now);
        const hasConnectedUsers = room.users.some((user) => user.connected);
        const isTerminal = room.status === 'finished';
        if ((isTerminal || !hasConnectedUsers) && inactiveFor > ROOM_IDLE_TTL_MS) {
            cleanupRoom(roomName, true);
        }
    });
}

setInterval(sweepInactiveRooms, ROOM_SWEEP_INTERVAL_MS).unref();

function nextRound(roomName) {
    const room = rooms[roomName];
    if (!room || room.status !== 'active') return;

    if (room.currentPlayerIdx >= room.auctionList.length) {
        room.status = 'finished';
        if (room.interval) clearInterval(room.interval);
        io.to(roomName).emit('auctionEnd', { users: publicUsers(room) });
        emitRoomState(roomName);
        return;
    }

    const player = room.auctionList[room.currentPlayerIdx];
    room.currentBid = player.price;
    room.lastBidderId = null;
    room.timer = room.config.auctionTime;

    io.to(roomName).emit('nextPlayer', {
        index: room.currentPlayerIdx,
        total: room.auctionList.length,
        player,
        price: room.currentBid,
        time: room.timer,
        roundLabel: `${player.pos} ${room.currentPlayerIdx + 1}/${room.auctionList.length}`
    });

    if (room.interval) clearInterval(room.interval);
    room.interval = setInterval(() => {
        room.timer -= 1;
        io.to(roomName).emit('timerUpdate', room.timer);

        if (room.timer > 0) return;

        clearInterval(room.interval);
        const winner = room.users.find((user) => user.id === room.lastBidderId);
        if (winner) {
            winner.budget -= room.currentBid;
            winner.roster.push(player);
        }

        io.to(roomName).emit('roundFinished', {
            player,
            winner: winner ? winner.username : 'Nadie',
            price: winner ? room.currentBid : 0,
            users: publicUsers(room)
        });
        emitRoomState(roomName);

        room.currentPlayerIdx += 1;
        setTimeout(() => nextRound(roomName), 3500);
    }, 1000);
}

io.on('connection', (socket) => {
    socket.on('createRoom', (data = {}) => {
        const username = cleanUsername(data.username);
        const roomName = cleanRoomName(data.roomName) || randomRoomName();

        if (rooms[roomName]) return socket.emit('errorMsg', 'La sala ya existe.');

        const auctionTime = Math.max(5, Math.min(60, Number(data.auctionTime) || 15));
        const initialBudget = Math.max(100, Math.min(5000, Number(data.initialBudget) || 1000));

        rooms[roomName] = {
            admin: socket.id,
            users: [{ id: socket.id, username, budget: initialBudget, roster: [], connected: true }],
            config: { auctionTime, initialBudget },
            status: 'waiting',
            auctionList: createAuctionList(),
            currentPlayerIdx: 0,
            currentBid: 0,
            lastBidderId: null,
            timer: 0,
            interval: null,
            createdAt: Date.now(),
            updatedAt: Date.now()
        };

        socket.join(roomName);
        socket.data.roomName = roomName;
        socket.data.username = username;
        socket.emit('roomJoined', { roomName, username, isAdmin: true });
        emitRoomState(roomName);
        addRoomEvent(roomName, `${username} creó la sala.`, 'system');
    });

    socket.on('joinRoom', (data = {}) => {
        const roomName = cleanRoomName(data.roomName);
        const username = cleanUsername(data.username);
        const room = rooms[roomName];

        if (!room) return socket.emit('errorMsg', 'La sala no existe.');
        if (room.status !== 'waiting') return socket.emit('errorMsg', 'La partida ya empezó.');
        if (room.users.some((user) => user.username.toLowerCase() === username.toLowerCase() && user.connected)) {
            return socket.emit('errorMsg', 'Ese nombre ya está usado en la sala.');
        }

        room.users.push({
            id: socket.id,
            username,
            budget: room.config.initialBudget,
            roster: [],
            connected: true
        });

        socket.join(roomName);
        socket.data.roomName = roomName;
        socket.data.username = username;
        socket.emit('roomJoined', { roomName, username, isAdmin: socket.id === room.admin });
        emitRoomState(roomName);
        addRoomEvent(roomName, `${username} se unió.`, 'system');
    });

    socket.on('startAuction', (roomNameInput) => {
        const roomName = cleanRoomName(roomNameInput || socket.data.roomName);
        const room = rooms[roomName];
        if (!room) return socket.emit('errorMsg', 'La sala no existe.');
        if (socket.id !== room.admin) return socket.emit('errorMsg', 'Solo el creador puede empezar.');
        if (room.users.filter((user) => user.connected).length < 2) {
            return socket.emit('errorMsg', 'Se necesitan al menos 2 jugadores.');
        }

        room.status = 'active';
        io.to(roomName).emit('auctionStarted');
        emitRoomState(roomName);
        addRoomEvent(roomName, 'La subasta empezó.', 'system');
        nextRound(roomName);
    });

    socket.on('placeBid', (data = {}) => {
        const roomName = cleanRoomName(data.roomName || socket.data.roomName);
        const room = rooms[roomName];
        if (!room || room.status !== 'active') return;

        const user = room.users.find((item) => item.id === socket.id && item.connected);
        if (!user) return;

        const increment = Math.max(1, Math.min(500, Math.floor(Number(data.amount) || 0)));
        if (!increment) return socket.emit('errorMsg', 'La oferta debe ser mayor a 0.');

        const newBid = room.currentBid + increment;
        if (newBid > user.budget) {
            return socket.emit('errorMsg', 'No te alcanza el presupuesto para esa oferta.');
        }

        room.currentBid = newBid;
        room.lastBidderId = socket.id;
        if (room.timer < 6) room.timer = 6;

        io.to(roomName).emit('bidUpdate', {
            newBid: room.currentBid,
            bidderName: user.username,
            bidderId: user.id,
            timeLeft: room.timer
        });
        addRoomEvent(roomName, `${user.username} ofertó $${room.currentBid}M.`, 'bid');
    });

    socket.on('sendAuctionChat', (data = {}) => {
        const roomName = cleanRoomName(data.roomName || socket.data.roomName);
        const room = rooms[roomName];
        const user = room && room.users.find((item) => item.id === socket.id);
        const text = String(data.text || '').trim().slice(0, 120);
        if (!room || !user || !text) return;
        addRoomEvent(roomName, `${user.username}: ${text}`, 'chat');
    });

    socket.on('disconnect', () => {
        const roomName = socket.data.roomName;
        const room = rooms[roomName];
        if (!room) return;

        const user = room.users.find((item) => item.id === socket.id);
        if (user) user.connected = false;
        if (room.lastBidderId === socket.id) room.lastBidderId = null;

        const nextAdmin = room.users.find((item) => item.connected);
        room.admin = nextAdmin ? nextAdmin.id : room.admin;

        addRoomEvent(roomName, `${socket.data.username || 'Un jugador'} salió.`, 'system');
        emitRoomState(roomName);
        cleanupRoom(roomName);
    });
});

server.listen(PORT, HOST, () => {
    console.log(`Futbol Mix listo en ${HOST}:${PORT} (PORT=${process.env.PORT || 'local'})`);
});
