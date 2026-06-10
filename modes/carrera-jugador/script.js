const STORAGE_KEY = "torre_futbol_carrera_jugador_v4";

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

Object.assign(clubAliases, {
  "Arsenal FC": "Arsenal",
  "Liverpool FC": "Liverpool",
  "Chelsea FC": "Chelsea",
  "Manchester United FC": "Manchester United",
  "Tottenham Hotspur": "Tottenham",
  "Newcastle United": "Newcastle",
  "Everton FC": "Everton",
  "West Ham United": "West Ham",
  "Wolverhampton Wanderers": "Wolves",
  "Juventus FC": "Juventus",
  "SSC Napoli": "Napoli",
  "AS Roma": "Roma",
  "SS Lazio": "Lazio",
  "ACF Fiorentina": "Fiorentina",
  "Bayer 04 Leverkusen": "Bayer Leverkusen",
  "VfL Wolfsburg": "Wolfsburg",
  "Atlético de Madrid": "Atletico de Madrid",
  "FC Barcelona": "Barcelona",
  "Real Betis Balompié": "Betis",
  "Villarreal CF": "Villarreal",
  "Valencia CF": "Valencia",
  "Sevilla FC": "Sevilla",
  "RCD Mallorca": "Mallorca",
  "RCD Espanyol Barcelona": "Espanyol",
  "Olympique Marseille": "Marseille",
  "Olympique Lyon": "Lyon",
  "AS Monaco": "Monaco",
  "OGC Nice": "Nice",
  "SL Benfica": "Benfica",
  "FC Porto": "Porto",
  "SC Braga": "Braga",
  "Al-Hilal SFC": "Al Hilal",
  "Al-Nassr FC": "Al Nassr",
  "Al-Ittihad Club": "Al Ittihad",
  "Al-Ahli SFC": "Al Ahli",
  "CA Boca Juniors": "Boca Juniors",
  "Club Atlético Boca Juniors": "Boca Juniors",
  "CA River Plate": "River Plate",
  "Club Atlético River Plate": "River Plate",
  "CA Vélez Sarsfield": "Velez",
  "CA San Lorenzo de Almagro": "San Lorenzo",
  "CA Lanús": "Lanus",
  "Club Estudiantes de La Plata": "Estudiantes LP",
  "CA Newell's Old Boys": "Newell's",
  "CA Independiente": "Independiente",
  "CR Flamengo": "Flamengo",
  "Sociedade Esportiva Palmeiras": "Palmeiras",
  "Fluminense Football Club": "Fluminense",
  "Grêmio Foot-Ball Porto Alegrense": "Gremio",
  "Sport Club Internacional": "Internacional",
  "Clube Atlético Mineiro": "Atletico Mineiro",
  "São Paulo Futebol Clube": "Sao Paulo",
  "Santos FC": "Santos",
  "Botafogo de Futebol e Regatas": "Botafogo",
  "Club Athletico Paranaense": "Athletico Paranaense",
  "Inter Miami CF": "Inter Miami",
  "Los Angeles Galaxy": "LA Galaxy",
  "Atlanta United FC": "Atlanta United",
  "Ajax Amsterdam": "Ajax",
  "Feyenoord Rotterdam": "Feyenoord",
  "PSV Eindhoven": "PSV",
  "CF América": "Club America",
  "Club América": "Club America",
  "Deportivo Guadalajara": "Chivas",
  "CD Guadalajara": "Chivas",
  "CF Monterrey": "Monterrey",
  "Tigres UANL": "Tigres"
});

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

