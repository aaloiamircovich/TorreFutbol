const STORAGE_KEY = "torre_futbol_carrera_jugador_v2";

const fallbackClubs = [
  { name: "Barrio Sur", tier: 1, league: "Liga Promesas", salary: 2, rep: 20 },
  { name: "Academia Federal", tier: 1, league: "Liga Promesas", salary: 3, rep: 24 },
  { name: "Puerto Norte", tier: 1, league: "Liga Promesas", salary: 2, rep: 22 },
  { name: "Union Capital", tier: 1, league: "Liga Promesas", salary: 3, rep: 25 },
  { name: "Deportivo Litoral", tier: 1, league: "Liga Promesas", salary: 2, rep: 21 },
  { name: "Rosario Azul", tier: 2, league: "Primera Nacional", salary: 8, rep: 42 },
  { name: "Cordoba Rojo", tier: 2, league: "Primera Nacional", salary: 9, rep: 44 },
  { name: "La Plata Norte", tier: 2, league: "Primera Nacional", salary: 10, rep: 46 },
  { name: "Racing del Sur", tier: 3, league: "Primera Division", salary: 24, rep: 63 },
  { name: "Capital Juniors", tier: 3, league: "Primera Division", salary: 28, rep: 68 },
  { name: "River del Este", tier: 4, league: "Copa Elite", salary: 70, rep: 82 },
  { name: "Real Iberia", tier: 5, league: "Europa", salary: 135, rep: 91 },
  { name: "Manchester Royal", tier: 5, league: "Europa", salary: 150, rep: 93 },
  { name: "Milano Rosso", tier: 5, league: "Europa", salary: 120, rep: 88 }
];

const fallbackOpponents = [
  "Atletico Puerto", "Sporting Barrio", "Norte FC", "Estrella Azul", "Union Oeste",
  "Real Parque", "Juventud Central", "Deportivo Plata", "Litoral Verde", "Academia Sur"
];

const clubAliases = {
  "Man City": "Manchester City",
  "Manchester City FC": "Manchester City",
  "AC Milan": "Milan",
  "Inter Milan": "Inter",
  "Inter de Milan": "Inter",
  "Bayern Munchen": "Bayern Munich",
  "Bayern München": "Bayern Munich",
  "Atletico Madrid": "Atletico de Madrid",
  "Atlético de Madrid": "Atletico de Madrid",
  "Paris Saint-Germain": "PSG",
  "Tottenham Hotspur": "Tottenham",
  "Borussia Dortmund": "Dortmund",
  "Al-Hilal": "Al Hilal",
  "Al-Nassr": "Al Nassr"
};

const currentClubOverrides = {
  "Kylian Mbappé": "Real Madrid",
  "Kevin De Bruyne": "Napoli"
};

const manualCareerPlayers = [
  { name: "Cristiano Ronaldo", club: "Al Nassr", pos: "DC", rating: 88, nat: "Portugal" },
  { name: "Neymar Jr", club: "Santos", pos: "EI", rating: 86, nat: "Brasil" }
];

const extraCareerClubs = [
  { name: "Boca Juniors", tier: 3, league: "Liga Argentina", salary: 30, rep: 72 },
  { name: "River Plate", tier: 4, league: "Liga Argentina", salary: 42, rep: 80 },
  { name: "Flamengo", tier: 4, league: "Brasileirao", salary: 48, rep: 82 },
  { name: "Palmeiras", tier: 4, league: "Brasileirao", salary: 46, rep: 81 },
  { name: "Racing Club", tier: 3, league: "Liga Argentina", salary: 28, rep: 69 },
  { name: "San Lorenzo", tier: 3, league: "Liga Argentina", salary: 26, rep: 68 },
  { name: "Independiente", tier: 3, league: "Liga Argentina", salary: 27, rep: 69 },
  { name: "Velez", tier: 3, league: "Liga Argentina", salary: 24, rep: 66 },
  { name: "Lanus", tier: 2, league: "Liga Argentina", salary: 21, rep: 62 },
  { name: "Al Nassr", tier: 4, league: "Liga Saudita", salary: 86, rep: 78 },
  { name: "Al Hilal", tier: 4, league: "Liga Saudita", salary: 90, rep: 80 },
  { name: "Tigres", tier: 3, league: "Liga MX", salary: 38, rep: 72 }
];

function normalizeClubName(name) {
  if (!name) return "";
  const trimmed = String(name).trim();
  return clubAliases[trimmed] || trimmed;
}

function clubLogoFor(name) {
  if (typeof teamLogos === "undefined") return "";
  const normalized = normalizeClubName(name);
  return teamLogos[normalized] || teamLogos[name] || "";
}

function playerPhotoFor(name) {
  if (typeof playerPhotos === "undefined") return "";
  return playerPhotos[name] || "";
}

function realPlayers() {
  const sourcePlayers = typeof subastaPlayers !== "undefined" && Array.isArray(subastaPlayers) ? subastaPlayers : [];
  const dbPlayers = sourcePlayers
    .filter((player) => {
      if (!player || !player.name || !player.club || player.club === "Leyenda") return false;
      return !["Idolo", "Ídolo", "Leyenda"].includes(player.rarity);
    })
    .map((player) => ({
      name: player.name,
      club: normalizeClubName(currentClubOverrides[player.name] || player.club),
      pos: player.pos,
      rating: Number(player.rating) || 70,
      nat: player.nat || "",
      photo: playerPhotoFor(player.name)
    }));
  const manualPlayers = manualCareerPlayers
    .filter((player) => !dbPlayers.some((item) => item.name === player.name))
    .map((player) => ({ ...player, club: normalizeClubName(player.club), photo: playerPhotoFor(player.name) }));
  return [...dbPlayers, ...manualPlayers];
}

