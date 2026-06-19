const sources = window.clubSources || [
  { label: "Wikipedia - UEFA Champions League finals", url: "https://en.wikipedia.org/wiki/List_of_UEFA_Champions_League_finals" },
  { label: "Wikipedia - Copa Libertadores finals", url: "https://en.wikipedia.org/wiki/List_of_Copa_Libertadores_finals" },
  { label: "Transfermarkt - club squads", url: "https://www.transfermarkt.com/" },
];
const roleNames = {
  POR: "Arquero",
  LD: "Lateral derecho",
  DFC: "Central",
  LI: "Lateral izquierdo",
  MCD: "Mediocentro defensivo",
  MC: "Mediocampista",
  MCO: "Enganche",
  EI: "Extremo izquierdo",
  ED: "Extremo derecho",
  DC: "Delantero centro",
};

const roleLine = {
  POR: "POR",
  LD: "DEF",
  DFC: "DEF",
  LI: "DEF",
  MCD: "MED",
  MC: "MED",
  MCO: "MED",
  EI: "DEL",
  ED: "DEL",
  DC: "DEL",
};

const broadFallbackRoles = {
  POR: ["POR"],
  DEF: ["DFC"],
  MED: ["MC"],
  DEL: ["DC"],
};

const roleOverrides = {};

const squads = window.clubSquads || [];

const formations = {
  "4-3-3": ["POR", "LD", "DFC", "DFC", "LI", "MCD", "MC", "MCO", "ED", "DC", "EI"],
  "4-4-2": ["POR", "LD", "DFC", "DFC", "LI", "MCD", "MC", "MC", "MCO", "DC", "DC"],
  "3-5-2": ["POR", "DFC", "DFC", "DFC", "MCD", "MC", "MC", "MCO", "MCO", "DC", "DC"],
  "3-4-3": ["POR", "DFC", "DFC", "DFC", "MCD", "MC", "MC", "MCO", "EI", "DC", "ED"],
  "5-3-2": ["POR", "LD", "DFC", "DFC", "DFC", "LI", "MCD", "MC", "MCO", "DC", "DC"],
};

const pitchLayouts = {
  "4-3-3": [
    [50, 90], [84, 68], [62, 70], [38, 70], [16, 68], [50, 56], [36, 45], [64, 45], [78, 25], [50, 20], [22, 25],
  ],
  "4-4-2": [
    [50, 90], [84, 68], [62, 70], [38, 70], [16, 68], [50, 56], [35, 45], [65, 45], [50, 34], [40, 19], [60, 19],
  ],
  "3-5-2": [
    [50, 90], [70, 70], [50, 73], [30, 70], [50, 58], [28, 48], [72, 48], [39, 36], [61, 36], [40, 18], [60, 18],
  ],
  "3-4-3": [
    [50, 90], [70, 70], [50, 73], [30, 70], [50, 58], [35, 47], [65, 47], [50, 36], [22, 24], [50, 18], [78, 24],
  ],
  "5-3-2": [
    [50, 90], [87, 68], [68, 72], [50, 74], [32, 72], [13, 68], [50, 55], [36, 43], [64, 43], [40, 20], [60, 20],
  ],
};

const defaultFormation = { name: "4-3-3", slots: formations["4-3-3"] };

const state = {
  picked: [],
  skips: 3,
  currentSquad: null,
  filter: "ALL",
  drawHistory: [],
  formationName: null,
  formation: null,
  pendingPlayerIndex: null,
  simulating: false,
};

const pickedCount = document.querySelector("#pickedCount");
const formationLabel = document.querySelector("#formationLabel");
const skipCount = document.querySelector("#skipCount");
const teamRating = document.querySelector("#teamRating");
const lineup = document.querySelector("#lineup");
const gkRating = document.querySelector("#gkRating");
const defRating = document.querySelector("#defRating");
const midRating = document.querySelector("#midRating");
const attRating = document.querySelector("#attRating");
const drawTitle = document.querySelector("#drawTitle");
const drawSubtitle = document.querySelector("#drawSubtitle");
const drawBtn = document.querySelector("#drawBtn");
const skipBtn = document.querySelector("#skipBtn");
const resetBtn = document.querySelector("#resetBtn");
const playerGrid = document.querySelector("#playerGrid");
const pitchBoard = document.querySelector("#pitchBoard");
const tournamentPanel = document.querySelector("#tournamentPanel");
const simulateBtn = document.querySelector("#simulateBtn");
const tournamentLog = document.querySelector("#tournamentLog");
const oddsBox = document.querySelector("#oddsBox");
const sourcesList = document.querySelector("#sourcesList");
const formationGrid = document.querySelector("#formationGrid");

function cleanPlayerName(name) {
  return name.replace(/\s+\d{4}\b/g, "").trim();
}

function playerName(player) {
  return player.displayName || cleanPlayerName(player.name);
}

function p(name, pos, ovr, roles) {
  const normalizedRoles = roles || roleOverrides[name] || broadFallbackRoles[pos] || [pos];
  const primaryRole = normalizedRoles[0];
  const displayName = cleanPlayerName(name);
  return { name: displayName, sourceName: name, displayName, pos: roleLine[primaryRole] || pos, role: primaryRole, roles: normalizedRoles, ovr };
}

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function average(items) {
  if (!items.length) return 0;
  return items.reduce((sum, item) => sum + item.ovr, 0) / items.length;
}

function groupByPosition(players) {
  return {
    POR: players.filter((player) => player.pos === "POR"),
    DEF: players.filter((player) => player.pos === "DEF"),
    MED: players.filter((player) => player.pos === "MED"),
    DEL: players.filter((player) => player.pos === "DEL"),
  };
}

function lineCountsFromFormation(formation = defaultFormation) {
  return formation.slots.reduce((counts, role) => {
    counts[roleLine[role]] += 1;
    return counts;
  }, { POR: 0, DEF: 0, MED: 0, DEL: 0 });
}

