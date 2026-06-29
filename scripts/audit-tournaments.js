const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const reportPath = path.join(root, "reports", "tournament-audit.md");
const allowedRoles = new Set(["POR", "LD", "DFC", "LI", "MCD", "MC", "MCO", "EI", "ED", "DC"]);
const allowedClubTournaments = new Set(["Champions League", "Libertadores"]);

function makeStubElement() {
  return {
    dataset: {},
    style: {},
    disabled: false,
    hidden: false,
    textContent: "",
    innerHTML: "",
    scrollTop: 0,
    scrollHeight: 0,
    classList: {
      add() {},
      remove() {},
      toggle() {},
      contains() { return false; },
    },
    addEventListener() {},
    removeEventListener() {},
    setAttribute() {},
    getAttribute() { return null; },
    appendChild() {},
    insertAdjacentHTML(_position, html) { this.innerHTML += html; },
    querySelector() { return makeStubElement(); },
    querySelectorAll() { return []; },
    closest() { return null; },
  };
}

function makeSandbox() {
  const elements = new Map();
  const document = {
    querySelector(selector) {
      if (!elements.has(selector)) elements.set(selector, makeStubElement());
      return elements.get(selector);
    },
    querySelectorAll() { return []; },
    getElementById(id) {
      const selector = `#${id}`;
      if (!elements.has(selector)) elements.set(selector, makeStubElement());
      return elements.get(selector);
    },
    createElement() { return makeStubElement(); },
  };
  const sandbox = {
    console,
    document,
    setTimeout,
    clearTimeout,
    Math,
    Date,
  };
  sandbox.window = {
    setTimeout,
    clearTimeout,
  };
  return sandbox;
}

function runScript(filePath, sandbox, suffix) {
  const code = fs.readFileSync(filePath, "utf8");
  vm.createContext(sandbox);
  vm.runInContext(`${code}\n${suffix}`, sandbox, { filename: filePath });
  return sandbox.__audit;
}

function loadSelections() {
  const sandbox = makeSandbox();
  const filePath = path.join(root, "modes", "torneo-selecciones", "script.js");
  return {
    label: "Selecciones",
    type: "selection",
    ...runScript(filePath, sandbox, "globalThis.__audit = { squads, formations, sources };")
  };
}

function loadClubs() {
  const sandbox = makeSandbox();
  const dataPath = path.join(root, "modes", "torneo-clubes", "club-data.js");
  const scriptPath = path.join(root, "modes", "torneo-clubes", "script.js");
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(dataPath, "utf8"), sandbox, { filename: dataPath });
  return {
    label: "Clubes",
    type: "club",
    ...runScript(scriptPath, sandbox, "globalThis.__audit = { squads, formations, sources };")
  };
}

function playerName(player) {
  return player.displayName || player.name || "";
}

function hasWeirdName(name) {
  if (!name || typeof name !== "string") return true;
  if (/\b\d{2,}\b/.test(name)) return true;
  if (/\b(player|jugador|equipo|club|seleccion|chacarita)\s*\d+\b/i.test(name)) return true;
  if (/[_{}<>|]/.test(name)) return true;
  return false;
}

function canFillFormation(players, slots) {
  const candidatesBySlot = slots.map((slot, slotIndex) => ({
    slot,
    slotIndex,
    candidates: players
      .map((player, playerIndex) => ({ playerIndex, player }))
      .filter(({ player }) => Array.isArray(player.roles) && player.roles.includes(slot))
      .map(({ playerIndex }) => playerIndex),
  })).sort((a, b) => a.candidates.length - b.candidates.length);

  const usedPlayers = new Set();
  function backtrack(index) {
    if (index >= candidatesBySlot.length) return true;
    const entry = candidatesBySlot[index];
    for (const playerIndex of entry.candidates) {
      if (usedPlayers.has(playerIndex)) continue;
      usedPlayers.add(playerIndex);
      if (backtrack(index + 1)) return true;
      usedPlayers.delete(playerIndex);
    }
    return false;
  }
  return backtrack(0);
}