const careerPlayers = realPlayers();

function leagueForClub(name) {
  const leagues = {
    "Boca Juniors": "Liga Argentina",
    "River Plate": "Liga Argentina",
    "Racing Club": "Liga Argentina",
    "San Lorenzo": "Liga Argentina",
    Independiente: "Liga Argentina",
    Velez: "Liga Argentina",
    Lanus: "Liga Argentina",
    Flamengo: "Brasileirao",
    Palmeiras: "Brasileirao",
    Santos: "Brasileirao",
    Tigres: "Liga MX",
    "Inter Miami": "MLS",
    "Al Nassr": "Liga Saudita",
    "Al Hilal": "Liga Saudita",
    "Real Madrid": "LaLiga",
    Barcelona: "LaLiga",
    "Atletico de Madrid": "LaLiga",
    PSG: "Ligue 1",
    "Manchester City": "Premier League",
    "Manchester United": "Premier League",
    Liverpool: "Premier League",
    Arsenal: "Premier League",
    Chelsea: "Premier League",
    Tottenham: "Premier League",
    "Aston Villa": "Premier League",
    "Bayern Munich": "Bundesliga",
    Dortmund: "Bundesliga",
    Juventus: "Serie A",
    Inter: "Serie A",
    Milan: "Serie A",
    Napoli: "Serie A",
    Roma: "Serie A",
    Benfica: "Liga Portugal"
  };
  return leagues[name] || "Liga Internacional";
}

function tierFromRating(rating) {
  if (rating >= 90) return 5;
  if (rating >= 86) return 4;
  if (rating >= 81) return 3;
  if (rating >= 76) return 2;
  return 1;
}

function buildCareerClubs() {
  const byClub = new Map();
  careerPlayers.forEach((player) => {
    const current = byClub.get(player.club) || { ratings: [], players: [] };
    current.ratings.push(player.rating);
    current.players.push(player);
    byClub.set(player.club, current);
  });

  const clubsFromPlayers = Array.from(byClub.entries()).map(([name, info]) => {
    const maxRating = Math.max(...info.ratings);
    const tier = tierFromRating(maxRating);
    return {
      name,
      tier,
      league: leagueForClub(name),
      salary: Math.round(10 + tier * 18 + maxRating * tier * 0.35),
      rep: Math.max(45, Math.min(96, maxRating + tier * 2)),
      stars: info.players.sort((a, b) => b.rating - a.rating).slice(0, 4).map((player) => player.name)
    };
  });

  const extras = extraCareerClubs.filter((club) => !clubsFromPlayers.some((item) => item.name === club.name));
  const realClubList = [...clubsFromPlayers, ...extras].filter((club) => clubLogoFor(club.name) || club.stars?.length);
  const source = realClubList.length >= 8 ? realClubList : fallbackClubs;
  return source.sort((a, b) => a.tier - b.tier || a.name.localeCompare(b.name));
}

let clubs = buildCareerClubs();
let opponents = clubs.length ? clubs.map((club) => club.name) : fallbackOpponents;

const positionProfiles = {
  DC: { number: 9, focus: ["definicion", "fuerza", "velocidad"], goals: 18, assists: 6, cleanSheets: 0, y: 22 },
  EI: { number: 11, focus: ["velocidad", "regate", "pase"], goals: 12, assists: 12, cleanSheets: 0, y: 28 },
  MCO: { number: 10, focus: ["vision", "pase", "regate"], goals: 10, assists: 16, cleanSheets: 0, y: 38 },
  MC: { number: 8, focus: ["pase", "resistencia", "vision"], goals: 6, assists: 12, cleanSheets: 0, y: 48 },
  DFC: { number: 4, focus: ["defensa", "fuerza", "resistencia"], goals: 3, assists: 3, cleanSheets: 14, y: 68 },
  POR: { number: 1, focus: ["defensa", "vision", "fuerza"], goals: 0, assists: 0, cleanSheets: 16, y: 82 }
};

const styleBonuses = {
  finisher: { definicion: 7, fuerza: 2, trait: "Francotirador" },
  creator: { pase: 5, vision: 6, trait: "Mago del Pase" },
  engine: { resistencia: 7, velocidad: 3, trait: "Motor" },
  wall: { defensa: 7, fuerza: 4, trait: "Muralla" },
  leader: { vision: 3, defensa: 2, trait: "Lider" }
};

const trainingSessions = [
  { id: "speed", title: "Velocidad y arranque", attrs: { velocidad: 2, resistencia: 1 }, fatigue: 10, xp: 18 },
  { id: "finish", title: "Definicion", attrs: { definicion: 3 }, fatigue: 9, xp: 18 },
  { id: "passing", title: "Pase y vision", attrs: { pase: 2, vision: 2 }, fatigue: 8, xp: 18 },
  { id: "dribble", title: "Control y regate", attrs: { regate: 3, velocidad: 1 }, fatigue: 9, xp: 18 },
  { id: "gym", title: "Fuerza fisica", attrs: { fuerza: 3, resistencia: 1 }, fatigue: 12, xp: 20 },
  { id: "tactic", title: "Tactica defensiva", attrs: { defensa: 3, vision: 1 }, fatigue: 7, xp: 17 },
  { id: "recovery", title: "Recuperacion activa", attrs: { resistencia: 1 }, fatigue: -20, xp: 8 }
];