function playerKey(name) {
  return String(name || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function careerLeagues() {
  return typeof careerLeagueDatabase !== "undefined" && Array.isArray(careerLeagueDatabase)
    ? careerLeagueDatabase
    : [];
}

function careerCompetitions() {
  return typeof careerCompetitionDatabase !== "undefined" && Array.isArray(careerCompetitionDatabase)
    ? careerCompetitionDatabase
    : [];
}

function competitionEntriesForClub(name) {
  const normalized = normalizeClubName(name);
  return careerCompetitions()
    .filter((competition) => (competition.teams || []).some((team) => normalizeClubName(team.name) === normalized));
}

function competitionsForClub(name) {
  return competitionEntriesForClub(name).map((competition) => competition.name);
}

function databaseTeams() {
  return careerLeagues().flatMap((league) => (league.teams || []).map((team) => ({
    ...team,
    league: league.name,
    leagueId: league.id,
    country: league.country,
    level: league.level || 1,
    competitions: competitionsForClub(team.name)
  })));
}

function databaseTeamByName(name) {
  const normalized = normalizeClubName(name);
  return databaseTeams().find((team) => normalizeClubName(team.name) === normalized) || null;
}

function databasePlayers() {
  return databaseTeams().flatMap((team) => (team.players || []).map((player) => ({
    ...player,
    club: normalizeClubName(team.name),
    league: team.league,
    leagueId: team.leagueId,
    rating: Number(player.rating) || 70,
    photo: playerPhotoFor(player.name)
  })));
}

function realPlayers() {
  const sourcePlayers = typeof subastaPlayers !== "undefined" && Array.isArray(subastaPlayers) ? subastaPlayers : [];
  const basePlayers = databasePlayers();
  const dbPlayers = sourcePlayers
    .filter((player) => {
      if (!player || !player.name || !player.club || player.club === "Leyenda") return false;
      return !["Idolo", "Ídolo", "Leyenda"].includes(player.rarity);
    })
    .filter((player) => !basePlayers.some((item) => playerKey(item.name) === playerKey(player.name)))
    .map((player) => ({
      name: player.name,
      club: normalizeClubName(currentClubOverrides[player.name] || player.club),
      pos: player.pos,
      rating: Number(player.rating) || 70,
      nat: player.nat || "",
      photo: playerPhotoFor(player.name)
    }));
  const manualPlayers = manualCareerPlayers
    .filter((player) => !basePlayers.some((item) => playerKey(item.name) === playerKey(player.name)))
    .filter((player) => !dbPlayers.some((item) => playerKey(item.name) === playerKey(player.name)))
    .map((player) => ({ ...player, club: normalizeClubName(player.club), photo: playerPhotoFor(player.name) }));
  return [...basePlayers, ...dbPlayers, ...manualPlayers];
}

const careerPlayers = realPlayers();

function leagueForClub(name) {
  const databaseTeam = databaseTeamByName(name);
  if (databaseTeam) return databaseTeam.league;
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
    const databaseTeam = databaseTeamByName(name);
    const finalTier = databaseTeam?.level || tier;
    return {
      name,
      tier: finalTier,
      league: databaseTeam?.league || leagueForClub(name),
      country: databaseTeam?.country || "",
      competitions: databaseTeam?.competitions || [],
      transfermarkt: databaseTeam?.transfermarkt || "",
      salary: databaseTeam?.salary || Math.round(10 + finalTier * 18 + maxRating * finalTier * 0.35),
      rep: databaseTeam?.rep || Math.max(45, Math.min(96, maxRating + finalTier * 2)),
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

const skillBranches = {
  core: { title: "Base profesional", desc: "Fisico, mentalidad y techo de carrera." },
  striker: { title: "9 de area", desc: "Desmarque, definicion y olfato goleador." },
  winger: { title: "Extremo desequilibrante", desc: "Arranque, regate y centros agresivos." },
  playmaker: { title: "Creador ofensivo", desc: "Vision, ultimo pase y pausa entre lineas." },
  midfielder: { title: "Motor del medio", desc: "Ritmo, pase seguro y cobertura total." },
  defender: { title: "Central dominante", desc: "Anticipacion, fuerza y liderazgo defensivo." },
  goalkeeper: { title: "Arquero moderno", desc: "Reflejos, salida y mando del area." }
};

const skillNodes = [
  { id: "core_burst", branch: "core", tier: 1, title: "Primeros metros", desc: "Arranque corto para ganar duelos cercanos.", cost: 1, attrs: { velocidad: 2, resistencia: 1 }, trait: "Velocista" },
  { id: "core_engine", branch: "core", tier: 2, title: "Motor semanal", desc: "Aguantas mejor entrenamientos y partidos seguidos.", cost: 2, attrs: { resistencia: 4 }, trait: "Inagotable", req: "core_burst" },
  { id: "core_leader", branch: "core", tier: 2, title: "Voz de vestuario", desc: "Mejora la confianza del entrenador y tu reputacion.", cost: 2, coach: 5, reputation: 4, trait: "Capitan", req: "core_burst" },
  { id: "core_versatile", branch: "core", tier: 3, title: "Rol alternativo", desc: "Desbloquea una posicion secundaria util para rotaciones.", cost: 2, secondary: true, trait: "Versatil", req: ["core_engine", "core_leader"] },
  { id: "core_worldclass", branch: "core", tier: 4, title: "Techo mundial", desc: "Sube tu potencial maximo de carrera.", cost: 3, potential: 3, trait: "Proyecto mundial", req: "core_versatile" },

  { id: "st_finishing", branch: "striker", tier: 1, positions: ["DC"], title: "Remate limpio", desc: "Define con menos preparacion dentro del area.", cost: 1, attrs: { definicion: 3, fuerza: 1 } },
  { id: "st_positioning", branch: "striker", tier: 2, positions: ["DC"], title: "Ataque al espacio", desc: "Mejor lectura para aparecer entre centrales.", cost: 2, attrs: { velocidad: 2, vision: 1 }, req: "st_finishing" },
  { id: "st_killer", branch: "striker", tier: 3, positions: ["DC"], title: "Instinto matador", desc: "Rasgo de goleador y pico fuerte de definicion.", cost: 2, attrs: { definicion: 4 }, trait: "Matador", req: "st_positioning" },
  { id: "st_complete", branch: "striker", tier: 4, positions: ["DC"], title: "Delantero total", desc: "Combina descarga, cuerpo y amenaza de gol.", cost: 3, attrs: { pase: 2, fuerza: 2, definicion: 2 }, trait: "9 Total", req: "st_killer" },

  { id: "wg_accel", branch: "winger", tier: 1, positions: ["EI"], title: "Cambio de ritmo", desc: "Primer control orientado y salida explosiva.", cost: 1, attrs: { velocidad: 3, regate: 1 } },
  { id: "wg_dribble", branch: "winger", tier: 2, positions: ["EI"], title: "Uno contra uno", desc: "Regate mas fino para romper laterales.", cost: 2, attrs: { regate: 4 }, req: "wg_accel" },
  { id: "wg_finalball", branch: "winger", tier: 3, positions: ["EI"], title: "Centro tenso", desc: "Ultimo pase desde banda y diagonal hacia dentro.", cost: 2, attrs: { pase: 2, vision: 2, definicion: 1 }, trait: "Extremo Fino", req: "wg_dribble" },
  { id: "wg_star", branch: "winger", tier: 4, positions: ["EI"], title: "Desequilibrio elite", desc: "Amenaza constante en carrera y conduccion.", cost: 3, attrs: { velocidad: 2, regate: 3 }, trait: "Imparable", req: "wg_finalball" },

  { id: "pm_touch", branch: "playmaker", tier: 1, positions: ["MCO"], title: "Primer toque", desc: "Control y pase corto en zonas cargadas.", cost: 1, attrs: { pase: 2, regate: 2 } },
  { id: "pm_scan", branch: "playmaker", tier: 2, positions: ["MCO"], title: "Vision 360", desc: "Detecta desmarques antes que la defensa.", cost: 2, attrs: { vision: 4, pase: 1 }, req: "pm_touch" },
  { id: "pm_thread", branch: "playmaker", tier: 3, positions: ["MCO"], title: "Pase filtrado", desc: "Rasgo creativo para asistencias de alto valor.", cost: 2, attrs: { pase: 3, vision: 2 }, trait: "Arquitecto", req: "pm_scan" },
  { id: "pm_genius", branch: "playmaker", tier: 4, positions: ["MCO"], title: "Cerebro ofensivo", desc: "Mejora total en conduccion, pase y lectura.", cost: 3, attrs: { vision: 3, pase: 2, regate: 2 }, trait: "Enganche Elite", req: "pm_thread" },

  { id: "mc_tempo", branch: "midfielder", tier: 1, positions: ["MC"], title: "Tempo seguro", desc: "Circulacion simple y resistencia de base.", cost: 1, attrs: { pase: 2, resistencia: 2 } },
  { id: "mc_box", branch: "midfielder", tier: 2, positions: ["MC"], title: "Area a area", desc: "Llegada, vuelta y presion sostenida.", cost: 2, attrs: { resistencia: 3, velocidad: 1, defensa: 1 }, req: "mc_tempo" },
  { id: "mc_anchor", branch: "midfielder", tier: 3, positions: ["MC"], title: "Ancla tactica", desc: "Corta transiciones y ordena el bloque.", cost: 2, attrs: { defensa: 3, vision: 2 }, trait: "Equilibrador", req: "mc_box" },
  { id: "mc_metronome", branch: "midfielder", tier: 4, positions: ["MC"], title: "Mediocentro total", desc: "Dominio de pase, resistencia y lectura.", cost: 3, attrs: { pase: 3, vision: 2, resistencia: 2 }, trait: "Metronomo", req: "mc_anchor" },

  { id: "df_marking", branch: "defender", tier: 1, positions: ["DFC"], title: "Marca agresiva", desc: "Mejor duelo fisico y posicion corporal.", cost: 1, attrs: { defensa: 3, fuerza: 1 } },
  { id: "df_anticipate", branch: "defender", tier: 2, positions: ["DFC"], title: "Lectura de corte", desc: "Anticipa pases interiores y coberturas.", cost: 2, attrs: { defensa: 3, vision: 2 }, trait: "Anticipador", req: "df_marking" },
  { id: "df_aerial", branch: "defender", tier: 3, positions: ["DFC"], title: "Jefe aereo", desc: "Domina centros, despejes y duelos largos.", cost: 2, attrs: { fuerza: 4, defensa: 1 }, trait: "Muralla Aerea", req: "df_anticipate" },
  { id: "df_leader", branch: "defender", tier: 4, positions: ["DFC"], title: "Lider de linea", desc: "Central completo con salida limpia.", cost: 3, attrs: { defensa: 3, pase: 2, fuerza: 2 }, trait: "Comandante", req: "df_aerial" },

  { id: "gk_reflex", branch: "goalkeeper", tier: 1, positions: ["POR"], title: "Reflejos bajos", desc: "Respuesta rapida en remates cercanos.", cost: 1, attrs: { defensa: 3, fuerza: 1 } },
  { id: "gk_area", branch: "goalkeeper", tier: 2, positions: ["POR"], title: "Mando del area", desc: "Mejor salida en centros y corners.", cost: 2, attrs: { defensa: 3, vision: 2 }, trait: "Dueño del Area", req: "gk_reflex" },
  { id: "gk_sweeper", branch: "goalkeeper", tier: 3, positions: ["POR"], title: "Arquero libero", desc: "Lectura para cortar pelotas largas y salir jugando.", cost: 2, attrs: { velocidad: 2, pase: 2, vision: 1 }, trait: "Arquero Libero", req: "gk_area" },
  { id: "gk_wall", branch: "goalkeeper", tier: 4, positions: ["POR"], title: "Ultima muralla", desc: "Pico alto de reflejos, mando y regularidad.", cost: 3, attrs: { defensa: 4, fuerza: 2 }, trait: "Portero Elite", req: "gk_sweeper" }
];

const achievementDefs = [
  { id: "first_match", title: "Debut profesional", desc: "Juega tu primer partido.", test: () => state.careerStats.matches >= 1, rewardXp: 25 },
  { id: "first_goal", title: "Primer grito", desc: "Marca tu primer gol.", test: () => state.careerStats.goals >= 1, rewardXp: 30 },
  { id: "ten_matches", title: "Ya sos parte", desc: "Juega 10 partidos.", test: () => state.careerStats.matches >= 10, rewardXp: 60 },
  { id: "social_star", title: "Figura viral", desc: "Alcanza 50.000 seguidores.", test: () => state.followers >= 50000, rewardXp: 70 },
  { id: "first_title", title: "Vuelta olimpica", desc: "Gana tu primer titulo.", test: () => state.careerStats.titles >= 1, rewardXp: 90 },
  { id: "national_team", title: "Seleccionado", desc: "Debuta con tu seleccion.", test: () => state.careerStats.nationalCaps >= 1, rewardXp: 80 }
];

let state = null;

const $ = (selector) => document.querySelector(selector);
const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const random = (min, max) => Math.floor(min + Math.random() * (max - min + 1));
const moneyText = (value) => `$${Math.max(0, Math.round(value))}K`;
const valueText = (value) => `$${(Math.max(0.1, value) / 1000).toFixed(1)}M`;
const todayKey = () => new Date().toISOString().slice(0, 10);

function xpToNext(level) {
  return 130 + level * 48 + Math.round(Math.pow(level, 1.18) * 10);
}

function addXp(amount, reason = "") {
  if (!state || amount <= 0) return;
  state.xp += Math.round(amount);
  let leveled = false;
  while (state.xp >= xpToNext(state.level)) {
    state.xp -= xpToNext(state.level);
    state.level += 1;
    state.skillPoints += 1;
    state.potential = clamp(state.potential + (state.level % 4 === 0 ? 1 : 0), 70, 99);
    leveled = true;
  }
  if (leveled) addNews(`Subiste a nivel ${state.level}. Ganaste 1 punto de habilidad.`);
  if (reason) updateMissionProgress(reason, amount);
}

function secondaryPositionFor(position) {
  const map = {
    DC: "EI",
    EI: "MCO",
    MCO: "MC",
    MC: "MCO",
    DFC: "MC",
    POR: "DFC"
  };
  return map[position] || "MC";
}

function archetypeLabel(position = state?.profile?.position) {
  const labels = {
    DC: "9 de area",
    EI: "Extremo desequilibrante",
    MCO: "Creador ofensivo",
    MC: "Motor del medio",
    DFC: "Central dominante",
    POR: "Arquero moderno"
  };
  return labels[position] || "Arquetipo profesional";
}

function visibleSkillNodes() {
  const position = state?.profile?.position;
  return skillNodes.filter((node) => !node.positions || node.positions.includes(position));
}

function skillRequirements(node) {
  if (!node.req) return [];
  return Array.isArray(node.req) ? node.req : [node.req];
}

function skillReqsMet(node) {
  return skillRequirements(node).every((req) => state.unlockedSkills.includes(req));
}

function skillBoostText(node) {
  const parts = Object.entries(node.attrs || {}).map(([attr, value]) => `${labelAttr(attr)} +${value}`);
  if (node.coach) parts.push(`Entrenador +${node.coach}`);
  if (node.reputation) parts.push(`Reputacion +${node.reputation}`);
  if (node.potential) parts.push(`Potencial +${node.potential}`);
  if (node.secondary) parts.push(`Posicion secundaria: ${secondaryPositionFor(state.profile.position)}`);
  if (node.trait) parts.push(`Rasgo: ${node.trait}`);
  return parts.join(" - ");
}

function skillReqText(node) {
  const requirements = skillRequirements(node);
  if (!requirements.length) return "";
  return requirements
    .map((req) => skillNodes.find((item) => item.id === req)?.title || req)
    .join(" + ");
}

function createDailyObjectives() {
  return [
    { id: "train", label: "Completar un entrenamiento", target: 1, value: 0, rewardXp: 30, rewardMoney: 8 },
    { id: "match", label: "Jugar un partido", target: 1, value: 0, rewardXp: 35, rewardMoney: 10 },
    { id: "social", label: "Responder una publicacion", target: 1, value: 0, rewardXp: 20, rewardMoney: 4 }
  ];
}

function createWeeklyObjectives() {
  return [
    { id: "weeklyTraining", label: "Entrenar 3 veces", target: 3, value: 0, rewardXp: 80, rewardMoney: 18 },
    { id: "weeklyRating", label: "Lograr media 7.2 esta semana", target: 72, value: 0, rewardXp: 90, rewardMoney: 24 },
    { id: "weeklyFans", label: "Ganar 2.500 seguidores", target: 2500, value: 0, rewardXp: 70, rewardMoney: 16 }
  ];
}

function createMatchObjectives(position = state?.profile?.position || "DC") {
  const isAttacker = ["DC", "EI", "MCO"].includes(position);
  const isMid = ["MC", "MCO", "EI"].includes(position);
  const isDef = ["DFC", "POR", "MC"].includes(position);
  const list = [{ id: "rating", label: "Conseguir media 7.0", target: 7, value: 0, type: "rating", rewardXp: 18 }];
  if (isAttacker) list.push({ id: "goalContribution", label: "Participar en un gol", target: 1, value: 0, rewardXp: 22 });
  if (isMid) list.push({ id: "keyPasses", label: "Dar 2 pases clave", target: 2, value: 0, rewardXp: 18 });
  if (isDef) list.push({ id: "defensiveActions", label: "Ganar 4 acciones defensivas", target: 4, value: 0, rewardXp: 18 });
  list.push({ id: "discipline", label: "Terminar sin tarjeta roja", target: 1, value: 0, rewardXp: 12 });
  return list;
}

function matchModeLabel(mode = state?.matchMode) {
  const labels = {
    simulate: "Simulacion",
    key: "Momentos clave",
    full: "Partido completo"
  };
  return labels[mode] || labels.simulate;
}

function ensureStateDefaults() {
  if (!state) return;
  state.level = Number(state.level) || 1;
  state.skillPoints = Number(state.skillPoints) || 0;
  state.potential = Number(state.potential) || clamp(78 + (clubs.find((club) => club.name === state.club)?.tier || 1) * 3, 78, 94);
  state.unlockedSkills = Array.isArray(state.unlockedSkills) ? state.unlockedSkills : [];
  state.secondaryPositions = Array.isArray(state.secondaryPositions) ? state.secondaryPositions : [];
  state.daily = state.daily || { date: todayKey(), rewardClaimed: false, objectives: createDailyObjectives() };
  state.weekly = state.weekly || { season: state.season, week: state.week, objectives: createWeeklyObjectives(), followerStart: state.followers };
  state.achievements = Array.isArray(state.achievements) ? state.achievements : [];
  if (!state.nextCompetition) state.nextCompetition = "Liga";
  if (!Array.isArray(state.traits)) state.traits = [];
  if (!Array.isArray(state.lifestyle)) state.lifestyle = [];
  if (!Array.isArray(state.trophies)) state.trophies = [];
  state.yellowCards = Number(state.yellowCards) || 0;
  state.suspensionWeeks = Number(state.suspensionWeeks) || 0;
  state.matchMode = state.matchMode || "simulate";
  state.currentMatchObjectives = Array.isArray(state.currentMatchObjectives) ? state.currentMatchObjectives : createMatchObjectives();
  state.lastMatchDetails = state.lastMatchDetails || null;
  state.trainedThisWeek = Boolean(state.trainedThisWeek);
  state.playedThisWeek = Boolean(state.playedThisWeek);
  state.restedThisWeek = Boolean(state.restedThisWeek);
  ensureStatsDefaults(state.seasonStats);
  ensureStatsDefaults(state.careerStats);
  ensureClubHistory();
  if (!state.contract) {
    const club = currentClubData();
    state.contract = createContract(club, state.contractYears || 2, state.salary || club.salary, "Contrato");
  }
  state.contractYears = Math.max(0, Number(state.contractYears) || Math.max(1, state.contract.endSeason - state.season));
  state.contract.releaseClause = Number(state.contract.releaseClause) || contractClauseFor({
    salary: state.salary,
    years: state.contractYears || 1,
    marketValue: state.marketValue,
    tier: currentClubData().tier
  });
  if (state.loan && state.loan.untilSeason <= state.season && state.week <= 1) returnFromLoan();
  if (state.daily.date !== todayKey()) {
    state.daily = { date: todayKey(), rewardClaimed: false, objectives: createDailyObjectives() };
  }
  if (state.weekly.season !== state.season || Math.floor((state.weekly.week - 1) / 4) !== Math.floor((state.week - 1) / 4)) {
    state.weekly = { season: state.season, week: state.week, objectives: createWeeklyObjectives(), followerStart: state.followers };
  }
}

function updateMissionProgress(type, amount = 1) {
  if (!state?.daily || !state?.weekly) return;
  const apply = (list, id, value) => {
    const objective = list.find((item) => item.id === id);
    if (objective) objective.value = clamp(objective.value + value, 0, objective.target);
  };
  if (type === "training") {
    apply(state.daily.objectives, "train", 1);
    apply(state.weekly.objectives, "weeklyTraining", 1);
  }
  if (type === "match") {
    apply(state.daily.objectives, "match", 1);
  }
  if (type === "social") {
    apply(state.daily.objectives, "social", 1);
  }
  if (type === "rating") {
    const objective = state.weekly.objectives.find((item) => item.id === "weeklyRating");
    if (objective) objective.value = Math.max(objective.value, Math.round(amount * 10));
  }
  if (type === "followers") {
    const objective = state.weekly.objectives.find((item) => item.id === "weeklyFans");
    if (objective) objective.value = clamp(state.followers - (state.weekly.followerStart || state.followers), 0, objective.target);
  }
}

function claimCompletedMissions() {
  for (const list of [state.daily?.objectives || [], state.weekly?.objectives || []]) {
    list.forEach((objective) => {
      if (objective.value >= objective.target && !objective.claimed) {
        objective.claimed = true;
        state.money += objective.rewardMoney || 0;
        addXp(objective.rewardXp || 0);
        addNews(`Objetivo completado: ${objective.label}.`);
      }
    });
  }
}

function checkAchievements() {
  achievementDefs.forEach((achievement) => {
    if (state.achievements.includes(achievement.id) || !achievement.test()) return;
    state.achievements.push(achievement.id);
    addXp(achievement.rewardXp || 0);
    addNews(`Logro desbloqueado: ${achievement.title}.`);
  });
}

function ensureStatsDefaults(stats) {
  const defaults = blankStats();
  Object.keys(defaults).forEach((key) => {
    if (stats[key] === undefined) stats[key] = defaults[key];
  });
}

function contractClauseFor({ salary, years, marketValue, tier }) {
  const base = Math.max(marketValue * 2.2, salary * years * 42);
  return Math.round(base * (1 + tier * 0.08));
}

function createContract(club, years, salary, type = "transfer") {
  return {
    club: club.name,
    league: club.league,
    type,
    startSeason: state?.season || 1,
    endSeason: (state?.season || 1) + years,
    years,
    salary,
    releaseClause: contractClauseFor({
      salary,
      years,
      marketValue: state?.marketValue || 420,
      tier: club.tier || 1
    }),
    signedAt: todayKey()
  };
}

function currentClubData(name = state?.club) {
  return clubs.find((club) => club.name === name) || {
    name: name || "Club",
    league: state?.league || "Liga Internacional",
    tier: 1,
    salary: state?.salary || 5,
    rep: state?.reputation || 40
  };
}

function ensureClubHistory() {
  if (!Array.isArray(state.clubHistory)) {
    state.clubHistory = [{
      club: state.club,
      league: state.league,
      fromSeason: 1,
      toSeason: null,
      type: "Contrato",
      apps: 0,
      goals: 0,
      assists: 0,
      titles: 0
    }];
  }
}

function closeCurrentClubHistory() {
  ensureClubHistory();
  const current = state.clubHistory[state.clubHistory.length - 1];
  if (current && !current.toSeason) {
    current.toSeason = state.season;
    current.apps = state.careerStats.matches;
    current.goals = state.careerStats.goals;
    current.assists = state.careerStats.assists;
    current.titles = state.careerStats.titles;
  }
}

function openClubHistory(club, type) {
  ensureClubHistory();
  state.clubHistory.push({
    club: club.name,
    league: club.league,
    fromSeason: state.season,
    toSeason: null,
    type,
    apps: 0,
    goals: 0,
    assists: 0,
    titles: 0
  });
}

function moveToClub(club, offer, type) {
  closeCurrentClubHistory();
  state.club = club.name;
  state.league = club.league;
  state.competitions = competitionsForClub(club.name);
  state.salary = offer.salary;
  state.contractYears = offer.years;
  state.contract = createContract(club, offer.years, offer.salary, type);
  state.contract.releaseClause = offer.releaseClause || state.contract.releaseClause;
  state.coach = clamp(38 + state.reputation / 3 + (type === "loan" ? 8 : 0), 0, 100);
  const fixture = nextFixture(state.club);
  state.nextOpponent = fixture.opponent;
  state.nextCompetition = fixture.competition;
  openClubHistory(club, type === "loan" ? "Prestamo" : "Traspaso");
}

function returnFromLoan() {
  if (!state.loan) return;
  const parent = currentClubData(state.loan.parentClub);
  closeCurrentClubHistory();
  state.club = parent.name;
  state.league = parent.league;
  state.competitions = competitionsForClub(parent.name);
  state.salary = state.loan.parentSalary;
  state.contractYears = Math.max(1, state.loan.parentYears - 1);
  state.contract = createContract(parent, state.contractYears, state.salary, "Regreso de prestamo");
  state.loan = null;
  const fixture = nextFixture(state.club);
  state.nextOpponent = fixture.opponent;
  state.nextCompetition = fixture.competition;
  openClubHistory(parent, "Regreso");
  addNews(`Volviste a ${parent.name} tras terminar el prestamo.`);
}

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
  const fixture = nextFixture(club.name);
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
    competitions: club.competitions || [],
    season: 1,
    week: 1,
    xp: 0,
    level: 1,
    skillPoints: 0,
    potential: clamp(78 + club.tier * 3, 80, 94),
    money: 20,
    followers: 1200,
    popularity: 48,
    reputation: 42,
    morale: 68,
    fatigue: 12,
    coach: 42,
    injuryWeeks: 0,
    suspensionWeeks: 0,
    yellowCards: 0,
    marketValue: 420,
    salary: club.salary,
    contractYears: 2,
    contract: createContract(club, 2, club.salary, "Contrato juvenil"),
    loan: null,
    attrs,
    traits: [styleBonuses[profile.style].trait],
    unlockedSkills: [],
    secondaryPositions: [],
    sponsors: [],
    lifestyle: [],
    offers: [],
    news: ["Tu carrera profesional acaba de empezar."],
    socialQueue: [randomSocial()],
    objectives: createObjectives(profile.position),
    seasonStats: blankStats(),
    careerStats: blankStats(),
    history: [],
    clubHistory: [{
      club: club.name,
      league: club.league,
      fromSeason: 1,
      toSeason: null,
      type: "Contrato",
      apps: 0,
      goals: 0,
      assists: 0,
      titles: 0
    }],
    trophies: [],
    achievements: [],
    daily: { date: todayKey(), rewardClaimed: false, objectives: createDailyObjectives() },
    weekly: { season: 1, week: 1, objectives: createWeeklyObjectives(), followerStart: 1200 },
    retired: false,
    trainedThisWeek: false,
    playedThisWeek: false,
    restedThisWeek: false,
    matchMode: "simulate",
    currentMatchObjectives: createMatchObjectives(profile.position),
    lastMatchDetails: null,
    nextOpponent: fixture.opponent,
    nextCompetition: fixture.competition
  };
}

function blankStats() {
  return {
    matches: 0,
    goals: 0,
    assists: 0,
    cleanSheets: 0,
    avgRatingTotal: 0,
    shots: 0,
    keyPasses: 0,
    tackles: 0,
    saves: 0,
    yellowCards: 0,
    redCards: 0,
    playerOfTheMatch: 0,
    awards: 0,
    titles: 0,
    nationalCaps: 0
  };
}

function randomSocial() {
  return JSON.parse(JSON.stringify(socialTemplates[random(0, socialTemplates.length - 1)]));
}

function randomLeagueOpponent(currentClubOverride = "") {
  const currentClub = currentClubOverride || state?.club || "";
  const current = clubs.find((club) => club.name === currentClub);
  const sameLeague = clubs.filter((club) => club.name !== currentClub && current?.league && club.league === current.league);
  if (sameLeague.length) return sameLeague[random(0, sameLeague.length - 1)].name;
  const pool = clubs.filter((club) => {
    if (club.name === currentClub) return false;
    if (!current) return true;
    return Math.abs(club.tier - current.tier) <= 2;
  });
  const source = pool.length ? pool : clubs.filter((club) => club.name !== currentClub);
  if (source.length) return source[random(0, source.length - 1)].name;
  return opponents[random(0, opponents.length - 1)];
}

function randomCompetitionFixture(currentClubOverride = "") {
  const currentClub = currentClubOverride || state?.club || "";
  const competitions = competitionEntriesForClub(currentClub);
  if (!competitions.length) return null;
  const competition = competitions[random(0, competitions.length - 1)];
  const normalizedCurrent = normalizeClubName(currentClub);
  const candidates = (competition.teams || [])
    .map((team) => normalizeClubName(team.name))
    .filter((name, index, list) => name && name !== normalizedCurrent && list.indexOf(name) === index)
    .filter((name) => clubs.some((club) => normalizeClubName(club.name) === name));
  if (!candidates.length) return null;
  return {
    opponent: candidates[random(0, candidates.length - 1)],
    competition: competition.name
  };
}

function nextFixture(currentClubOverride = "") {
  const shouldPlayCup = state
    ? [6, 12, 18, 24, 30, 36].includes(state.week) || Math.random() < 0.12
    : false;
  const cupFixture = shouldPlayCup ? randomCompetitionFixture(currentClubOverride) : null;
  if (cupFixture) return cupFixture;
  return {
    opponent: randomLeagueOpponent(currentClubOverride),
    competition: "Liga"
  };
}

function randomOpponent(currentClubOverride = "") {
  return nextFixture(currentClubOverride).opponent;
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

function hasMandatoryMatchPending() {
  if (!state || state.retired || state.playedThisWeek) return false;
  return state.injuryWeeks <= 0 && state.suspensionWeeks <= 0;
}

function pulseElement(selector, className = "career-pulse") {
  const node = document.querySelector(selector);
  if (!node) return;
  node.classList.remove(className);
  void node.offsetWidth;
  node.classList.add(className);
}

function animateCalendarAdvance(fromSeason, fromWeek, toSeason, toWeek) {
  const old = document.querySelector(".calendar-advance");
  if (old) old.remove();
  const overlay = document.createElement("div");
  overlay.className = "calendar-advance";
  const days = [
    ["Lun", "Entreno"],
    ["Mar", "Analisis"],
    ["Mie", "Ritmo"],
    ["Jue", "Plantel"],
    ["Vie", "Viaje"],
    ["Sab", "Partido"],
    ["Dom", "Recuperacion"]
  ];
  overlay.innerHTML = `
    <div class="calendar-card">
      <p class="eyebrow">Calendario</p>
      <h2>Temporada ${fromSeason} - Semana ${fromWeek}</h2>
      <div class="calendar-track">
        ${days.map(([day, label]) => `<span><strong>${day}</strong><small>${label}</small></span>`).join("")}
      </div>
      <div class="calendar-progress"><span></span></div>
      <p class="calendar-next">Avanza a temporada ${toSeason}, semana ${toWeek}</p>
    </div>
  `;
  document.body.appendChild(overlay);
  setTimeout(() => overlay.classList.add("leaving"), 2050);
  setTimeout(() => overlay.remove(), 2500);
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
  ensureStateDefaults();
  syncObjectives();
  claimCompletedMissions();
  checkAchievements();
  const profile = positionProfiles[state.profile.position];
  const ov = overall();
  if (!Array.isArray(state.competitions)) {
    state.competitions = competitionsForClub(state.club);
  }
  const competitionText = state.competitions.length ? ` - ${state.competitions.slice(0, 2).join(", ")}` : "";
  $("#careerName").textContent = state.profile.name;
  $("#careerSub").textContent = `${state.club} - ${state.league}${competitionText} - ${state.profile.position} - ${state.profile.age} anios`;
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
  $("#contractLabel").textContent = state.loan
    ? `Cedido por ${state.loan.parentClub}`
    : `${state.contractYears} anios - clausula ${valueText(state.contract.releaseClause)}`;
  $("#marketValue").textContent = valueText(state.marketValue);
  $("#salaryValue").textContent = moneyText(state.salary);
  $("#moneyValue").textContent = moneyText(state.money);
  $("#followersValue").textContent = compact(state.followers);
  $("#levelValue").textContent = state.level;
  $("#potentialValue").textContent = state.potential;
  $("#popularityValue").textContent = state.popularity;
  $("#reputationValue").textContent = state.reputation;
  $("#nextOpponent").textContent = state.nextOpponent;
  const matchCompetition = state.nextCompetition && state.nextCompetition !== "Liga" ? state.nextCompetition : state.league;
  const matchPending = hasMandatoryMatchPending();
  const statusText = state.injuryWeeks
    ? `Lesionado: ${state.injuryWeeks} semanas`
    : state.suspensionWeeks
      ? `Suspendido: ${state.suspensionWeeks} fecha${state.suspensionWeeks > 1 ? "s" : ""}`
      : `${matchCompetition} - fecha ${state.week} - ${state.playedThisWeek ? "partido jugado" : "partido pendiente"}`;
  $("#matchContext").textContent = statusText;
  $("#matchMode").value = state.matchMode;
  renderRivalStars();
  renderMatchObjectives();
  renderMatchStatsPanel();
  $("#playMatchBtn").disabled = state.playedThisWeek || state.injuryWeeks > 0 || state.suspensionWeeks > 0 || state.retired;
  $("#playMatchBtn").textContent = state.matchMode === "full"
    ? "Jugar partido completo"
    : state.matchMode === "key"
      ? "Jugar momentos clave"
      : "Simular partido";
  $("#restBtn").disabled = state.restedThisWeek || state.retired;
  $("#restBtn").textContent = state.restedThisWeek ? "Descanso usado" : "Descansar";
  $("#advanceWeekBtn").disabled = state.retired || matchPending;
  $("#advanceWeekBtn").textContent = matchPending ? "Juega el partido para avanzar" : "Avanzar semana";
  $("#advanceWeekBtn").title = matchPending ? "Tienes que jugar el partido de esta semana antes de avanzar." : "";
  $("#trainingHint").textContent = state.trainedThisWeek ? "Ya entrenaste esta semana." : "Elegir una sesion consume energia.";
  updateBars();
  renderObjectives();
  renderAttributes();
  renderProgress();
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

function renderProgress() {
  const nextXp = xpToNext(state.level);
  const xpPercent = clamp((state.xp / nextXp) * 100, 0, 100);
  $("#progressSummary").innerHTML = `
    Nivel ${state.level} - ${state.xp}/${nextXp} XP - ${state.skillPoints} puntos disponibles
    <div class="meter xp-meter"><span style="width:${xpPercent}%"></span></div>
    <span class="subtle-line">Arquetipo activo: ${archetypeLabel()} - Potencial ${state.potential} - Rasgos: ${state.traits.join(", ") || "Sin rasgos"}</span>
  `;

  const branchOrder = ["core", "striker", "winger", "playmaker", "midfielder", "defender", "goalkeeper"];
  const nodesByBranch = visibleSkillNodes().reduce((groups, node) => {
    groups[node.branch] = groups[node.branch] || [];
    groups[node.branch].push(node);
    return groups;
  }, {});
  $("#skillTree").innerHTML = branchOrder
    .filter((branchId) => nodesByBranch[branchId]?.length)
    .map((branchId) => {
      const branch = skillBranches[branchId];
      const nodes = nodesByBranch[branchId].sort((a, b) => a.tier - b.tier);
      return `<section class="skill-branch skill-branch-${branchId}">
        <header class="skill-branch-head">
          <div>
            <span>${branchId === "core" ? "Base" : "Arquetipo"}</span>
            <h3>${branch.title}</h3>
          </div>
          <strong>${nodes.filter((node) => state.unlockedSkills.includes(node.id)).length}/${nodes.length}</strong>
        </header>
        <p>${branch.desc}</p>
        <div class="skill-lane">
          ${nodes.map((node) => {
            const unlocked = state.unlockedSkills.includes(node.id);
            const lockedByReq = !skillReqsMet(node);
            const affordable = state.skillPoints >= node.cost;
            const disabled = unlocked || lockedByReq || !affordable || state.retired;
            const reqText = lockedByReq ? `Requiere ${skillReqText(node)}` : `${node.cost} punto${node.cost > 1 ? "s" : ""}`;
            const status = unlocked ? "Activo" : lockedByReq ? "Bloqueado" : affordable ? "Disponible" : "Sin puntos";
            return `<article class="skill-node ${unlocked ? "unlocked" : ""} ${lockedByReq ? "locked" : ""} ${affordable && !unlocked && !lockedByReq ? "available" : ""}">
              <header>
                <span>Nivel ${node.tier}</span>
                <strong>${status}</strong>
              </header>
              <h3>${node.title}</h3>
              <p>${node.desc}</p>
              <small>${skillBoostText(node)}</small>
              <button data-skill="${node.id}" ${disabled ? "disabled" : ""}>${unlocked ? "Desbloqueado" : reqText}</button>
            </article>`;
          }).join("")}
        </div>
      </section>`;
    }).join("");

  const missionCard = (objective, scope) => {
    const percent = clamp((objective.value / objective.target) * 100, 0, 100);
    const reward = `XP +${objective.rewardXp} - ${moneyText(objective.rewardMoney)}`;
    return `<div class="objective ${objective.claimed ? "claimed" : ""}">
      <strong>${scope}: ${objective.label}</strong>
      <div class="meter"><span style="width:${percent}%"></span></div>
      <p>${objective.value}/${objective.target} - ${objective.claimed ? "Cobrado" : reward}</p>
    </div>`;
  };
  $("#dailyWeeklyList").innerHTML = [
    ...state.daily.objectives.map((objective) => missionCard(objective, "Diario")),
    ...state.weekly.objectives.map((objective) => missionCard(objective, "Semanal"))
  ].join("");

  $("#achievementsList").innerHTML = achievementDefs.map((achievement) => {
    const unlocked = state.achievements.includes(achievement.id);
    return `<div class="achievement ${unlocked ? "unlocked" : ""}">
      <strong>${achievement.title}</strong>
      <p>${achievement.desc}</p>
      <span>${unlocked ? "Desbloqueado" : `XP +${achievement.rewardXp}`}</span>
    </div>`;
  }).join("");

  const dailyRewardBtn = $("#dailyRewardBtn");
  dailyRewardBtn.disabled = state.daily.rewardClaimed || state.retired;
  dailyRewardBtn.textContent = state.daily.rewardClaimed ? "Recompensa cobrada" : "Recompensa diaria";
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

function renderMatchObjectives() {
  if (!state.currentMatchObjectives?.length) state.currentMatchObjectives = createMatchObjectives();
  $("#matchObjectives").innerHTML = state.currentMatchObjectives.map((objective) => {
    const percent = objective.type === "rating"
      ? clamp((objective.value / objective.target) * 100, 0, 100)
      : clamp((objective.value / objective.target) * 100, 0, 100);
    const value = objective.type === "rating" ? Number(objective.value || 0).toFixed(1) : objective.value;
    return `<div class="match-objective ${objective.completed ? "complete" : ""}">
      <strong>${objective.label}</strong>
      <span>${value}/${objective.target}</span>
      <div class="meter"><span style="width:${percent}%"></span></div>
    </div>`;
  }).join("");
}

function renderMatchStatsPanel() {
  if (!state.lastMatchDetails) {
    $("#matchStatsPanel").innerHTML = `<div class="stat-card"><span>Ultimo partido</span><strong>Sin datos</strong></div>`;
    return;
  }
  const details = state.lastMatchDetails;
  $("#matchStatsPanel").innerHTML = [
    ["Modo", matchModeLabel(details.mode)],
    ["Media", details.rating],
    ["Tiros", details.shots],
    ["Pases clave", details.keyPasses],
    ["Entradas", details.tackles],
    ["Atajadas", details.saves],
    ["Tarjetas", `${details.yellowCard ? "A" : "0"}${details.redCard ? " / R" : ""}`]
  ].map(([label, value]) => `<div class="stat-card"><span>${label}</span><strong>${value}</strong></div>`).join("");
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
  const contractType = state.loan ? `Prestado desde ${state.loan.parentClub}` : state.contract.type;
  $("#contractStatus").innerHTML = `
    <div>
      <span>Contrato actual</span>
      <strong>${state.club}</strong>
      <p>${contractType} - ${state.contractYears} anios restantes</p>
    </div>
    <div>
      <span>Salario semanal</span>
      <strong>${moneyText(state.salary)}</strong>
      <p>Prima de renovacion segun rendimiento</p>
    </div>
    <div>
      <span>Clausula</span>
      <strong>${valueText(state.contract.releaseClause)}</strong>
      <p>Valor de mercado ${valueText(state.marketValue)}</p>
    </div>
  `;

  $("#offersList").innerHTML = state.offers.length
    ? state.offers.map((offer, index) => {
      const logo = clubLogoFor(offer.club);
      const typeLabel = offer.type === "loan" ? "Prestamo" : offer.type === "renewal" ? "Renovacion" : "Traspaso";
      const clauseText = offer.type === "loan" ? `duracion ${offer.years} temporada` : `clausula ${valueText(offer.releaseClause)}`;
      return `<div class="offer-card">
        <header>
          <h3>${logo ? `<img src="${logo}" alt="Escudo de ${offer.club}" loading="lazy" />` : ""}${offer.club}</h3>
          <strong>${moneyText(offer.salary)}/sem</strong>
        </header>
        <p>${typeLabel} - ${offer.league} - contrato ${offer.years} anios - prima ${moneyText(offer.bonus)} - ${clauseText}</p>
        ${offer.message ? `<p class="offer-note">${offer.message}</p>` : ""}
        <div class="offer-actions">
          <button data-offer="${index}" class="primary">Aceptar</button>
          <button data-negotiate="${index}" ${offer.locked || offer.type === "loan" ? "disabled" : ""}>Contraoferta</button>
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
    ["Tiros", stats.shots],
    ["Pases clave", stats.keyPasses],
    ["Entradas", stats.tackles],
    ["Atajadas", stats.saves],
    ["Tarjetas", `${stats.yellowCards}/${stats.redCards}`],
    ["MVP", stats.playerOfTheMatch],
    ["Titulos", stats.titles],
    ["Premios", stats.awards],
    ["Seleccion", stats.nationalCaps],
    ["Logros", state.achievements.length]
  ].map(([label, value]) => `<div class="stat-card"><span>${label}</span><strong>${value}</strong></div>`).join("");

  ensureClubHistory();
  $("#clubHistoryList").innerHTML = state.clubHistory.slice().reverse().map((item, index) => {
    const isCurrent = index === 0 && !item.toSeason;
    const range = item.toSeason ? `T${item.fromSeason} - T${item.toSeason}` : `Desde T${item.fromSeason}`;
    const logo = clubLogoFor(item.club);
    return `<div class="history-card">
      <header>
        <h3>${logo ? `<img src="${logo}" alt="Escudo de ${item.club}" loading="lazy" />` : ""}${item.club}</h3>
        <strong>${isCurrent ? "Actual" : item.type}</strong>
      </header>
      <p>${item.league} - ${range} - ${item.type}</p>
    </div>`;
  }).join("");

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
    state.attrs[attr] = clamp(state.attrs[attr] + value, 1, 99);
  });
  const trainerBonus = state.lifestyle.includes("trainer") ? 5 : 0;
  addXp(session.xp + trainerBonus, "training");
  state.fatigue = clamp(state.fatigue + session.fatigue, 0, 100);
  state.morale = clamp(state.morale + (session.id === "recovery" ? 2 : 0), 0, 100);
  state.trainedThisWeek = true;
  maybeInjury("training");
  addNews(`Entrenamiento completado: ${session.title}.`);
  render();
  pulseElement("#tab-training", "panel-flash");
}

function maybeInjury(source) {
  const risk = state.fatigue > 85 ? 0.22 : state.fatigue > 70 ? 0.11 : 0.03;
  if (Math.random() < risk) {
    state.injuryWeeks = random(2, source === "match" ? 7 : 4);
    state.morale = clamp(state.morale - 12, 0, 100);
    addNews(`Lesion: estaras fuera ${state.injuryWeeks} semanas.`);
  }
}

function completeMatchObjectives(details) {
  let reward = 0;
  state.currentMatchObjectives.forEach((objective) => {
    if (objective.id === "rating") objective.value = details.rating;
    if (objective.id === "goalContribution") objective.value = details.goals + details.assists;
    if (objective.id === "keyPasses") objective.value = details.keyPasses;
    if (objective.id === "defensiveActions") objective.value = details.tackles + details.saves;
    if (objective.id === "discipline") objective.value = details.redCard ? 0 : 1;
    const completed = objective.value >= objective.target;
    if (completed && !objective.completed) {
      objective.completed = true;
      reward += objective.rewardXp || 0;
    }
  });
  if (reward) {
    addXp(reward);
    addNews(`Objetivos de partido completados: XP +${reward}.`);
  }
}

function cardOutcome(mode, isDef) {
  const modeRisk = mode === "full" ? 0.05 : mode === "key" ? 0.03 : 0;
  const yellowChance = clamp(0.08 + (isDef ? 0.06 : 0) + state.fatigue / 520 + modeRisk, 0.04, 0.34);
  const redChance = clamp(0.012 + (isDef ? 0.012 : 0) + state.fatigue / 1800 + (mode === "full" ? 0.01 : 0), 0.006, 0.09);
  const redCard = Math.random() < redChance;
  return {
    yellowCard: !redCard && Math.random() < yellowChance,
    redCard
  };
}

function playMatch() {
  if (state.playedThisWeek || state.injuryWeeks > 0 || state.suspensionWeeks > 0 || state.retired) return;
  const ov = overall();
  const mode = state.matchMode || "simulate";
  const modeBoost = mode === "full" ? 0.35 : mode === "key" ? 0.18 : 0;
  const modeFatigue = mode === "full" ? 30 : mode === "key" ? 22 : 16;
  const modeXp = mode === "full" ? 1.35 : mode === "key" ? 1.18 : 1;
  const form = (state.morale - state.fatigue) / 22 + (state.coach - 50) / 35;
  const rating = clamp(Number((5.4 + ov / 22 + form + modeBoost + Math.random() * 1.4).toFixed(1)), 4.0, 10.0);
  const pos = state.profile.position;
  const isAttacker = ["DC", "EI", "MCO"].includes(pos);
  const isMid = ["MC", "MCO"].includes(pos);
  const isDef = ["DFC", "POR"].includes(pos);
  const finisherBoost = state.traits.includes("Matador") ? 0.05 : 0;
  const creatorBoost = state.traits.includes("Arquitecto") ? 0.05 : 0;
  const defenderBoost = state.traits.includes("Anticipador") ? 0.06 : 0;
  const goals = isAttacker ? chanceCount((ov + state.attrs.definicion + rating * 8) / 220 + finisherBoost) : chanceCount((ov + rating * 7) / 420);
  const assists = isMid || isAttacker ? chanceCount((ov + state.attrs.pase + state.attrs.vision + rating * 7) / 260 + creatorBoost) : chanceCount((ov + rating * 6) / 520);
  const cleanSheet = isDef && Math.random() < clamp((ov + state.attrs.defensa + state.coach) / 320 + defenderBoost, 0.12, 0.78) ? 1 : 0;
  const teamGoals = clamp(goals + assists + random(0, 2), 0, 5);
  const rivalGoals = cleanSheet ? 0 : random(0, 4);
  const won = teamGoals > rivalGoals;
  const drew = teamGoals === rivalGoals;
  const rivalStar = topPlayersForClub(state.nextOpponent)[0];
  const duelText = rivalStar ? ` Duelo destacado contra ${rivalStar.name}.` : "";
  const shots = isAttacker ? random(goals, goals + 4 + (mode === "full" ? 2 : 0)) : random(0, 2);
  const keyPasses = isMid || isAttacker ? random(assists, assists + 3 + (mode !== "simulate" ? 1 : 0)) : random(0, 1);
  const tackles = isDef || pos === "MC" ? random(2, 7 + (mode === "full" ? 2 : 0)) : random(0, 3);
  const saves = pos === "POR" ? random(cleanSheet ? 2 : 0, cleanSheet ? 7 : 5) : 0;
  const passAccuracy = clamp(Math.round(64 + rating * 3 + state.attrs.pase / 4 + random(-5, 6)), 52, 96);
  const { yellowCard, redCard } = cardOutcome(mode, isDef || pos === "MC");
  const details = { mode, rating, goals, assists, cleanSheet, shots, keyPasses, tackles, saves, passAccuracy, yellowCard, redCard };
  updateStats(details);
  state.lastMatchDetails = details;
  completeMatchObjectives(details);
  state.fatigue = clamp(state.fatigue + random(modeFatigue - 4, modeFatigue + 5), 0, 100);
  state.morale = clamp(state.morale + (won ? 8 : drew ? 1 : -7) + goals * 2 + assists, 0, 100);
  state.coach = clamp(state.coach + Math.round((rating - 6.6) * 3), 0, 100);
  state.popularity = clamp(state.popularity + goals * 3 + assists * 2 + (won ? 2 : -1), 0, 100);
  state.reputation = clamp(state.reputation + Math.max(0, Math.round(rating - 6.2)), 0, 100);
  const followerGain = Math.round(180 + rating * 80 + goals * 500 + assists * 260 + (state.lifestyle.includes("styleBrand") ? 260 : 0));
  state.followers += followerGain;
  state.money += state.salary + sponsorBonus(goals, assists);
  state.marketValue = Math.round(state.marketValue * (1 + (rating - 6) / 160) + goals * 18 + assists * 10);
  state.playedThisWeek = true;
  if (yellowCard) state.yellowCards += 1;
  if (redCard) {
    state.suspensionWeeks = Math.max(state.suspensionWeeks, random(1, 3));
    state.yellowCards = 0;
  } else if (state.yellowCards >= 5) {
    state.suspensionWeeks = Math.max(state.suspensionWeeks, 1);
    state.yellowCards = 0;
  }
  addXp(Math.round((18 + rating * 4 + goals * 8 + assists * 5 + (won ? 8 : 0)) * modeXp), "match");
  updateMissionProgress("rating", rating);
  updateMissionProgress("followers", followerGain);
  maybeInjury("match");
  const matchCompetition = state.nextCompetition && state.nextCompetition !== "Liga" ? state.nextCompetition : state.league;
  $("#matchResult").innerHTML = `<h3>${state.club} ${teamGoals} - ${rivalGoals} ${state.nextOpponent}</h3>
    <p>${matchCompetition} - ${matchModeLabel(mode)}</p>
    <p>Media ${rating}, ${goals} goles, ${assists} asistencias, ${shots} tiros, ${keyPasses} pases clave, ${tackles} entradas${saves ? `, ${saves} atajadas` : ""}${cleanSheet ? ", valla invicta" : ""}.${duelText}</p>
    <p>${yellowCard ? "Tarjeta amarilla." : ""}${redCard ? " Tarjeta roja y suspension." : ""}</p>`;
  addNews(`${matchCompetition}: ${state.club} ${teamGoals}-${rivalGoals} ${state.nextOpponent}. Media ${rating}.${redCard ? " Expulsado." : ""}${duelText}`);
  if (rating >= 8.6) maybeAward("Jugador de la semana");
  maybeNationalCall(rating);
  render();
  pulseElement("#matchResult", "match-result-pop");
  showToast("Partido jugado. Ya puedes avanzar la semana.");
}

function chanceCount(probability) {
  let count = 0;
  if (Math.random() < probability) count += 1;
  if (Math.random() < probability * 0.28) count += 1;
  return count;
}

function updateStats({ rating, goals, assists, cleanSheet, shots = 0, keyPasses = 0, tackles = 0, saves = 0, yellowCard = false, redCard = false }) {
  for (const stats of [state.seasonStats, state.careerStats]) {
    ensureStatsDefaults(stats);
    stats.matches += 1;
    stats.goals += goals;
    stats.assists += assists;
    stats.cleanSheets += cleanSheet;
    stats.avgRatingTotal += rating;
    stats.shots += shots;
    stats.keyPasses += keyPasses;
    stats.tackles += tackles;
    stats.saves += saves;
    stats.yellowCards += yellowCard ? 1 : 0;
    stats.redCards += redCard ? 1 : 0;
    stats.playerOfTheMatch += rating >= 8.6 ? 1 : 0;
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
  if (state.retired || state.restedThisWeek) return;
  const recoveryBonus = state.lifestyle.includes("recoveryRoom") ? 12 : 0;
  state.fatigue = clamp(state.fatigue - 24 - recoveryBonus, 0, 100);
  state.morale = clamp(state.morale + 3, 0, 100);
  if (state.injuryWeeks > 0) state.injuryWeeks -= 1;
  state.restedThisWeek = true;
  addNews("Sesion de recuperacion completada. La semana sigue activa.");
  render();
  pulseElement("#tab-match", "panel-flash");
  showToast("Recuperaste fisico, pero el calendario no avanzo.");
}

function advanceWeek() {
  if (state.retired) return;
  if (hasMandatoryMatchPending()) {
    showToast("Primero juega el partido pendiente de esta semana.");
    pulseElement("#tab-match", "panel-flash");
    return;
  }
  const fromSeason = state.season;
  const fromWeek = state.week;
  state.week += 1;
  state.money += state.salary;
  state.trainedThisWeek = false;
  state.playedThisWeek = false;
  state.restedThisWeek = false;
  const fixture = nextFixture(state.club);
  state.nextOpponent = fixture.opponent;
  state.nextCompetition = fixture.competition;
  if (state.injuryWeeks > 0) state.injuryWeeks -= 1;
  if (state.suspensionWeeks > 0) state.suspensionWeeks -= 1;
  state.currentMatchObjectives = createMatchObjectives();
  state.fatigue = clamp(state.fatigue - 8 - (state.traits.includes("Inagotable") ? 5 : 0), 0, 100);
  if (Math.random() < 0.45) state.socialQueue = [randomSocial()];
  if ([10, 20, 30].includes(state.week) || Math.random() < 0.08) generateOffers();
  if (state.week > 38) endSeason();
  render();
  animateCalendarAdvance(fromSeason, fromWeek, state.season, state.week);
  pulseElement(".career-header", "calendar-flash");
}

function endSeason() {
  syncObjectives();
  const completed = state.objectives.filter((objective) => objective.value >= objective.target).length;
  const total = state.objectives.length;
  const avgRating = averageRating();
  const titleChance = clamp((overall() + state.coach + completed * 10) / 260, 0.05, 0.72);
  const wonTitle = Math.random() < titleChance;
  const wonCups = (state.competitions || []).filter(() => Math.random() < titleChance * 0.38);
  if (wonTitle) {
    state.seasonStats.titles += 1;
    state.careerStats.titles += 1;
    state.trophies.push(`${state.league} T${state.season}`);
  }
  wonCups.forEach((competition) => {
    state.seasonStats.titles += 1;
    state.careerStats.titles += 1;
    state.trophies.push(`${competition} T${state.season}`);
  });
  const titleNote = [wonTitle ? state.league : "", ...wonCups].filter(Boolean).join(", ");
  state.history.push({
    season: state.season,
    club: state.club,
    matches: state.seasonStats.matches,
    goals: state.seasonStats.goals,
    assists: state.seasonStats.assists,
    avgRating,
    note: `${completed}/${total} objetivos, ${state.seasonStats.keyPasses} pases clave, ${state.seasonStats.tackles} entradas${titleNote ? `, campeon de ${titleNote}` : ""}`
  });
  state.money += completed * 35 + (wonTitle ? 120 : 0) + wonCups.length * 160;
  state.reputation = clamp(state.reputation + completed * 3 + (wonTitle ? 8 : 0) + wonCups.length * 10, 0, 100);
  state.popularity = clamp(state.popularity + completed * 2 + (wonTitle ? 10 : 0) + wonCups.length * 12, 0, 100);
  state.profile.age += 1;
  state.season += 1;
  state.week = 1;
  state.contractYears -= 1;
  state.seasonStats = blankStats();
  state.objectives = createObjectives(state.profile.position);
  state.offers = [];
  if (state.contractYears <= 0) generateOffers(true);
  addNews(`Fin de temporada: ${completed}/${total} objetivos cumplidos${titleNote ? ` y titulo ganado: ${titleNote}` : ""}.`);
}

function generateOffers(force = false) {
  const ov = overall();
  const current = clubs.find((club) => club.name === state.club) || clubs[0];
  const minRep = force ? 0 : state.reputation;
  const pool = clubs.filter((club) => club.name !== state.club && club.rep <= minRep + ov * 0.8 && club.tier <= current.tier + 2);
  const choices = (pool.length ? pool : clubs.filter((club) => club.name !== state.club)).sort(() => Math.random() - 0.5).slice(0, force ? 3 : random(1, 3));
  const transferOffers = choices.map((club) => makeClubOffer(club, "transfer"));
  const loanPool = clubs
    .filter((club) => club.name !== state.club && club.tier <= current.tier && club.tier >= Math.max(1, current.tier - 2))
    .sort(() => Math.random() - 0.5)
    .slice(0, state.profile.age <= 23 || ov < 72 ? 2 : 0)
    .map((club) => makeClubOffer(club, "loan"));
  state.offers = [...transferOffers, ...loanPool];
  if (state.offers.length) addNews("Tu agente recibio nuevas ofertas de clubes.");
}

function makeClubOffer(club, type = "transfer") {
  const ov = overall();
  const years = type === "loan" ? 1 : random(2, 5);
  const salary = Math.round((club.salary + ov * club.tier * 0.45 + state.reputation / 4) * (type === "loan" ? 0.72 : 1));
  return {
    club: club.name,
    league: club.league,
    type,
    salary,
    years,
    bonus: type === "loan" ? 0 : Math.round(club.salary * random(6, 16)),
    releaseClause: contractClauseFor({ salary, years, marketValue: state.marketValue, tier: club.tier }),
    negotiations: 0,
    locked: false,
    message: type === "loan" ? "El club busca darte minutos y continuidad." : ""
  };
}

function acceptOffer(index) {
  const offer = state.offers[index];
  if (!offer) return;
  const club = currentClubData(offer.club);
  if (offer.type === "renewal") {
    state.salary = offer.salary;
    state.contractYears = offer.years;
    state.contract = createContract(club, offer.years, offer.salary, "Renovacion");
    state.contract.releaseClause = offer.releaseClause;
    state.money += offer.bonus;
    state.coach = clamp(state.coach + 4, 0, 100);
    addNews(`Renovaste con ${offer.club}. Salario: ${moneyText(offer.salary)} por semana.`);
  } else if (offer.type === "loan") {
    state.loan = {
      parentClub: state.club,
      parentLeague: state.league,
      parentSalary: state.salary,
      parentYears: state.contractYears,
      untilSeason: state.season + 1
    };
    moveToClub(club, offer, "loan");
    addNews(`Te vas cedido a ${offer.club} por una temporada.`);
  } else {
    moveToClub(club, offer, "transfer");
    state.money += offer.bonus;
    addNews(`Fichaste por ${offer.club}. Nuevo salario: ${moneyText(offer.salary)} por semana.`);
  }
  state.offers = [];
  render();
}

function rejectOffer(index) {
  state.offers.splice(index, 1);
  state.reputation = clamp(state.reputation + 1, 0, 100);
  render();
}

function requestRenewal() {
  if (state.loan) {
    addNews("No puedes renovar mientras estas cedido. Primero termina el prestamo.");
    render();
    return;
  }
  const club = currentClubData();
  const ov = overall();
  const renewalScore = ov + state.coach * 0.45 + state.reputation * 0.35 + (state.contractYears <= 1 ? 18 : 0);
  if (renewalScore < 96) {
    addNews(`${club.name} prefiere esperar antes de ofrecer una renovacion.`);
    state.coach = clamp(state.coach - 2, 0, 100);
    render();
    return;
  }
  const years = random(2, 5);
  const salary = Math.round(Math.max(state.salary + 4, state.salary * (1.12 + ov / 360)));
  const offer = {
    club: club.name,
    league: club.league,
    type: "renewal",
    salary,
    years,
    bonus: Math.round(salary * random(5, 12)),
    releaseClause: contractClauseFor({ salary, years, marketValue: state.marketValue, tier: club.tier }),
    negotiations: 0,
    locked: false,
    message: "Tu club quiere asegurar tu continuidad."
  };
  state.offers = [offer, ...state.offers.filter((item) => item.type !== "renewal")];
  addNews(`${club.name} envio una propuesta de renovacion.`);
  render();
}

function negotiateOffer(index) {
  const offer = state.offers[index];
  if (!offer || offer.locked || offer.type === "loan") return;
  const club = currentClubData(offer.club);
  const chance = clamp((state.reputation + state.coach + overall()) / 260 - offer.negotiations * 0.18, 0.18, 0.82);
  offer.negotiations += 1;
  if (Math.random() > chance) {
    offer.locked = true;
    offer.message = "El club rechazo mejorar la propuesta. Puedes aceptar o rechazar.";
    state.reputation = clamp(state.reputation - 1, 0, 100);
    addNews(`${offer.club} no acepto la contraoferta.`);
    render();
    return;
  }
  offer.salary = Math.round(offer.salary * 1.12 + 3);
  offer.bonus = Math.round(offer.bonus * 1.18 + club.salary);
  offer.releaseClause = Math.round(offer.releaseClause * 1.12);
  offer.message = `Contraoferta aceptada (${offer.negotiations}/2).`;
  if (offer.negotiations >= 2) offer.locked = true;
  addNews(`${offer.club} mejoro su oferta contractual.`);
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
  const followerGain = Math.max(0, (option.popularity || 0) * 150);
  state.followers += followerGain;
  updateMissionProgress("social", 1);
  updateMissionProgress("followers", followerGain);
  addXp(12);
  state.socialQueue.splice(postIndex, 1);
  addNews(`Redes: ${option.text}`);
  render();
}

function unlockSkill(id) {
  const node = visibleSkillNodes().find((item) => item.id === id);
  if (!node || state.unlockedSkills.includes(id)) return;
  if (!skillReqsMet(node)) return;
  if (state.skillPoints < node.cost) return;
  state.skillPoints -= node.cost;
  state.unlockedSkills.push(id);
  Object.entries(node.attrs || {}).forEach(([attr, value]) => {
    state.attrs[attr] = clamp(state.attrs[attr] + value, 1, 99);
  });
  if (node.trait && !state.traits.includes(node.trait)) state.traits.push(node.trait);
  if (node.coach) state.coach = clamp(state.coach + node.coach, 0, 100);
  if (node.reputation) state.reputation = clamp(state.reputation + node.reputation, 0, 100);
  if (node.potential) state.potential = clamp(state.potential + node.potential, 70, 99);
  if (node.secondary) {
    const secondary = secondaryPositionFor(state.profile.position);
    if (!state.secondaryPositions.includes(secondary)) state.secondaryPositions.push(secondary);
  }
  addNews(`Mejora de arquetipo desbloqueada: ${node.title}.`);
  render();
  pulseElement("#skillTree", "panel-flash");
}

function claimDailyReward() {
  ensureStateDefaults();
  if (state.daily.rewardClaimed) return;
  state.daily.rewardClaimed = true;
  state.money += 18;
  state.followers += 650;
  addXp(45);
  addNews("Recompensa diaria cobrada: dinero, XP y seguidores.");
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
      const panel = $(`#tab-${button.dataset.tab}`);
      panel.classList.remove("hidden");
      pulseElement(`#tab-${button.dataset.tab}`, "panel-enter");
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
    if (target.dataset.offer !== undefined) acceptOffer(Number(target.dataset.offer));
    if (target.dataset.reject !== undefined) rejectOffer(Number(target.dataset.reject));
    if (target.dataset.negotiate !== undefined) negotiateOffer(Number(target.dataset.negotiate));
    if (target.dataset.sponsor) signSponsor(target.dataset.sponsor);
    if (target.dataset.lifestyle) buyLifestyle(target.dataset.lifestyle);
    if (target.dataset.skill) unlockSkill(target.dataset.skill);
  });

  $("#playMatchBtn").addEventListener("click", playMatch);
  $("#matchMode").addEventListener("change", (event) => {
    state.matchMode = event.target.value;
    render();
  });
  $("#restBtn").addEventListener("click", rest);
  $("#advanceWeekBtn").addEventListener("click", advanceWeek);
  $("#dailyRewardBtn").addEventListener("click", claimDailyReward);
  $("#agentBtn").addEventListener("click", () => {
    generateOffers(true);
    render();
  });
  $("#renewalBtn").addEventListener("click", requestRenewal);
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