function bestXI(players, formation = defaultFormation) {
  const available = players.slice();
  const bestIndex = (predicate) => available.reduce((best, player, index) => {
    if (!predicate(player)) return best;
    if (best === -1 || player.ovr > available[best].ovr) return index;
    return best;
  }, -1);
  return formation.slots.map((slot) => {
    let index = bestIndex((player) => player.roles.includes(slot));
    if (index === -1) {
      index = bestIndex((player) => player.pos === roleLine[slot]);
    }
    if (index === -1) {
      index = available.reduce((bestIndex, player, playerIndex) => player.ovr > available[bestIndex].ovr ? playerIndex : bestIndex, 0);
    }
    const [player] = available.splice(index, 1);
    return { ...player, assignedRole: slot };
  }).filter(Boolean);
}

function countByPosition(players) {
  return {
    POR: players.filter((player) => player.pos === "POR").length,
    DEF: players.filter((player) => player.pos === "DEF").length,
    MED: players.filter((player) => player.pos === "MED").length,
    DEL: players.filter((player) => player.pos === "DEL").length,
  };
}

function countByRole(players) {
  return players.reduce((counts, player) => {
    const role = player.assignedRole || player.role;
    counts[role] = (counts[role] || 0) + 1;
    return counts;
  }, {});
}

function remainingForRole(role) {
  if (!state.formation) return 0;
  const required = state.formation.slots.filter((slot) => slot === role).length;
  return required - (countByRole(state.picked)[role] || 0);
}

function compatibleOpenRoles(player) {
  return [...new Set(compatibleOpenSlots(player).map((slot) => slot.role))];
}

function compatibleOpenSlots(player) {
  if (!state.formation) return [];
  const usedSlots = new Set(state.picked.map((picked) => picked.assignedSlotIndex).filter(Number.isInteger));
  return state.formation.slots
    .map((role, slotIndex) => ({ role, slotIndex }))
    .filter((slot) => !usedSlots.has(slot.slotIndex) && player.roles.includes(slot.role));
}

function canPickPlayer(player) {
  return compatibleOpenSlots(player).length > 0;
}

function assignRole(player) {
  return compatibleOpenSlots(player)[0]?.role || null;
}

function slotSideLabel(role, slotIndex) {
  if (!state.formation) return roleNames[role] || role;
  const sameRoleSlots = state.formation.slots
    .map((slotRole, index) => slotRole === role ? index : -1)
    .filter((index) => index !== -1);
  if (sameRoleSlots.length <= 1) return roleNames[role] || role;

  const coordinates = pitchLayouts[state.formation.name] || pitchLayouts["4-3-3"];
  const [x] = coordinates[slotIndex] || [50, 50];
  const side = x < 42 ? "izquierdo" : x > 58 ? "derecho" : "central";
  return `${role} ${side}`;
}

function completePickPlayer(player, assignedRole, assignedSlotIndex) {
  state.picked.push({
    ...player,
    assignedRole,
    assignedSlotIndex,
    team: `${state.currentSquad.country} ${state.currentSquad.year}`,
    sourceSquad: state.currentSquad.id,
  });
  state.currentSquad = null;
  state.pendingPlayerIndex = null;
  playerGrid.classList.add("empty");
  playerGrid.innerHTML = `<p>Jugador agregado. Sortea otro club para seguir armando el XI.</p>`;
  drawTitle.textContent = state.picked.length === 11 ? "XI completo" : "Listo";
  drawSubtitle.textContent = state.picked.length === 11 ? "Ya puedes simular el torneo." : "Faltan " + (11 - state.picked.length) + " jugadores";
  drawBtn.disabled = state.picked.length === 11;
  skipBtn.disabled = true;
  renderLineup();
}

function rateTeam(players, historicalBonus = 0, formation = defaultFormation) {
  const groups = groupByPosition(players);
  const expected = lineCountsFromFormation(formation);
  const gk = average(groups.POR);
  const def = average(groups.DEF);
  const mid = average(groups.MED);
  const att = average(groups.DEL);
  const base = players.length ? average(players) : 0;
  const structurePenalty =
    Math.max(0, expected.POR - groups.POR.length) * 8 +
    Math.max(0, expected.DEF - groups.DEF.length) * 1.4 +
    Math.max(0, expected.MED - groups.MED.length) * 1.3 +
    Math.max(0, expected.DEL - groups.DEL.length) * 1.4;
  const weighted = base * 0.42 + gk * 0.12 + def * 0.16 + mid * 0.15 + att * 0.15;
  return {
    total: Math.round(clamp(weighted + historicalBonus - structurePenalty, 1, 99)),
    gk: Math.round(gk || 0),
    def: Math.round(def || 0),
    mid: Math.round(mid || 0),
    att: Math.round(att || 0),
    penalty: Math.round(structurePenalty),
  };
}

function renderSources() {
  if (!sourcesList) return;
  sourcesList.innerHTML = sources.map((source) => `<a href="${source.url}" target="_blank" rel="noreferrer">${source.label}</a>`).join("");
}

function getAssignedSlots(formation) {
  const usedIndexes = new Set();
  return formation.slots.map((role, slotIndex) => {
    let playerIndex = state.picked.findIndex((player, index) => !usedIndexes.has(index) && player.assignedSlotIndex === slotIndex);
    if (playerIndex === -1) {
      playerIndex = state.picked.findIndex((player, index) => !usedIndexes.has(index) && player.assignedRole === role);
    }
    if (playerIndex === -1) return { role, slotIndex, player: null };
    usedIndexes.add(playerIndex);
    return { role, slotIndex, player: state.picked[playerIndex] };
  });
}

function renderLineup() {
  const formation = state.formation || defaultFormation;
  const draftStarted = state.picked.length > 0 || Boolean(state.currentSquad);
  const assignedSlots = getAssignedSlots(formation);
  const cards = assignedSlots.map(({ role, slotIndex, player }) => {
    if (!player) return `<div class="slot"><span class="pos">${role}</span><strong>--</strong><span class="ovr">--</span></div>`;
    return `<div class="slot"><span class="pos">${player.assignedRole}</span><strong>${playerName(player)}</strong><span class="ovr">${player.ovr}</span></div>`;
  });
  const coordinates = pitchLayouts[formation.name] || pitchLayouts["4-3-3"];
  const pitchSlots = assignedSlots.map(({ role, slotIndex, player }) => {
    const [x, y] = coordinates[slotIndex];
    const shortName = player ? playerName(player).split(" ").slice(-1)[0] : role;
    return `
      <div class="pitch-slot ${player ? "filled" : ""}" style="--x:${x}%; --y:${y}%">
        <div class="slot-ball">${player ? player.ovr : role}</div>
        <div class="slot-name">${player ? shortName : role}</div>
      </div>
    `;
  });

  const rating = rateTeam(state.picked, 0, formation);
  lineup.innerHTML = cards.join("");
  pitchBoard.innerHTML = pitchSlots.join("");
  pickedCount.textContent = state.picked.length;
  formationLabel.textContent = state.formationName || "--";
  skipCount.textContent = state.skips;
  teamRating.textContent = state.picked.length ? rating.total : "--";
  gkRating.textContent = rating.gk || "--";
  defRating.textContent = rating.def || "--";
  midRating.textContent = rating.mid || "--";
  attRating.textContent = rating.att || "--";
  tournamentPanel.hidden = state.picked.length !== 11;
  simulateBtn.disabled = state.picked.length !== 11;
  updateRerollButtons();
  document.querySelectorAll(".formation-option").forEach((button) => {
    button.disabled = draftStarted && button.dataset.formation !== state.formationName;
  });
}

