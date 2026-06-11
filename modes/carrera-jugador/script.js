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

const secondDivisionLeagueNames = new Set([
  "LaLiga Hypermotion",
  "Championship",
  "Serie B",
  "2. Bundesliga",
  "Ligue 2",
  "Liga Portugal 2",
  "Saudi First Division",
  "Primera Nacional",
  "Brasileirao Serie B",
  "USL Championship",
  "Eerste Divisie",
  "Liga de Expansion MX",
  "Challenger Pro League",
  "Scottish Championship",
  "TFF 1. Lig",
  "Austrian 2. Liga",
  "Swiss Challenge League",
  "Danish 1st Division",
  "Greek Super League 2"
]);

const secondDivisionSeedClubs = [
  { name: "Deportivo La Coruna", league: "LaLiga Hypermotion", country: "Espana", tier: 2, salary: 18, rep: 61 },
  { name: "Real Zaragoza", league: "LaLiga Hypermotion", country: "Espana", tier: 2, salary: 18, rep: 62 },
  { name: "Sporting Gijon", league: "LaLiga Hypermotion", country: "Espana", tier: 2, salary: 17, rep: 60 },
  { name: "Granada", league: "LaLiga Hypermotion", country: "Espana", tier: 2, salary: 20, rep: 64 },
  { name: "Leicester City", league: "Championship", country: "Inglaterra", tier: 3, salary: 34, rep: 74 },
  { name: "Southampton", league: "Championship", country: "Inglaterra", tier: 3, salary: 30, rep: 70 },
  { name: "Middlesbrough", league: "Championship", country: "Inglaterra", tier: 2, salary: 24, rep: 66 },
  { name: "West Brom", league: "Championship", country: "Inglaterra", tier: 2, salary: 25, rep: 67 },
  { name: "Palermo", league: "Serie B", country: "Italia", tier: 2, salary: 17, rep: 61 },
  { name: "Sampdoria", league: "Serie B", country: "Italia", tier: 2, salary: 19, rep: 64 },
  { name: "Bari", league: "Serie B", country: "Italia", tier: 2, salary: 16, rep: 59 },
  { name: "Spezia", league: "Serie B", country: "Italia", tier: 2, salary: 16, rep: 58 },
  { name: "Schalke 04", league: "2. Bundesliga", country: "Alemania", tier: 2, salary: 22, rep: 68 },
  { name: "Hertha BSC", league: "2. Bundesliga", country: "Alemania", tier: 2, salary: 21, rep: 66 },
  { name: "Hannover 96", league: "2. Bundesliga", country: "Alemania", tier: 2, salary: 19, rep: 63 },
  { name: "Fortuna Dusseldorf", league: "2. Bundesliga", country: "Alemania", tier: 2, salary: 20, rep: 64 },
  { name: "Bastia", league: "Ligue 2", country: "Francia", tier: 2, salary: 14, rep: 57 },
  { name: "Guingamp", league: "Ligue 2", country: "Francia", tier: 2, salary: 14, rep: 56 },
  { name: "Grenoble", league: "Ligue 2", country: "Francia", tier: 1, salary: 12, rep: 53 },
  { name: "Caen", league: "Ligue 2", country: "Francia", tier: 2, salary: 15, rep: 58 },
  { name: "Maritimo", league: "Liga Portugal 2", country: "Portugal", tier: 2, salary: 13, rep: 56 },
  { name: "Pacos Ferreira", league: "Liga Portugal 2", country: "Portugal", tier: 1, salary: 12, rep: 53 },
  { name: "Leixoes", league: "Liga Portugal 2", country: "Portugal", tier: 1, salary: 11, rep: 52 },
  { name: "Academico Viseu", league: "Liga Portugal 2", country: "Portugal", tier: 1, salary: 11, rep: 52 },
  { name: "Al Faisaly", league: "Saudi First Division", country: "Arabia Saudita", tier: 2, salary: 18, rep: 58 },
  { name: "Al Adalah", league: "Saudi First Division", country: "Arabia Saudita", tier: 2, salary: 17, rep: 57 },
  { name: "Al Jabalain", league: "Saudi First Division", country: "Arabia Saudita", tier: 1, salary: 14, rep: 53 },
  { name: "Al Ula", league: "Saudi First Division", country: "Arabia Saudita", tier: 2, salary: 18, rep: 58 },
  { name: "Chacarita Juniors", league: "Primera Nacional", country: "Argentina", tier: 2, salary: 12, rep: 57 },
  { name: "Ferro", league: "Primera Nacional", country: "Argentina", tier: 2, salary: 12, rep: 56 },
  { name: "Quilmes", league: "Primera Nacional", country: "Argentina", tier: 2, salary: 13, rep: 58 },
  { name: "Nueva Chicago", league: "Primera Nacional", country: "Argentina", tier: 1, salary: 10, rep: 53 },
  { name: "Coritiba", league: "Brasileirao Serie B", country: "Brasil", tier: 2, salary: 17, rep: 61 },
  { name: "Goias", league: "Brasileirao Serie B", country: "Brasil", tier: 2, salary: 16, rep: 60 },
  { name: "Atletico Goianiense", league: "Brasileirao Serie B", country: "Brasil", tier: 2, salary: 16, rep: 59 },
  { name: "Avai", league: "Brasileirao Serie B", country: "Brasil", tier: 1, salary: 13, rep: 55 },
  { name: "Louisville City", league: "USL Championship", country: "Estados Unidos", tier: 1, salary: 11, rep: 53 },
  { name: "Phoenix Rising", league: "USL Championship", country: "Estados Unidos", tier: 1, salary: 11, rep: 53 },
  { name: "Tampa Bay Rowdies", league: "USL Championship", country: "Estados Unidos", tier: 1, salary: 11, rep: 54 },
  { name: "Sacramento Republic", league: "USL Championship", country: "Estados Unidos", tier: 1, salary: 11, rep: 54 },
  { name: "ADO Den Haag", league: "Eerste Divisie", country: "Paises Bajos", tier: 1, salary: 12, rep: 55 },
  { name: "Roda JC", league: "Eerste Divisie", country: "Paises Bajos", tier: 1, salary: 11, rep: 54 },
  { name: "De Graafschap", league: "Eerste Divisie", country: "Paises Bajos", tier: 1, salary: 11, rep: 54 },
  { name: "Cambuur", league: "Eerste Divisie", country: "Paises Bajos", tier: 1, salary: 12, rep: 55 },
  { name: "Atlante", league: "Liga de Expansion MX", country: "Mexico", tier: 1, salary: 13, rep: 56 },
  { name: "Leones Negros", league: "Liga de Expansion MX", country: "Mexico", tier: 1, salary: 12, rep: 54 },
  { name: "Cancun FC", league: "Liga de Expansion MX", country: "Mexico", tier: 1, salary: 12, rep: 54 },
  { name: "Tapatio", league: "Liga de Expansion MX", country: "Mexico", tier: 1, salary: 11, rep: 53 },
  { name: "Lommel", league: "Challenger Pro League", country: "Belgica", tier: 1, salary: 11, rep: 53 },
  { name: "Beveren", league: "Challenger Pro League", country: "Belgica", tier: 1, salary: 11, rep: 53 },
  { name: "Lierse", league: "Challenger Pro League", country: "Belgica", tier: 1, salary: 10, rep: 52 },
  { name: "RWDM", league: "Challenger Pro League", country: "Belgica", tier: 1, salary: 12, rep: 55 },
  { name: "Partick Thistle", league: "Scottish Championship", country: "Escocia", tier: 1, salary: 10, rep: 52 },
  { name: "Dunfermline", league: "Scottish Championship", country: "Escocia", tier: 1, salary: 10, rep: 51 },
  { name: "Raith Rovers", league: "Scottish Championship", country: "Escocia", tier: 1, salary: 10, rep: 52 },
  { name: "Ayr United", league: "Scottish Championship", country: "Escocia", tier: 1, salary: 10, rep: 52 },
  { name: "Sakaryaspor", league: "TFF 1. Lig", country: "Turquia", tier: 1, salary: 12, rep: 55 },
  { name: "Kocaelispor", league: "TFF 1. Lig", country: "Turquia", tier: 1, salary: 12, rep: 55 },
  { name: "Bandirmaspor", league: "TFF 1. Lig", country: "Turquia", tier: 1, salary: 11, rep: 53 },
  { name: "Erzurumspor", league: "TFF 1. Lig", country: "Turquia", tier: 1, salary: 11, rep: 53 },
  { name: "Admira Wacker", league: "Austrian 2. Liga", country: "Austria", tier: 1, salary: 10, rep: 52 },
  { name: "First Vienna", league: "Austrian 2. Liga", country: "Austria", tier: 1, salary: 10, rep: 52 },
  { name: "Kapfenberger SV", league: "Austrian 2. Liga", country: "Austria", tier: 1, salary: 9, rep: 50 },
  { name: "St Polten", league: "Austrian 2. Liga", country: "Austria", tier: 1, salary: 10, rep: 52 },
  { name: "Aarau", league: "Swiss Challenge League", country: "Suiza", tier: 1, salary: 11, rep: 53 },
  { name: "Xamax", league: "Swiss Challenge League", country: "Suiza", tier: 1, salary: 10, rep: 52 },
  { name: "Wil", league: "Swiss Challenge League", country: "Suiza", tier: 1, salary: 10, rep: 52 },
  { name: "Bellinzona", league: "Swiss Challenge League", country: "Suiza", tier: 1, salary: 10, rep: 52 },
  { name: "Horsens", league: "Danish 1st Division", country: "Dinamarca", tier: 1, salary: 10, rep: 52 },
  { name: "Hillerod", league: "Danish 1st Division", country: "Dinamarca", tier: 1, salary: 9, rep: 50 },
  { name: "Kolding IF", league: "Danish 1st Division", country: "Dinamarca", tier: 1, salary: 9, rep: 50 },
  { name: "Hobro", league: "Danish 1st Division", country: "Dinamarca", tier: 1, salary: 9, rep: 50 },
  { name: "AEL Larissa", league: "Greek Super League 2", country: "Grecia", tier: 1, salary: 10, rep: 52 },
  { name: "Iraklis", league: "Greek Super League 2", country: "Grecia", tier: 1, salary: 10, rep: 52 },
  { name: "Kalamata", league: "Greek Super League 2", country: "Grecia", tier: 1, salary: 9, rep: 51 },
  { name: "Panachaiki", league: "Greek Super League 2", country: "Grecia", tier: 1, salary: 9, rep: 50 }
].map((club) => ({ ...club, division: 2, competitions: [], stars: [] }));

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
    division: league.division || (secondDivisionLeagueNames.has(league.name) ? 2 : 1),
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
      division: databaseTeam?.division || 1,
      competitions: databaseTeam?.competitions || [],
      transfermarkt: databaseTeam?.transfermarkt || "",
      salary: databaseTeam?.salary || Math.round(10 + finalTier * 18 + maxRating * finalTier * 0.35),
      rep: databaseTeam?.rep || Math.max(45, Math.min(96, maxRating + finalTier * 2)),
      stars: info.players.sort((a, b) => b.rating - a.rating).slice(0, 4).map((player) => player.name)
    };
  });

  const extras = extraCareerClubs.filter((club) => !clubsFromPlayers.some((item) => item.name === club.name));
  const realClubList = [...clubsFromPlayers, ...extras].filter((club) => clubLogoFor(club.name) || club.stars?.length);
  const seededSecondClubs = secondDivisionSeedClubs.filter((club) => !realClubList.some((item) => item.name === club.name));
  const source = realClubList.length >= 8 ? [...realClubList, ...seededSecondClubs] : [...fallbackClubs, ...seededSecondClubs];
  return source.sort((a, b) => (b.division || 1) - (a.division || 1) || a.tier - b.tier || a.name.localeCompare(b.name));
}

