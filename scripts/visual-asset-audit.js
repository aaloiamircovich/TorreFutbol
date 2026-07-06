const { chromium } = require("playwright");
const { spawn } = require("child_process");

const LOCAL_PORT = process.env.VISUAL_PORT || String(4800 + Math.floor(Math.random() * 500));
const BASE_URL = process.env.VISUAL_BASE_URL || `http://127.0.0.1:${LOCAL_PORT}`;
const CHANNEL = process.env.PLAYWRIGHT_CHANNEL || "msedge";
const DESKTOP = { width: 1366, height: 768 };
const MOBILE = { width: 390, height: 844 };

const menuModes = [
  { title: "Torre Futbolera", view: "torreView", modal: true },
  { title: "Trayectoria", view: "trayectoriaView", modal: true },
  { title: "El Camino", view: "caminoView", modal: true },
  { title: "Futbol Link", view: "linkView", modal: true },
  { title: "Wordle", view: "wordleView" },
  { title: "Adivina el Resultado", view: "resultadoView", modal: true },
  { title: "Subasta Online", view: "auctionLobbyView" },
  { title: "Adivina el Equipo", view: "equipoView", modal: true },
  { title: "Torneo Selecciones Historicas", view: "torneoSeleccionesView", frame: true },
  { title: "Torneo Clubes Historicos", view: "torneoClubesView", frame: true },
  { title: "Carrera Jugador", view: "carreraJugadorView", frame: true }
];

const levelModes = [
  { title: "Torre Futbolera", menuIndex: 0, modal: true, button: "#toggleGridBtn", grid: "#levelGrid" },
  { title: "Trayectoria", menuIndex: 1, modal: true, button: "#trayToggleGridBtn", grid: "#trayLevelGrid" },
  { title: "El Camino", menuIndex: 2, modal: true, button: "#caminoToggleGridBtn", grid: "#caminoLevelGrid" },
  { title: "Futbol Link", menuIndex: 3, modal: true, button: "#linkToggleGridBtn", grid: "#linkLevelGrid" },
  { title: "Wordle", menuIndex: 4, modal: false, button: "#wordleToggleGridBtn", grid: "#wordleLevelGrid" },
  { title: "Adivina el Resultado", menuIndex: 5, modal: true, button: "#resultadoToggleGridBtn", grid: "#resultadoLevelGrid" },
  { title: "Adivina el Equipo", menuIndex: 7, modal: true, button: "#equipoToggleGridBtn", grid: "#equipoLevelGrid" }
];

const directRoutes = [
  "/",
  "/modes/carrera-jugador/index.html",
  "/modes/torneo-selecciones/index.html",
  "/modes/torneo-clubes/index.html"
];

function fail(message, details = {}) {
  const error = new Error(message);
  error.details = details;
  throw error;
}

async function healthIsReady() {
  try {
    const response = await fetch(`${BASE_URL}/health`);
    const body = await response.json();
    return response.ok && body.ok === true;
  } catch {
    return false;
  }
}

async function ensureServer() {
  if (await healthIsReady()) return null;
  if (process.env.VISUAL_BASE_URL) fail(`No se pudo conectar a ${BASE_URL}`);
  const child = spawn(process.execPath, ["-r", "./viewport-fit-server.js", "server.js"], {
    cwd: process.cwd(),
    env: { ...process.env, HOST: "127.0.0.1", PORT: LOCAL_PORT },
    stdio: ["ignore", "pipe", "pipe"]
  });
  let stderr = "";
  child.stderr.on("data", (chunk) => { stderr += chunk.toString(); });
  const deadline = Date.now() + 10000;
  while (Date.now() < deadline) {
    if (child.exitCode !== null) fail("El servidor termino antes de iniciar", { stderr: stderr.trim() });
    if (await healthIsReady()) return child;
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  child.kill();
  fail("El servidor no estuvo listo dentro de 10 segundos", { stderr: stderr.trim() });
}

async function launchBrowser() {
  try {
    return await chromium.launch({ headless: true, channel: CHANNEL });
  } catch {
    return chromium.launch({ headless: true });
  }
}

async function newAuditedPage(browser, viewport = DESKTOP) {
  const page = await browser.newPage({ viewport, isMobile: viewport.width <= 520 });
  const failures = [];
  const runtimeErrors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") runtimeErrors.push(msg.text());
  });
  page.on("pageerror", (error) => runtimeErrors.push(error.message));
  page.on("response", (response) => {
    const type = response.request().resourceType();
    if (["image", "stylesheet", "script", "font"].includes(type) && response.status() >= 400) {
      failures.push({ status: response.status(), type, url: response.url() });
    }
  });
  return { page, failures, runtimeErrors };
}

async function assertViewportFit(page, label, strictVertical = true) {
  const metrics = await page.evaluate(() => ({
    width: document.documentElement.scrollWidth,
    height: document.documentElement.scrollHeight,
    viewportWidth: window.innerWidth,
    viewportHeight: window.innerHeight
  }));
  if (metrics.width > metrics.viewportWidth + 2) fail(`${label}: overflow horizontal`, metrics);
  if (strictVertical && metrics.height > metrics.viewportHeight + 2) fail(`${label}: overflow vertical`, metrics);
}

