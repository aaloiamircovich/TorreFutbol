const fs = require("fs");
const path = require("path");
const axios = require("axios");
const cheerio = require("cheerio");

const ROOT = path.resolve(__dirname, "..");
const OUT_FILE = path.join(ROOT, "modes", "carrera-jugador", "career-data.js");
const BASE = "https://www.transfermarkt.com";

const competitions = [
  { id: "laliga", name: "LaLiga", country: "Espana", level: 5, code: "ES1", slug: "laliga" },
  { id: "premier-league", name: "Premier League", country: "Inglaterra", level: 5, code: "GB1", slug: "premier-league" },
  { id: "serie-a", name: "Serie A", country: "Italia", level: 4, code: "IT1", slug: "serie-a" },
  { id: "bundesliga", name: "Bundesliga", country: "Alemania", level: 4, code: "L1", slug: "bundesliga" },
  { id: "ligue-1", name: "Ligue 1", country: "Francia", level: 4, code: "FR1", slug: "ligue-1" },
  { id: "primeira-liga", name: "Liga Portugal", country: "Portugal", level: 3, code: "PO1", slug: "liga-portugal" },
  { id: "saudi-pro-league", name: "Saudi Pro League", country: "Arabia Saudita", level: 4, code: "SA1", slug: "saudi-pro-league" },
  { id: "argentina", name: "Liga Profesional Argentina", country: "Argentina", level: 3, code: "AR1N", slug: "primera-division" },
  { id: "brasileirao", name: "Brasileirao Serie A", country: "Brasil", level: 3, code: "BRA1", slug: "campeonato-brasileiro-serie-a" },
  { id: "mls", name: "Major League Soccer", country: "Estados Unidos", level: 2, code: "MLS1", slug: "major-league-soccer" },
  { id: "eredivisie", name: "Eredivisie", country: "Paises Bajos", level: 3, code: "NL1", slug: "eredivisie" },
  { id: "liga-mx", name: "Liga MX", country: "Mexico", level: 2, code: "MEXA", slug: "liga-mx-apertura" },
  { id: "championship", name: "Championship", country: "Inglaterra", level: 2, division: 2, code: "GB2", slug: "championship" },
  { id: "belgian-pro-league", name: "Belgian Pro League", country: "Belgica", level: 2, code: "BE1", slug: "jupiler-pro-league" },
  { id: "scottish-premiership", name: "Scottish Premiership", country: "Escocia", level: 2, code: "SC1", slug: "scottish-premiership" },
  { id: "super-lig", name: "Super Lig", country: "Turquia", level: 3, code: "TR1", slug: "super-lig" },
  { id: "austrian-bundesliga", name: "Austrian Bundesliga", country: "Austria", level: 2, code: "A1", slug: "bundesliga" },
  { id: "swiss-super-league", name: "Swiss Super League", country: "Suiza", level: 2, code: "C1", slug: "super-league" },
  { id: "danish-superliga", name: "Danish Superliga", country: "Dinamarca", level: 2, code: "DK1", slug: "superligaen" },
  { id: "greek-super-league", name: "Greek Super League", country: "Grecia", level: 2, code: "GR1", slug: "super-league-1" },
  { id: "laliga-hypermotion", name: "LaLiga Hypermotion", country: "Espana", level: 2, division: 2, code: "ES2", slug: "laliga2" },
  { id: "serie-b", name: "Serie B", country: "Italia", level: 2, division: 2, code: "IT2", slug: "serie-b" },
  { id: "2-bundesliga", name: "2. Bundesliga", country: "Alemania", level: 2, division: 2, code: "L2", slug: "2-bundesliga" },
  { id: "ligue-2", name: "Ligue 2", country: "Francia", level: 2, division: 2, code: "FR2", slug: "ligue-2" },
  { id: "liga-portugal-2", name: "Liga Portugal 2", country: "Portugal", level: 1, division: 2, code: "PO2", slug: "liga-portugal-2" },
  { id: "saudi-first-division", name: "Saudi First Division", country: "Arabia Saudita", level: 1, division: 2, code: "SA2", slug: "saudi-first-division-league" },
  { id: "primera-nacional", name: "Primera Nacional", country: "Argentina", level: 1, division: 2, code: "AR2N", slug: "primera-nacional" },
  { id: "brasileirao-serie-b", name: "Brasileirao Serie B", country: "Brasil", level: 2, division: 2, code: "BRA2", slug: "campeonato-brasileiro-serie-b" },
  { id: "usl-championship", name: "USL Championship", country: "Estados Unidos", level: 1, division: 2, code: "USL", slug: "usl-championship" },
  { id: "eerste-divisie", name: "Eerste Divisie", country: "Paises Bajos", level: 1, division: 2, code: "NL2", slug: "eerste-divisie" },
  { id: "liga-expansion-mx", name: "Liga de Expansion MX", country: "Mexico", level: 1, division: 2, code: "MEX2", slug: "liga-de-expansion-mx-apertura" },
  { id: "challenger-pro-league", name: "Challenger Pro League", country: "Belgica", level: 1, division: 2, code: "BE2", slug: "challenger-pro-league" },
  { id: "scottish-championship", name: "Scottish Championship", country: "Escocia", level: 1, division: 2, code: "SC2", slug: "scottish-championship" },
  { id: "tff-1-lig", name: "TFF 1. Lig", country: "Turquia", level: 1, division: 2, code: "TR2", slug: "1-lig" },
  { id: "austrian-2-liga", name: "Austrian 2. Liga", country: "Austria", level: 1, division: 2, code: "A2", slug: "2-liga" },
  { id: "swiss-challenge-league", name: "Swiss Challenge League", country: "Suiza", level: 1, division: 2, code: "C2", slug: "challenge-league" },
  { id: "danish-1st-division", name: "Danish 1st Division", country: "Dinamarca", level: 1, division: 2, code: "DK2", slug: "1-division" },
  { id: "greek-super-league-2", name: "Greek Super League 2", country: "Grecia", level: 1, division: 2, code: "GR2", slug: "super-league-2" }
];