function bestXI(players, slots) {
  const available = players.slice();
  return slots.map((slot) => {
    let index = available.reduce((best, player, playerIndex) => {
      if (!Array.isArray(player.roles) || !player.roles.includes(slot)) return best;
      return best === -1 || player.ovr > available[best].ovr ? playerIndex : best;
    }, -1);
    if (index === -1) {
      index = available.reduce((best, player, playerIndex) => player.ovr > available[best].ovr ? playerIndex : best, 0);
    }
    const [player] = available.splice(index, 1);
    return player;
  }).filter(Boolean);
}

function average(values) {
  if (!values.length) return 0;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function summarizeCoverage(dataset) {
  const byYear = new Map();
  const byTeam = new Map();
  for (const squad of dataset.squads) {
    const yearKey = dataset.type === "club" ? `${squad.tournament}-${squad.year}` : String(squad.year);
    const teamKey = squad.country;
    byYear.set(yearKey, (byYear.get(yearKey) || 0) + 1);
    byTeam.set(teamKey, (byTeam.get(teamKey) || 0) + 1);
  }
  const sameYearReady = dataset.squads.filter((squad) => {
    const yearKey = dataset.type === "club" ? `${squad.tournament}-${squad.year}` : String(squad.year);
    return (byYear.get(yearKey) || 0) > 1;
  }).length;
  const sameTeamReady = dataset.squads.filter((squad) => (byTeam.get(squad.country) || 0) > 1).length;
  return {
    sameYearReady,
    sameTeamReady,
    total: dataset.squads.length,
    uniqueYears: byYear.size,
    uniqueTeams: byTeam.size,
  };
}

function auditDataset(dataset) {
  const errors = [];
  const warnings = [];
  const ids = new Set();
  const defaultSlots = dataset.formations["4-3-3"] || Object.values(dataset.formations)[0];
  const formationCoverage = Object.fromEntries(Object.keys(dataset.formations).map((name) => [name, 0]));

  for (const squad of dataset.squads) {
    const label = `${squad.country} ${squad.year}${squad.tournament ? ` ${squad.tournament}` : ""}`;
    if (!squad.id || ids.has(squad.id)) errors.push(`${dataset.label}: id duplicado o vacio en ${label}`);
    ids.add(squad.id);
    if (!Number.isInteger(squad.year) || squad.year < 1930 || squad.year > 2030) errors.push(`${dataset.label}: anio invalido en ${label}`);
    if (!Number.isFinite(squad.rating) || squad.rating < 1 || squad.rating > 99) errors.push(`${dataset.label}: rating fuera de rango en ${label}`);
    if (dataset.type === "club" && !allowedClubTournaments.has(squad.tournament)) errors.push(`${dataset.label}: torneo no permitido en ${label}`);
    if (!Array.isArray(squad.players) || squad.players.length < 11) errors.push(`${dataset.label}: plantilla corta en ${label}`);

    const seenNames = new Set();
    for (const player of squad.players || []) {
      const name = playerName(player);
      if (hasWeirdName(name)) errors.push(`${dataset.label}: nombre raro en ${label}: ${name || "<vacio>"}`);
      if (seenNames.has(name)) warnings.push(`${dataset.label}: jugador repetido en ${label}: ${name}`);
      seenNames.add(name);
      if (!Number.isFinite(player.ovr) || player.ovr < 1 || player.ovr > 99) errors.push(`${dataset.label}: valoracion fuera de rango en ${label}: ${name}`);
      if (!Array.isArray(player.roles) || !player.roles.length) errors.push(`${dataset.label}: jugador sin roles en ${label}: ${name}`);
      for (const role of player.roles || []) {
        if (!allowedRoles.has(role)) errors.push(`${dataset.label}: rol invalido ${role} en ${label}: ${name}`);
      }
    }

    for (const [formationName, slots] of Object.entries(dataset.formations)) {
      if (canFillFormation(squad.players || [], slots)) formationCoverage[formationName] += 1;
    }

    const xi = bestXI(squad.players || [], defaultSlots);
    const xiAverage = average(xi.map((player) => player.ovr));
    if (xi.length === 11 && Math.abs(xiAverage - squad.rating) > 8) {
      warnings.push(`${dataset.label}: rating declarado ${squad.rating} vs XI medio ${xiAverage.toFixed(1)} en ${label}`);
    }
  }

  const coverage = summarizeCoverage(dataset);
  for (const [formationName, count] of Object.entries(formationCoverage)) {
    if (count === 0) warnings.push(`${dataset.label}: ninguna plantilla cubre sola la formacion ${formationName}.`);
  }
  if (coverage.sameYearReady < Math.ceil(coverage.total * 0.75)) {
    warnings.push(`${dataset.label}: baja cobertura de boton otra seleccion/club para misma edicion (${coverage.sameYearReady}/${coverage.total}).`);
  }
  if (coverage.sameTeamReady < Math.ceil(coverage.total * 0.5)) {
    warnings.push(`${dataset.label}: baja cobertura de boton otro mundial/edicion para mismo equipo (${coverage.sameTeamReady}/${coverage.total}).`);
  }

  return { errors, warnings, coverage, formationCoverage };
}

function renderReport(results) {
  const lines = [];
  lines.push("# Auditoria de torneos");
  lines.push("");
  lines.push(`Fecha: ${new Date().toISOString().slice(0, 10)}`);
  lines.push("");
  for (const result of results) {
    lines.push(`## ${result.dataset.label}`);
    lines.push("");
    lines.push(`- Plantillas: ${result.dataset.squads.length}`);
    lines.push(`- Equipos/paises unicos: ${result.audit.coverage.uniqueTeams}`);
    lines.push(`- Ediciones unicas: ${result.audit.coverage.uniqueYears}`);
    lines.push(`- Cobertura misma edicion: ${result.audit.coverage.sameYearReady}/${result.audit.coverage.total}`);
    lines.push(`- Cobertura mismo equipo/pais: ${result.audit.coverage.sameTeamReady}/${result.audit.coverage.total}`);
    lines.push(`- Plantillas que cubren cada formacion solas: ${Object.entries(result.audit.formationCoverage).map(([name, count]) => `${name} ${count}/${result.audit.coverage.total}`).join(", ")}`);
    lines.push(`- Errores: ${result.audit.errors.length}`);
    lines.push(`- Advertencias: ${result.audit.warnings.length}`);
    lines.push("");
    if (result.audit.errors.length) {
      lines.push("### Errores");
      result.audit.errors.slice(0, 80).forEach((item) => lines.push(`- ${item}`));
      if (result.audit.errors.length > 80) lines.push(`- ... ${result.audit.errors.length - 80} errores mas`);
      lines.push("");
    }
    if (result.audit.warnings.length) {
      lines.push("### Advertencias");
      result.audit.warnings.slice(0, 80).forEach((item) => lines.push(`- ${item}`));
      if (result.audit.warnings.length > 80) lines.push(`- ... ${result.audit.warnings.length - 80} advertencias mas`);
      lines.push("");
    }
  }
  return `${lines.join("\n")}\n`;
}

const datasets = [loadSelections(), loadClubs()];
const results = datasets.map((dataset) => ({ dataset, audit: auditDataset(dataset) }));
fs.mkdirSync(path.dirname(reportPath), { recursive: true });
fs.writeFileSync(reportPath, renderReport(results), "utf8");

const totalErrors = results.reduce((sum, result) => sum + result.audit.errors.length, 0);
const totalWarnings = results.reduce((sum, result) => sum + result.audit.warnings.length, 0);
console.log(`Tournament audit written to ${path.relative(root, reportPath)}`);
console.log(`Errors: ${totalErrors} | Warnings: ${totalWarnings}`);
if (totalErrors > 0) process.exit(1);
