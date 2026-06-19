const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const REPORT = path.join(ROOT, "reports", "data-quality-audit.md");

const jsFiles = [
  "datos.js",
  "datostrayectoria.js",
  "datoslink.js",
  "datosresultado.js",
  "datoswordle.js",
  "datossubasta.js",
  "modes/torneo-selecciones/script.js",
  "modes/torneo-clubes/club-data.js",
  "modes/carrera-jugador/career-data.js"
];

const suspiciousPatterns = [
  { id: "replacement-char", label: "Caracter de reemplazo", re: /\uFFFD/ },
  { id: "mojibake", label: "Posible mojibake", re: /Ã[\u0080-\u00BF]|Â[\u00A0¡¿]|ðŸ|�/ },
  { id: "placeholder", label: "Placeholder generico", re: /\b(jugador desconocido|sin nombre|player\s*\d+|equipo\s*\d+|club\s*\d+|chacarita\s+\d+)\b/i },
  { id: "trailing-year", label: "Anio pegado al nombre", re: /\b(19|20)\d{2}\b/ },
  { id: "trailing-number", label: "Numero suelto", re: /(?:^|\s)\d{1,3}(?:\s|$)/ },
  { id: "double-space", label: "Espacios dobles", re: /\s{2,}/ },
  { id: "url-in-name", label: "URL dentro del nombre", re: /https?:\/\//i }
];

function read(file) {
  return fs.readFileSync(path.join(ROOT, file), "utf8");
}

function normalizeText(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function addName(map, source, field, value) {
  const name = normalizeText(value);
  if (!name) return;
  const key = `${source}::${field}::${name}`;
  if (!map.has(key)) map.set(key, { source, field, name });
}

function collectStrings(value, map, source, field = "value") {
  if (typeof value === "string") {
    addName(map, source, field, value);
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item, index) => collectStrings(item, map, source, `${field}[${index}]`));
    return;
  }
  if (value && typeof value === "object") {
    for (const [key, item] of Object.entries(value)) {
      if (["name", "nombre", "ans", "club", "country", "displayName", "sourceName", "home", "away", "titulo", "title"].includes(key)) {
        collectStrings(item, map, source, key);
      } else if (["players", "respuestas", "clubs", "teams", "squads", "tournaments"].includes(key)) {
        collectStrings(item, map, source, key);
      }
    }
  }
}

function collectFromVm(map) {
  const targets = [
    {
      file: "datos.js",
      vars: ["categorias"]
    },
    {
      file: "datostrayectoria.js",
      vars: ["trayectoriasData"]
    },
    {
      file: "datoslink.js",
      vars: ["linkData"]
    },
    {
      file: "datosresultado.js",
      vars: ["resultadosData", "resultadoData"]
    },
    {
      file: "datossubasta.js",
      vars: ["subastaPlayers"]
    }
  ];

  for (const target of targets) {
    try {
      const context = {};
      vm.createContext(context);
      vm.runInContext(`${read(target.file)}\n${target.vars.map((name) => `this.${name} = typeof ${name} !== "undefined" ? ${name} : undefined;`).join("\n")}`, context, { timeout: 5000 });
      target.vars.forEach((name) => collectStrings(context[name], map, target.file, name));
    } catch (error) {
      addName(map, target.file, "audit-error", `AUDIT_ERROR: ${error.message}`);
    }
  }
}

function collectByRegex(map) {
  for (const file of jsFiles) {
    const source = read(file);
    const stringCalls = [
      /\bP\(\s*"([^"]+)"/g,
      /\bS\(\s*"[^"]+"\s*,\s*"([^"]+)"/g,
      /"name"\s*:\s*"([^"]+)"/g,
      /"displayName"\s*:\s*"([^"]+)"/g,
      /"club"\s*:\s*"([^"]+)"/g,
      /nombre\s*:\s*"([^"]+)"/g,
      /ans\s*:\s*"([^"]+)"/g
    ];

    for (const re of stringCalls) {
      let match;
      while ((match = re.exec(source))) addName(map, file, "literal", match[1]);
    }
  }
}

function analyze(entries) {
  return entries.flatMap((entry) => {
    const findings = suspiciousPatterns
      .filter((pattern) => pattern.re.test(entry.name) && !isAllowedFinding(entry, pattern.id))
      .map((pattern) => pattern.label);
    return findings.length ? [{ ...entry, findings }] : [];
  });
}

function isAllowedFinding(entry, patternId) {
  const name = entry.name;
  const field = entry.field.toLowerCase();
  if (["trailing-year", "trailing-number"].includes(patternId)) {
    if (["titulo", "title"].includes(field)) return true;
    if (/^(top\s+\d+|fecha\s+\d+|jornada\s+\d+)/i.test(name)) return true;
    if (/\b(ligue|liga|league|division|super league|serie|primera|segunda)(?:\s+[a-z]+)?\s+\d+\b/i.test(name)) return true;
    if (/\b(fc|sc|sv|ac|us|club|calcio|foot|mainz|schalke|hannover|paderborn|darmstadt|brestois|grenoble)\b/i.test(name)) return true;
    if (/^(como|grazer ak|mantova|delfino pescara|egaleo|santorini|ialysos)\s+\d{4}$/i.test(name)) return true;
    if (/^\d\./.test(name)) return true;
  }
  return false;
}

function writeReport(entries, findings) {
  const byReason = new Map();
  findings.forEach((item) => {
    item.findings.forEach((reason) => byReason.set(reason, (byReason.get(reason) || 0) + 1));
  });

  const lines = [
    "# FutbolMIX data quality audit",
    "",
    `Generated: ${new Date().toISOString()}`,
    "",
    "## Summary",
    "",
    `- Strings audited: ${entries.length}`,
    `- Suspicious entries: ${findings.length}`,
    "",
    "## By Reason",
    "",
    ...([...byReason.entries()].sort((a, b) => b[1] - a[1]).map(([reason, count]) => `- ${reason}: ${count}`) || ["- No suspicious entries"]),
    "",
    "## Findings",
    ""
  ];

  if (!findings.length) {
    lines.push("- No suspicious entries found.");
  } else {
    findings.slice(0, 250).forEach((item) => {
      lines.push(`- ${item.findings.join(", ")} | ${item.source} | ${item.field} | ${item.name}`);
    });
    if (findings.length > 250) lines.push(`- ... ${findings.length - 250} more entries omitted.`);
  }

  fs.writeFileSync(REPORT, `${lines.join("\n")}\n`, "utf8");
}

const map = new Map();
collectFromVm(map);
collectByRegex(map);

const entries = [...map.values()];
const findings = analyze(entries);
writeReport(entries, findings);

console.log(`Audited ${entries.length} strings.`);
console.log(`Suspicious entries: ${findings.length}.`);
console.log(`Report: ${path.relative(ROOT, REPORT)}`);
if (findings.length) process.exitCode = 1;