const socialTemplates = [
  {
    author: "Periodista",
    text: "Tu ultimo partido genero debate. Que mensaje publicas?",
    options: [
      { text: "El equipo esta por encima de todo.", popularity: 2, reputation: 5, morale: 2 },
      { text: "Prometo responder dentro de la cancha.", popularity: 6, reputation: 1, morale: 4 },
      { text: "Prefiero no entrar en polemicas.", popularity: -1, reputation: 4, morale: 0 }
    ]
  },
  {
    author: "Hinchas",
    text: "La tribuna pide mas compromiso despues de una semana dura.",
    options: [
      { text: "Organizar una firma de camisetas.", popularity: 8, reputation: 1, morale: 2, money: -6 },
      { text: "Subir video entrenando extra.", popularity: 3, reputation: 6, fatigue: 5 },
      { text: "Ignorar el ruido externo.", popularity: -4, reputation: 1, morale: -2 }
    ]
  },
  {
    author: "Club",
    text: "El area de prensa ofrece una entrevista larga.",
    options: [
      { text: "Dar una entrevista humilde.", popularity: 4, reputation: 4, coach: 2 },
      { text: "Hablar como lider del proyecto.", popularity: 2, reputation: 7, coach: 4 },
      { text: "Rechazar para descansar.", popularity: -2, reputation: -1, fatigue: -8 }
    ]
  }
];

const lifestyleItems = [
  { id: "trainer", title: "Entrenador personal", cost: 120, effect: "Los entrenamientos dan +1 XP extra.", minPop: 0 },
  { id: "recoveryRoom", title: "Sala de recuperacion", cost: 220, effect: "Reduce mas fatiga al descansar.", minPop: 0 },
  { id: "styleBrand", title: "Marca personal", cost: 350, effect: "Aumenta seguidores al jugar bien.", minPop: 65 }
];

let state = null;

const $ = (selector) => document.querySelector(selector);
const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const random = (min, max) => Math.floor(min + Math.random() * (max - min + 1));
const moneyText = (value) => `$${Math.max(0, Math.round(value))}K`;
const valueText = (value) => `$${(Math.max(0.1, value) / 1000).toFixed(1)}M`;

function topPlayersForClub(clubName) {
  const normalized = normalizeClubName(clubName);
  return careerPlayers
    .filter((player) => player.club === normalized)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);
}

function renderClubSelect() {
  const select = $("#playerClub");
  if (!select) return;
  const preferred = ["Boca Juniors", "River Plate", "Real Madrid", "Barcelona", "Manchester City", "PSG"];
  const firstValue = preferred.find((name) => clubs.some((club) => club.name === name)) || clubs[0]?.name || "";
  select.innerHTML = clubs.map((club) => {
    const stars = topPlayersForClub(club.name).slice(0, 2).map((player) => player.name).join(", ");
    const label = stars ? `${club.name} - ${club.league} (${stars})` : `${club.name} - ${club.league}`;
    return `<option value="${club.name}">${label}</option>`;
  }).join("");
  select.value = firstValue;
}

function baseAttributes(position, style) {
  const attrs = {
    velocidad: 48,
    definicion: 46,
    pase: 47,
    resistencia: 50,
    regate: 47,
    vision: 46,
    fuerza: 48,
    defensa: 44
  };
  const profile = positionProfiles[position];
  profile.focus.forEach((attr) => attrs[attr] += 6);
  Object.entries(styleBonuses[style].attrs || styleBonuses[style]).forEach(([attr, bonus]) => {
    if (attr !== "trait") attrs[attr] = (attrs[attr] || 45) + bonus;
  });
  return attrs;
}

function createObjectives(position) {
  const profile = positionProfiles[position];
  const list = [
    { id: "rating", label: "Media de partido 7.0", target: 7, value: 0, type: "average" },
    { id: "minutes", label: "Jugar 26 partidos", target: 26, value: 0 }
  ];
  if (profile.goals) list.push({ id: "goals", label: `Marcar ${profile.goals} goles`, target: profile.goals, value: 0 });
  if (profile.assists) list.push({ id: "assists", label: `Dar ${profile.assists} asistencias`, target: profile.assists, value: 0 });
  if (profile.cleanSheets) list.push({ id: "cleanSheets", label: `Lograr ${profile.cleanSheets} vallas invictas`, target: profile.cleanSheets, value: 0 });
  return list;
}