function compatibleSquads(predicate) {
  return squads.filter((squad) => {
    if (state.currentSquad && squad.id === state.currentSquad.id) return false;
    return predicate(squad) && squad.players.some((player) => canPickPlayer(player));
  });
}

function sameYearSquads() {
  if (!state.currentSquad) return [];
  return compatibleSquads((squad) => squad.year === state.currentSquad.year && squad.tournament === state.currentSquad.tournament && squad.country !== state.currentSquad.country);
}

function sameCountrySquads() {
  if (!state.currentSquad) return [];
  return compatibleSquads((squad) => squad.country === state.currentSquad.country && squad.year !== state.currentSquad.year);
}

function currentSquadHasPickablePlayers() {
  return Boolean(state.currentSquad?.players.some((player) => canPickPlayer(player)));
}

function showNoCompatibleSquadsMessage() {
  drawTitle.textContent = "Sin opciones";
  drawSubtitle.textContent = "No quedan clubes compatibles con los puestos libres.";
  playerGrid.classList.add("empty");
  playerGrid.innerHTML = `<p>Elegiste todos los puestos que estas plantillas podían cubrir. Reinicia o prueba otra formación.</p>`;
  updateRerollButtons();
}

function rerollAnyCompatibleSquad() {
  const pool = compatibleSquads(() => true);
  if (!pool.length) {
    showNoCompatibleSquadsMessage();
    return;
  }
  state.currentSquad = randomItem(pool);
  state.pendingPlayerIndex = null;
  showCurrentSquad();
  renderLineup();
}

function updateRerollButtons() {
  if (!state.formation || state.picked.length >= 11) {
    drawBtn.disabled = true;
    skipBtn.disabled = true;
    return;
  }

  if (!state.currentSquad) {
    drawBtn.disabled = false;
    skipBtn.disabled = true;
    return;
  }

  if (!currentSquadHasPickablePlayers()) {
    drawBtn.disabled = compatibleSquads(() => true).length === 0;
    skipBtn.disabled = true;
    return;
  }

  drawBtn.disabled = state.skips <= 0 || sameYearSquads().length === 0;
  skipBtn.disabled = state.skips <= 0 || sameCountrySquads().length === 0;
}

function showCurrentSquad() {
  drawTitle.textContent = state.currentSquad.country;
  drawSubtitle.textContent = `${state.currentSquad.tournament || "Edicion"} ${state.currentSquad.year}`;
  state.drawHistory.push(state.currentSquad.id);
  state.pendingPlayerIndex = null;
  updateRerollButtons();
  renderPlayers();
}

function drawSquad() {
  if (!state.formation || state.picked.length >= 11 || state.currentSquad) return;
  const recent = state.drawHistory.slice(-3);
  const compatiblePool = compatibleSquads(() => true);
  const pool = compatiblePool.filter((squad) => !recent.includes(squad.id));
  state.currentSquad = randomItem(pool.length ? pool : compatiblePool);
  if (!state.currentSquad) {
    showNoCompatibleSquadsMessage();
    return;
  }
  showCurrentSquad();
}

function renderPlayers() {
  if (!state.currentSquad) return;
  const players = state.currentSquad.players.filter((player) => state.filter === "ALL" || player.roles.includes(state.filter));
  if (!players.length) {
    playerGrid.classList.add("empty");
    playerGrid.innerHTML = `<p>No hay jugadores disponibles para este filtro en el club sorteado.</p>`;
    return;
  }
  playerGrid.classList.remove("empty");
  playerGrid.innerHTML = players.map((player, listIndex) => {
    const playerIndex = state.currentSquad.players.indexOf(player);
    const openSlots = compatibleOpenSlots(player);
    const disabled = openSlots.length === 0;
    const roleText = disabled
      ? "Cupo completo"
      : openSlots.length > 1
        ? "Elegir puesto"
        : slotSideLabel(openSlots[0].role, openSlots[0].slotIndex);
    const isPending = state.pendingPlayerIndex === playerIndex;
    return `
    <div class="player-choice ${isPending ? "choosing" : ""}">
      <button class="player-card" data-index="${playerIndex}" ${disabled ? "disabled" : ""}>
        <span class="shirt-no">#${listIndex + 1}</span>
        <div>
          <strong>${playerName(player)}</strong>
          <small>${roleText}</small>
        </div>
        <span class="player-ovr">${player.ovr}</span>
      </button>
      ${isPending ? `
        <div class="role-choice-row">
          ${openSlots.map((slot) => `<button class="role-choice" data-index="${playerIndex}" data-slot="${slot.slotIndex}">${slotSideLabel(slot.role, slot.slotIndex)}</button>`).join("")}
        </div>
      ` : ""}
    </div>
  `;
  }).join("");
}

function pickPlayer(index, slotIndex = null) {
  if (!state.currentSquad || state.picked.length >= 11) return;
  const player = state.currentSquad.players[index];
  if (!player) return;
  const openSlots = compatibleOpenSlots(player);
  if (!openSlots.length) return;

  if (slotIndex === null && openSlots.length > 1) {
    state.pendingPlayerIndex = state.pendingPlayerIndex === index ? null : index;
    drawTitle.textContent = "Elegir puesto";
    drawSubtitle.textContent = playerName(player);
    renderPlayers();
    return;
  }

  const selectedSlot = slotIndex === null
    ? openSlots[0]
    : openSlots.find((slot) => slot.slotIndex === slotIndex);
  if (!selectedSlot) return;
  completePickPlayer(player, selectedSlot.role, selectedSlot.slotIndex);
}