let clubs = buildCareerClubs();
let opponents = clubs.length ? clubs.map((club) => club.name) : fallbackOpponents;
let startingClubChoices = [];

const positionProfiles = {
  DC: { number: 9, focus: ["definicion", "fuerza", "velocidad"], goals: 18, assists: 6, cleanSheets: 0, y: 22 },
  EI: { number: 11, focus: ["velocidad", "regate", "pase"], goals: 12, assists: 12, cleanSheets: 0, y: 28 },
  ED: { number: 7, focus: ["velocidad", "regate", "definicion"], goals: 12, assists: 11, cleanSheets: 0, y: 28 },
  MCO: { number: 10, focus: ["vision", "pase", "regate"], goals: 10, assists: 16, cleanSheets: 0, y: 38 },
  MC: { number: 8, focus: ["pase", "resistencia", "vision"], goals: 6, assists: 12, cleanSheets: 0, y: 48 },
  MCD: { number: 5, focus: ["defensa", "resistencia", "pase"], goals: 3, assists: 8, cleanSheets: 8, y: 56 },
  LD: { number: 2, focus: ["velocidad", "defensa", "resistencia"], goals: 2, assists: 9, cleanSheets: 12, y: 64 },
  LI: { number: 3, focus: ["velocidad", "defensa", "pase"], goals: 2, assists: 9, cleanSheets: 12, y: 64 },
  DFC: { number: 4, focus: ["defensa", "fuerza", "resistencia"], goals: 3, assists: 3, cleanSheets: 14, y: 68 },
  POR: { number: 1, focus: ["defensa", "vision", "fuerza"], goals: 0, assists: 0, cleanSheets: 16, y: 82 }
};

const attackingPositions = new Set(["DC", "EI", "ED", "MCO"]);
const midfieldPositions = new Set(["MCD", "MC", "MCO", "EI", "ED", "LD", "LI"]);
const defensivePositions = new Set(["POR", "DFC", "LD", "LI", "MCD"]);

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
    author: "Gaston Edul",
    tag: "Seleccion",
    text: "Tu ultimo partido genero debate. Que mensaje publicas?",
    options: [
      { text: "El equipo esta por encima de todo.", popularity: 2, reputation: 5, morale: 2 },
      { text: "Prometo responder dentro de la cancha.", popularity: 6, reputation: 1, morale: 4 },
      { text: "Prefiero no entrar en polemicas.", popularity: -1, reputation: 4, morale: 0 }
    ]
  },
  {
    author: "Hinchas",
    tag: "Tendencia",
    text: "La tribuna pide mas compromiso despues de una semana dura.",
    options: [
      { text: "Organizar una firma de camisetas.", popularity: 8, reputation: 1, morale: 2, money: -6 },
      { text: "Subir video entrenando extra.", popularity: 3, reputation: 6, fatigue: 5 },
      { text: "Ignorar el ruido externo.", popularity: -4, reputation: 1, morale: -2 }
    ]
  },
  {
    author: "Club",
    tag: "Prensa",
    text: "El area de prensa ofrece una entrevista larga.",
    options: [
      { text: "Dar una entrevista humilde.", popularity: 4, reputation: 4, coach: 2 },
      { text: "Hablar como lider del proyecto.", popularity: 2, reputation: 7, coach: 4 },
      { text: "Rechazar para descansar.", popularity: -2, reputation: -1, fatigue: -8 }
    ]
  },
  {
    author: "Fabrizio Romano",
    tag: "Mercado",
    text: "Hay clubes siguiendo tu evolucion y tu agente pide calma. Como respondes?",
    options: [
      { text: "Estoy enfocado en mi club actual.", reputation: 5, coach: 4, popularity: 1 },
      { text: "Siempre escucho proyectos ambiciosos.", popularity: 6, reputation: -1, coach: -2 },
      { text: "No hablo de rumores.", reputation: 3, morale: 1 }
    ]
  },
  {
    author: "Cesar Luis Merlo",
    tag: "Ultima hora",
    text: "Tu nombre empezo a sonar en la agenda de varios clubes. Que postura toma tu entorno?",
    options: [
      { text: "Responder con bajo perfil.", reputation: 4, morale: 2 },
      { text: "Dejar que mi agente maneje todo.", popularity: 3, reputation: 2 },
      { text: "Meter presion por una mejora contractual.", popularity: 5, reputation: -2, coach: -3 }
    ]
  },
  {
    author: "Gaston Edul",
    tag: "Vestuario",
    text: "Se habla de tu rol en el grupo y de como manejas la exposicion publica.",
    options: [
      { text: "Resaltar la union del plantel.", reputation: 5, coach: 3, morale: 2 },
      { text: "Agradecer a los hinchas.", popularity: 5, morale: 2 },
      { text: "Mantener silencio y entrenar.", reputation: 2, fatigue: -4 }
    ]
  }
];

const transferJournalists = [
  { name: "Fabrizio Romano", tag: "Mercado internacional" },
  { name: "Gaston Edul", tag: "Seleccion y mercado argentino" },
  { name: "Cesar Luis Merlo", tag: "Mercado sudamericano" },
  { name: "German Garcia Grova", tag: "Informacion de clubes" }
];

const lifestyleItems = [
  { id: "trainer", title: "Entrenador personal", cost: 120, effect: "Los entrenamientos dan +1 XP extra.", minPop: 0 },
  { id: "recoveryRoom", title: "Sala de recuperacion", cost: 220, effect: "Reduce mas fatiga al descansar.", minPop: 0 },
  { id: "styleBrand", title: "Marca personal", cost: 350, effect: "Aumenta seguidores al jugar bien.", minPop: 65 }
];

const sponsorDeals = [
  { id: "nike", name: "Nike", tier: "Elite", pay: 360, minPop: 82, minRep: 72, goalBonus: 16, assistBonus: 8, ratingBonus: 32, effect: "Contrato global de botines y campana. Bonos altos por goles y partidos de figura." },
  { id: "adidas", name: "adidas", tier: "Elite", pay: 340, minPop: 78, minRep: 76, goalBonus: 12, assistBonus: 12, ratingBonus: 34, effect: "Marca tecnica para jugadores decisivos. Bonos por asistencias y media alta." },
  { id: "puma", name: "Puma", tier: "Pro", pay: 220, minPop: 66, minRep: 60, goalBonus: 10, assistBonus: 7, ratingBonus: 20, effect: "Acuerdo de imagen para jugador en crecimiento. Buen equilibrio de bonos." },
  { id: "underarmour", name: "Under Armour", tier: "Fisico", pay: 180, minPop: 58, minRep: 56, cleanSheetBonus: 14, ratingBonus: 18, effect: "Sponsor de rendimiento fisico. Premia defensa, resistencia y regularidad." },
  { id: "redbull", name: "Red Bull", tier: "Lifestyle", pay: 260, minPop: 72, minRep: 52, followerBonus: 420, ratingBonus: 16, effect: "Campanas virales y contenido. Sube seguidores si rendis bien." },
  { id: "pepsi", name: "Pepsi", tier: "Imagen", pay: 240, minPop: 70, minRep: 50, followerBonus: 360, goalBonus: 8, effect: "Publicidad masiva. Premia popularidad, goles y crecimiento en redes." },
  { id: "easports", name: "EA Sports FC", tier: "Gaming", pay: 300, minPop: 76, minRep: 64, ratingBonus: 28, followerBonus: 300, effect: "Embajador de videojuego. Bonos por media alta y exposicion global." },
  { id: "boots", name: "Botines Veloz", tier: "Local", pay: 60, minPop: 45, minRep: 0, goalBonus: 8, assistBonus: 4, effect: "Contrato local heredado. Bono por goles y asistencias." },
  { id: "drink", name: "Energia 90", tier: "Local", pay: 120, minPop: 60, minRep: 0, flatBonus: 10, effect: "Contrato local heredado. Ingreso extra por partido." },
  { id: "global", name: "Global Sports", tier: "Local", pay: 260, minPop: 78, minRep: 0, flatBonus: 25, effect: "Contrato local heredado. Marca internacional para estrellas." }
];