function newState(profile) {
  const club = clubs.find((item) => item.name === profile.club) || clubs[0];
  const attrs = baseAttributes(profile.position, profile.style);
  return {
    profile: {
      name: profile.name || "Tu Promesa",
      nation: profile.nation,
      position: profile.position,
      style: profile.style,
      age: 16
    },
    club: club.name,
    league: club.league,
    season: 1,
    week: 1,
    xp: 0,
    money: 20,
    followers: 1200,
    popularity: 48,
    reputation: 42,
    morale: 68,
    fatigue: 12,
    coach: 42,
    injuryWeeks: 0,
    marketValue: 420,
    salary: club.salary,
    contractYears: 2,
    attrs,
    traits: [styleBonuses[profile.style].trait],
    sponsors: [],
    lifestyle: [],
    offers: [],
    news: ["Tu carrera profesional acaba de empezar."],
    socialQueue: [randomSocial()],
    objectives: createObjectives(profile.position),
    seasonStats: blankStats(),
    careerStats: blankStats(),
    history: [],
    trophies: [],
    retired: false,
    trainedThisWeek: false,
    playedThisWeek: false,
    nextOpponent: randomOpponent(club.name)
  };
}

function blankStats() {
  return {
    matches: 0,
    goals: 0,
    assists: 0,
    cleanSheets: 0,
    avgRatingTotal: 0,
    awards: 0,
    titles: 0,
    nationalCaps: 0
  };
}

function randomSocial() {
  return JSON.parse(JSON.stringify(socialTemplates[random(0, socialTemplates.length - 1)]));
}

function randomOpponent(currentClubOverride = "") {
  const currentClub = currentClubOverride || state?.club || "";
  const current = clubs.find((club) => club.name === currentClub);
  const pool = clubs.filter((club) => {
    if (club.name === currentClub) return false;
    if (!current) return true;
    return Math.abs(club.tier - current.tier) <= 2;
  });
  const source = pool.length ? pool : clubs.filter((club) => club.name !== currentClub);
  if (source.length) return source[random(0, source.length - 1)].name;
  return opponents[random(0, opponents.length - 1)];
}

function overall() {
  const attrs = state.attrs;
  const profile = positionProfiles[state.profile.position];
  const focusAvg = profile.focus.reduce((sum, key) => sum + attrs[key], 0) / profile.focus.length;
  const allAvg = Object.values(attrs).reduce((sum, value) => sum + value, 0) / Object.keys(attrs).length;
  return Math.round(focusAvg * 0.68 + allAvg * 0.32);
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function load() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function showToast(text) {
  const old = document.querySelector(".toast");
  if (old) old.remove();
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = text;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2600);
}

function updateBars() {
  $("#moraleValue").textContent = state.morale;
  $("#fatigueValue").textContent = state.fatigue;
  $("#coachValue").textContent = state.coach;
  $("#moraleBar").style.width = `${state.morale}%`;
  $("#fatigueBar").style.width = `${state.fatigue}%`;
  $("#coachBar").style.width = `${state.coach}%`;
}

function syncObjectives() {
  state.objectives.forEach((objective) => {
    if (objective.id === "goals") objective.value = state.seasonStats.goals;
    if (objective.id === "assists") objective.value = state.seasonStats.assists;
    if (objective.id === "cleanSheets") objective.value = state.seasonStats.cleanSheets;
    if (objective.id === "minutes") objective.value = state.seasonStats.matches;
    if (objective.id === "rating") objective.value = averageRating();
  });
}

function averageRating() {
  return state.seasonStats.matches
    ? Number((state.seasonStats.avgRatingTotal / state.seasonStats.matches).toFixed(1))
    : 0;
}

function render() {
  if (!state) return;
  syncObjectives();
  const profile = positionProfiles[state.profile.position];
  const ov = overall();
  $("#careerName").textContent = state.profile.name;
  $("#careerSub").textContent = `${state.club} - ${state.league} - ${state.profile.position} - ${state.profile.age} anios`;
  const logo = clubLogoFor(state.club);
  const logoNode = $("#clubLogo");
  logoNode.src = logo || "";
  logoNode.alt = logo ? `Escudo de ${state.club}` : "";
  logoNode.hidden = !logo;
  $("#seasonLabel").textContent = state.season;
  $("#weekLabel").textContent = state.week;
  $("#shirtNumber").textContent = profile.number;
  $("#shirtPos").textContent = state.profile.position;
  $("#pitchDot").textContent = profile.number;
  $("#pitchDot").style.top = `${profile.y}%`;
  $("#overallLabel").textContent = ov;
  $("#roleLabel").textContent = roleLabel(ov);
  $("#contractLabel").textContent = `${state.contractYears} anios restantes`;
  $("#marketValue").textContent = valueText(state.marketValue);
  $("#salaryValue").textContent = moneyText(state.salary);
  $("#moneyValue").textContent = moneyText(state.money);
  $("#followersValue").textContent = compact(state.followers);
  $("#popularityValue").textContent = state.popularity;
  $("#reputationValue").textContent = state.reputation;
  $("#nextOpponent").textContent = state.nextOpponent;
  $("#matchContext").textContent = state.injuryWeeks ? `Lesionado: ${state.injuryWeeks} semanas` : `${state.league} - fecha ${state.week}`;
  renderRivalStars();
  $("#playMatchBtn").disabled = state.playedThisWeek || state.injuryWeeks > 0 || state.retired;
  $("#trainingHint").textContent = state.trainedThisWeek ? "Ya entrenaste esta semana." : "Elegir una sesion consume energia.";
  updateBars();
  renderObjectives();
  renderAttributes();
  renderTraining();
  renderNews();
  renderSocial();
  renderMarket();
  renderLegacy();
  save();
}

function compact(value) {
  if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `${Math.round(value / 100) / 10}K`;
  return String(value);
}