function rerollSameYear() {
  if (!state.currentSquad || state.skips <= 0) return;
  const pool = sameYearSquads();
  if (!pool.length) return;
  state.skips -= 1;
  state.currentSquad = randomItem(pool);
  state.pendingPlayerIndex = null;
  showCurrentSquad();
  renderLineup();
}

function rerollSameCountry() {
  if (!state.currentSquad || state.skips <= 0) return;
  const pool = sameCountrySquads();
  if (!pool.length) return;
  state.skips -= 1;
  state.currentSquad = randomItem(pool);
  state.pendingPlayerIndex = null;
  showCurrentSquad();
  renderLineup();
}

function resetGame() {
  state.picked = [];
  state.skips = 3;
  state.currentSquad = null;
  state.filter = "ALL";
  state.drawHistory = [];
  state.formationName = null;
  state.formation = null;
  state.pendingPlayerIndex = null;
  state.simulating = false;
  closeTournamentTab();
  simulateBtn.textContent = "Simular torneo";
  drawTitle.textContent = "Elige formación";
  drawSubtitle.textContent = "Primero define el sistema táctico para activar el sorteo.";
  drawBtn.disabled = true;
  skipBtn.disabled = true;
  playerGrid.classList.add("empty");
  playerGrid.innerHTML = `<p>Cuando salga un club, acá aparece su plantilla completa.</p>`;
  tournamentLog.innerHTML = "";
  oddsBox.innerHTML = "";
  document.querySelectorAll(".formation-option").forEach((button) => button.classList.remove("active"));
  document.querySelectorAll(".filter").forEach((button) => button.classList.toggle("active", button.dataset.filter === "ALL"));
  renderLineup();
}

function selectFormation(name) {
  if (state.picked.length > 0 || state.currentSquad) return;
  state.formationName = name;
  state.formation = { name, slots: formations[name] };
  drawTitle.textContent = "Listo";
  drawSubtitle.textContent = `Formación ${name}`;
  drawBtn.disabled = false;
  document.querySelectorAll(".formation-option").forEach((button) => {
    button.classList.toggle("active", button.dataset.formation === name);
  });
  renderLineup();
}

function getTeamObjectFromSquad(squad) {
  const xi = bestXI(squad.players);
  return {
    name: `${squad.country} ${squad.year}`,
    players: xi,
    rating: rateTeam(xi, (squad.rating - 88) * 0.25, defaultFormation),
    historical: squad,
  };
}

function getUserTeam() {
  return {
    name: "Tu club",
    players: state.picked,
    rating: rateTeam(state.picked, 0, state.formation || defaultFormation),
  };
}

function winChance(a, b) {
  const diff = a.rating.total - b.rating.total;
  return clamp(1 / (1 + Math.exp(-diff / 7.2)), 0.08, 0.92);
}

function expectedGoals(attacker, defender) {
  const attack = attacker.rating.att || attacker.rating.total;
  const midfield = attacker.rating.mid || attacker.rating.total;
  const defense = defender.rating.def || defender.rating.total;
  const keeper = defender.rating.gk || defender.rating.total;
  const diff = attacker.rating.total - defender.rating.total;
  return clamp(1.15 + (attack - defense) / 20 + (midfield - keeper) / 34 + diff / 32, 0.25, 3.6);
}

function poisson(lambda) {
  const limit = Math.exp(-lambda);
  let k = 0;
  let product = 1;
  do {
    k += 1;
    product *= Math.random();
  } while (product > limit);
  return k - 1;
}

function weightedPlayer(players, positions) {
  const pool = players.filter((player) => positions.includes(player.pos));
  const fallback = players.length ? players : [{ name: "Jugador desconocido", displayName: "Jugador desconocido", ovr: 75, pos: "MED" }];
  const candidates = pool.length ? pool : fallback;
  const total = candidates.reduce((sum, player) => sum + player.ovr, 0);
  let roll = Math.random() * total;
  for (const player of candidates) {
    roll -= player.ovr;
    if (roll <= 0) return player;
  }
  return candidates[candidates.length - 1];
}

function eventMinute(used, min = 3, max = 90) {
  let minute = Math.floor(min + Math.random() * (max - min + 1));
  let attempts = 0;
  while (used.has(minute) && attempts < 140) {
    minute += 1;
    if (minute > max) minute = min;
    attempts += 1;
  }
  used.add(minute);
  return minute;
}

function addMatchEvent(events, used, type, text, options = {}) {
  const { side = null, minute = null, min = 3, max = 90 } = options;
  events.push({ minute: minute ?? eventMinute(used, min, max), type, side, text });
}

function biasedSide(chanceA, modifier = 0) {
  return Math.random() < clamp(chanceA + modifier, 0.22, 0.78) ? "A" : "B";
}

function sideTeam(side, teamA, teamB) {
  return side === "A" ? teamA : teamB;
}

function opponentTeam(side, teamA, teamB) {
  return side === "A" ? teamB : teamA;
}

function describeGoal(team, method) {
  const scorer = weightedPlayer(team.players, method === "Tiro libre" ? ["MED", "DEL"] : ["DEL", "MED", "DEF"]);
  const assistPool = team.players.filter((player) => player.name !== scorer.name);
  const assist = weightedPlayer(assistPool.length ? assistPool : team.players, ["MED", "DEL", "DEF"]);
  if (method === "Penal") return `${playerName(scorer)} convierte de penal con remate bajo.`;
  if (method === "Tiro libre") return `${playerName(scorer)} marca de tiro libre directo.`;
  if (method === "Cabeza") return `${playerName(scorer)} gana de cabeza tras centro de ${playerName(assist)}.`;
  if (method === "Contraataque") return `${playerName(scorer)} define una contra armada por ${playerName(assist)}.`;
  return `${playerName(scorer)} anota tras asistencia de ${playerName(assist)}.`;
}