const internationalCompetitions = [
  { id: "champions-league", name: "UEFA Champions League", region: "Europa", level: 5, code: "CL", slug: "uefa-champions-league" },
  { id: "europa-league", name: "UEFA Europa League", region: "Europa", level: 4, code: "EL", slug: "europa-league" },
  { id: "copa-libertadores", name: "Copa Libertadores", region: "CONMEBOL", level: 4, code: "CLI", slug: "copa-libertadores" },
  { id: "copa-sudamericana", name: "Copa Sudamericana", region: "CONMEBOL", level: 3, code: "CS", slug: "copa-sudamericana" }
];

const teamAliases = {
  "FC Barcelona": "Barcelona",
  "Atlético de Madrid": "Atletico de Madrid",
  "Athletic Club": "Athletic Bilbao",
  "Real Betis Balompié": "Betis",
  "AC Milan": "Milan",
  "Inter Milan": "Inter",
  "Borussia Dortmund": "Dortmund",
  "Bayer 04 Leverkusen": "Bayer Leverkusen",
  "Paris Saint-Germain": "PSG",
  "Olympique Marseille": "Marseille",
  "Olympique Lyon": "Lyon",
  "AS Monaco": "Monaco",
  "Al-Hilal SFC": "Al Hilal",
  "Al-Nassr FC": "Al Nassr",
  "Al-Ittihad Club": "Al Ittihad",
  "Al-Ahli SFC": "Al Ahli",
  "São Paulo FC": "Sao Paulo",
  "Grêmio FBPA": "Gremio",
  "CA River Plate": "River Plate",
  "Club Atlético River Plate": "River Plate",
  "Club Atlético Boca Juniors": "Boca Juniors",
  "Inter Miami CF": "Inter Miami",
  "Los Angeles FC": "Los Angeles FC",
  "Club América": "Club America",
  "CF Monterrey": "Monterrey",
  "Tigres UANL": "Tigres",
  "CD Guadalajara": "Chivas",
  "PSV Eindhoven": "PSV",
  "AZ Alkmaar": "AZ Alkmaar"
};

const positionMap = [
  [/goalkeeper/i, "POR"],
  [/right-back|right wing-back/i, "LD"],
  [/left-back|left wing-back/i, "LI"],
  [/centre-back|center-back/i, "DFC"],
  [/defensive midfield|holding midfield/i, "MCD"],
  [/central midfield|midfield/i, "MC"],
  [/attacking midfield|second striker/i, "MCO"],
  [/left winger|left midfield/i, "EI"],
  [/right winger|right midfield/i, "ED"],
  [/centre-forward|center-forward|striker/i, "DC"]
];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const clean = (value) => String(value || "").replace(/\s+/g, " ").trim();