function roleLabel(ov) {
  if (state.retired) return "Retirado";
  if (ov >= 90) return "Estrella mundial";
  if (ov >= 82) return "Figura internacional";
  if (ov >= 74) return "Titular consolidado";
  if (ov >= 66) return "Proyecto serio";
  return "Joven promesa";
}

function renderObjectives() {
  $("#objectivesList").innerHTML = state.objectives.map((objective) => {
    const percent = objective.type === "average"
      ? clamp((objective.value / objective.target) * 100, 0, 100)
      : clamp((objective.value / objective.target) * 100, 0, 100);
    const value = objective.type === "average" ? objective.value.toFixed(1) : objective.value;
    return `<div class="objective">
      <strong>${objective.label}</strong>
      <div class="meter"><span style="width:${percent}%"></span></div>
      <p>${value}/${objective.target}</p>
    </div>`;
  }).join("");
}

function renderAttributes() {
  $("#attributesGrid").innerHTML = Object.entries(state.attrs).map(([key, value]) => `
    <div class="attribute">
      <strong><span>${labelAttr(key)}</span><span>${value}</span></strong>
      <div class="meter"><span style="width:${value}%"></span></div>
    </div>
  `).join("");
}

function labelAttr(key) {
  const labels = {
    velocidad: "Velocidad",
    definicion: "Definicion",
    pase: "Pase",
    resistencia: "Resistencia",
    regate: "Regate",
    vision: "Vision",
    fuerza: "Fuerza",
    defensa: "Defensa"
  };
  return labels[key] || key;
}

function renderTraining() {
  $("#trainingGrid").innerHTML = trainingSessions.map((session) => {
    const attrs = Object.entries(session.attrs).map(([key, value]) => `${labelAttr(key)} +${value}`).join(", ");
    const fatigue = session.fatigue >= 0 ? `Fatiga +${session.fatigue}` : `Fatiga ${session.fatigue}`;
    return `<div class="training-card">
      <h3>${session.title}</h3>
      <p>${attrs}</p>
      <p>${fatigue} - XP +${session.xp}</p>
      <button data-training="${session.id}" ${state.trainedThisWeek || state.retired ? "disabled" : ""}>Entrenar</button>
    </div>`;
  }).join("");
}

function renderRivalStars() {
  const stars = topPlayersForClub(state.nextOpponent);
  const rivalLogo = clubLogoFor(state.nextOpponent);
  if (!stars.length && !rivalLogo) {
    $("#rivalStars").innerHTML = "";
    return;
  }
  const starCards = stars.map((player) => {
    const photo = player.photo;
    return `<div class="star-chip">
      ${photo ? `<img src="${photo}" alt="${player.name}" loading="lazy" />` : `<span>${player.pos || ""}</span>`}
      <div>
        <strong>${player.name}</strong>
        <small>${player.pos || "Jugador"} - ${player.rating}</small>
      </div>
    </div>`;
  }).join("");
  $("#rivalStars").innerHTML = `
    <div class="rival-head">
      ${rivalLogo ? `<img src="${rivalLogo}" alt="Escudo de ${state.nextOpponent}" loading="lazy" />` : ""}
      <span>Figuras actuales</span>
    </div>
    <div class="star-list">${starCards || "<p>Club real agregado desde la base de escudos.</p>"}</div>
  `;
}

function renderNews() {
  $("#newsFeed").innerHTML = state.news.slice(-8).reverse().map((item) => `<p>${item}</p>`).join("");
}

function renderSocial() {
  if (!state.socialQueue.length) state.socialQueue.push(randomSocial());
  $("#socialFeed").innerHTML = state.socialQueue.map((post, postIndex) => `
    <div class="social-post">
      <strong>${post.author}</strong>
      <p>${post.text}</p>
      <div class="social-actions">
        ${post.options.map((option, optionIndex) => `<button data-social="${postIndex}:${optionIndex}">${option.text}</button>`).join("")}
      </div>
    </div>
  `).join("");
}

function renderMarket() {
  $("#offersList").innerHTML = state.offers.length
    ? state.offers.map((offer, index) => {
      const logo = clubLogoFor(offer.club);
      return `<div class="offer-card">
        <header>
          <h3>${logo ? `<img src="${logo}" alt="Escudo de ${offer.club}" loading="lazy" />` : ""}${offer.club}</h3>
          <strong>${moneyText(offer.salary)}/sem</strong>
        </header>
        <p>${offer.league} - contrato ${offer.years} anios - prima ${moneyText(offer.bonus)}</p>
        <div class="offer-actions">
          <button data-offer="${index}" class="primary">Aceptar</button>
          <button data-reject="${index}">Rechazar</button>
        </div>
      </div>`;
    }).join("")
    : `<div class="offer-card"><p>No hay ofertas activas. Tu agente puede sondear clubes si tu reputacion sube.</p></div>`;

  $("#sponsorsList").innerHTML = availableSponsors().map((sponsor) => `<div class="offer-card">
    <header><h3>${sponsor.name}</h3><strong>${moneyText(sponsor.pay)}</strong></header>
    <p>${sponsor.effect}</p>
    <button data-sponsor="${sponsor.id}" ${state.sponsors.includes(sponsor.id) ? "disabled" : ""}>${state.sponsors.includes(sponsor.id) ? "Firmado" : "Firmar"}</button>
  </div>`).join("");

  $("#lifestyleList").innerHTML = lifestyleItems.map((item) => `<div class="offer-card">
    <header><h3>${item.title}</h3><strong>${moneyText(item.cost)}</strong></header>
    <p>${item.effect}</p>
    <button data-lifestyle="${item.id}" ${state.lifestyle.includes(item.id) || state.money < item.cost || state.popularity < item.minPop ? "disabled" : ""}>${state.lifestyle.includes(item.id) ? "Comprado" : "Comprar"}</button>
  </div>`).join("");
}