function describeChance(team, opponent, kind) {
  const creator = weightedPlayer(team.players, ["MED", "DEL"]);
  const finisher = weightedPlayer(team.players, ["DEL", "MED"]);
  const defender = weightedPlayer(opponent.players, ["DEF", "MED"]);
  const keeper = weightedPlayer(opponent.players, ["POR"]);
  if (kind === "save") return `${team.name}: ${playerName(creator)} filtra para ${playerName(finisher)} y ${playerName(keeper)} responde con una atajada enorme.`;
  if (kind === "woodwork") return `${team.name}: ${playerName(finisher)} revienta el palo despu?s de una recuperaci?n alta.`;
  if (kind === "offside") return `${team.name}: gol anulado a ${playerName(finisher)} por offside milim?trico tras revisi?n del VAR.`;
  if (kind === "block") return `${team.name}: ${playerName(defender)} bloquea sobre la l?nea un remate de ${playerName(finisher)}.`;
  return `${team.name}: ${playerName(creator)} rompe l?neas y deja a ${playerName(finisher)} de cara al arco.`;
}

function describeTactical(team, opponent, minute) {
  const midfielder = weightedPlayer(team.players, ["MED", "DEF"]);
  const rivalCreator = weightedPlayer(opponent.players, ["MED", "DEL"]);
  if (minute < 35) return `${team.name}: ajuste de presi?n, ${playerName(midfielder)} salta sobre ${playerName(rivalCreator)} y cambia el ritmo del partido.`;
  if (minute < 70) return `${team.name}: el banco pide posesiones m?s largas para enfriar el tramo fuerte de ${opponent.name}.`;
  return `${team.name}: repliegue corto y l?neas juntas para proteger la zona central en el cierre.`;
}

function describeSubstitution(team) {
  const starter = weightedPlayer(team.players, ["MED", "DEL", "DEF"]);
  const replacement = weightedPlayer(team.players.filter((player) => player.name !== starter.name), ["MED", "DEL", "DEF"]);
  return `${team.name}: cambio t?ctico, entra ${playerName(replacement)} para darle aire al lugar de ${playerName(starter)}.`;
}

function generateMatchStats(teamA, teamB, goalsA, goalsB, events, chanceA) {
  const shotTypes = ["goal", "chance", "save", "woodwork", "penalty-save"];
  const shotEventsA = events.filter((event) => event.side === "A" && shotTypes.includes(event.type)).length;
  const shotEventsB = events.filter((event) => event.side === "B" && shotTypes.includes(event.type)).length;
  const shotsA = Math.max(goalsA + 3, shotEventsA + Math.floor(3 + Math.random() * 5));
  const shotsB = Math.max(goalsB + 3, shotEventsB + Math.floor(3 + Math.random() * 5));
  const onTargetA = clamp(goalsA + events.filter((event) => event.side === "A" && ["save", "penalty-save"].includes(event.type)).length + Math.floor(Math.random() * 3), goalsA, shotsA);
  const onTargetB = clamp(goalsB + events.filter((event) => event.side === "B" && ["save", "penalty-save"].includes(event.type)).length + Math.floor(Math.random() * 3), goalsB, shotsB);
  const possessionA = Math.round(clamp(50 + (teamA.rating.mid - teamB.rating.mid) * 0.8 + (chanceA - 0.5) * 16 + (Math.random() * 8 - 4), 38, 62));
  const xgA = clamp(goalsA * 0.55 + shotsA * 0.11 + onTargetA * 0.16, 0.2, 4.8).toFixed(1);
  const xgB = clamp(goalsB * 0.55 + shotsB * 0.11 + onTargetB * 0.16, 0.2, 4.8).toFixed(1);
  const winner = goalsA > goalsB ? teamA : goalsB > goalsA ? teamB : (chanceA >= 0.5 ? teamA : teamB);
  return { possessionA, possessionB: 100 - possessionA, shotsA, shotsB, onTargetA, onTargetB, xgA, xgB, standout: playerName(weightedPlayer(winner.players, ["DEL", "MED", "POR"])) };
}

function generateEvents(teamA, teamB, goalsA, goalsB, chanceA = 0.5, chanceB = 0.5) {
  const events = [];
  const used = new Set();
  const goalMethods = ["Jugada", "Jugada", "Jugada", "Cabeza", "Contraataque", "Penal", "Tiro libre"];
  const favoriteSide = chanceA >= chanceB ? "A" : "B";
  const favorite = sideTeam(favoriteSide, teamA, teamB);
  const underdog = opponentTeam(favoriteSide, teamA, teamB);
  addMatchEvent(events, used, "note", `Arranca con ${favorite.name} intentando mandar desde la media y ${underdog.name} esperando su momento.`, { minute: 1 });
  addMatchEvent(events, used, "tactical", describeTactical(favorite, underdog, 18), { min: 8, max: 22 });
  for (let i = 0; i < goalsA; i += 1) addMatchEvent(events, used, "goal", `${teamA.name}: ${describeGoal(teamA, randomItem(goalMethods))}`, { side: "A" });
  for (let i = 0; i < goalsB; i += 1) addMatchEvent(events, used, "goal", `${teamB.name}: ${describeGoal(teamB, randomItem(goalMethods))}`, { side: "B" });
  const chanceKinds = ["chance", "save", "save", "woodwork", "block", "offside"];
  const chanceCount = Math.floor(4 + Math.random() * 4 + (goalsA + goalsB) * 0.65);
  for (let i = 0; i < chanceCount; i += 1) {
    const side = biasedSide(chanceA, i % 3 === 0 ? 0.08 : 0);
    const kind = randomItem(chanceKinds);
    const type = kind === "save" ? "save" : kind === "woodwork" ? "woodwork" : kind === "offside" ? "offside" : "chance";
    addMatchEvent(events, used, type, describeChance(sideTeam(side, teamA, teamB), opponentTeam(side, teamA, teamB), kind), { side });
  }
  for (let i = 0; i < Math.floor(Math.random() * 4) + 2; i += 1) {
    const side = biasedSide(chanceA, -0.04);
    const team = sideTeam(side, teamA, teamB);
    const booked = weightedPlayer(team.players, ["DEF", "MED"]);
    const reasons = ["cortar una transici?n", "llegar tarde a un duelo dividido", "frenar una contra con falta t?ctica", "protestar una decisi?n del ?rbitro"];
    addMatchEvent(events, used, "card", `${team.name}: amarilla para ${playerName(booked)} por ${randomItem(reasons)}.`, { side });
  }
  if (Math.random() < 0.2) {
    const side = biasedSide(chanceA, -0.1);
    const team = sideTeam(side, teamA, teamB);
    addMatchEvent(events, used, "card", `${team.name}: roja para ${playerName(weightedPlayer(team.players, ["DEF", "MED"]))} tras doble amarilla. El plan cambia por completo.`, { side, min: 52, max: 88 });
  }
  if (Math.random() < 0.26) {
    const side = biasedSide(chanceA);
    const team = sideTeam(side, teamA, teamB);
    const opponent = opponentTeam(side, teamA, teamB);
    addMatchEvent(events, used, "penalty-save", `${team.name}: penal de ${playerName(weightedPlayer(team.players, ["DEL", "MED"]))} atajado por ${playerName(weightedPlayer(opponent.players, ["POR"]))}. El estadio se viene abajo.`, { side, min: 35, max: 83 });
  }
  const tacticalSide = biasedSide(chanceA, goalsA === goalsB ? 0 : goalsA > goalsB ? -0.12 : 0.12);
  addMatchEvent(events, used, "tactical", describeTactical(sideTeam(tacticalSide, teamA, teamB), opponentTeam(tacticalSide, teamA, teamB), 62), { side: tacticalSide, min: 50, max: 72 });
  for (let i = 0; i < 2; i += 1) {
    const side = i === 0 ? "A" : "B";
    addMatchEvent(events, used, "substitution", describeSubstitution(sideTeam(side, teamA, teamB)), { side, min: 58, max: 82 });
  }
  if (Math.abs(goalsA - goalsB) <= 1) {
    const side = goalsA >= goalsB ? "B" : "A";
    const team = sideTeam(side, teamA, teamB);
    const opponent = opponentTeam(side, teamA, teamB);
    addMatchEvent(events, used, "chance", `${team.name}: ?ltimo arre?n, ${playerName(weightedPlayer(team.players, ["DEL", "MED"]))} fuerza a ${playerName(weightedPlayer(opponent.players, ["POR"]))} a volar en el cierre.`, { side, min: 84, max: 90 });
  }
  return events.sort((a, b) => a.minute - b.minute);
}

