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
  return formation.slots.map((slot) => {
    let index = available.findIndex((player) => player.roles.includes(slot));
    if (index === -1) {
      index = available.findIndex((player) => player.pos === roleLine[slot]);
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
  return player.roles.filter((role) => remainingForRole(role) > 0);
}

function canPickPlayer(player) {
  return compatibleOpenRoles(player).length > 0;
}

function assignRole(player) {
  return compatibleOpenRoles(player)[0] || null;
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
    const playerIndex = state.picked.findIndex((player, index) => !usedIndexes.has(index) && player.assignedRole === role);
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

  drawBtn.disabled = state.skips <= 0 || sameYearSquads().length === 0;
  skipBtn.disabled = state.skips <= 0 || sameCountrySquads().length === 0;
}

function showCurrentSquad() {
  drawTitle.textContent = state.currentSquad.country;
  drawSubtitle.textContent = `${state.currentSquad.tournament || "Edicion"} ${state.currentSquad.year}`;
  state.drawHistory.push(state.currentSquad.id);
  updateRerollButtons();
  renderPlayers();
}

function drawSquad() {
  if (!state.formation || state.picked.length >= 11 || state.currentSquad) return;
  const recent = state.drawHistory.slice(-3);
  const pool = squads.filter((squad) => !recent.includes(squad.id) && squad.players.some((player) => canPickPlayer(player)));
  state.currentSquad = randomItem(pool.length ? pool : squads);
  showCurrentSquad();
}

function renderPlayers() {
  if (!state.currentSquad) return;
  const players = state.currentSquad.players.filter((player) => state.filter === "ALL" || player.roles.includes(state.filter));
  playerGrid.classList.remove("empty");
  playerGrid.innerHTML = players.map((player, listIndex) => {
    const openRoles = compatibleOpenRoles(player);
    const disabled = openRoles.length === 0;
    const roleText = player.roles.join(" / ");
    return `
    <button class="player-card" data-index="${state.currentSquad.players.indexOf(player)}" ${disabled ? "disabled" : ""}>
      <span class="shirt-no">#${listIndex + 1}</span>
      <div>
        <strong>${playerName(player)}</strong>
        <small>${disabled ? "Cupo completo" : roleText}</small>
      </div>
      <span class="player-ovr">${player.ovr}</span>
    </button>
  `;
  }).join("");
}

function pickPlayer(index) {
  if (!state.currentSquad || state.picked.length >= 11) return;
  const player = state.currentSquad.players[index];
  const assignedRole = assignRole(player);
  if (!assignedRole) return;
  state.picked.push({
    ...player,
    assignedRole,
    team: `${state.currentSquad.country} ${state.currentSquad.year}`,
    sourceSquad: state.currentSquad.id,
  });
  state.currentSquad = null;
  playerGrid.classList.add("empty");
  playerGrid.innerHTML = `<p>Jugador agregado. Sortea otro club para seguir armando el XI.</p>`;
  drawTitle.textContent = state.picked.length === 11 ? "XI completo" : "Listo";
  drawSubtitle.textContent = state.picked.length === 11 ? "Ya puedes simular el torneo." : "Faltan " + (11 - state.picked.length) + " jugadores";
  drawBtn.disabled = state.picked.length === 11;
  skipBtn.disabled = true;
  renderLineup();
}

function rerollSameYear() {
  if (!state.currentSquad || state.skips <= 0) return;
  const pool = sameYearSquads();
  if (!pool.length) return;
  state.skips -= 1;
  state.currentSquad = randomItem(pool);
  showCurrentSquad();
  renderLineup();
}

function rerollSameCountry() {
  if (!state.currentSquad || state.skips <= 0) return;
  const pool = sameCountrySquads();
  if (!pool.length) return;
  state.skips -= 1;
  state.currentSquad = randomItem(pool);
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
  drawTitle.textContent = "Elige formacion";
  drawSubtitle.textContent = "Primero define el sistema tactico para activar el sorteo.";
  drawBtn.disabled = true;
  skipBtn.disabled = true;
  playerGrid.classList.add("empty");
  playerGrid.innerHTML = `<p>Cuando salga un club, aca aparece su plantilla completa.</p>`;
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
  drawSubtitle.textContent = `Formacion ${name}`;
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

function eventMinute(used) {
  let minute = Math.floor(3 + Math.random() * 88);
  while (used.has(minute)) minute = Math.min(90, minute + 1);
  used.add(minute);
  return minute;
}

function describeGoal(team, method) {
  const scorer = weightedPlayer(team.players, method === "Tiro libre" ? ["MED", "DEL"] : ["DEL", "MED", "DEF"]);
  const assist = weightedPlayer(team.players.filter((player) => player.name !== scorer.name), ["MED", "DEL", "DEF"]);
  if (method === "Penal") return `${playerName(scorer)} convierte de penal con remate bajo.`;
  if (method === "Tiro libre") return `${playerName(scorer)} marca de tiro libre directo.`;
  if (method === "Cabeza") return `${playerName(scorer)} gana de cabeza tras centro de ${playerName(assist)}.`;
  if (method === "Contraataque") return `${playerName(scorer)} define una contra armada por ${playerName(assist)}.`;
  return `${playerName(scorer)} anota tras asistencia de ${playerName(assist)}.`;
}

function generateEvents(teamA, teamB, goalsA, goalsB) {
  const events = [];
  const used = new Set();
  const goalMethods = ["Jugada", "Jugada", "Jugada", "Cabeza", "Contraataque", "Penal", "Tiro libre"];

  for (let i = 0; i < goalsA; i += 1) {
    const method = randomItem(goalMethods);
    events.push({ minute: eventMinute(used), text: `${teamA.name}: ${describeGoal(teamA, method)} (${method})` });
  }
  for (let i = 0; i < goalsB; i += 1) {
    const method = randomItem(goalMethods);
    events.push({ minute: eventMinute(used), text: `${teamB.name}: ${describeGoal(teamB, method)} (${method})` });
  }

  const yellowCount = Math.floor(Math.random() * 5) + 2;
  for (let i = 0; i < yellowCount; i += 1) {
    const team = Math.random() > 0.5 ? teamA : teamB;
    const booked = weightedPlayer(team.players, ["DEF", "MED"]);
    events.push({ minute: eventMinute(used), text: `${team.name}: amarilla para ${playerName(booked)} por cortar una transicion.` });
  }

  if (Math.random() < 0.18) {
    const team = Math.random() > 0.5 ? teamA : teamB;
    const sentOff = weightedPlayer(team.players, ["DEF", "MED"]);
    events.push({ minute: eventMinute(used), text: `${team.name}: roja para ${playerName(sentOff)} tras doble amarilla.` });
  }

  if (Math.random() < 0.22) {
    const team = Math.random() > 0.5 ? teamA : teamB;
    const keeper = weightedPlayer(team.players, ["POR"]);
    events.push({ minute: eventMinute(used), text: `${team.name}: ${playerName(keeper)} ataja un penal clave.` });
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

  const events = generateEvents(teamA, teamB, goalsA, goalsB);
  let penalties = null;
  let winner = goalsA > goalsB ? teamA : goalsB > goalsA ? teamB : null;

  if (knockout && goalsA === goalsB) {
    const pensAChance = clamp(0.5 + (teamA.rating.gk - teamB.rating.gk) / 80 + (teamA.rating.total - teamB.rating.total) / 120, 0.28, 0.72);
    const aWinsPens = Math.random() < pensAChance;
    penalties = aWinsPens ? [5, Math.floor(2 + Math.random() * 3)] : [Math.floor(2 + Math.random() * 3), 5];
    winner = aWinsPens ? teamA : teamB;
    const hero = weightedPlayer(winner.players, ["POR"]);
    events.push({ minute: 120, text: `Definicion por penales: ${winner.name} gana ${penalties[0]}-${penalties[1]}. Figura: ${playerName(hero)}.` });
  }

  return { teamA, teamB, goalsA, goalsB, events, winner, penalties, chanceA, chanceB };
}

function renderMatch(match, phase) {
  const oddsA = Math.round(match.chanceA * 100);
  const oddsB = 100 - oddsA;
  const penText = match.penalties ? `, penales ${match.penalties[0]}-${match.penalties[1]}` : "";
  return `
    <article class="match-card">
      <h3>${phase}</h3>
      <div class="scoreline">
        <span>${match.teamA.name}</span>
        <span>${match.goalsA} - ${match.goalsB}${penText}</span>
        <span>${match.teamB.name}</span>
      </div>
      <p>Probabilidad previa: ${match.teamA.name} ${oddsA}% - ${match.teamB.name} ${oddsB}%.</p>
      <ul class="events">
        ${match.events.map((event) => `<li>${event.minute}' ${event.text}</li>`).join("")}
      </ul>
    </article>
  `;
}

function tableHtml(table) {
  const rows = table.slice().sort((a, b) => b.pts - a.pts || b.gf - b.ga - (a.gf - a.ga) || b.gf - a.gf);
  return `
    <article class="match-card">
      <h3>Tabla de grupo</h3>
      <div class="table-row header"><span>Equipo</span><span>Pts</span><span>GF</span><span>GC</span><span>DG</span><span>Media</span></div>
      ${rows.map((row) => `<div class="table-row"><span>${row.team.name}</span><span>${row.pts}</span><span>${row.gf}</span><span>${row.ga}</span><span>${row.gf - row.ga}</span><span>${row.team.rating.total}</span></div>`).join("")}
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
  oddsBox.innerHTML = opponents.map((opponent) => {
    const chance = Math.round(winChance(userTeam, opponent) * 100);
    return `<div class="odds-card"><strong>${opponent.name}</strong><p>Tu probabilidad estimada: ${chance}%</p><div class="bar"><span style="width:${chance}%"></span></div></div>`;
  }).join("");
}

function simulateTournament() {
  const userTeam = getUserTeam();
  const opponentPool = squads
    .map(getTeamObjectFromSquad)
    .filter((team) => team.name !== "Tu club")
    .sort(() => Math.random() - 0.5);
  const groupOpponents = opponentPool.slice(0, 3);
  const groupTeams = [userTeam, ...groupOpponents];
  const table = groupTeams.map((team) => ({ team, pts: 0, gf: 0, ga: 0 }));
  const findRow = (team) => table.find((row) => row.team.name === team.name);
  const log = [];

  renderOdds(userTeam, groupOpponents);

  for (let i = 0; i < groupTeams.length; i += 1) {
    for (let j = i + 1; j < groupTeams.length; j += 1) {
      const match = simulateMatch(groupTeams[i], groupTeams[j], false);
      addResult(findRow(match.teamA), findRow(match.teamB), match.goalsA, match.goalsB);
      if (match.teamA.name === userTeam.name || match.teamB.name === userTeam.name) {
        log.push(renderMatch(match, "Fase de grupos"));
      }
    }
  }

  log.push(tableHtml(table));
  const ordered = table.slice().sort((a, b) => b.pts - a.pts || b.gf - b.ga - (a.gf - a.ga) || b.gf - a.gf);
  if (!ordered.slice(0, 2).some((row) => row.team.name === userTeam.name)) {
    log.push(`<article class="match-card"><h3>Eliminado</h3><p>Tu club no paso la fase de grupos. La media era ${userTeam.rating.total}; ajusta el draft o busca mejor equilibrio por posiciones.</p></article>`);
    tournamentLog.innerHTML = log.join("");
    return;
  }

  const phases = ["Dieciseisavos", "Octavos", "Cuartos", "Semis", "Final"];
  const knockoutPool = opponentPool.slice(3).sort((a, b) => a.rating.total - b.rating.total);
  let alive = true;
  const usedKnockoutOpponents = new Set();

  phases.forEach((phase, index) => {
    if (!alive) return;
    const availableOpponents = knockoutPool.filter((team) => !usedKnockoutOpponents.has(team.name));
    const phasePool = availableOpponents.length ? availableOpponents : knockoutPool;
    const targetIndex = Math.min(phasePool.length - 1, index + Math.floor(Math.random() * Math.max(1, phasePool.length - index)));
    const opponent = phasePool[targetIndex];
    usedKnockoutOpponents.add(opponent.name);
    const match = simulateMatch(userTeam, opponent, true);
    log.push(renderMatch(match, phase));
    if (match.winner.name !== userTeam.name) {
      alive = false;
      log.push(`<article class="match-card"><h3>Fin del torneo</h3><p>Tu club cayo en ${phase}. Media propia: ${userTeam.rating.total}; rival: ${opponent.rating.total}.</p></article>`);
    }
  });

  if (alive) {
    log.push(`<article class="match-card"><h3>Campeon</h3><p>Ganaste el torneo de clubes historicos. Media final: ${userTeam.rating.total}. Figura del torneo: ${playerName(weightedPlayer(userTeam.players, ["DEL", "MED"]))}.</p></article>`);
  }

  tournamentLog.innerHTML = log.join("");
}

drawBtn.addEventListener("click", () => {
  if (state.currentSquad) rerollSameYear();
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
  const card = event.target.closest(".player-card");
  if (!card) return;
  pickPlayer(Number(card.dataset.index));
});
document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    state.filter = button.dataset.filter;
    document.querySelectorAll(".filter").forEach((item) => item.classList.toggle("active", item === button));
    renderPlayers();
  });
});

renderSources();
renderLineup();