async function assertVisibleImagesLoaded(page, label) {
  try {
    await page.waitForFunction(() => {
      const isVisible = (element) => {
        const style = getComputedStyle(element);
        const rect = element.getBoundingClientRect();
        return style.display !== "none" && style.visibility !== "hidden" && rect.width > 2 && rect.height > 2;
      };

      return [...document.images]
        .filter(isVisible)
        .every((image) => image.complete && image.naturalWidth >= 2 && image.naturalHeight >= 2);
    }, null, { timeout: 5000 });
  } catch {
    // The report below keeps the concrete image URL when one never finishes.
  }

  const broken = await page.evaluate(() => {
    const isVisible = (element) => {
      const style = getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      return style.display !== "none" && style.visibility !== "hidden" && rect.width > 2 && rect.height > 2;
    };
    return [...document.images]
      .filter(isVisible)
      .filter((image) => !image.complete || image.naturalWidth < 2 || image.naturalHeight < 2)
      .map((image) => ({
        alt: image.alt || "",
        src: image.currentSrc || image.src,
        width: image.naturalWidth,
        height: image.naturalHeight
      }));
  });
  if (broken.length) fail(`${label}: imagenes visibles sin cargar`, { broken });
}

async function assertNoClippedVisibleText(page, label) {
  const clipped = await page.evaluate(() => {
    const selectors = "button, input, select, textarea, .btn-menu, .stat-card, .match-card, .offer-card, .player-choice, .star-chip";
    return [...document.querySelectorAll(selectors)]
      .filter((element) => {
        const style = getComputedStyle(element);
        const rect = element.getBoundingClientRect();
        return style.display !== "none" && style.visibility !== "hidden" && rect.width > 2 && rect.height > 2;
      })
      .filter((element) => element.scrollWidth > element.clientWidth + 3 || element.scrollHeight > element.clientHeight + 3)
      .map((element) => ({
        text: (element.innerText || element.value || element.getAttribute("aria-label") || "").trim().slice(0, 80),
        id: element.id,
        className: typeof element.className === "string" ? element.className : "",
        clientWidth: element.clientWidth,
        scrollWidth: element.scrollWidth,
        clientHeight: element.clientHeight,
        scrollHeight: element.scrollHeight
      }));
  });
  if (clipped.length) fail(`${label}: texto/control recortado`, { clipped });
}

async function assertComfortableInteractiveTargets(page, label) {
  const tinyTargets = await page.evaluate(() => {
    const selectors = "button, input, select, textarea, [role='button']";
    return [...document.querySelectorAll(selectors)]
      .filter((element) => {
        const style = getComputedStyle(element);
        const rect = element.getBoundingClientRect();
        return style.display !== "none" && style.visibility !== "hidden" && rect.width > 2 && rect.height > 2;
      })
      .filter((element) => {
        const rect = element.getBoundingClientRect();
        return rect.width < 34 || rect.height < 34;
      })
      .map((element) => {
        const rect = element.getBoundingClientRect();
        return {
          text: (element.innerText || element.value || element.getAttribute("aria-label") || "").trim().slice(0, 80),
          id: element.id,
          className: typeof element.className === "string" ? element.className : "",
          width: rect.width,
          height: rect.height
        };
      });
  });

  if (tinyTargets.length) fail(`${label}: controles demasiado compactos`, { tinyTargets });
}

async function assertLevelManagerComfort(page, mode) {
  const compact = await page.evaluate((gridSelector) => {
    const grid = document.querySelector(gridSelector);
    const visible = (element) => {
      const style = getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      return style.display !== "none" && style.visibility !== "hidden" && rect.width > 2 && rect.height > 2;
    };
    if (!grid || !visible(grid)) return { missing: true };

    const gridRect = grid.getBoundingClientRect();
    const buttons = [...grid.querySelectorAll(".level-btn")].filter(visible).map((button) => {
      const rect = button.getBoundingClientRect();
      return {
        text: button.innerText.trim(),
        width: rect.width,
        height: rect.height
      };
    });

    return {
      missing: false,
      gridHeight: gridRect.height,
      buttonCount: buttons.length,
      tinyButtons: buttons.filter((button) => button.width < 40 || button.height < 40).slice(0, 8),
      averageHeight: buttons.length ? buttons.reduce((sum, button) => sum + button.height, 0) / buttons.length : 0
    };
  }, mode.grid);

  if (compact.missing || compact.buttonCount < 4 || compact.gridHeight < 120 || compact.tinyButtons.length || compact.averageHeight < 40) {
    fail(`${mode.title}: gestor de niveles compacto o dificil de tocar`, compact);
  }
}