function absoluteUrl(href) {
  if (!href) return "";
  return href.startsWith("http") ? href : `${BASE}${href}`;
}

function normalizeTeamName(name) {
  return teamAliases[clean(name)] || clean(name);
}

function positionCode(position) {
  const found = positionMap.find(([pattern]) => pattern.test(position));
  return found ? found[1] : "MC";
}

function parseMarketValue(valueText) {
  const value = clean(valueText)
    .replace("€", "")
    .replace("m", "M")
    .replace("k", "K");
  const match = value.match(/([\d.]+)\s*([MK])?/i);
  if (!match) return 0;
  const number = Number(match[1]);
  if (!Number.isFinite(number)) return 0;
  const unit = (match[2] || "").toUpperCase();
  if (unit === "M") return number * 1000000;
  if (unit === "K") return number * 1000;
  return number;
}

function ratingFromMarketValue(marketValue, leagueLevel) {
  if (!marketValue) return 66 + leagueLevel * 2;
  const millions = marketValue / 1000000;
  const rating = 63 + Math.log10(millions + 1) * 15 + leagueLevel * 1.4;
  return Math.max(60, Math.min(93, Math.round(rating)));
}

async function fetchHtml(url) {
  let lastError = null;
  for (let attempt = 1; attempt <= 4; attempt += 1) {
    try {
      const response = await axios.get(url, {
        headers: {
          "User-Agent": "Mozilla/5.0 TorreFutbolCareerImporter/1.0",
          "Accept-Language": "en-US,en;q=0.9,es;q=0.8"
        },
        timeout: 30000
      });
      return response.data;
    } catch (error) {
      lastError = error;
      const status = error.response?.status;
      if (![429, 500, 502, 503, 504].includes(status) && error.code !== "ECONNABORTED") break;
      await sleep(900 * attempt);
    }
  }
  throw lastError;
}

function competitionUrl(competition) {
  if (competition.region) {
    return `${BASE}/${competition.slug}/teilnehmer/pokalwettbewerb/${competition.code}`;
  }
  const key = competition.region ? "pokalwettbewerb" : "wettbewerb";
  return `${BASE}/${competition.slug}/startseite/${key}/${competition.code}`;
}

function squadUrlFromTeamHref(href) {
  const absolute = absoluteUrl(href);
  return absolute.replace("/startseite/", "/kader/");
}

async function fetchTeams(competition) {
  const html = await fetchHtml(competitionUrl(competition));
  const $ = cheerio.load(html);
  const teams = new Map();
  $("a[href*='/startseite/verein/']").each((_, link) => {
    const name = normalizeTeamName($(link).text());
    const href = $(link).attr("href");
    if (!name || !href || name.length < 2) return;
    if (!teams.has(name)) teams.set(name, { name, transfermarkt: squadUrlFromTeamHref(href) });
  });
  return Array.from(teams.values());
}

function parsePlayerRow($, row, leagueLevel) {
  const playerLink = $(row).find("a[href*='/profil/spieler/']").first();
  const name = clean(playerLink.text());
  if (!name) return null;
  const inlineRows = $(row).find("table.inline-table tr");
  const position = clean(inlineRows.eq(1).text()) || clean($(row).find("td").eq(4).text());
  const nat = clean($(row).find("img.flaggenrahmen").first().attr("title")) || "";
  const marketValueText = clean($(row).find("td.rechts.hauptlink").last().text()) || clean($(row).find("td.rechts").last().text());
  const marketValue = parseMarketValue(marketValueText);
  return {
    name,
    pos: positionCode(position),
    rating: ratingFromMarketValue(marketValue, leagueLevel),
    nat
  };
}

async function fetchSquad(team, leagueLevel) {
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    const html = await fetchHtml(team.transfermarkt);
    const $ = cheerio.load(html);
    const players = [];
    $("table.items tbody tr.odd, table.items tbody tr.even").each((_, row) => {
      const player = parsePlayerRow($, row, leagueLevel);
      if (player) players.push(player);
    });
    if (players.length) return players;
    await sleep(800 * attempt);
  }
  return [];
}