const skillCategories = [
  { id: "fisico", label: "Fisico", desc: "Cuerpo, resistencia y potencia para sostener la temporada." },
  { id: "defensa", label: "Defensa", desc: "Marca, anticipacion y duelos defensivos." },
  { id: "regates", label: "Regates", desc: "Control, conduccion y desequilibrio en espacios cortos." },
  { id: "pases", label: "Pases", desc: "Precision, vision y ultimo pase." },
  { id: "tiros", label: "Tiros", desc: "Definicion, potencia y sangre fria en el area." },
  { id: "ritmo", label: "Ritmo", desc: "Aceleracion, velocidad punta y cambios de marcha." },
  { id: "porteria", label: "Porteria", desc: "Reflejos, mando del area y salida con pelota.", positions: ["POR"] }
];

const legacySkillNodes = [
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

const skillNodes = [
  { id: "fisico_base", category: "fisico", title: "Base atletica", desc: "Sube la resistencia inicial para aguantar mas minutos.", cost: 1, attrs: { resistencia: 2, fuerza: 1 }, x: 50, y: 8, icon: "FI" },
  { id: "fisico_tren", category: "fisico", title: "Tren inferior", desc: "Mas fuerza en choques, giros y apoyos.", cost: 1, attrs: { fuerza: 2 }, req: "fisico_base", x: 33, y: 25, icon: "FR" },
  { id: "fisico_pulmon", category: "fisico", title: "Pulmon de liga", desc: "Mejora los esfuerzos repetidos durante el partido.", cost: 2, attrs: { resistencia: 3 }, req: "fisico_base", x: 67, y: 25, icon: "RE" },
  { id: "fisico_contacto", category: "fisico", title: "Contacto fuerte", desc: "Ganas mas disputas cuerpo a cuerpo.", cost: 2, attrs: { fuerza: 3, defensa: 1 }, req: "fisico_tren", x: 22, y: 45, icon: "CO" },
  { id: "fisico_equilibrio", category: "fisico", title: "Equilibrio en carrera", desc: "Sostienes la pelota despues del primer contacto.", cost: 2, attrs: { regate: 2, fuerza: 1 }, req: ["fisico_tren", "fisico_pulmon"], x: 50, y: 45, icon: "EQ" },
  { id: "fisico_recuperacion", category: "fisico", title: "Recuperacion rapida", desc: "Bajas fatiga y rindes mejor en semanas cargadas.", cost: 2, attrs: { resistencia: 2, velocidad: 1 }, trait: "Inagotable", req: "fisico_pulmon", x: 78, y: 45, icon: "RX" },
  { id: "fisico_dominante", category: "fisico", title: "Dominio fisico", desc: "Paquete elite de potencia, aguante y presencia.", cost: 3, attrs: { fuerza: 3, resistencia: 3 }, trait: "Dominante", req: ["fisico_contacto", "fisico_equilibrio", "fisico_recuperacion"], x: 50, y: 72, icon: "DF" },

  { id: "defensa_marca", category: "defensa", title: "Marca cercana", desc: "Mejor posicion corporal en duelos defensivos.", cost: 1, attrs: { defensa: 2, fuerza: 1 }, x: 50, y: 8, icon: "MA" },
  { id: "defensa_corte", category: "defensa", title: "Corte limpio", desc: "Anticipas pases interiores y balones divididos.", cost: 1, attrs: { defensa: 2, vision: 1 }, req: "defensa_marca", x: 33, y: 25, icon: "CT" },
  { id: "defensa_presion", category: "defensa", title: "Presion agresiva", desc: "Aumenta intensidad al recuperar alto.", cost: 2, attrs: { defensa: 2, resistencia: 2 }, req: "defensa_marca", x: 67, y: 25, icon: "PR" },
  { id: "defensa_entrada", category: "defensa", title: "Entrada fuerte", desc: "Mas seguridad al ir al suelo y disputar frontal.", cost: 2, attrs: { defensa: 3 }, trait: "Anticipador", req: "defensa_corte", x: 22, y: 45, icon: "EN" },
  { id: "defensa_aerea", category: "defensa", title: "Duelos aereos", desc: "Ganas mas centros defensivos y pelotas paradas.", cost: 2, attrs: { fuerza: 2, defensa: 2 }, req: ["defensa_corte", "defensa_presion"], x: 50, y: 45, icon: "AE" },
  { id: "defensa_salida", category: "defensa", title: "Salida limpia", desc: "Defiendes y encuentras el primer pase tras recuperar.", cost: 2, attrs: { pase: 2, vision: 1, defensa: 1 }, req: "defensa_presion", x: 78, y: 45, icon: "SL" },
  { id: "defensa_muralla", category: "defensa", title: "Muralla", desc: "Nivel superior de quite, lectura y liderazgo atras.", cost: 3, attrs: { defensa: 4, fuerza: 2 }, trait: "Comandante", req: ["defensa_entrada", "defensa_aerea", "defensa_salida"], x: 50, y: 72, icon: "MU" },

  { id: "regate_control", category: "regates", title: "Control orientado", desc: "Primer toque mas fino para salir perfilado.", cost: 1, attrs: { regate: 2, pase: 1 }, x: 50, y: 8, icon: "CO" },
  { id: "regate_cadera", category: "regates", title: "Cambio de cadera", desc: "Mejor giro para escapar de presion.", cost: 1, attrs: { regate: 2, velocidad: 1 }, req: "regate_control", x: 33, y: 25, icon: "GI" },
  { id: "regate_conduccion", category: "regates", title: "Conduccion tensa", desc: "Llevas la pelota mas pegada en carrera.", cost: 2, attrs: { regate: 3 }, req: "regate_control", x: 67, y: 25, icon: "CD" },
  { id: "regate_finta", category: "regates", title: "Finta corta", desc: "Mas eficacia para eliminar rivales en uno contra uno.", cost: 2, attrs: { regate: 3, vision: 1 }, req: "regate_cadera", x: 22, y: 45, icon: "FI" },
  { id: "regate_proteccion", category: "regates", title: "Proteccion", desc: "Aguantas la pelota bajo contacto.", cost: 2, attrs: { regate: 2, fuerza: 2 }, req: ["regate_cadera", "regate_conduccion"], x: 50, y: 45, icon: "PT" },
  { id: "regate_diagonal", category: "regates", title: "Diagonal venenosa", desc: "Mejora conduccion hacia dentro y decision final.", cost: 2, attrs: { regate: 2, definicion: 1, vision: 1 }, req: "regate_conduccion", x: 78, y: 45, icon: "DG" },
  { id: "regate_imparable", category: "regates", title: "Desequilibrio elite", desc: "Rasgo de gambeta para partidos grandes.", cost: 3, attrs: { regate: 4, velocidad: 2 }, trait: "Imparable", req: ["regate_finta", "regate_proteccion", "regate_diagonal"], x: 50, y: 72, icon: "EL" },

  { id: "pase_corto", category: "pases", title: "Pase corto", desc: "Mas precision en circulacion y apoyos.", cost: 1, attrs: { pase: 2, vision: 1 }, x: 50, y: 8, icon: "PC" },
  { id: "pase_orientacion", category: "pases", title: "Orientacion previa", desc: "Escaneas antes de recibir y decides mas rapido.", cost: 1, attrs: { vision: 2, pase: 1 }, req: "pase_corto", x: 33, y: 25, icon: "OR" },
  { id: "pase_largo", category: "pases", title: "Cambio de frente", desc: "Pase largo mas seguro para girar el juego.", cost: 2, attrs: { pase: 3 }, req: "pase_corto", x: 67, y: 25, icon: "LF" },
  { id: "pase_filtrado", category: "pases", title: "Pase filtrado", desc: "Aumenta asistencias potenciales entre lineas.", cost: 2, attrs: { pase: 3, vision: 2 }, trait: "Arquitecto", req: "pase_orientacion", x: 22, y: 45, icon: "PF" },
  { id: "pase_pausa", category: "pases", title: "Pausa", desc: "Mejor control del tempo cuando el equipo necesita calma.", cost: 2, attrs: { vision: 3, resistencia: 1 }, req: ["pase_orientacion", "pase_largo"], x: 50, y: 45, icon: "PA" },
  { id: "pase_centro", category: "pases", title: "Centro tenso", desc: "Pases laterales y centros con mas peligro.", cost: 2, attrs: { pase: 2, definicion: 1, vision: 1 }, req: "pase_largo", x: 78, y: 45, icon: "CE" },
  { id: "pase_director", category: "pases", title: "Director de juego", desc: "Paquete elite de vision, pase y liderazgo.", cost: 3, attrs: { pase: 4, vision: 3 }, trait: "Metronomo", req: ["pase_filtrado", "pase_pausa", "pase_centro"], x: 50, y: 72, icon: "DJ" },

  { id: "tiro_colocacion", category: "tiros", title: "Colocacion", desc: "Remate colocado con menos margen de error.", cost: 1, attrs: { definicion: 2, vision: 1 }, x: 50, y: 8, icon: "CO" },
  { id: "tiro_potencia", category: "tiros", title: "Potencia de remate", desc: "Golpeas mas fuerte desde media distancia.", cost: 1, attrs: { definicion: 2, fuerza: 1 }, req: "tiro_colocacion", x: 33, y: 25, icon: "PO" },
  { id: "tiro_area", category: "tiros", title: "Remate de area", desc: "Mejora definicion con poco tiempo dentro del area.", cost: 2, attrs: { definicion: 3 }, req: "tiro_colocacion", x: 67, y: 25, icon: "RA" },
  { id: "tiro_cabeza", category: "tiros", title: "Precision de cabezazos", desc: "Atacas mejor centros y corners.", cost: 2, attrs: { definicion: 2, fuerza: 2 }, req: "tiro_potencia", x: 22, y: 45, icon: "CA" },
  { id: "tiro_libre", category: "tiros", title: "Tiro libre", desc: "Mas amenaza en pelota parada directa.", cost: 2, attrs: { definicion: 2, vision: 2 }, req: ["tiro_potencia", "tiro_area"], x: 50, y: 45, icon: "TL" },
  { id: "tiro_penal", category: "tiros", title: "Penales frios", desc: "Mejor temple en definiciones desde el punto penal.", cost: 2, attrs: { definicion: 3, pase: 1 }, req: "tiro_area", x: 78, y: 45, icon: "PE" },
  { id: "tiro_matador", category: "tiros", title: "Instinto matador", desc: "Rasgo de goleador para convertir mas chances claras.", cost: 3, attrs: { definicion: 5 }, trait: "Matador", req: ["tiro_cabeza", "tiro_libre", "tiro_penal"], x: 50, y: 72, icon: "MT" },

  { id: "ritmo_arranque", category: "ritmo", title: "Arranque explosivo", desc: "Primeros metros mas rapidos.", cost: 1, attrs: { velocidad: 2, resistencia: 1 }, x: 50, y: 8, icon: "AR" },
  { id: "ritmo_zancada", category: "ritmo", title: "Zancada larga", desc: "Mejora velocidad punta en campo abierto.", cost: 1, attrs: { velocidad: 3 }, req: "ritmo_arranque", x: 33, y: 25, icon: "ZA" },
  { id: "ritmo_reaccion", category: "ritmo", title: "Reaccion", desc: "Sales antes tras rebotes, robos y pases profundos.", cost: 2, attrs: { velocidad: 2, vision: 1 }, req: "ritmo_arranque", x: 67, y: 25, icon: "RC" },
  { id: "ritmo_sprint", category: "ritmo", title: "Sprint largo", desc: "Sostienes carreras largas sin perder tanta energia.", cost: 2, attrs: { velocidad: 2, resistencia: 2 }, req: "ritmo_zancada", x: 22, y: 45, icon: "SP" },
  { id: "ritmo_cambio", category: "ritmo", title: "Cambio de ritmo", desc: "Aceleras y frenas con pelota dominada.", cost: 2, attrs: { velocidad: 2, regate: 2 }, req: ["ritmo_zancada", "ritmo_reaccion"], x: 50, y: 45, icon: "CR" },
  { id: "ritmo_presion", category: "ritmo", title: "Presion veloz", desc: "Cierras lineas con mas agresividad.", cost: 2, attrs: { velocidad: 1, defensa: 2, resistencia: 1 }, req: "ritmo_reaccion", x: 78, y: 45, icon: "PV" },
  { id: "ritmo_velocista", category: "ritmo", title: "Velocista elite", desc: "Rasgo de velocidad para romper partidos.", cost: 3, attrs: { velocidad: 5, resistencia: 1 }, trait: "Velocista", req: ["ritmo_sprint", "ritmo_cambio", "ritmo_presion"], x: 50, y: 72, icon: "VE" },

  { id: "por_reflejos", category: "porteria", positions: ["POR"], title: "Reflejos bajos", desc: "Respuesta rapida en remates cercanos.", cost: 1, attrs: { defensa: 3, fuerza: 1 }, x: 50, y: 8, icon: "RF" },
  { id: "por_colocacion", category: "porteria", positions: ["POR"], title: "Colocacion", desc: "Mejor posicion antes del remate.", cost: 1, attrs: { defensa: 2, vision: 1 }, req: "por_reflejos", x: 33, y: 25, icon: "CL" },
  { id: "por_salida", category: "porteria", positions: ["POR"], title: "Salida a centros", desc: "Mando del area en corners y pelotas cruzadas.", cost: 2, attrs: { defensa: 3, fuerza: 1 }, req: "por_reflejos", x: 67, y: 25, icon: "SA" },
  { id: "por_mano", category: "porteria", positions: ["POR"], title: "Mano a mano", desc: "Mejora achiques contra delanteros.", cost: 2, attrs: { defensa: 3, velocidad: 1 }, req: "por_colocacion", x: 22, y: 45, icon: "MM" },
  { id: "por_juego_pies", category: "porteria", positions: ["POR"], title: "Juego de pies", desc: "Salida corta y cambio largo con mas precision.", cost: 2, attrs: { pase: 3, vision: 1 }, req: ["por_colocacion", "por_salida"], x: 50, y: 45, icon: "JP" },
  { id: "por_libero", category: "porteria", positions: ["POR"], title: "Arquero libero", desc: "Cortas balones largos fuera del area.", cost: 2, attrs: { velocidad: 2, vision: 2 }, trait: "Arquero Libero", req: "por_salida", x: 78, y: 45, icon: "AL" },
  { id: "por_muralla", category: "porteria", positions: ["POR"], title: "Ultima muralla", desc: "Pico elite de reflejos, mando y seguridad.", cost: 3, attrs: { defensa: 5, fuerza: 1 }, trait: "Portero Elite", req: ["por_mano", "por_juego_pies", "por_libero"], x: 50, y: 72, icon: "UM" }
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
    ED: "EI",
    EI: "MCO",
    LD: "LI",
    LI: "LD",
    MCD: "MC",
    MCO: "MC",
    MC: "MCD",
    DFC: "MCD",
    POR: "DFC"
  };
  return map[position] || "MC";
}

