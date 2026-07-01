const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const REPORT = path.join(ROOT, "reports", "minigame-phase-audit.md");
const SYSTEM_DOC = path.join(ROOT, "reports", "minigame-phase-system.md");

const phases = [
  { id: "inventario", label: "Inventario", description: "Existe en menu, vista y smoke test." },
  { id: "jugabilidad", label: "Jugabilidad", description: "Tiene datos suficientes y flujo cubierto por QA." },
  { id: "visual", label: "Visual/UX", description: "Tiene superficie UI, fallback visual y reglas responsive." },
  { id: "assets", label: "Imagenes", description: "Fotos, escudos o banderas cubiertas con prioridad de calidad." },
  { id: "datos", label: "Datos/balance", description: "Datos auditables, balanceables y sin placeholders." },
  { id: "qa", label: "QA final", description: "Incluido en comandos de release y verificacion de produccion." }
];

const games = [
  { id: "torre", title: "Torre Futbolera", view: "torreView", kind: "inline", data: "datos.js", assetKind: "mixed", owner: "Ranking" },
  { id: "trayectoria", title: "Trayectoria", view: "trayectoriaView", kind: "inline", data: "datostrayectoria.js", assetKind: "players-teams", owner: "Carrera" },
  { id: "camino", title: "El Camino", view: "caminoView", kind: "inline", data: "datoscamino.js", assetKind: "teams", owner: "Secuencia" },
  { id: "link", title: "Futbol Link", view: "linkView", kind: "inline", data: "datoslink.js", assetKind: "players", owner: "Conexion" },
  { id: "wordle", title: "Wordle", view: "wordleView", kind: "inline", data: "datoswordle.js", assetKind: "none", owner: "Palabra" },
  { id: "resultado", title: "Adivina el Resultado", view: "resultadoView", kind: "inline", data: "datosresultado.js", assetKind: "teams", owner: "Marcador" },
  { id: "subasta", title: "Subasta Online", view: "auctionLobbyView", kind: "inline", data: "datossubasta.js", assetKind: "players-teams", owner: "Multijugador" },
  { id: "equipo", title: "Adivina el Equipo", view: "equipoView", kind: "inline", data: "index.html", assetKind: "teams", owner: "Escudos" },
  { id: "torneo-selecciones", title: "Torneo Selecciones Historicas", view: "torneoSeleccionesView", kind: "iframe", data: "modes/torneo-selecciones/script.js", route: "/modes/torneo-selecciones/index.html", assetKind: "flags", owner: "Draft historico" },
  { id: "torneo-clubes", title: "Torneo Clubes Historicos", view: "torneoClubesView", kind: "iframe", data: "modes/torneo-clubes/club-data.js", route: "/modes/torneo-clubes/index.html", assetKind: "teams", owner: "Draft historico" },
  { id: "carrera", title: "Carrera Jugador", view: "carreraJugadorView", kind: "iframe", data: "modes/carrera-jugador/career-data.js", route: "/modes/carrera-jugador/index.html", assetKind: "teams", owner: "RPG deportivo" }
];

function read(relativePath) {
  return fs.readFileSync(path.join(ROOT, relativePath), "utf8");
}

function exists(relativePath) {
  return fs.existsSync(path.join(ROOT, relativePath));
}