function teamRep(players, leagueLevel) {
  const top = players.slice().sort((a, b) => b.rating - a.rating).slice(0, 8);
  const avg = top.reduce((sum, player) => sum + player.rating, 0) / Math.max(1, top.length);
  return Math.max(45, Math.min(97, Math.round(avg + leagueLevel * 2)));
}

function teamSalary(players, leagueLevel) {
  const rep = teamRep(players, leagueLevel);
  return Math.max(12, Math.round(rep * leagueLevel * 0.36));
}

async function buildDatabase() {
  const leagues = [];
  for (const competition of competitions) {
    console.log(`Liga: ${competition.name}`);
    const teams = await fetchTeams(competition);
    const league = { id: competition.id, name: competition.name, country: competition.country, level: competition.level, division: competition.division || 1, teams: [] };
    for (const team of teams) {
      await sleep(450);
      try {
        const players = await fetchSquad(team, competition.level);
        if (!players.length) {
          console.warn(`  sin jugadores: ${team.name}`);
          continue;
        }
        league.teams.push({
          name: team.name,
          transfermarkt: team.transfermarkt,
          rep: teamRep(players, competition.level),
          salary: teamSalary(players, competition.level),
          players
        });
        console.log(`  ${team.name}: ${players.length}`);
      } catch (error) {
        console.warn(`  error ${team.name}: ${error.message}`);
      }
    }
    leagues.push(league);
  }
  return leagues;
}

function domesticTeamMap(leagues) {
  const map = new Map();
  leagues.forEach((league) => {
    league.teams.forEach((team) => {
      map.set(normalizeTeamName(team.name), { leagueId: league.id, league: league.name, team });
    });
  });
  return map;
}

async function buildInternationalDatabase(leagues) {
  const domesticMap = domesticTeamMap(leagues);
  const tournaments = [];
  for (const competition of internationalCompetitions) {
    console.log(`Competicion: ${competition.name}`);
    const teams = await fetchTeams(competition);
    const tournament = { id: competition.id, name: competition.name, region: competition.region, level: competition.level, teams: [] };
    for (const team of teams) {
      const normalizedName = normalizeTeamName(team.name);
      const domestic = domesticMap.get(normalizedName);
      if (domestic) {
        tournament.teams.push({
          name: normalizedName,
          transfermarkt: team.transfermarkt,
          domesticLeagueId: domestic.leagueId,
          domesticLeague: domestic.league
        });
        console.log(`  ${normalizedName}: usa ${domestic.league}`);
        continue;
      }
      await sleep(450);
      try {
        const players = await fetchSquad(team, competition.level);
        tournament.teams.push({
          name: normalizedName,
          transfermarkt: team.transfermarkt,
          rep: teamRep(players, competition.level),
          salary: teamSalary(players, competition.level),
          players
        });
        console.log(`  ${normalizedName}: ${players.length}`);
      } catch (error) {
        console.warn(`  error ${normalizedName}: ${error.message}`);
      }
    }
    tournaments.push(tournament);
  }
  return tournaments;
}

function writeDatabase(leagues, tournaments) {
  const header = "// Generado desde Transfermarkt con scripts/import-career-transfermarkt.js.\n";
  const body = `const careerLeagueDatabase = ${JSON.stringify(leagues, null, 2)};\n\nconst careerCompetitionDatabase = ${JSON.stringify(tournaments, null, 2)};\n`;
  fs.writeFileSync(OUT_FILE, header + body, "utf8");
}

buildDatabase()
  .then(async (leagues) => {
    const tournaments = await buildInternationalDatabase(leagues);
    writeDatabase(leagues, tournaments);
    const teams = leagues.reduce((sum, league) => sum + league.teams.length, 0);
    const players = leagues.reduce((sum, league) => sum + league.teams.reduce((teamSum, team) => teamSum + team.players.length, 0), 0);
    const cupTeams = tournaments.reduce((sum, tournament) => sum + tournament.teams.length, 0);
    const cupPlayers = tournaments.reduce((sum, tournament) => sum + tournament.teams.reduce((teamSum, team) => teamSum + (team.players?.length || 0), 0), 0);
    console.log(`OK: ${leagues.length} ligas, ${teams} equipos, ${players} jugadores, ${tournaments.length} copas, ${cupTeams} equipos en copas, ${cupPlayers} jugadores extra de copas`);
  })
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