function archetypeLabel(position = state?.profile?.position) {
  const labels = {
    DC: "9 de area",
    EI: "Extremo izquierdo",
    ED: "Extremo derecho",
    MCO: "Creador ofensivo",
    MC: "Motor del medio",
    MCD: "Volante de corte",
    LD: "Lateral derecho",
    LI: "Lateral izquierdo",
    DFC: "Central dominante",
    POR: "Arquero moderno"
  };
  return labels[position] || "Arquetipo profesional";
}

function visibleSkillNodes() {
  const position = state?.profile?.position;
  return skillNodes.filter((node) => !node.positions || node.positions.includes(position));
}

function defaultSkillTab(position = state?.profile?.position) {
  const byPosition = {
    DC: "tiros",
    EI: "regates",
    ED: "regates",
    MCO: "pases",
    MC: "pases",
    MCD: "defensa",
    LD: "defensa",
    LI: "defensa",
    DFC: "defensa",
    POR: "porteria"
  };
  return byPosition[position] || "fisico";
}

function activeSkillCategory() {
  const position = state?.profile?.position;
  const current = skillCategories.find((category) => category.id === state?.skillTreeTab);
  if (current && (!current.positions || current.positions.includes(position))) return current;
  return skillCategories.find((category) => category.id === defaultSkillTab()) || skillCategories[0];
}

function skillNodesForCategory(categoryId = activeSkillCategory().id) {
  return visibleSkillNodes().filter((node) => node.category === categoryId);
}

function selectedSkillNode(nodes) {
  const selected = nodes.find((node) => node.id === state.selectedSkillId);
  if (selected) return selected;
  return nodes.find((node) => !state.unlockedSkills.includes(node.id) && skillReqsMet(node)) || nodes[0] || null;
}

function skillNodeState(node) {
  const unlocked = state.unlockedSkills.includes(node.id);
  const lockedByReq = !skillReqsMet(node);
  const affordable = state.skillPoints >= node.cost;
  if (unlocked) return "unlocked";
  if (lockedByReq) return "locked";
  if (affordable) return "available";
  return "waiting";
}

function skillConnectionSvg(nodes) {
  const byId = Object.fromEntries(nodes.map((node) => [node.id, node]));
  const lines = nodes.flatMap((node) => skillRequirements(node)
    .map((req) => byId[req])
    .filter(Boolean)
    .map((parent) => {
      const unlocked = state.unlockedSkills.includes(parent.id) && state.unlockedSkills.includes(node.id);
      const available = !state.unlockedSkills.includes(node.id) && skillReqsMet(node);
      return `<line class="${unlocked ? "unlocked" : available ? "available" : ""}" x1="${parent.x}" y1="${parent.y}" x2="${node.x}" y2="${node.y}"></line>`;
    }));
  return `<svg class="skill-connections" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">${lines.join("")}</svg>`;
}

function skillActionLabel(node) {
  if (!node) return "Sin mejora";
  if (state.unlockedSkills.includes(node.id)) return "Desbloqueado";
  if (!skillReqsMet(node)) return `Requiere ${skillReqText(node)}`;
  if (state.skillPoints < node.cost) return `Faltan ${node.cost - state.skillPoints} punto${node.cost - state.skillPoints > 1 ? "s" : ""}`;
  return `Colocar mejora (${node.cost})`;
}