function availableSponsors() {
  const list = [
    { id: "boots", name: "Botines Veloz", pay: 60, minPop: 45, effect: "Bono por goles y seguidores." },
    { id: "drink", name: "Energia 90", pay: 120, minPop: 60, effect: "Ingreso extra y mas popularidad." },
    { id: "global", name: "Global Sports", pay: 260, minPop: 78, effect: "Marca internacional para estrellas." }
  ];
  return list.filter((item) => state.popularity >= item.minPop || state.sponsors.includes(item.id));
}

function renderLegacy() {
  const stats = state.careerStats;
  $("#careerStats").innerHTML = [
    ["Partidos", stats.matches],
    ["Goles", stats.goals],
    ["Asistencias", stats.assists],
    ["Vallas", stats.cleanSheets],
    ["Titulos", stats.titles],
    ["Premios", stats.awards],
    ["Seleccion", stats.nationalCaps]
  ].map(([label, value]) => `<div class="stat-card"><span>${label}</span><strong>${value}</strong></div>`).join("");

  $("#seasonHistory").innerHTML = state.history.length
    ? state.history.slice().reverse().map((item) => `<div class="history-card">
      <header><h3>Temporada ${item.season}</h3><strong>${item.club}</strong></header>
      <p>${item.matches} PJ, ${item.goals} G, ${item.assists} A, media ${item.avgRating}. ${item.note}</p>
    </div>`).join("")
    : `<div class="history-card"><p>Tu historial aparecera al terminar la primera temporada.</p></div>`;
}

function train(id) {
  const session = trainingSessions.find((item) => item.id === id);
  if (!session || state.trainedThisWeek) return;
  Object.entries(session.attrs).forEach(([attr, value]) => {
    const trainerBonus = state.lifestyle.includes("trainer") ? 1 : 0;
    state.attrs[attr] = clamp(state.attrs[attr] + value, 1, 99);
    state.xp += session.xp + trainerBonus;
  });
  state.fatigue = clamp(state.fatigue + session.fatigue, 0, 100);
  state.morale = clamp(state.morale + (session.id === "recovery" ? 2 : 0), 0, 100);
  state.trainedThisWeek = true;
  maybeInjury("training");
  addNews(`Entrenamiento completado: ${session.title}.`);
  render();
}

function maybeInjury(source) {
  const risk = state.fatigue > 85 ? 0.22 : state.fatigue > 70 ? 0.11 : 0.03;
  if (Math.random() < risk) {
    state.injuryWeeks = random(2, source === "match" ? 7 : 4);
    state.morale = clamp(state.morale - 12, 0, 100);
    addNews(`Lesion: estaras fuera ${state.injuryWeeks} semanas.`);
  }
}

function playMatch() {
  if (state.playedThisWeek || state.injuryWeeks > 0 || state.retired) return;
  const ov = overall();
  const form = (state.morale - state.fatigue) / 22 + (state.coach - 50) / 35;
  const rating = clamp(Number((5.4 + ov / 22 + form + Math.random() * 1.4).toFixed(1)), 4.0, 10.0);
  const pos = state.profile.position;
  const isAttacker = ["DC", "EI", "MCO"].includes(pos);
  const isMid = ["MC", "MCO"].includes(pos);
  const isDef = ["DFC", "POR"].includes(pos);
  const goals = isAttacker ? chanceCount((ov + state.attrs.definicion + rating * 8) / 220) : chanceCount((ov + rating * 7) / 420);
  const assists = isMid || isAttacker ? chanceCount((ov + state.attrs.pase + state.attrs.vision + rating * 7) / 260) : chanceCount((ov + rating * 6) / 520);
  const cleanSheet = isDef && Math.random() < clamp((ov + state.attrs.defensa + state.coach) / 320, 0.12, 0.72) ? 1 : 0;
  const teamGoals = clamp(goals + assists + random(0, 2), 0, 5);
  const rivalGoals = cleanSheet ? 0 : random(0, 4);
  const won = teamGoals > rivalGoals;
  const drew = teamGoals === rivalGoals;
  const rivalStar = topPlayersForClub(state.nextOpponent)[0];
  const duelText = rivalStar ? ` Duelo destacado contra ${rivalStar.name}.` : "";
  updateStats({ rating, goals, assists, cleanSheet });
  state.fatigue = clamp(state.fatigue + random(12, 22), 0, 100);
  state.morale = clamp(state.morale + (won ? 8 : drew ? 1 : -7) + goals * 2 + assists, 0, 100);
  state.coach = clamp(state.coach + Math.round((rating - 6.6) * 3), 0, 100);
  state.popularity = clamp(state.popularity + goals * 3 + assists * 2 + (won ? 2 : -1), 0, 100);
  state.reputation = clamp(state.reputation + Math.max(0, Math.round(rating - 6.2)), 0, 100);
  state.followers += Math.round(180 + rating * 80 + goals * 500 + assists * 260 + (state.lifestyle.includes("styleBrand") ? 260 : 0));
  state.money += state.salary + sponsorBonus(goals, assists);
  state.marketValue = Math.round(state.marketValue * (1 + (rating - 6) / 160) + goals * 18 + assists * 10);
  state.playedThisWeek = true;
  maybeInjury("match");
  $("#matchResult").innerHTML = `<h3>${state.club} ${teamGoals} - ${rivalGoals} ${state.nextOpponent}</h3>
    <p>Tu partido: media ${rating}, ${goals} goles, ${assists} asistencias${cleanSheet ? ", valla invicta" : ""}.${duelText}</p>`;
  addNews(`${state.club} ${teamGoals}-${rivalGoals} ${state.nextOpponent}. Media personal ${rating}.${duelText}`);
  if (rating >= 8.6) maybeAward("Jugador de la semana");
  maybeNationalCall(rating);
  render();
}