function simulateMatch(teamA, teamB, knockout = false) {
  const chanceA = winChance(teamA, teamB);
  const chanceB = 1 - chanceA;
  let goalsA = poisson(expectedGoals(teamA, teamB) * (0.8 + chanceA * 0.45));
  let goalsB = poisson(expectedGoals(teamB, teamA) * (0.8 + chanceB * 0.45));

  const expectedDiff = teamA.rating.total - teamB.rating.total;
  if (goalsA === goalsB && Math.abs(expectedDiff) > 10 && Math.random() < 0.42) {
    if (expectedDiff > 0) goalsA += 1;
    else goalsB += 1;
  }

  const events = generateEvents(teamA, teamB, goalsA, goalsB, chanceA, chanceB);
  const stats = generateMatchStats(teamA, teamB, goalsA, goalsB, events, chanceA);
  let penalties = null;
  let winner = goalsA > goalsB ? teamA : goalsB > goalsA ? teamB : null;

  if (knockout && goalsA === goalsB) {
    const pensAChance = clamp(0.5 + (teamA.rating.gk - teamB.rating.gk) / 80 + (teamA.rating.total - teamB.rating.total) / 120, 0.28, 0.72);
    const aWinsPens = Math.random() < pensAChance;
    penalties = aWinsPens ? [5, Math.floor(2 + Math.random() * 3)] : [Math.floor(2 + Math.random() * 3), 5];
    winner = aWinsPens ? teamA : teamB;
    const hero = weightedPlayer(winner.players, ["POR"]);
    events.push({ minute: 120, type: "pens", text: `Definición por penales: ${winner.name} gana ${penalties[0]}-${penalties[1]}. Figura: ${playerName(hero)}.` });
  }

  return { teamA, teamB, goalsA, goalsB, events, winner, penalties, chanceA, chanceB, stats };
}