async function assertAuditClean(label, audit) {
  if (audit.runtimeErrors.length || audit.failures.length) {
    fail(`${label}: errores de runtime o assets`, { runtimeErrors: audit.runtimeErrors, failures: audit.failures });
  }
}

async function checkLevelManagers(browser) {
  const audit = await newAuditedPage(browser, DESKTOP);
  const { page } = audit;
  await page.goto(BASE_URL, { waitUntil: "networkidle", timeout: 30000 });

  for (const mode of levelModes) {
    await page.locator(".btn-menu").nth(mode.menuIndex).click();
    if (mode.modal) await page.locator("#appModal.visible #appModalConfirm").click();
    await page.locator(mode.button).click();
    await page.waitForFunction((gridSelector) => {
      const grid = document.querySelector(gridSelector);
      return grid && !grid.classList.contains("hidden") && getComputedStyle(grid).display !== "none";
    }, mode.grid, { timeout: 10000 });
    await assertLevelManagerComfort(page, mode);
    await assertNoClippedVisibleText(page, `${mode.title} gestor de niveles`);
    await assertComfortableInteractiveTargets(page, `${mode.title} gestor de niveles`);
    await page.evaluate(() => window.showView("menuView"));
  }

  await assertAuditClean("gestores de niveles", audit);
  await page.close();
  console.log("ok gestores de niveles");
}

async function checkRoute(browser, route, viewport, label, strictVertical = true) {
  const audit = await newAuditedPage(browser, viewport);
  await audit.page.goto(`${BASE_URL}${route}`, { waitUntil: "networkidle", timeout: 30000 });
  await assertViewportFit(audit.page, label, strictVertical);
  await assertVisibleImagesLoaded(audit.page, label);
  await assertNoClippedVisibleText(audit.page, label);
  await assertComfortableInteractiveTargets(audit.page, label);
  await assertAuditClean(label, audit);
  await audit.page.close();
  console.log(`ok ${label}`);
}

async function checkMenuModes(browser) {
  const audit = await newAuditedPage(browser, DESKTOP);
  const { page } = audit;
  await page.goto(BASE_URL, { waitUntil: "networkidle", timeout: 30000 });
  for (let index = 0; index < menuModes.length; index += 1) {
    const mode = menuModes[index];
    await page.locator(".btn-menu").nth(index).click();
    if (mode.modal) await page.locator("#appModal.visible #appModalConfirm").click();
    await page.waitForFunction((viewId) => {
      const view = document.getElementById(viewId);
      return view && getComputedStyle(view).display !== "none";
    }, mode.view, { timeout: 10000 });
    if (mode.frame) {
      await page.waitForFunction((viewId) => {
        const frame = document.querySelector(`#${viewId} iframe`);
        return frame && frame.contentDocument && frame.contentDocument.body.innerText.trim();
      }, mode.view, { timeout: 20000 });
    }
    await assertViewportFit(page, `menu ${mode.title}`, true);
    await assertVisibleImagesLoaded(page, `menu ${mode.title}`);
    await assertNoClippedVisibleText(page, `menu ${mode.title}`);
    await assertComfortableInteractiveTargets(page, `menu ${mode.title}`);
    await page.evaluate(() => window.showView("menuView"));
  }
  await assertAuditClean("menu modes", audit);
  await page.close();
  console.log("ok menu modes visual");
}

async function checkCareerImages(browser) {
  const audit = await newAuditedPage(browser, DESKTOP);
  const { page } = audit;
  await page.goto(`${BASE_URL}/modes/carrera-jugador/index.html`, { waitUntil: "networkidle", timeout: 30000 });
  await page.evaluate(() => localStorage.clear());
  await page.reload({ waitUntil: "networkidle" });
  await page.selectOption("#playerPosition", "MCO");
  await page.locator("#careerForm").evaluate((form) => form.requestSubmit());
  await page.waitForFunction(() => !document.getElementById("careerGame").classList.contains("hidden"));
  await page.locator("[data-tab='match']").click();
  await page.waitForTimeout(500);
  await assertVisibleImagesLoaded(page, "carrera estrellas/escudos");
  await assertNoClippedVisibleText(page, "carrera partido");
  await assertComfortableInteractiveTargets(page, "carrera partido");
  await assertAuditClean("carrera imagenes", audit);
  await page.close();
  console.log("ok carrera imagenes");
}

(async () => {
  const server = await ensureServer();
  let browser = null;
  try {
    browser = await launchBrowser();
    for (const route of directRoutes) {
      await checkRoute(browser, route, DESKTOP, `desktop ${route}`, true);
      await checkRoute(browser, route, MOBILE, `mobile ${route}`, false);
    }
    await checkMenuModes(browser);
    await checkLevelManagers(browser);
    await checkCareerImages(browser);
    console.log("Visual asset audit OK");
  } finally {
    if (browser) await browser.close();
    if (server) server.kill();
  }
})().catch((error) => {
  console.error("Visual asset audit FAILED");
  console.error(error.message);
  if (error.details) console.error(JSON.stringify(error.details, null, 2));
  process.exit(1);
});