function skillDetailBars(node) {
  const entries = Object.entries(node?.attrs || {});
  if (!entries.length) return `<p class="subtle-line">Esta mejora desbloquea efectos especiales de carrera.</p>`;
  return entries.map(([attr, boost]) => {
    const current = Number(state.attrs[attr]) || 1;
    const next = clamp(current + boost, 1, 99);
    return `<div class="skill-attr-row">
      <strong><span>${labelAttr(attr)}</span><span>${current} +${boost}</span></strong>
      <div class="skill-attr-track">
        <span class="current" style="width:${current}%"></span>
        <span class="boost" style="left:${current}%; width:${Math.max(0, next - current)}%"></span>
      </div>
    </div>`;
  }).join("");
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
  const isAttacker = attackingPositions.has(position);
  const isMid = midfieldPositions.has(position);
  const isDef = defensivePositions.has(position);
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
  state.skillTreeTab = skillCategories.some((category) => category.id === state.skillTreeTab) ? state.skillTreeTab : defaultSkillTab();
  state.selectedSkillId = typeof state.selectedSkillId === "string" ? state.selectedSkillId : "";
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
  if (!Array.isArray(state.transferRumors)) state.transferRumors = [];
  if (!Array.isArray(state.socialQueue)) state.socialQueue = [];
  state.socialRespondedDate = state.socialRespondedDate || "";
  state.lastOfferWindow = state.lastOfferWindow || "";
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

function playersForClub(clubName, limit = Infinity) {
  const normalized = normalizeClubName(clubName);
  return careerPlayers
    .filter((player) => player.club === normalized)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
}

function topPlayersForClub(clubName) {
  return playersForClub(clubName, 3);
}

function isSecondDivisionClub(club) {
  return club?.division === 2 || secondDivisionLeagueNames.has(club?.league);
}

function startingCareerClubs() {
  const secondClubs = clubs.filter(isSecondDivisionClub);
  if (secondClubs.length) return secondClubs;
  return clubs.filter((club) => (club.tier || 1) <= 2);
}

function shuffled(list) {
  return list.slice().sort(() => Math.random() - 0.5);
}

function pickStartingClubChoices() {
  const startClubs = startingCareerClubs();
  const withSquads = startClubs.filter((club) => playersForClub(club.name, 8).length >= 8);
  const pool = withSquads.length >= 2 ? withSquads : startClubs;
  const randomized = shuffled(pool);
  const first = randomized[0] || clubs[0];
  const second = randomized.find((club) => club.name !== first?.name && club.league !== first?.league)
    || randomized.find((club) => club.name !== first?.name)
    || randomized[1]
    || first;
  return [first, second].filter(Boolean).filter((club, index, list) => list.findIndex((item) => item.name === club.name) === index);
}

function selectStartingClub(name) {
  const selected = startingClubChoices.find((club) => club.name === name) || startingClubChoices[0];
  const select = $("#playerClub");
  if (select && selected) select.value = selected.name;
  document.querySelectorAll("[data-start-club]").forEach((button) => {
    button.classList.toggle("active", decodeURIComponent(button.dataset.startClub || "") === selected?.name);
  });
}

function renderClubSelect() {
  const select = $("#playerClub");
  if (!select) return;
  startingClubChoices = pickStartingClubChoices();
  const firstValue = startingClubChoices[0]?.name || clubs[0]?.name || "";
  select.innerHTML = startingClubChoices.map((club) => {
    const stars = topPlayersForClub(club.name).slice(0, 2).map((player) => player.name).join(", ");
    const label = stars ? `${club.name} - ${club.league} (${stars})` : `${club.name} - ${club.league}`;
    return `<option value="${club.name}">${label}</option>`;
  }).join("");
  select.value = firstValue;
  const choices = $("#clubChoices");
  if (choices) {
    choices.innerHTML = startingClubChoices.map((club, index) => {
      const players = playersForClub(club.name, 3);
      const stars = players.map((player) => player.name).join(", ");
      const logo = clubLogoFor(club.name);
      return `<button type="button" class="club-choice ${index === 0 ? "active" : ""}" data-start-club="${encodeURIComponent(club.name)}">
        <div class="club-choice-top">
          ${logo ? `<img src="${logo}" alt="" />` : ""}
          <strong>${club.name}</strong>
        </div>
        <span>${club.league}${club.country ? ` - ${club.country}` : ""}</span>
        <small>${stars ? `Figuras: ${stars}` : "Plantel de segunda division"}</small>
      </button>`;
    }).join("");
  }
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
  const allowedStartClubs = startingClubChoices.length ? startingClubChoices : pickStartingClubChoices();
  const club = allowedStartClubs.find((item) => item.name === profile.club) || allowedStartClubs[0] || clubs[0];
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
    skillTreeTab: defaultSkillTab(profile.position),
    selectedSkillId: "",
    secondaryPositions: [],
    sponsors: [],
    lifestyle: [],
    offers: [],
    transferRumors: [],
    lastOfferWindow: "",
    news: ["Tu carrera profesional acaba de empezar."],
    socialQueue: [randomSocial()],
    socialRespondedDate: "",
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
  if (state && Math.random() < (isTransferWindow() ? 0.58 : 0.28)) {
    return randomTransferSocial();
  }
  return JSON.parse(JSON.stringify(socialTemplates[random(0, socialTemplates.length - 1)]));
}

function transferWindowStatus(week = state?.week || 1) {
  if (week >= 1 && week <= 6) {
    return {
      open: true,
      id: "summer",
      label: "Mercado de verano",
      description: `Abierto hasta la semana 6. Semana ${week}/6`
    };
  }
  if (week >= 20 && week <= 24) {
    return {
      open: true,
      id: "winter",
      label: "Mercado de invierno",
      description: `Abierto hasta la semana 24. Semana ${week}/24`
    };
  }
  const next = week < 20 ? "invierno, semana 20" : "verano, semana 1 de la proxima temporada";
  return {
    open: false,
    id: "closed",
    label: "Mercado cerrado",
    description: `Proxima ventana: ${next}.`
  };
}

function isTransferWindow() {
  return transferWindowStatus().open;
}

function transferWindowKey() {
  const window = transferWindowStatus();
  return window.open ? `${state.season}-${window.id}` : "";
}

function randomJournalist(preferLocal = false) {
  const pool = preferLocal ? transferJournalists.filter((item) => item.name !== "Fabrizio Romano") : transferJournalists;
  return pool[random(0, pool.length - 1)];
}

function randomTransferPair() {
  const source = clubs.filter((club) => club.name !== state?.club && topPlayersForClub(club.name).length);
  const fromPool = source.length ? source : clubs.filter((club) => club.name !== state?.club);
  const fromClub = fromPool[random(0, Math.max(0, fromPool.length - 1))] || clubs[0];
  const destinations = clubs.filter((club) => club.name !== fromClub.name && club.name !== state?.club && Math.abs((club.tier || 1) - (fromClub.tier || 1)) <= 2);
  const toPool = destinations.length ? destinations : clubs.filter((club) => club.name !== fromClub.name);
  const toClub = toPool[random(0, Math.max(0, toPool.length - 1))] || clubs[0];
  const stars = topPlayersForClub(fromClub.name);
  const player = stars.length ? stars[random(0, stars.length - 1)] : { name: `figura de ${fromClub.name}`, rating: fromClub.rep || 75, pos: "Jugador" };
  return { fromClub, toClub, player };
}

function makeTransferRumor(status = "rumor") {
  const { fromClub, toClub, player } = randomTransferPair();
  const journalist = randomJournalist(fromClub.league?.includes("Argentina") || toClub.league?.includes("Argentina"));
  const fee = Math.round((player.rating || 75) * (toClub.tier || 1) * random(9, 18));
  const confirmed = status === "confirmed";
  return {
    week: state.week,
    season: state.season,
    journalist: journalist.name,
    tag: journalist.tag,
    status,
    player: player.name,
    from: fromClub.name,
    to: toClub.name,
    fee,
    text: confirmed
      ? `${journalist.name}: acuerdo cerrado entre ${fromClub.name} y ${toClub.name} por ${player.name}. Operacion estimada en ${valueText(fee)}.`
      : `${journalist.name}: ${toClub.name} sigue de cerca a ${player.name} de ${fromClub.name}. Operacion posible por ${valueText(fee)}.`
  };
}

function makePlayerRumor(offer, status = "interest") {
  const journalist = randomJournalist(state.league?.includes("Argentina") || offer.league?.includes("Argentina"));
  const confirmed = status === "confirmed";
  const fee = offer.fee || Math.round(state.marketValue * random(85, 130) / 100);
  return {
    week: state.week,
    season: state.season,
    journalist: journalist.name,
    tag: journalist.tag,
    status,
    player: state.profile.name,
    from: state.club,
    to: offer.club,
    fee,
    text: confirmed
      ? `${journalist.name}: ${state.profile.name} sera nuevo jugador de ${offer.club}. Acuerdo total con ${state.club}.`
      : `${journalist.name}: ${offer.club} consulto condiciones por ${state.profile.name}. Todavia no hay acuerdo con ${state.club}.`
  };
}

function pushTransferRumor(rumor, publishNews = false) {
  if (!rumor) return;
  state.transferRumors = [rumor, ...(state.transferRumors || [])].slice(0, 12);
  if (publishNews) addNews(rumor.text);
}

function generateTransferRumors(count = 2, publishNews = false) {
  if (!state.transferRumors) state.transferRumors = [];
  for (let i = 0; i < count; i += 1) {
    pushTransferRumor(makeTransferRumor(Math.random() < 0.18 ? "confirmed" : "rumor"), publishNews && i === 0);
  }
}

function randomTransferSocial() {
  const rumor = state.transferRumors?.length ? state.transferRumors[0] : makeTransferRumor();
  if (!state.transferRumors?.length) pushTransferRumor(rumor);
  const isPlayerRumor = rumor.player === state.profile?.name;
  return {
    author: rumor.journalist,
    tag: rumor.tag || "Mercado",
    text: isPlayerRumor
      ? `${rumor.text} El entorno del jugador no quiere apurarse.`
      : `${rumor.text} El mercado se mueve y los clubes empiezan a ajustar sus planteles.`,
    options: [
      { text: "Mantener perfil bajo.", reputation: 4, coach: 2, morale: 1 },
      { text: "Darle like y alimentar el rumor.", popularity: 7, reputation: -2, coach: -2 },
      { text: "Responder que solo importa el proximo partido.", reputation: 3, popularity: 2, morale: 2 }
    ]
  };
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

  const activeCategory = activeSkillCategory();
  const categoryNodes = skillNodesForCategory(activeCategory.id);
  const selectedNode = selectedSkillNode(categoryNodes);
  if (selectedNode && state.selectedSkillId !== selectedNode.id) state.selectedSkillId = selectedNode.id;
  const unlockedInCategory = categoryNodes.filter((node) => state.unlockedSkills.includes(node.id)).length;
  const buttonDisabled = !selectedNode
    || state.unlockedSkills.includes(selectedNode.id)
    || !skillReqsMet(selectedNode)
    || state.skillPoints < selectedNode.cost
    || state.retired;

  $("#skillTree").innerHTML = `<div class="attribute-skill-shell">
    <header class="attribute-skill-head">
      <div>
        <span>Atributos</span>
        <strong>${state.skillPoints} puntos de habilidad</strong>
      </div>
      <p>${activeCategory.desc}</p>
    </header>
    <div class="skill-tabs">
      ${skillCategories.map((category) => {
        const allowed = !category.positions || category.positions.includes(state.profile.position);
        return `<button class="${category.id === activeCategory.id ? "active" : ""}" data-skill-tab="${category.id}" ${!allowed ? "disabled" : ""}>${category.label}</button>`;
      }).join("")}
    </div>
    <div class="skill-tree-stage">
      <div class="skill-map">
        ${categoryNodes.length ? skillConnectionSvg(categoryNodes) : ""}
        ${categoryNodes.length ? categoryNodes.map((node) => {
          const status = skillNodeState(node);
          const selected = selectedNode?.id === node.id;
          return `<button class="skill-map-node ${status} ${selected ? "selected" : ""}" data-skill-select="${node.id}" style="--x:${node.x}%; --y:${node.y}%;" aria-label="${node.title}">
            <span>${node.icon || node.title.slice(0, 2).toUpperCase()}</span>
            <small>${state.unlockedSkills.includes(node.id) ? "1/1" : "0/1"}</small>
          </button>`;
        }).join("") : `<div class="skill-empty">
          <strong>Porteria disponible para arqueros</strong>
          <p>Esta rama se activa al crear una carrera como POR.</p>
        </div>`}
      </div>
      <aside class="skill-detail">
        ${selectedNode ? `<span>${activeCategory.label} - ${unlockedInCategory}/${categoryNodes.length}</span>
          <h3>${selectedNode.title}</h3>
          <p>${selectedNode.desc}</p>
          <strong class="skill-cost">Coste: ${selectedNode.cost}</strong>
          <div class="skill-detail-bars">${skillDetailBars(selectedNode)}</div>
          <small>${skillBoostText(selectedNode)}</small>
          <button data-skill="${selectedNode.id}" ${buttonDisabled ? "disabled" : ""}>${skillActionLabel(selectedNode)}</button>`
        : `<span>${activeCategory.label}</span>
          <h3>Sin mejoras para esta posicion</h3>
          <p>Cambia de rama para seguir mejorando tu jugador.</p>`}
      </aside>
    </div>
  </div>`;

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
  const statCards = [
    ["Modo", matchModeLabel(details.mode)],
    ["Media", details.rating],
    ["Resultado", `${details.teamGoals ?? "-"}-${details.rivalGoals ?? "-"}`],
    ["Posesion", details.teamStats ? `${details.teamStats.possession}%` : "-"],
    ["Tiros", details.shots],
    ["Pases clave", details.keyPasses],
    ["Entradas", details.tackles],
    ["Atajadas", details.saves],
    ["Tarjetas", `${details.yellowCard ? "A" : "0"}${details.redCard ? " / R" : ""}`]
  ].map(([label, value]) => `<div class="stat-card"><span>${label}</span><strong>${value}</strong></div>`).join("");
  const teamTop = details.teamRatings?.slice(0, 3).map((player) => `<p><strong>${player.rating}</strong> ${player.name}</p>`).join("") || "";
  const rivalTop = details.rivalRatings?.slice(0, 3).map((player) => `<p><strong>${player.rating}</strong> ${player.name}</p>`).join("") || "";
  $("#matchStatsPanel").innerHTML = `${statCards}
    <div class="stat-card match-performers"><span>Figuras propias</span>${teamTop || "<p>Sin datos</p>"}</div>
    <div class="stat-card match-performers"><span>Figuras rivales</span>${rivalTop || "<p>Sin datos</p>"}</div>`;
}

function renderNews() {
  $("#newsFeed").innerHTML = state.news.slice(-8).reverse().map((item) => `<p>${item}</p>`).join("");
}

function renderSocial() {
  if (!state.socialQueue.length) state.socialQueue.push(randomSocial());
  const respondedToday = state.socialRespondedDate === todayKey();
  const limitCard = `<div class="social-limit ${respondedToday ? "used" : ""}">
    <strong>${respondedToday ? "Respuesta diaria usada" : "Respuesta diaria disponible"}</strong>
    <p>${respondedToday ? "Ya respondiste hoy. Puedes leer rumores, pero no intervenir hasta manana." : "Elige una sola respuesta para cuidar tu imagen publica."}</p>
  </div>`;
  $("#socialFeed").innerHTML = limitCard + state.socialQueue.map((post, postIndex) => `
    <div class="social-post ${respondedToday ? "answered" : ""}">
      <header>
        <strong>${post.author}</strong>
        ${post.tag ? `<span>${post.tag}</span>` : ""}
      </header>
      <p>${post.text}</p>
      <div class="social-actions">
        ${post.options.map((option, optionIndex) => `<button data-social="${postIndex}:${optionIndex}" ${respondedToday ? "disabled" : ""}>${option.text}</button>`).join("")}
      </div>
    </div>
  `).join("");
}

function renderMarket() {
  const contractType = state.loan ? `Prestado desde ${state.loan.parentClub}` : state.contract.type;
  const window = transferWindowStatus();
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
    <div>
      <span>Ventana</span>
      <strong>${window.label}</strong>
      <p>${window.description}</p>
    </div>
  `;

  const agentBtn = $("#agentBtn");
  if (agentBtn) {
    agentBtn.disabled = state.retired || !window.open;
    agentBtn.textContent = window.open ? "Hablar con agente" : "Mercado cerrado";
    agentBtn.title = window.open ? "" : window.description;
  }

  const rumorHtml = state.transferRumors?.length
    ? `<div class="transfer-rumor-list">
        <h4>Rumores y movimientos de otros equipos</h4>
        ${state.transferRumors.slice(0, 5).map((rumor) => `
          <div class="transfer-rumor ${rumor.status === "confirmed" ? "confirmed" : ""}">
            <strong>${rumor.journalist}</strong>
            <p>${rumor.text}</p>
            <span>${rumor.status === "confirmed" ? "Confirmado" : "Rumor"} - T${rumor.season} S${rumor.week}</span>
          </div>
        `).join("")}
      </div>`
    : `<div class="transfer-rumor-list"><h4>Rumores y movimientos de otros equipos</h4><p>No hay rumores fuertes por ahora.</p></div>`;

  const offersHtml = state.offers.length
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
        <p class="offer-details">${offer.window || window.label} - vence semana ${offer.deadlineWeek || (window.id === "winter" ? 24 : 6)}${offer.fee ? ` - valor de operacion ${valueText(offer.fee)}` : ""}${offer.fit ? ` - encaje ${offer.fit}/100` : ""}</p>
        ${offer.message ? `<p class="offer-note">${offer.message}</p>` : ""}
        <div class="offer-actions">
          <button data-offer="${index}" class="primary">Aceptar</button>
          <button data-negotiate="${index}" ${offer.locked || offer.type === "loan" ? "disabled" : ""}>Contraoferta</button>
          <button data-reject="${index}">Rechazar</button>
        </div>
      </div>`;
    }).join("")
    : `<div class="offer-card"><p>${window.open ? "No hay ofertas activas. Tu agente puede sondear clubes si tu reputacion sube." : "No hay ofertas activas porque el mercado esta cerrado. Los clubes solo pueden seguirte o filtrar rumores."}</p></div>`;

  $("#offersList").innerHTML = rumorHtml + offersHtml;

  $("#sponsorsList").innerHTML = availableSponsors().map((sponsor) => {
    const signed = state.sponsors.includes(sponsor.id);
    const eligible = sponsorRequirementMet(sponsor);
    const bonusText = [
      sponsor.goalBonus ? `gol +${moneyText(sponsor.goalBonus)}` : "",
      sponsor.assistBonus ? `asistencia +${moneyText(sponsor.assistBonus)}` : "",
      sponsor.cleanSheetBonus ? `valla +${moneyText(sponsor.cleanSheetBonus)}` : "",
      sponsor.ratingBonus ? `media 8+ +${moneyText(sponsor.ratingBonus)}` : "",
      sponsor.followerBonus ? `seguidores +${compact(sponsor.followerBonus)}` : ""
    ].filter(Boolean).join(" - ");
    return `<div class="offer-card sponsor-card ${signed ? "signed" : ""}">
    <header><h3>${sponsor.name}</h3><strong>${moneyText(sponsor.pay)}</strong></header>
    <p>${sponsor.effect}</p>
    <p class="offer-details">${sponsor.tier} - requiere popularidad ${sponsor.minPop}${sponsor.minRep ? ` y reputacion ${sponsor.minRep}` : ""}${bonusText ? ` - ${bonusText}` : ""}</p>
    <button data-sponsor="${sponsor.id}" ${signed || !eligible ? "disabled" : ""}>${signed ? "Firmado" : eligible ? "Firmar" : "Bloqueado"}</button>
  </div>`;
  }).join("");

  $("#lifestyleList").innerHTML = lifestyleItems.map((item) => `<div class="offer-card">
    <header><h3>${item.title}</h3><strong>${moneyText(item.cost)}</strong></header>
    <p>${item.effect}</p>
    <button data-lifestyle="${item.id}" ${state.lifestyle.includes(item.id) || state.money < item.cost || state.popularity < item.minPop ? "disabled" : ""}>${state.lifestyle.includes(item.id) ? "Comprado" : "Comprar"}</button>
  </div>`).join("");
}