function chanceCount(probability) {
  let count = 0;
  if (Math.random() < probability) count += 1;
  if (Math.random() < probability * 0.28) count += 1;
  return count;
}

function updateStats({ rating, goals, assists, cleanSheet }) {
  for (const stats of [state.seasonStats, state.careerStats]) {
    stats.matches += 1;
    stats.goals += goals;
    stats.assists += assists;
    stats.cleanSheets += cleanSheet;
    stats.avgRatingTotal += rating;
  }
}

function sponsorBonus(goals, assists) {
  let bonus = 0;
  if (state.sponsors.includes("boots")) bonus += goals * 8 + assists * 4;
  if (state.sponsors.includes("drink")) bonus += 10;
  if (state.sponsors.includes("global")) bonus += 25;
  return bonus;
}

function maybeAward(title) {
  if (Math.random() < 0.28) {
    state.careerStats.awards += 1;
    state.seasonStats.awards += 1;
    state.reputation = clamp(state.reputation + 4, 0, 100);
    addNews(`Premio: ${title}.`);
  }
}

function maybeNationalCall(rating) {
  if (overall() > 76 && state.reputation > 62 && rating > 7.4 && Math.random() < 0.12) {
    state.careerStats.nationalCaps += 1;
    state.popularity = clamp(state.popularity + 6, 0, 100);
    addNews(`${state.profile.nation} te convoco para una fecha internacional.`);
  }
}

function rest() {
  const recoveryBonus = state.lifestyle.includes("recoveryRoom") ? 12 : 0;
  state.fatigue = clamp(state.fatigue - 24 - recoveryBonus, 0, 100);
  state.morale = clamp(state.morale + 3, 0, 100);
  if (state.injuryWeeks > 0) state.injuryWeeks -= 1;
  addNews("Semana de descanso y recuperacion.");
  render();
}

function advanceWeek() {
  if (state.retired) return;
  state.week += 1;
  state.money += state.salary;
  state.trainedThisWeek = false;
  state.playedThisWeek = false;
  state.nextOpponent = randomOpponent(state.club);
  if (state.injuryWeeks > 0) state.injuryWeeks -= 1;
  state.fatigue = clamp(state.fatigue - 8, 0, 100);
  if (Math.random() < 0.45) state.socialQueue = [randomSocial()];
  if ([10, 20, 30].includes(state.week) || Math.random() < 0.08) generateOffers();
  if (state.week > 38) endSeason();
  render();
}

function endSeason() {
  syncObjectives();
  const completed = state.objectives.filter((objective) => objective.value >= objective.target).length;
  const total = state.objectives.length;
  const avgRating = averageRating();
  const titleChance = clamp((overall() + state.coach + completed * 10) / 260, 0.05, 0.72);
  const wonTitle = Math.random() < titleChance;
  if (wonTitle) {
    state.seasonStats.titles += 1;
    state.careerStats.titles += 1;
    state.trophies.push(`${state.league} T${state.season}`);
  }
  state.history.push({
    season: state.season,
    club: state.club,
    matches: state.seasonStats.matches,
    goals: state.seasonStats.goals,
    assists: state.seasonStats.assists,
    avgRating,
    note: `${completed}/${total} objetivos${wonTitle ? ", campeon" : ""}`
  });
  state.money += completed * 35 + (wonTitle ? 120 : 0);
  state.reputation = clamp(state.reputation + completed * 3 + (wonTitle ? 8 : 0), 0, 100);
  state.popularity = clamp(state.popularity + completed * 2 + (wonTitle ? 10 : 0), 0, 100);
  state.profile.age += 1;
  state.season += 1;
  state.week = 1;
  state.contractYears -= 1;
  state.seasonStats = blankStats();
  state.objectives = createObjectives(state.profile.position);
  state.offers = [];
  if (state.contractYears <= 0) generateOffers(true);
  addNews(`Fin de temporada: ${completed}/${total} objetivos cumplidos${wonTitle ? " y titulo ganado" : ""}.`);
}