function norm(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function cleanClub(raw) {
  return String(raw || "")
    .replace(/^[^A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9]+/, "")
    .replace(/\([^)]*\)/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function unique(list) {
  return [...new Set(list.map((item) => String(item || "").trim()).filter(Boolean))];
}

function runVm(relativePath, vars, setup = "") {
  const context = {};
  vm.createContext(context);
  vm.runInContext(`${setup}\n${read(relativePath)}\n${vars.map((name) => `this.${name}=typeof ${name}!=="undefined"?${name}:this.${name};`).join("\n")}`, context, { timeout: 7000 });
  return context;
}

function loadAssets() {
  const context = {};
  vm.createContext(context);
  vm.runInContext(`${read("assets/assets-map.js")}\n${read("logos.js")}\nthis.localPlayerPhotos=localPlayerPhotos;this.localTeamLogos=localTeamLogos;this.localCountryFlags=localCountryFlags;this.teamLogos=teamLogos;`, context, { timeout: 7000 });
  return context;
}

function indexAssetMap(map) {
  const byNorm = new Map();
  Object.entries(map || {}).forEach(([key, value]) => byNorm.set(norm(key), value));
  return byNorm;
}

function assetCoverage(names, maps) {
  const normalizedMaps = maps.map(indexAssetMap);
  const items = unique(names);
  const covered = [];
  const local = [];
  const remote = [];
  const missing = [];

  for (const name of items) {
    const found = normalizedMaps.map((map) => map.get(norm(name))).find(Boolean);
    if (!found) {
      missing.push(name);
    } else {
      covered.push(name);
      if (/^https?:\/\//i.test(found)) remote.push(name);
      else local.push(name);
    }
  }

  return {
    total: items.length,
    covered: covered.length,
    local: local.length,
    remote: remote.length,
    missing: missing.length,
    missingTop: missing.slice(0, 8),
    percent: items.length ? Math.round((covered.length / items.length) * 100) : 100,
    localPercent: items.length ? Math.round((local.length / items.length) * 100) : 100
  };
}

function collectByGame(game) {
  const players = [];
  const teams = [];
  const flags = [];
  let dataItems = 0;
  let notes = [];

  try {
    if (game.id === "torre") {
      const { categorias } = runVm(game.data, ["categorias"]);
      dataItems = (categorias || []).length;
      (categorias || []).forEach((category) => {
        (category.respuestas || []).forEach((answer) => players.push(answer.nombre));
        if (/club|equipo|libertadores|champions/i.test(category.titulo || "")) {
          (category.respuestas || []).forEach((answer) => teams.push(answer.nombre));
        }
      });
    } else if (game.id === "trayectoria") {
      const { trayectoriasData } = runVm(game.data, ["trayectoriasData"]);
      dataItems = (trayectoriasData || []).length;
      (trayectoriasData || []).forEach((item) => {
        players.push(item.ans);
        (item.clubs || []).forEach((club) => teams.push(cleanClub(club)));
      });
    } else if (game.id === "camino") {
      const { caminoData } = runVm(game.data, ["caminoData"]);
      dataItems = (caminoData || []).length;
      (caminoData || []).forEach((item) => {
        (item.equipos || []).forEach((team) => teams.push(team));
        (item.rivalesExtra || []).forEach((team) => teams.push(team));
      });
    } else if (game.id === "link") {
      const { linkData } = runVm(game.data, ["linkData"]);
      dataItems = (linkData || []).length;
      (linkData || []).forEach((item) => {
        players.push(item.ans);
        (item.teammates || []).forEach((player) => players.push(player));
      });
    } else if (game.id === "wordle") {
      const { wordleData } = runVm(game.data, ["wordleData"]);
      dataItems = (wordleData || []).length;
    } else if (game.id === "resultado") {
      const { resultadoData } = runVm(game.data, ["resultadoData"]);
      dataItems = (resultadoData || []).length;
      (resultadoData || []).forEach((item) => {
        teams.push(item.home, item.away);
      });
    } else if (game.id === "subasta") {
      const { subastaPlayers } = runVm(game.data, ["subastaPlayers"]);
      dataItems = (subastaPlayers || []).length;
      (subastaPlayers || []).forEach((item) => {
        players.push(item.name);
        teams.push(item.club);
      });
    } else if (game.id === "equipo") {
      const index = read("index.html");
      const match = index.match(/const equipoLevelNames = \[([\s\S]*?)\];/);
      const list = match ? [...match[1].matchAll(/"([^"]+)"/g)].map((item) => item[1]) : [];
      dataItems = list.length;
      list.forEach((team) => teams.push(team));
    } else if (game.id === "torneo-selecciones") {
      const source = read(game.data);
      const squadsBlock = source.match(/const squads = \[([\s\S]*?)\n\];\s*\nconst formations/);
      const block = squadsBlock ? squadsBlock[1] : source;
      [...block.matchAll(/country:\s*"([^"]+)"/g)].forEach((match) => flags.push(match[1]));
      [...block.matchAll(/name:\s*"([^"]+)"/g)].forEach((match) => players.push(match[1]));
      dataItems = flags.length;
    } else if (game.id === "torneo-clubes") {
      const context = runVm(game.data, [], "this.window=this;");
      const squads = context.clubSquads || context.window?.clubSquads || [];
      dataItems = squads.length;
      squads.forEach((squad) => {
        teams.push(squad.country);
        (squad.players || []).forEach((player) => players.push(player.name || player.displayName));
      });
    } else if (game.id === "carrera") {
      const { careerLeagueDatabase } = runVm(game.data, ["careerLeagueDatabase"]);
      const leagues = careerLeagueDatabase || [];
      dataItems = leagues.reduce((sum, league) => sum + (league.teams || []).length, 0);
      leagues.forEach((league) => (league.teams || []).forEach((team) => {
        teams.push(team.name);
        (team.players || []).forEach((player) => players.push(player.name));
      }));
    }
  } catch (error) {
    notes.push(`No se pudo leer datos: ${error.message}`);
  }

  return {
    dataItems,
    players: unique(players),
    teams: unique(teams),
    flags: unique(flags),
    notes
  };
}

function phaseStatus(game, facts, assets, indexSource, smokeSource, productionReady) {
  const menuOk = indexSource.includes(game.title) || indexSource.includes(game.view);
  const viewOk = indexSource.includes(`id="${game.view}"`) || indexSource.includes(`id='${game.view}'`);
  const smokeOk = smokeSource.includes(game.title) || smokeSource.includes(game.view);
  const dataOk = exists(game.data) && facts.dataItems >= (game.id === "wordle" ? 30 : game.kind === "iframe" ? 10 : 8);
  const fallbackOk = /createFallbackImage|getLogoErrorFallback|logo-fallback/.test(indexSource);
  const responsiveOk = smokeSource.includes("runMobile") && smokeSource.includes("assertNoDesktopOverflow");
  const qaOk = productionReady && smokeOk;

  let assetOk = true;
  if (game.assetKind !== "none") {
    const relevant = game.assetKind === "players" ? facts.playerCoverage
      : game.assetKind === "teams" ? facts.teamCoverage
        : game.assetKind === "flags" ? facts.flagCoverage
          : {
              percent: Math.min(facts.playerCoverage.percent, facts.teamCoverage.percent),
              localPercent: Math.min(facts.playerCoverage.localPercent, facts.teamCoverage.localPercent)
            };
    assetOk = relevant.percent >= 80 && (relevant.localPercent >= 35 || relevant.percent >= 95);
  }

  return {
    inventario: menuOk && viewOk && smokeOk,
    jugabilidad: dataOk && smokeOk,
    visual: fallbackOk && responsiveOk,
    assets: assetOk,
    datos: dataOk,
    qa: qaOk
  };
}

function nextActions(game, facts, status) {
  const actions = [];
  if (!status.inventario) actions.push("Completar presencia en menu, vista o smoke test.");
  if (!status.jugabilidad) actions.push("Agregar escenarios de juego y una prueba funcional especifica.");
  if (!status.visual) actions.push("Revisar layout desktop/mobile, estados vacios, carga y feedback visual.");
  if (!status.assets) {
    const missing = [
      ...facts.playerCoverage.missingTop.map((name) => `foto: ${name}`),
      ...facts.teamCoverage.missingTop.map((name) => `escudo: ${name}`),
      ...facts.flagCoverage.missingTop.map((name) => `bandera: ${name}`)
    ].slice(0, 8);
    actions.push(`Priorizar imagenes locales de calidad${missing.length ? ` (${missing.join("; ")})` : "."}`);
  }
  if (!status.datos) actions.push("Ampliar base de datos o revisar balance/cobertura.");
  if (!status.qa) actions.push("Asegurar cobertura en release y smoke de produccion.");
  if (!actions.length) actions.push("Listo para pulido fino: microanimaciones, copy y assets long-tail.");
  return actions;
}

function writeSystemDoc() {
  const lines = [
    "# Sistema de fases automaticas por minijuego",
    "",
    "Este sistema convierte el pulido de FutbolMIX en un ciclo repetible. Cada minijuego avanza por las mismas fases y el reporte `reports/minigame-phase-audit.md` muestra que falta para cerrarlo con calidad de entrega.",
    "",
    "## Comandos",
    "",
    "- `npm run audit:minigames`: genera el tablero de fases por minijuego.",
    "- `npm run audit:assets`: prioriza imagenes faltantes por frecuencia de uso.",
    "- `npm run audit:data`: detecta nombres raros, placeholders o datos rotos.",
    "- `npm run test:smoke`: valida menu, desktop/mobile y flujos clave en local.",
    "- `npm run verify:prod`: valida HTTP, cabeceras, rutas y assets pesados en produccion.",
    "- `npm run test:smoke:prod`: valida produccion con Playwright.",
    "",
    "## Fases",
    "",
    ...phases.map((phase, index) => `${index + 1}. ${phase.label}: ${phase.description}`),
    "",
    "## Regla de trabajo",
    "",
    "1. Ejecutar `npm run audit:minigames`.",
    "2. Tomar el primer juego con fase incompleta.",
    "3. Resolver primero jugabilidad y datos; luego visual, imagenes y QA.",
    "4. Ejecutar `npm run test:release` antes de publicar.",
    "5. Ejecutar `npm run verify:prod` y `npm run test:smoke:prod` despues del deploy.",
    "",
    "## Criterio de imagen correcta",
    "",
    "- Preferir assets locales optimizados en `assets/players`, `assets/teams` y `assets/flags`.",
    "- Evitar depender de URLs remotas para elementos frecuentes.",
    "- Cada imagen importante debe tener fallback y no romper layout si falla.",
    "- Priorizar primero las imagenes listadas por `reports/asset-priorities.md` y por el reporte de fases.",
    ""
  ];

  fs.writeFileSync(SYSTEM_DOC, `${lines.join("\n")}\n`, "utf8");
}

function writeReport(rows) {
  const lines = [
    "# FutbolMIX - auditoria de fases por minijuego",
    "",
    `Generated: ${new Date().toISOString()}`,
    "",
    "## Resumen",
    "",
    `- Minijuegos auditados: ${rows.length}`,
    `- Fases totales completas: ${rows.reduce((sum, row) => sum + Object.values(row.status).filter(Boolean).length, 0)}/${rows.length * phases.length}`,
    `- Juegos listos para pulido fino: ${rows.filter((row) => Object.values(row.status).every(Boolean)).length}`,
    "",
    "## Tablero",
    "",
    `| Minijuego | Datos | Jugadores | Equipos/Banderas | ${phases.map((phase) => phase.label).join(" | ")} | Proxima accion |`,
    `| ${["---", "---:", "---:", "---:", ...phases.map(() => ":---:"), "---"].join(" | ")} |`
  ];

  rows.forEach((row) => {
    const assetSummary = row.flagCoverage.total
      ? `${row.flagCoverage.covered}/${row.flagCoverage.total} banderas`
      : `${row.teamCoverage.covered}/${row.teamCoverage.total} equipos`;
    lines.push([
      row.title,
      row.dataItems,
      row.playerCoverage.total ? `${row.playerCoverage.covered}/${row.playerCoverage.total}` : "-",
      assetSummary,
      ...phases.map((phase) => (row.status[phase.id] ? "OK" : "Pendiente")),
      row.actions[0]
    ].join(" | "));
  });

  lines.push("", "## Detalle por minijuego", "");
  rows.forEach((row) => {
    lines.push(`### ${row.title}`, "");
    lines.push(`- Tipo: ${row.kind}${row.route ? ` (${row.route})` : ""}`);
    lines.push(`- Archivo de datos: \`${row.data}\``);
    lines.push(`- Items de datos: ${row.dataItems}`);
    if (row.playerCoverage.total) {
      lines.push(`- Fotos jugadores: ${row.playerCoverage.covered}/${row.playerCoverage.total} (${row.playerCoverage.percent}%), locales ${row.playerCoverage.local}/${row.playerCoverage.total} (${row.playerCoverage.localPercent}%).`);
    }
    if (row.teamCoverage.total) {
      lines.push(`- Escudos/equipos: ${row.teamCoverage.covered}/${row.teamCoverage.total} (${row.teamCoverage.percent}%), locales ${row.teamCoverage.local}/${row.teamCoverage.total} (${row.teamCoverage.localPercent}%).`);
    }
    if (row.flagCoverage.total) {
      lines.push(`- Banderas/selecciones: ${row.flagCoverage.covered}/${row.flagCoverage.total} (${row.flagCoverage.percent}%), locales ${row.flagCoverage.local}/${row.flagCoverage.total} (${row.flagCoverage.localPercent}%).`);
    }
    lines.push(`- Fases: ${phases.map((phase) => `${phase.label}=${row.status[phase.id] ? "OK" : "Pendiente"}`).join("; ")}.`);
    lines.push("- Acciones:");
    row.actions.forEach((action) => lines.push(`  - ${action}`));
    if (row.notes.length) {
      lines.push("- Notas:");
      row.notes.forEach((note) => lines.push(`  - ${note}`));
    }
    lines.push("");
  });

  fs.writeFileSync(REPORT, `${lines.join("\n")}\n`, "utf8");
}

function main() {
  const indexSource = read("index.html");
  const smokeSource = read("scripts/smoke-test.js");
  const packageJson = JSON.parse(read("package.json"));
  const productionReady = Boolean(packageJson.scripts["verify:prod"] && packageJson.scripts["test:smoke:prod"]);
  const assetMaps = loadAssets();

  const rows = games.map((game) => {
    const facts = collectByGame(game);
    const playerCoverage = assetCoverage(facts.players, [assetMaps.localPlayerPhotos]);
    const teamCoverage = assetCoverage(facts.teams, [assetMaps.localTeamLogos, assetMaps.teamLogos, assetMaps.localCountryFlags]);
    const flagCoverage = assetCoverage(facts.flags, [assetMaps.localCountryFlags, assetMaps.localTeamLogos]);
    const enriched = { ...facts, playerCoverage, teamCoverage, flagCoverage };
    const status = phaseStatus(game, enriched, assetMaps, indexSource, smokeSource, productionReady);
    return {
      ...game,
      ...enriched,
      status,
      actions: nextActions(game, enriched, status)
    };
  });

  writeSystemDoc();
  writeReport(rows);
  console.log(`Minigame phase audit: ${path.relative(ROOT, REPORT)}`);
  console.log(`Phase system: ${path.relative(ROOT, SYSTEM_DOC)}`);
  const hardFailures = rows.filter((row) => !row.status.inventario || !row.status.jugabilidad);
  if (hardFailures.length) {
    console.error(`Fases criticas incompletas: ${hardFailures.map((row) => row.title).join(", ")}`);
    process.exitCode = 1;
  }
}

main();