function availableSponsors() {
  return sponsorDeals.filter((item) => item.tier !== "Local" || state.sponsors.includes(item.id));
}

function sponsorRequirementMet(sponsor) {
  return state.popularity >= (sponsor.minPop || 0) && state.reputation >= (sponsor.minRep || 0);
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

function matchSquad(clubName, includeUser = false) {
  const base = playersForClub(clubName, includeUser ? 10 : 11).map((player) => ({
    name: player.name,
    pos: player.pos || "Jugador",
    base: player.rating || 72
  }));
  const fillers = ["POR", "LD", "DFC", "LI", "MCD", "MC", "MCO", "ED", "EI", "DC"].map((pos, index) => ({
    name: `${pos} ${clubName.split(" ")[0]} ${index + 1}`,
    pos,
    base: 66 + random(0, 10)
  }));
  const squad = [...base, ...fillers].slice(0, includeUser ? 10 : 11);
  if (includeUser) {
    squad.unshift({ name: state.profile.name, pos: state.profile.position, base: overall(), user: true });
  }
  return squad.slice(0, 11);
}

function pickPerformer(squad, avoidUser = false) {
  const pool = avoidUser ? squad.filter((player) => !player.user) : squad;
  return pool[random(0, Math.max(0, pool.length - 1))] || squad[0];
}

function pickDifferentPerformer(squad, excluded = [], avoidUser = false) {
  const blocked = new Set(excluded.filter(Boolean).map((player) => player.name));
  const pool = squad.filter((player) => (!avoidUser || !player.user) && !blocked.has(player.name));
  return pool[random(0, Math.max(0, pool.length - 1))] || pickPerformer(squad, avoidUser);
}

function playerRating(base, teamMod = 0, userBoost = 0) {
  return clamp(Number((5.2 + base / 34 + teamMod + userBoost + random(-8, 10) / 10).toFixed(1)), 4.0, 10.0);
}

function buildIndividualRatings(teamSquad, rivalSquad, resultMod, rivalMod, userRating) {
  const teamRatings = teamSquad.map((player) => ({
    ...player,
    rating: player.user ? userRating : playerRating(player.base, resultMod)
  })).sort((a, b) => b.rating - a.rating);
  const rivalRatings = rivalSquad.map((player) => ({
    ...player,
    rating: playerRating(player.base, rivalMod)
  })).sort((a, b) => b.rating - a.rating);
  return { teamRatings, rivalRatings };
}

function buildMatchTimeline({ teamGoals, rivalGoals, goals, assists, yellowCard, redCard, saves, mode, teamSquad, rivalSquad, matchCompetition }) {
  const events = [];
  const usedMinutes = new Set();
  const nextMinute = (min = 2, max = 90) => {
    let minute = random(min, max);
    while (usedMinutes.has(minute)) minute = clamp(minute + 1, min, 90);
    usedMinutes.add(minute);
    return minute;
  };
  events.push({ minute: 1, type: "kickoff", text: `Arranca ${matchCompetition}. ${state.club} intenta imponer ritmo desde el primer pase.` });
  const userPlayer = teamSquad.find((player) => player.user);
  const teamGoalEvents = [];
  const userGoals = Math.min(goals, teamGoals);
  const userAssists = Math.min(assists, Math.max(0, teamGoals - userGoals));
  for (let i = 0; i < userGoals; i += 1) {
    teamGoalEvents.push({
      scorer: userPlayer,
      assister: Math.random() < 0.55 ? pickDifferentPerformer(teamSquad, [userPlayer], true) : null
    });
  }
  for (let i = 0; i < userAssists; i += 1) {
    const scorer = pickDifferentPerformer(teamSquad, [userPlayer], true);
    teamGoalEvents.push({ scorer, assister: userPlayer });
  }
  while (teamGoalEvents.length < teamGoals) {
    const scorer = pickPerformer(teamSquad, true);
    const assister = Math.random() < 0.55 ? pickDifferentPerformer(teamSquad, [scorer], true) : null;
    teamGoalEvents.push({ scorer, assister });
  }
  teamGoalEvents.forEach(({ scorer, assister }) => {
    events.push({
      minute: nextMinute(8, 86),
      type: "goal",
      text: `Gol de ${state.club}: ${scorer?.name || state.profile.name} define ${assister ? `tras pase de ${assister.name}` : "despues de una jugada colectiva"}.`
    });
  });
  for (let i = 0; i < rivalGoals; i += 1) {
    const scorer = pickPerformer(rivalSquad);
    const assister = Math.random() < 0.48 ? pickDifferentPerformer(rivalSquad, [scorer]) : null;
    events.push({
      minute: nextMinute(10, 88),
      type: "goal-against",
      text: `Gol de ${state.nextOpponent}: ${scorer.name}${assister ? ` recibe de ${assister.name} y` : ""} castiga una desconcentracion defensiva.`
    });
  }
  if (saves) {
    events.push({ minute: nextMinute(18, 78), type: "save", text: `${state.profile.name} sostiene al equipo con una atajada clave abajo.` });
  }
  if (yellowCard) events.push({ minute: nextMinute(22, 74), type: "card", text: `${state.profile.name} ve amarilla por cortar una transicion.` });
  if (redCard) events.push({ minute: nextMinute(35, 82), type: "red", text: `Roja para ${state.profile.name}. El equipo queda condicionado hasta el final.` });
  events.push({
    minute: nextMinute(12, 38),
    type: "chance",
    text: `${pickPerformer(teamSquad).name} prueba desde media distancia y obliga al arquero rival a trabajar.`
  });
  events.push({
    minute: nextMinute(46, 70),
    type: "tactical",
    text: `El cuerpo tecnico ajusta presion y altura defensiva en modo ${matchModeLabel(mode)}.`
  });
  events.push({
    minute: nextMinute(65, 88),
    type: "duel",
    text: `${state.profile.name} gana un duelo importante ante ${pickPerformer(rivalSquad).name}.`
  });
  events.push({ minute: 90, type: "fulltime", text: `Final: ${state.club} ${teamGoals}-${rivalGoals} ${state.nextOpponent}.` });
  return events.sort((a, b) => a.minute - b.minute);
}

function buildTeamStats({ teamGoals, rivalGoals, shots, keyPasses, tackles, saves, rating }) {
  const possession = clamp(Math.round(48 + (rating - 6.5) * 5 + random(-8, 8)), 34, 66);
  const teamShots = clamp(shots + random(teamGoals + 4, teamGoals + 10), teamGoals, 22);
  const rivalShots = clamp(rivalGoals + random(4, 13) - Math.round(tackles / 4) - saves, rivalGoals, 20);
  return {
    possession,
    teamShots,
    rivalShots,
    xg: Number(clamp(teamGoals * 0.72 + teamShots / 9 + keyPasses / 10, 0.2, 4.8).toFixed(1)),
    rivalXg: Number(clamp(rivalGoals * 0.7 + rivalShots / 10, 0.1, 4.6).toFixed(1)),
    recoveries: clamp(tackles + random(12, 34), 8, 52)
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
  const isAttacker = attackingPositions.has(pos);
  const isMid = midfieldPositions.has(pos);
  const isDef = defensivePositions.has(pos);
  const finisherBoost = state.traits.includes("Matador") ? 0.05 : 0;
  const creatorBoost = state.traits.includes("Arquitecto") ? 0.05 : 0;
  const defenderBoost = state.traits.includes("Anticipador") ? 0.06 : 0;
  const rawGoals = isAttacker ? chanceCount((ov + state.attrs.definicion + rating * 8) / 220 + finisherBoost) : chanceCount((ov + rating * 7) / 420);
  const rawAssists = isMid || isAttacker ? chanceCount((ov + state.attrs.pase + state.attrs.vision + rating * 7) / 260 + creatorBoost) : chanceCount((ov + rating * 6) / 520);
  const cleanSheet = isDef && Math.random() < clamp((ov + state.attrs.defensa + state.coach) / 320 + defenderBoost, 0.12, 0.78) ? 1 : 0;
  const teamGoals = clamp(rawGoals + rawAssists + random(0, 2), 0, 5);
  const goals = Math.min(rawGoals, teamGoals);
  const assists = Math.min(rawAssists, Math.max(0, teamGoals - goals));
  const rivalGoals = cleanSheet ? 0 : random(0, 4);
  const won = teamGoals > rivalGoals;
  const drew = teamGoals === rivalGoals;
  const matchCompetition = state.nextCompetition && state.nextCompetition !== "Liga" ? state.nextCompetition : state.league;
  const rivalStar = topPlayersForClub(state.nextOpponent)[0];
  const duelText = rivalStar ? ` Duelo destacado contra ${rivalStar.name}.` : "";
  const shots = isAttacker ? random(goals, goals + 4 + (mode === "full" ? 2 : 0)) : random(0, 2);
  const keyPasses = isMid || isAttacker ? random(assists, assists + 3 + (mode !== "simulate" ? 1 : 0)) : random(0, 1);
  const tackles = isDef || pos === "MC" ? random(2, 7 + (mode === "full" ? 2 : 0)) : random(0, 3);
  const saves = pos === "POR" ? random(cleanSheet ? 2 : 0, cleanSheet ? 7 : 5) : 0;
  const passAccuracy = clamp(Math.round(64 + rating * 3 + state.attrs.pase / 4 + random(-5, 6)), 52, 96);
  const { yellowCard, redCard } = cardOutcome(mode, isDef || pos === "MC");
  const teamSquad = matchSquad(state.club, true);
  const rivalSquad = matchSquad(state.nextOpponent);
  const resultMod = won ? 0.55 : drew ? 0.12 : -0.28;
  const rivalMod = won ? -0.25 : drew ? 0.08 : 0.48;
  const { teamRatings, rivalRatings } = buildIndividualRatings(teamSquad, rivalSquad, resultMod, rivalMod, rating);
  const teamStats = buildTeamStats({ teamGoals, rivalGoals, shots, keyPasses, tackles, saves, rating });
  const timeline = buildMatchTimeline({ teamGoals, rivalGoals, goals, assists, yellowCard, redCard, saves, mode, teamSquad, rivalSquad, matchCompetition });
  const details = { mode, rating, goals, assists, cleanSheet, shots, keyPasses, tackles, saves, passAccuracy, yellowCard, redCard, teamGoals, rivalGoals, teamStats, timeline, teamRatings, rivalRatings };
  updateStats(details);
  state.lastMatchDetails = details;
  completeMatchObjectives(details);
  state.fatigue = clamp(state.fatigue + random(modeFatigue - 4, modeFatigue + 5), 0, 100);
  state.morale = clamp(state.morale + (won ? 8 : drew ? 1 : -7) + goals * 2 + assists, 0, 100);
  state.coach = clamp(state.coach + Math.round((rating - 6.6) * 3), 0, 100);
  state.popularity = clamp(state.popularity + goals * 3 + assists * 2 + (won ? 2 : -1), 0, 100);
  state.reputation = clamp(state.reputation + Math.max(0, Math.round(rating - 6.2)), 0, 100);
  const sponsorFans = sponsorFollowerBonus(details);
  const matchSponsorBonus = sponsorBonus(details);
  const followerGain = Math.round(180 + rating * 80 + goals * 500 + assists * 260 + sponsorFans + (state.lifestyle.includes("styleBrand") ? 260 : 0));
  state.followers += followerGain;
  state.money += state.salary + matchSponsorBonus;
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
  $("#matchResult").innerHTML = `<h3>${state.club} ${teamGoals} - ${rivalGoals} ${state.nextOpponent}</h3>
    <p>${matchCompetition} - ${matchModeLabel(mode)}</p>
    <p>Tu media ${rating}, ${goals} goles, ${assists} asistencias, ${shots} tiros, ${keyPasses} pases clave, ${tackles} entradas${saves ? `, ${saves} atajadas` : ""}${cleanSheet ? ", valla invicta" : ""}.${duelText}</p>
    <div class="match-team-stats">
      <span>Posesion ${teamStats.possession}%</span>
      <span>Tiros ${teamStats.teamShots}-${teamStats.rivalShots}</span>
      <span>xG ${teamStats.xg}-${teamStats.rivalXg}</span>
      <span>Recuperaciones ${teamStats.recoveries}</span>
    </div>
    <div class="match-timeline">
      ${timeline.map((event) => `<div class="match-event ${event.type}"><strong>${event.minute}'</strong><p>${event.text}</p></div>`).join("")}
    </div>
    <div class="match-ratings">
      <div>
        <h4>${state.club}</h4>
        ${teamRatings.slice(0, 5).map((player) => `<p><strong>${player.rating}</strong> ${player.name} <span>${player.pos}</span></p>`).join("")}
      </div>
      <div>
        <h4>${state.nextOpponent}</h4>
        ${rivalRatings.slice(0, 5).map((player) => `<p><strong>${player.rating}</strong> ${player.name} <span>${player.pos}</span></p>`).join("")}
      </div>
    </div>
    <p>${yellowCard ? "Tarjeta amarilla." : ""}${redCard ? " Tarjeta roja y suspension." : ""}${matchSponsorBonus ? ` Bonos de patrocinio: ${moneyText(matchSponsorBonus)}.` : ""}</p>`;
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

function sponsorBonus(details = {}) {
  return state.sponsors.reduce((bonus, id) => {
    const sponsor = sponsorDeals.find((item) => item.id === id);
    if (!sponsor) return bonus;
    const ratingBonus = details.rating >= 8 ? (sponsor.ratingBonus || 0) : 0;
    const cleanBonus = details.cleanSheet ? (sponsor.cleanSheetBonus || 0) : 0;
    const followerMoney = sponsor.followerBonus ? Math.round((sponsor.followerBonus || 0) / 80) : 0;
    return bonus
      + (sponsor.flatBonus || 0)
      + (details.goals || 0) * (sponsor.goalBonus || 0)
      + (details.assists || 0) * (sponsor.assistBonus || 0)
      + ratingBonus
      + cleanBonus
      + followerMoney;
  }, 0);
}

function sponsorFollowerBonus(details = {}) {
  if (details.rating < 7.6) return 0;
  return state.sponsors.reduce((sum, id) => {
    const sponsor = sponsorDeals.find((item) => item.id === id);
    return sum + (sponsor?.followerBonus || 0);
  }, 0);
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
  if (Math.random() < 0.68) state.socialQueue = [randomSocial()];
  const window = transferWindowStatus();
  if (window.open) {
    generateTransferRumors(random(2, 4));
    if (state.lastOfferWindow !== transferWindowKey() || Math.random() < 0.28) generateOffers();
  } else {
    const activeExternalOffers = state.offers.filter((offer) => offer.type !== "renewal").length;
    if (activeExternalOffers) addNews("Cerro la ventana de mercado: las ofertas de traspaso y prestamo expiraron.");
    state.offers = state.offers.filter((offer) => offer.type === "renewal");
    if (Math.random() < 0.38) generateTransferRumors(1);
  }
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
  if (!isTransferWindow()) {
    generateTransferRumors(force ? 2 : 1, force);
    if (force) {
      addNews(`Tu agente aviso que no puede presentar ofertas: ${transferWindowStatus().description}`);
      showToast("Mercado cerrado: solo hay rumores y seguimientos.");
    }
    return;
  }
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
  state.lastOfferWindow = transferWindowKey();
  state.offers.forEach((offer) => pushTransferRumor(makePlayerRumor(offer), false));
  if (state.offers.length) addNews(`Tu agente recibio ofertas durante el ${transferWindowStatus().label}.`);
}

function makeClubOffer(club, type = "transfer") {
  const ov = overall();
  const years = type === "loan" ? 1 : random(2, 5);
  const salary = Math.round((club.salary + ov * club.tier * 0.45 + state.reputation / 4) * (type === "loan" ? 0.72 : 1));
  const fit = clamp(Math.round((club.rep + ov + state.reputation + state.popularity) / 4), 45, 98);
  const fee = type === "loan" ? 0 : Math.round(state.marketValue * random(85, 145) / 100);
  const journalist = randomJournalist(state.league?.includes("Argentina") || club.league?.includes("Argentina"));
  return {
    club: club.name,
    league: club.league,
    type,
    salary,
    years,
    fee,
    fit,
    journalist: journalist.name,
    window: transferWindowStatus().label,
    deadlineWeek: transferWindowStatus().id === "winter" ? 24 : 6,
    bonus: type === "loan" ? 0 : Math.round(club.salary * random(6, 16)),
    releaseClause: contractClauseFor({ salary, years, marketValue: state.marketValue, tier: club.tier }),
    negotiations: 0,
    locked: false,
    message: type === "loan"
      ? `El club busca darte minutos y continuidad. Encaje deportivo ${fit}/100.`
      : `Seguimiento confirmado por ${journalist.name}. Encaje deportivo ${fit}/100 y operacion cercana a ${valueText(fee)}.`
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
    const confirmation = makePlayerRumor(offer, "confirmed");
    state.loan = {
      parentClub: state.club,
      parentLeague: state.league,
      parentSalary: state.salary,
      parentYears: state.contractYears,
      untilSeason: state.season + 1
    };
    moveToClub(club, offer, "loan");
    pushTransferRumor(confirmation, true);
    addNews(`Te vas cedido a ${offer.club} por una temporada.`);
  } else {
    const confirmation = makePlayerRumor(offer, "confirmed");
    moveToClub(club, offer, "transfer");
    state.money += offer.bonus;
    pushTransferRumor(confirmation, true);
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

function talkToAgent() {
  if (!isTransferWindow()) {
    generateTransferRumors(2, true);
    addNews(`Tu agente solo puede sondear clubes: ${transferWindowStatus().description}`);
    showToast("Mercado cerrado: no pueden llegar ofertas.");
    render();
    return;
  }
  generateOffers(true);
  generateTransferRumors(2);
  render();
  pulseElement("#tab-market", "panel-flash");
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
  if (state.socialRespondedDate === todayKey()) {
    showToast("Ya respondiste una publicacion hoy.");
    pulseElement("#tab-social", "panel-flash");
    return;
  }
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
  state.socialRespondedDate = todayKey();
  state.socialQueue.splice(postIndex, 1);
  addNews(`Redes: ${option.text}`);
  render();
  pulseElement("#tab-social", "panel-flash");
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
  if (!sponsor || state.sponsors.includes(id) || !sponsorRequirementMet(sponsor)) return;
  state.sponsors.push(id);
  state.money += sponsor.pay;
  state.popularity = clamp(state.popularity + (sponsor.tier === "Elite" ? 7 : 4), 0, 100);
  state.reputation = clamp(state.reputation + (sponsor.tier === "Elite" ? 4 : 2), 0, 100);
  addNews(`Patrocinio firmado con ${sponsor.name}: prima ${moneyText(sponsor.pay)} y bonos por rendimiento.`);
  render();
  pulseElement("#tab-market", "panel-flash");
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
    const startClubButton = target.closest("[data-start-club]");
    if (startClubButton) {
      selectStartingClub(decodeURIComponent(startClubButton.dataset.startClub || ""));
      return;
    }
    const skillTabButton = target.closest("[data-skill-tab]");
    if (skillTabButton) {
      state.skillTreeTab = skillTabButton.dataset.skillTab;
      state.selectedSkillId = "";
      render();
      return;
    }
    const skillSelectButton = target.closest("[data-skill-select]");
    if (skillSelectButton) {
      state.selectedSkillId = skillSelectButton.dataset.skillSelect;
      render();
      return;
    }
    const skillButton = target.closest("[data-skill]");
    if (skillButton) {
      unlockSkill(skillButton.dataset.skill);
      return;
    }
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
  });

  $("#playMatchBtn").addEventListener("click", playMatch);
  $("#matchMode").addEventListener("change", (event) => {
    state.matchMode = event.target.value;
    render();
  });
  $("#restBtn").addEventListener("click", rest);
  $("#advanceWeekBtn").addEventListener("click", advanceWeek);
  $("#dailyRewardBtn").addEventListener("click", claimDailyReward);
  $("#agentBtn").addEventListener("click", talkToAgent);
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