function generateOffers(force = false) {
  const ov = overall();
  const current = clubs.find((club) => club.name === state.club) || clubs[0];
  const minRep = force ? 0 : state.reputation;
  const pool = clubs.filter((club) => club.name !== state.club && club.rep <= minRep + ov * 0.8 && club.tier <= current.tier + 2);
  const choices = (pool.length ? pool : clubs.filter((club) => club.name !== state.club)).sort(() => Math.random() - 0.5).slice(0, force ? 3 : random(1, 3));
  state.offers = choices.map((club) => ({
    club: club.name,
    league: club.league,
    salary: Math.round(club.salary + ov * club.tier * 0.45 + state.reputation / 4),
    years: random(2, 5),
    bonus: Math.round(club.salary * random(6, 16))
  }));
  if (state.offers.length) addNews("Tu agente recibio nuevas ofertas de clubes.");
}

function acceptOffer(index) {
  const offer = state.offers[index];
  if (!offer) return;
  state.club = offer.club;
  state.league = offer.league;
  state.salary = offer.salary;
  state.contractYears = offer.years;
  state.money += offer.bonus;
  state.coach = clamp(38 + state.reputation / 3, 0, 100);
  state.offers = [];
  addNews(`Fichaste por ${offer.club}. Nuevo salario: ${moneyText(offer.salary)} por semana.`);
  render();
}

function rejectOffer(index) {
  state.offers.splice(index, 1);
  state.reputation = clamp(state.reputation + 1, 0, 100);
  render();
}

function applySocial(postIndex, optionIndex) {
  const post = state.socialQueue[postIndex];
  const option = post?.options[optionIndex];
  if (!option) return;
  state.popularity = clamp(state.popularity + (option.popularity || 0), 0, 100);
  state.reputation = clamp(state.reputation + (option.reputation || 0), 0, 100);
  state.morale = clamp(state.morale + (option.morale || 0), 0, 100);
  state.fatigue = clamp(state.fatigue + (option.fatigue || 0), 0, 100);
  state.coach = clamp(state.coach + (option.coach || 0), 0, 100);
  state.money = Math.max(0, state.money + (option.money || 0));
  state.followers += Math.max(0, (option.popularity || 0) * 150);
  state.socialQueue.splice(postIndex, 1);
  addNews(`Redes: ${option.text}`);
  render();
}

function signSponsor(id) {
  const sponsor = availableSponsors().find((item) => item.id === id);
  if (!sponsor || state.sponsors.includes(id)) return;
  state.sponsors.push(id);
  state.money += sponsor.pay;
  state.popularity = clamp(state.popularity + 4, 0, 100);
  addNews(`Patrocinio firmado: ${sponsor.name}.`);
  render();
}

function buyLifestyle(id) {
  const item = lifestyleItems.find((entry) => entry.id === id);
  if (!item || state.money < item.cost || state.lifestyle.includes(id)) return;
  state.money -= item.cost;
  state.lifestyle.push(id);
  addNews(`Compra realizada: ${item.title}.`);
  render();
}

function retire() {
  state.retired = true;
  const ov = overall();
  const score = ov + state.careerStats.titles * 8 + state.careerStats.awards * 4 + Math.floor(state.followers / 250000);
  const label = score > 135 ? "leyenda mundial" : score > 105 ? "idolo continental" : score > 82 ? "referente de club" : "profesional respetado";
  addNews(`Retiro confirmado: terminas como ${label}.`);
  showToast(`Salon de la fama: ${label}.`);
  render();
}

function addNews(text) {
  state.news.push(text);
  if (state.news.length > 40) state.news.shift();
}

function setupEvents() {
  $("#careerForm").addEventListener("submit", (event) => {
    event.preventDefault();
    state = newState({
      name: $("#playerName").value.trim(),
      nation: $("#playerNation").value,
      position: $("#playerPosition").value,
      style: $("#playerStyle").value,
      club: $("#playerClub").value
    });
    $("#careerCreate").classList.add("hidden");
    $("#careerGame").classList.remove("hidden");
    render();
  });

  document.querySelectorAll(".tab").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach((item) => item.classList.toggle("active", item === button));
      document.querySelectorAll(".tab-panel").forEach((panel) => panel.classList.add("hidden"));
      $(`#tab-${button.dataset.tab}`).classList.remove("hidden");
    });
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    if (target.dataset.training) train(target.dataset.training);
    if (target.dataset.social) {
      const [post, option] = target.dataset.social.split(":").map(Number);
      applySocial(post, option);
    }
    if (target.dataset.offer) acceptOffer(Number(target.dataset.offer));
    if (target.dataset.reject) rejectOffer(Number(target.dataset.reject));
    if (target.dataset.sponsor) signSponsor(target.dataset.sponsor);
    if (target.dataset.lifestyle) buyLifestyle(target.dataset.lifestyle);
  });

  $("#playMatchBtn").addEventListener("click", playMatch);
  $("#restBtn").addEventListener("click", rest);
  $("#advanceWeekBtn").addEventListener("click", advanceWeek);
  $("#agentBtn").addEventListener("click", () => {
    generateOffers(true);
    render();
  });
  $("#saveBtn").addEventListener("click", () => {
    save();
    showToast("Carrera guardada.");
  });
  $("#newCareerBtn").addEventListener("click", () => {
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
  });
  $("#retireBtn").addEventListener("click", retire);
}

function boot() {
  renderClubSelect();
  setupEvents();
  state = load();
  if (state) {
    $("#careerCreate").classList.add("hidden");
    $("#careerGame").classList.remove("hidden");
    render();
  }
}

boot();
