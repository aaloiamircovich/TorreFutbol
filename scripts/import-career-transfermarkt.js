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
  { id: "liga-mx", name: "Liga MX", country: "Mexico", level: 2, code: "MEXA", slug: "liga-mx-apertura" }
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
  [/right-back/i, "LD"],
  [/left-back/i, "LI"],
  [/centre-back|center-back/i, "DFC"],
  [/defensive midfield/i, "MC"],
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
  const response = await axios.get(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 TorreFutbolCareerImporter/1.0",
      "Accept-Language": "en-US,en;q=0.9,es;q=0.8"
    },
    timeout: 30000
  });
  return response.data;
}

function competitionUrl(competition) {
  return `${BASE}/${competition.slug}/startseite/wettbewerb/${competition.code}`;
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
  const html = await fetchHtml(team.transfermarkt);
  const $ = cheerio.load(html);
  const players = [];
  $("table.items tbody tr.odd, table.items tbody tr.even").each((_, row) => {
    const player = parsePlayerRow($, row, leagueLevel);
    if (player) players.push(player);
  });
  return players;
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
    const league = { id: competition.id, name: competition.name, country: competition.country, level: competition.level, teams: [] };
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

function writeDatabase(leagues) {
  const header = "// Generado desde Transfermarkt con scripts/import-career-transfermarkt.js.\n";
  const body = `const careerLeagueDatabase = ${JSON.stringify(leagues, null, 2)};\n`;
  fs.writeFileSync(OUT_FILE, header + body, "utf8");
}

buildDatabase()
  .then((leagues) => {
    writeDatabase(leagues);
    const teams = leagues.reduce((sum, league) => sum + league.teams.length, 0);
    const players = leagues.reduce((sum, league) => sum + league.teams.reduce((teamSum, team) => teamSum + team.players.length, 0), 0);
    console.log(`OK: ${leagues.length} ligas, ${teams} equipos, ${players} jugadores`);
  })
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