function renderMatch(match, phase) {
  const penText = match.penalties ? `, penales ${match.penalties[0]}-${match.penalties[1]}` : "";
  return `
    <article class="match-card">
      <h3>${phase}</h3>
      <div class="scoreline">
        <span>${match.teamA.name}</span>
        <span>${match.goalsA} - ${match.goalsB}${penText}</span>
        <span>${match.teamB.name}</span>
      </div>
      <ul class="events">
        ${match.events.map((event) => `<li>${event.minute}' ${event.text}</li>`).join("")}
      </ul>
    </article>
  `;
}

function tableHtml(table) {
  const rows = table.slice().sort((a, b) => b.pts - a.pts || b.gf - b.ga - (a.gf - a.ga) || b.gf - a.gf);
  return `
    <article class="match-card group-table-card">
      <h3>Tabla de grupo</h3>
      <div class="group-table-scroll" aria-label="Tabla de grupo">
        <div class="table-row header"><span>Equipo</span><span>Pts</span><span>GF</span><span>GC</span><span>DG</span><span>Media</span></div>
        ${rows.map((row) => `<div class="table-row"><span>${row.team.name}</span><span>${row.pts}</span><span>${row.gf}</span><span>${row.ga}</span><span>${row.gf - row.ga}</span><span>${row.team.rating.total}</span></div>`).join("")}
      </div>
    </article>
  `;
}

function addResult(rowA, rowB, goalsA, goalsB) {
  rowA.gf += goalsA;
  rowA.ga += goalsB;
  rowB.gf += goalsB;
  rowB.ga += goalsA;
  if (goalsA > goalsB) rowA.pts += 3;
  else if (goalsB > goalsA) rowB.pts += 3;
  else {
    rowA.pts += 1;
    rowB.pts += 1;
  }
}

function renderOdds(userTeam, opponents) {
  oddsBox.innerHTML = "";
}

const SIM_MINUTE_MS = 72;
const EVENT_PAUSE_MS = 560;
function sleep(ms) { return new Promise((resolve) => setTimeout(resolve, ms)); }
function openTournamentTab() {
  const board = tournamentPanel.closest(".game-board");
  if (board) board.classList.add("tournament-live-mode");
  tournamentPanel.hidden = false;
  tournamentLog.innerHTML = "";
  oddsBox.innerHTML = "";
}
function closeTournamentTab() {
  const board = tournamentPanel.closest(".game-board");
  if (board) board.classList.remove("tournament-live-mode");
}
function appendTournamentMessage(title, text) {
  tournamentLog.insertAdjacentHTML("beforeend", `<article class="match-card sim-summary"><h3>${title}</h3><p>${text}</p></article>`);
  tournamentLog.scrollTop = tournamentLog.scrollHeight;
}
function eventClass(event) {
  if (event.type === "goal") return "goal";
  if (event.type === "pens" || event.type === "penalty-save") return "penalty";
  if (event.type === "card") return event.text.includes("roja") ? "red-card" : "yellow-card";
  if (["chance", "save", "woodwork", "offside"].includes(event.type)) return "chance";
  if (event.type === "tactical" || event.type === "substitution") return "tactical";
  if (event.type === "summary") return "summary";
  return "note";
}
function eventLabel(event) {
  if (event.type === "goal") return "GOL";
  if (event.type === "pens") return "PENALES";
  if (event.type === "penalty-save") return "PENAL";
  if (event.type === "card") return event.text.includes("roja") ? "ROJA" : "AMARILLA";
  if (event.type === "save") return "ATAJADA";
  if (event.type === "woodwork") return "PALO";
  if (event.type === "offside") return "VAR";
  if (event.type === "chance") return "OCASI\u00d3N";
  if (event.type === "tactical") return "T\u00c1CTICA";
  if (event.type === "substitution") return "CAMBIO";
  if (event.type === "summary") return "RESUMEN";
  return "JUGADA";
}
function renderLiveMatchShell(match, phase) {
  const id = `live-${Date.now()}-${Math.floor(Math.random() * 100000)}`;
  tournamentLog.insertAdjacentHTML("beforeend", `<article class="match-card live-match live-match-card" id="${id}">
    <div class="live-stadium" aria-hidden="true"><span></span><span></span><span></span></div>
    <div class="live-match-head"><div><p class="live-kicker">${phase}</p><h3>Partido en vivo</h3></div><span class="live-minute">0'</span></div>
    <div class="live-scoreboard"><span>${match.teamA.name}</span><strong class="live-score">0 - 0</strong><span>${match.teamB.name}</span></div>
    <div class="live-match-context"><span>${Math.round(match.chanceA * 100)}% ${match.teamA.name}</span><span>Media ${match.teamA.rating.total} vs ${match.teamB.rating.total}</span><span>${Math.round(match.chanceB * 100)}% ${match.teamB.name}</span></div>
    <div class="live-tension"><span style="width:${Math.round(match.chanceA * 100)}%"></span></div>
    <div class="live-timeline"><span style="width:0%"></span></div>
    <ul class="events live-events"></ul>
  </article>`);
  const card = document.getElementById(id);
  tournamentLog.scrollTop = tournamentLog.scrollHeight;
  return {
    card,
    minuteEl: card.querySelector(".live-minute"),
    scoreEl: card.querySelector(".live-score"),
    eventsEl: card.querySelector(".live-events"),
    timelineEl: card.querySelector(".live-timeline span"),
  };
}
async function playLiveMatch(match, phase) {
  const live = renderLiveMatchShell(match, phase);
  const endMinute = match.penalties ? 120 : 90;
  let goalsA = 0;
  let goalsB = 0;
  live.card.classList.add("is-running");
  for (let minute = 1; minute <= endMinute; minute += 1) {
    live.minuteEl.textContent = `${minute}'`;
    live.timelineEl.style.width = `${Math.round((minute / endMinute) * 100)}%`;
    const minuteEvents = match.events.filter((event) => event.minute === minute);
    for (const event of minuteEvents) {
      const typeClass = eventClass(event);
      if (event.type === "goal") {
        if (event.side === "A") goalsA += 1;
        if (event.side === "B") goalsB += 1;
        live.scoreEl.textContent = `${goalsA} - ${goalsB}`;
        live.card.classList.add("goal-flash");
        window.setTimeout(() => live.card.classList.remove("goal-flash"), 650);
      }
      live.eventsEl.insertAdjacentHTML("beforeend", `<li class="event-${typeClass}"><span>${event.minute}'</span><strong>${eventLabel(event)}</strong><p>${event.text}</p></li>`);
      tournamentLog.scrollTop = tournamentLog.scrollHeight;
      await sleep(EVENT_PAUSE_MS);
    }
    await sleep(SIM_MINUTE_MS);
  }
  const penText = match.penalties ? `, penales ${match.penalties[0]}-${match.penalties[1]}` : "";
  live.scoreEl.textContent = `${match.goalsA} - ${match.goalsB}${penText}`;
  live.minuteEl.textContent = "Final";
  live.timelineEl.style.width = "100%";
  if (match.stats) {
    live.eventsEl.insertAdjacentHTML("beforeend", `<li class="event-summary"><span>Final</span><strong>RESUMEN</strong><p>Posesi\u00f3n ${match.stats.possessionA}-${match.stats.possessionB}, tiros ${match.stats.shotsA}-${match.stats.shotsB}, al arco ${match.stats.onTargetA}-${match.stats.onTargetB}, xG ${match.stats.xgA}-${match.stats.xgB}. Figura: ${match.stats.standout}.</p></li>`);
  }
  live.card.classList.remove("is-running");
  live.card.classList.add("is-finished");
  await sleep(700);
}
function waitForNextMatch(title, text, buttonText = "Siguiente partido") {
  return new Promise((resolve) => {
    const id = `next-match-${Date.now()}-${Math.floor(Math.random() * 100000)}`;
    tournamentLog.insertAdjacentHTML("beforeend", `<article class="match-card sim-gate"><div><h3>${title}</h3><p>${text}</p></div><button class="next-match-btn" id="${id}">${buttonText}</button></article>`);
    tournamentLog.scrollTop = tournamentLog.scrollHeight;
    const button = document.getElementById(id);
    if (!button) {
      resolve();
      return;
    }
    button.addEventListener("click", () => {
      button.disabled = true;
      button.textContent = "Cargando...";
      const gate = button.closest(".sim-gate");
      if (gate) gate.classList.add("gate-done");
      resolve();
    }, { once: true });
  });
}
function finishTournamentSimulation() {
  state.simulating = false;
  simulateBtn.disabled = state.picked.length !== 11;
  simulateBtn.textContent = "Simular de nuevo";
  const id = `return-team-${Date.now()}-${Math.floor(Math.random() * 100000)}`;
  tournamentLog.insertAdjacentHTML("beforeend", `<article class="match-card sim-gate"><div><h3>Torneo terminado</h3><p>Vuelve a tu XI para revisar el equipo, reiniciar o simular otra vez.</p></div><button class="next-match-btn" id="${id}">Volver al equipo</button></article>`);
  const button = document.getElementById(id);
  if (button) {
    button.addEventListener("click", () => {
      closeTournamentTab();
      tournamentPanel.hidden = true;
      tournamentLog.scrollTop = 0;
    }, { once: true });
  }
}

