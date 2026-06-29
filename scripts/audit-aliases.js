const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const REPORT = path.join(ROOT, "reports", "alias-audit.md");
const targets = [
  { file: "datos.js", vars: ["categorias"] },
  { file: "datostrayectoria.js", vars: ["trayectoriasData"] },
  { file: "datoslink.js", vars: ["linkData"] },
  { file: "datoswordle.js", vars: ["wordlePlayers", "wordleData"] },
];
function read(file) { return fs.readFileSync(path.join(ROOT, file), "utf8"); }
function normalize(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
function collect(value, source, items) {
  if (Array.isArray(value)) return value.forEach((item) => collect(item, source, items));
  if (!value || typeof value !== "object") return;
  const answer = value.nombre || value.ans || value.name || value.jugador;
  const aliases = value.alias || value.aliases;
  if (answer && Array.isArray(aliases)) items.push({ source, answer: String(answer), aliases: aliases.map(String) });
  Object.values(value).forEach((item) => {
    if (item && typeof item === "object") collect(item, source, items);
  });
}
function load(target) {
  const context = {};
  vm.createContext(context);
  vm.runInContext(`${read(target.file)}\n${target.vars.map((name) => `this.${name}=typeof ${name}!=="undefined"?${name}:undefined;`).join("\n")}`, context, { timeout: 5000 });
  return target.vars.map((name) => context[name]).filter(Boolean);
}

const items = [];
for (const target of targets) {
  try {
    load(target).forEach((value) => collect(value, target.file, items));
  } catch (error) {
    items.push({ source: target.file, answer: `AUDIT_ERROR: ${error.message}`, aliases: [] });
  }
}

const findings = [];
const aliasOwners = new Map();
for (const item of items) {
  const normalizedAliases = item.aliases.map(normalize).filter(Boolean);
  if (!item.aliases.length) findings.push({ level: "error", source: item.source, answer: item.answer, issue: "Alias vacío" });
  const duplicateAliases = normalizedAliases.filter((alias, index) => normalizedAliases.indexOf(alias) !== index);
  if (duplicateAliases.length) findings.push({ level: "warning", source: item.source, answer: item.answer, issue: `Alias duplicado: ${[...new Set(duplicateAliases)].join(", ")}` });
  const normalizedAnswer = normalize(item.answer);
  if (normalizedAnswer && !normalizedAliases.includes(normalizedAnswer)) {
    findings.push({ level: "info", source: item.source, answer: item.answer, issue: "El nombre completo no está en aliases" });
  }
  for (const alias of new Set(normalizedAliases)) {
    if (!aliasOwners.has(alias)) aliasOwners.set(alias, new Set());
    aliasOwners.get(alias).add(item.answer);
  }
}
const collisions = [...aliasOwners.entries()]
  .map(([alias, owners]) => [alias, [...owners]])
  .filter(([, owners]) => owners.length > 1)
  .sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]));

const lines = [
  "# Alias audit",
  "",
  `Generated: ${new Date().toISOString()}`,
  "",
  "## Summary",
  "",
  `- Entries with aliases: ${items.length}`,
  `- Findings: ${findings.length}`,
  `- Alias collisions: ${collisions.length}`,
  "",
  "## Actionable Findings",
  "",
  ...findings.filter((item) => item.level !== "info").slice(0, 80).map((item) => `- ${item.level.toUpperCase()} | ${item.source} | ${item.answer} | ${item.issue}`),
  "",
  "## Alias Collisions To Review",
  "",
  ...collisions.slice(0, 80).map(([alias, owners]) => `- ${alias}: ${owners.join(" / ")}`),
  "",
  "## Info: Missing Full-Name Alias",
  "",
  ...findings.filter((item) => item.level === "info").slice(0, 80).map((item) => `- ${item.source} | ${item.answer} | ${item.issue}`),
  "",
];
fs.writeFileSync(REPORT, `${lines.join("\n")}\n`, "utf8");
console.log(`Entries: ${items.length}`);
console.log(`Findings: ${findings.length}`);
console.log(`Collisions: ${collisions.length}`);
console.log(`Report: ${path.relative(ROOT, REPORT)}`);
