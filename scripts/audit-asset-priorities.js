const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const REPORT = path.join(ROOT, "reports", "asset-priorities.md");

function read(file) { return fs.readFileSync(path.join(ROOT, file), "utf8"); }
function norm(value) { return String(value || "").replace(/\s+/g, " ").trim(); }
function add(map, name, source, weight = 1) {
  name = norm(name);
  if (!name) return;
  if (!map.has(name)) map.set(name, { name, count: 0, sources: new Set() });
  const item = map.get(name);
  item.count += weight;
  item.sources.add(source);
}
function run(file, vars) {
  const context = {};
  vm.createContext(context);
  vm.runInContext(`${read(file)}\n${vars.map((name) => `this.${name}=typeof ${name}!=="undefined"?${name}:undefined;`).join("\n")}`, context, { timeout: 5000 });
  return context;
}
function cleanClub(raw) {
  let value = norm(raw);
  if (/^ð/.test(value)) value = value.replace(/^.*?\s+(?=[A-ZÁÉÍÓÚÜÑA-Za-z])/, "");
  return value.replace(/^[^A-Za-zÁÉÍÓÚÜÑ0-9]+/, "").trim();
}
function loadAssets() {
  const context = {};
  vm.createContext(context);
  vm.runInContext(`${read("assets/assets-map.js")}\nthis.localPlayerPhotos=localPlayerPhotos;this.localTeamLogos=localTeamLogos;this.localCountryFlags=localCountryFlags;`, context, { timeout: 5000 });
  return context;
}
function hasKey(map, name) {
  return Object.prototype.hasOwnProperty.call(map || {}, name);
}
function topMissing(map, coveredMaps, limit) {
  return [...map.values()]
    .filter((item) => !coveredMaps.some((covered) => hasKey(covered, item.name)))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name))
    .slice(0, limit);
}

const assets = loadAssets();
const players = new Map();
const teams = new Map();

try {
  const { categorias } = run("datos.js", ["categorias"]);
  (categorias || []).forEach((category) => (category.respuestas || []).forEach((answer) => add(players, answer.nombre, "torre", 2)));
} catch (error) {}
try {
  const { trayectoriasData } = run("datostrayectoria.js", ["trayectoriasData"]);
  (trayectoriasData || []).forEach((item) => {
    add(players, item.ans, "trayectoria", 4);
    (item.clubs || []).forEach((club) => add(teams, cleanClub(club), "trayectoria", 2));
  });
} catch (error) {}
try {
  const { linkData } = run("datoslink.js", ["linkData"]);
  (linkData || []).forEach((item) => {
    add(players, item.ans, "link", 3);
    (item.teammates || []).forEach((name) => add(players, name, "link", 1));
  });
} catch (error) {}
try {
  const { resultadoData } = run("datosresultado.js", ["resultadoData"]);
  (resultadoData || []).forEach((item) => {
    add(teams, item.home, "resultado", 2);
    add(teams, item.away, "resultado", 2);
  });
} catch (error) {}
try {
  const { squads } = run("modes/torneo-clubes/club-data.js", ["squads"]);
  (squads || []).forEach((squad) => add(teams, squad.country, "torneo-clubes", 3));
} catch (error) {}

const missingPhotos = topMissing(players, [assets.localPlayerPhotos], 35);
const missingLogos = topMissing(teams, [assets.localTeamLogos, assets.localCountryFlags], 35);
const lines = [
  "# Asset priorities",
  "",
  `Generated: ${new Date().toISOString()}`,
  "",
  "## Summary",
  "",
  `- Player-like names counted: ${players.size}`,
  `- Team/country-like names counted: ${teams.size}`,
  `- Local player photo mappings: ${Object.keys(assets.localPlayerPhotos || {}).length}`,
  `- Local logo/flag mappings: ${Object.keys(assets.localTeamLogos || {}).length + Object.keys(assets.localCountryFlags || {}).length}`,
  "",
  "## Priority Player Photos",
  "",
  ...missingPhotos.map((item, index) => `${index + 1}. ${item.name} (${item.count}; ${[...item.sources].join(", ")})`),
  "",
  "## Priority Team Logos / Flags",
  "",
  ...missingLogos.map((item, index) => `${index + 1}. ${item.name} (${item.count}; ${[...item.sources].join(", ")})`),
  "",
  "## Notes",
  "",
  "- Prioritize the top 15 of each list before adding long-tail assets.",
  "- Prefer local optimized SVG/PNG assets and keep paths stable in assets/assets-map.js.",
  "",
];
fs.writeFileSync(REPORT, `${lines.join("\n")}\n`, "utf8");
console.log(`Report: ${path.relative(ROOT, REPORT)}`);