async function simulateTournament() {
  if (state.picked.length !== 11 || state.simulating) return;
  state.simulating = true;
  simulateBtn.disabled = true;
  simulateBtn.textContent = "Simulando...";
  openTournamentTab();
  appendTournamentMessage("Torneo", "Arranca la simulación minuto a minuto. Cuando termine cada partido, avanzas vos.");
  await sleep(500);
  const userTeam = getUserTeam();
  const opponentPool = squads.map(getTeamObjectFromSquad).filter((team) => team.name !== userTeam.name).sort(() => Math.random() - 0.5);
  const groupOpponents = opponentPool.slice(0, 3);
  const groupTeams = [userTeam, ...groupOpponents];
  const table = groupTeams.map((team) => ({ team, pts: 0, gf: 0, ga: 0 }));
  const findRow = (team) => table.find((row) => row.team.name === team.name);
  const userGroupMatches = [];
  renderOdds(userTeam, groupOpponents);
  for (let i = 0; i < groupTeams.length; i += 1) {
    for (let j = i + 1; j < groupTeams.length; j += 1) {
      const match = simulateMatch(groupTeams[i], groupTeams[j], false);
      const isUserMatch = match.teamA.name === userTeam.name || match.teamB.name === userTeam.name;
      if (isUserMatch) userGroupMatches.push(match);
      addResult(findRow(match.teamA), findRow(match.teamB), match.goalsA, match.goalsB);
    }
  }
  for (let index = 0; index < userGroupMatches.length; index += 1) {
    await playLiveMatch(userGroupMatches[index], `Fase de grupos ${index + 1}`);
    if (index < userGroupMatches.length - 1) {
      await waitForNextMatch("Partido terminado", "El grupo sigue abierto. Se viene otro cruce clave.", "Siguiente partido");
    } else {
      await waitForNextMatch("Grupo cerrado", "Ya se jugaron tus partidos de grupo. Ahora mira la tabla final.", "Ver tabla");
    }
  }
  tournamentLog.insertAdjacentHTML("beforeend", tableHtml(table));
  tournamentLog.scrollTop = tournamentLog.scrollHeight;
  await sleep(350);
  const ordered = table.slice().sort((a, b) => b.pts - a.pts || b.gf - b.ga - (a.gf - a.ga) || b.gf - a.gf);
  if (!ordered.slice(0, 2).some((row) => row.team.name === userTeam.name)) {
    appendTournamentMessage("Eliminado", `Tu club no pasó la fase de grupos. La media era ${userTeam.rating.total}; ajusta el draft o busca mejor equilibrio por posiciones.`);
    finishTournamentSimulation();
    return;
  }
  await waitForNextMatch("Clasificado", "Superaste la fase de grupos. Empieza la parte pesada del torneo.", "Jugar Dieciseisavos");
  const phases = ["Dieciseisavos", "Octavos", "Cuartos", "Semis", "Final"];
  const knockoutPool = opponentPool.slice(3).sort((a, b) => a.rating.total - b.rating.total);
  const usedKnockoutOpponents = new Set();
  for (let index = 0; index < phases.length; index += 1) {
    const phase = phases[index];
    const availableOpponents = knockoutPool.filter((team) => !usedKnockoutOpponents.has(team.name));
    const phasePool = availableOpponents.length ? availableOpponents : knockoutPool;
    const targetIndex = Math.min(phasePool.length - 1, index + Math.floor(Math.random() * Math.max(1, phasePool.length - index)));
    const opponent = phasePool[targetIndex];
    usedKnockoutOpponents.add(opponent.name);
    const match = simulateMatch(userTeam, opponent, true);
    await playLiveMatch(match, phase);
    if (match.winner.name !== userTeam.name) {
      appendTournamentMessage("Fin del torneo", `Tu club cayó en ${phase}. Media propia: ${userTeam.rating.total}; rival: ${opponent.rating.total}.`);
      finishTournamentSimulation();
      return;
    }
    if (index < phases.length - 1) {
      await waitForNextMatch("Ronda superada", `El vestuario respira. Próximo paso: ${phases[index + 1]}.`, `Jugar ${phases[index + 1]}`);
    }
  }
  appendTournamentMessage("Campeón", `Ganaste el torneo de clubes históricos. Media final: ${userTeam.rating.total}. Figura del torneo: ${playerName(weightedPlayer(userTeam.players, ["DEL", "MED"]))}.`);
  finishTournamentSimulation();
}
drawBtn.addEventListener("click", () => {
  if (state.currentSquad && !currentSquadHasPickablePlayers()) rerollAnyCompatibleSquad();
  else if (state.currentSquad) rerollSameYear();
  else drawSquad();
});
skipBtn.addEventListener("click", rerollSameCountry);
resetBtn.addEventListener("click", resetGame);
simulateBtn.addEventListener("click", simulateTournament);
formationGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".formation-option");
  if (!button) return;
  selectFormation(button.dataset.formation);
});
playerGrid.addEventListener("click", (event) => {
  const roleButton = event.target.closest(".role-choice");
  if (roleButton) {
    pickPlayer(Number(roleButton.dataset.index), Number(roleButton.dataset.slot));
    return;
  }
  const card = event.target.closest(".player-card");
  if (!card) return;
  pickPlayer(Number(card.dataset.index));
});
document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    state.filter = button.dataset.filter;
    state.pendingPlayerIndex = null;
    document.querySelectorAll(".filter").forEach((item) => item.classList.toggle("active", item === button));
    renderPlayers();
  });
});

renderSources();
renderLineup();
