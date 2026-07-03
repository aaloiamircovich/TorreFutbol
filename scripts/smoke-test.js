const { chromium } = require("playwright");
const { spawn } = require("child_process");

const LOCAL_PORT = process.env.SMOKE_PORT || String(4300 + Math.floor(Math.random() * 500));
const BASE_URL = process.env.SMOKE_BASE_URL || `http://127.0.0.1:${LOCAL_PORT}`;
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
  { title: "Torneo Selecciones Historicas", view: "torneoSeleccionesView", frame: "modes/torneo-selecciones/index.html" },
  { title: "Torneo Clubes Historicos", view: "torneoClubesView", frame: "modes/torneo-clubes/index.html" },
  { title: "Carrera Jugador", view: "carreraJugadorView", frame: "modes/carrera-jugador/index.html" }
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
  } catch (error) {
    return false;
  }
}

async function ensureServer() {
  if (await healthIsReady()) return null;
  if (process.env.SMOKE_BASE_URL) {
    fail(`No se pudo conectar al servidor indicado en ${BASE_URL}`);
  }

  const child = spawn(process.execPath, ["-r", "./viewport-fit-server.js", "server.js"], {
    cwd: process.cwd(),
    env: { ...process.env, HOST: "127.0.0.1", PORT: LOCAL_PORT },
    stdio: ["ignore", "pipe", "pipe"]
  });
  let stderr = "";
  child.stderr.on("data", (chunk) => {
    stderr += chunk.toString();
  });

  const deadline = Date.now() + 10000;
  while (Date.now() < deadline) {
    if (child.exitCode !== null) {
      fail("El servidor del smoke test termino antes de iniciar", { stderr: stderr.trim() });
    }
    if (await healthIsReady()) return child;
    await new Promise((resolve) => setTimeout(resolve, 250));
  }

  child.kill();
  fail("El servidor del smoke test no estuvo listo dentro de 10 segundos", { stderr: stderr.trim() });
}

async function launchBrowser() {
  try {
    return await chromium.launch({ headless: true, channel: CHANNEL });
  } catch (error) {
    return chromium.launch({ headless: true });
  }
}

async function withPage(browser, path, fn, viewport = DESKTOP) {
  const page = await browser.newPage({ viewport, isMobile: viewport.width <= 520 });
  const consoleErrors = [];
  const pageErrors = [];
  const failedResponses = [];

  page.on("console", (msg) => {
    if (msg.type() === "error") consoleErrors.push(msg.text());
  });
  page.on("pageerror", (error) => pageErrors.push(error.message));
  page.on("response", (response) => {
    if (response.status() >= 400) {
      failedResponses.push({ status: response.status(), url: response.url() });
    }
  });

  await page.goto(`${BASE_URL}${path}`, { waitUntil: "networkidle", timeout: 30000 });
  const result = await fn(page, { consoleErrors, pageErrors, failedResponses });
  await page.close();
  return result;
}

async function assertNoRuntimeIssues(label, issues) {
  const problems = [
    ...issues.consoleErrors.map((text) => `console: ${text}`),
    ...issues.pageErrors.map((text) => `pageerror: ${text}`),
    ...issues.failedResponses.map((item) => `${item.status}: ${item.url}`)
  ];
  if (problems.length) fail(`${label} tiene errores de runtime`, { problems });
}

async function assertNoDesktopOverflow(page, label) {
  const metrics = await page.evaluate(() => ({
    width: document.documentElement.scrollWidth,
    height: document.documentElement.scrollHeight,
    viewportWidth: window.innerWidth,
    viewportHeight: window.innerHeight
  }));

  if (metrics.width > metrics.viewportWidth + 2 || metrics.height > metrics.viewportHeight + 2) {
    fail(`${label} genera overflow en desktop`, metrics);
  }
}

async function assertNoHorizontalOverflow(page, label) {
  const metrics = await page.evaluate(() => ({
    width: document.documentElement.scrollWidth,
    viewportWidth: window.innerWidth
  }));

  if (metrics.width > metrics.viewportWidth + 2) {
    fail(`${label} genera overflow horizontal`, metrics);
  }
}

async function assertNoClippedControls(page, label) {
  const clipped = await page.evaluate(() => {
    const selectors = "button, [role='button'], input[type='button'], input[type='submit']";
    return [...document.querySelectorAll(selectors)]
      .filter((element) => {
        const style = getComputedStyle(element);
        const rect = element.getBoundingClientRect();
        return style.display !== "none" && style.visibility !== "hidden" && rect.width > 0 && rect.height > 0;
      })
      .filter((element) => element.scrollWidth > element.clientWidth + 2 || element.scrollHeight > element.clientHeight + 2)
      .map((element) => ({
        text: (element.innerText || element.value || element.getAttribute("aria-label") || "").trim().slice(0, 60),
        id: element.id,
        className: typeof element.className === "string" ? element.className : "",
        clientWidth: element.clientWidth,
        scrollWidth: element.scrollWidth,
        clientHeight: element.clientHeight,
        scrollHeight: element.scrollHeight
      }));
  });

  if (clipped.length) fail(`${label} tiene controles con texto recortado`, { controls: clipped });
}

async function assertBasicAccessibility(page, label) {
  const issues = await page.evaluate(() => {
    const visible = (element) => {
      const style = getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      return style.display !== "none" && style.visibility !== "hidden" && rect.width > 0 && rect.height > 0;
    };
    const accessibleName = (element) => {
      const labelledBy = element.getAttribute("aria-labelledby");
      const labelledText = labelledBy
        ? labelledBy.split(/\s+/).map((id) => document.getElementById(id)?.innerText || "").join(" ")
        : "";
      const label = element.id ? document.querySelector(`label[for='${CSS.escape(element.id)}']`)?.innerText || "" : "";
      return [element.getAttribute("aria-label"), labelledText, label, element.innerText, element.value, element.title]
        .some((value) => String(value || "").trim());
    };

    return {
      unnamedButtons: [...document.querySelectorAll("button, [role='button']")]
        .filter(visible)
        .filter((element) => !accessibleName(element))
        .map((element) => element.id || element.className || element.tagName),
      unlabeledFields: [...document.querySelectorAll("input, select, textarea")]
        .filter(visible)
        .filter((element) => !accessibleName(element) && !element.closest("label"))
        .map((element) => element.id || element.name || element.tagName),
      imagesWithoutAlt: [...document.querySelectorAll("img")]
        .filter(visible)
        .filter((image) => !image.hasAttribute("alt"))
        .map((image) => image.src)
    };
  });

  if (issues.unnamedButtons.length || issues.unlabeledFields.length || issues.imagesWithoutAlt.length) {
    fail(`${label} tiene problemas basicos de accesibilidad`, issues);
  }
}

async function runDirectRouteChecks(browser) {
  for (const route of directRoutes) {
    await withPage(browser, route, async (page, issues) => {
      await assertNoRuntimeIssues(route, issues);
      await assertNoDesktopOverflow(page, route);
      await assertNoClippedControls(page, route);
      await assertBasicAccessibility(page, route);
      const bodyText = await page.locator("body").innerText({ timeout: 5000 });
      if (!bodyText.trim()) fail(`${route} no renderiza texto visible`);
      return true;
    });
    console.log(`ok route ${route}`);
  }
}

async function runMobileRouteChecks(browser) {
  for (const route of directRoutes) {
    await withPage(browser, route, async (page, issues) => {
      await assertNoRuntimeIssues(`${route} mobile`, issues);
      await assertNoHorizontalOverflow(page, `${route} mobile`);
      await assertNoClippedControls(page, `${route} mobile`);
      await assertBasicAccessibility(page, `${route} mobile`);
      const bodyText = await page.locator("body").innerText({ timeout: 5000 });
      if (!bodyText.trim()) fail(`${route} mobile no renderiza texto visible`);
      return true;
    }, MOBILE);
    console.log(`ok mobile ${route}`);
  }
}

async function runMenuChecks(browser) {
  await withPage(browser, "/", async (page, issues) => {
    await assertNoRuntimeIssues("menu inicial", issues);
    await assertNoDesktopOverflow(page, "menu inicial");
    await assertNoClippedControls(page, "menu inicial");
    await assertBasicAccessibility(page, "menu inicial");

    const buttonCount = await page.locator(".btn-menu").count();
    if (buttonCount !== menuModes.length) {
      fail("Cantidad inesperada de juegos en el menu", { expected: menuModes.length, actual: buttonCount });
    }

    for (let index = 0; index < menuModes.length; index += 1) {
      const mode = menuModes[index];
      await page.locator(".btn-menu").nth(index).click();

      if (mode.modal) {
        await page.locator("#appModal.visible #appModalConfirm").click();
      }

      await page.waitForFunction((viewId) => {
        const view = document.getElementById(viewId);
        return view && getComputedStyle(view).display !== "none";
      }, mode.view, { timeout: 10000 });

      if (mode.frame) {
        await page.waitForFunction((viewId) => {
          const frame = document.querySelector(`#${viewId} iframe`);
          return frame && frame.contentDocument && frame.contentDocument.body && frame.contentDocument.body.innerText.trim().length > 0;
        }, mode.view, { timeout: 20000 });
      }

      await assertNoDesktopOverflow(page, mode.title);
      await assertNoClippedControls(page, mode.title);
      await assertBasicAccessibility(page, mode.title);
      await page.evaluate(() => window.showView("menuView"));
      await page.waitForFunction(() => getComputedStyle(document.getElementById("menuView")).display !== "none");
      console.log(`ok menu ${mode.title}`);
    }
  });
}

async function runMobileMenuChecks(browser) {
  await withPage(browser, "/", async (page, issues) => {
    await assertNoRuntimeIssues("menu mobile", issues);
    await assertNoHorizontalOverflow(page, "menu mobile");
    await assertNoClippedControls(page, "menu mobile");
    await assertBasicAccessibility(page, "menu mobile");

    const buttonCount = await page.locator(".btn-menu").count();
    if (buttonCount !== menuModes.length) {
      fail("Cantidad inesperada de juegos en el menu mobile", { expected: menuModes.length, actual: buttonCount });
    }

    const offscreenSides = await page.evaluate(() => {
      const viewportWidth = window.innerWidth;
      return [...document.querySelectorAll("button")]
        .map((button) => {
          const rect = button.getBoundingClientRect();
          return {
            text: button.innerText.trim().slice(0, 40),
            left: rect.left,
            right: rect.right,
            width: rect.width
          };
        })
        .filter((button) => button.width > 0 && (button.left < -1 || button.right > viewportWidth + 1));
    });

    if (offscreenSides.length) fail("Hay botones fuera del ancho mobile", { buttons: offscreenSides });
    console.log("ok mobile menu");
  }, MOBILE);
}

async function runTorreSurrenderCheck(browser) {
  await withPage(browser, "/", async (page, issues) => {
    await page.evaluate(() => localStorage.clear());
    await page.reload({ waitUntil: "networkidle" });
    await page.locator(".btn-menu.torre").click();
    await page.locator("#appModal.visible #appModalConfirm").click();
    await page.waitForFunction(() => getComputedStyle(document.getElementById("torreView")).display !== "none");
    await page.locator("#surrenderBtn").click();
    await page.locator("#appModal.visible #appModalConfirm").click();
    await page.waitForFunction(() => document.querySelectorAll("#towerSlots .slot.revealed").length === 10, null, { timeout: 5000 });
    try {
      await page.waitForFunction(() => [...document.querySelectorAll("#towerSlots .slot.revealed .slot-img")]
        .every((image) => image.complete && image.naturalWidth > 1 && image.naturalHeight > 1), null, { timeout: 5000 });
    } catch {
      // The detailed assertion below reports whether this is a real missing image.
    }

    const result = await page.evaluate(() => ({
      revealed: document.querySelectorAll("#towerSlots .slot.revealed").length,
      named: [...document.querySelectorAll("#towerSlots .slot-name")]
        .filter((slot) => slot.innerText.trim() && slot.innerText.trim() !== "?????").length,
      images: [...document.querySelectorAll("#towerSlots .slot-img")]
        .filter((image) => image.complete && image.naturalWidth > 1 && image.naturalHeight > 1).length,
      surrenderDisabled: document.getElementById("surrenderBtn").disabled
    }));

    if (result.revealed !== 10 || result.named !== 10 || result.images !== 10 || !result.surrenderDisabled) {
      fail("Torre Futbolera no revela toda la tabla al rendirse", result);
    }

    await assertNoRuntimeIssues("torre rendirse", issues);
    await assertNoClippedControls(page, "torre rendirse");
    console.log("ok torre surrender");
  });
}

async function runCareerSkillTreeCheck(browser) {
  await withPage(browser, "/modes/carrera-jugador/index.html", async (page, issues) => {
    await page.evaluate(() => localStorage.clear());
    await page.reload({ waitUntil: "networkidle" });
    await page.selectOption("#playerPosition", "MCO");
    await page.locator("#careerForm").evaluate((form) => form.requestSubmit());
    await page.waitForFunction(() => !document.getElementById("careerGame").classList.contains("hidden"));
    await page.locator("[data-tab='progress']").click();
    await page.locator("[data-skill-tab='pases']").click();

    const checks = await page.evaluate(() => ({
      detailCards: document.querySelectorAll(".attribute-details").length,
      passNodes: document.querySelectorAll(".skill-map-node").length,
      archetypeNode: [...document.querySelectorAll(".skill-map-node")].some((node) => node.getAttribute("aria-label") === "Enganche creativo"),
      detailText: document.querySelector(".skill-detail-bars")?.innerText || ""
    }));

    if (checks.detailCards !== 8) fail("El modo carrera no muestra los subatributos esperados", checks);
    if (checks.passNodes < 8 || !checks.archetypeNode) fail("La rama de pases no incluye el arquetipo por posicion", checks);
    if (!checks.detailText.includes("Pase corto")) fail("El detalle de mejora no muestra estadisticas especificas", checks);
    await assertNoRuntimeIssues("arbol de habilidades", issues);
    await assertNoClippedControls(page, "arbol de habilidades");
    console.log("ok career skill tree");
  });
}

async function runCareerMarketCheck(browser) {
  await withPage(browser, "/modes/carrera-jugador/index.html", async (page, issues) => {
    const storageKey = "torre_futbol_carrera_jugador_v4";
    await page.evaluate(() => localStorage.clear());
    await page.reload({ waitUntil: "networkidle" });
    await page.selectOption("#playerPosition", "MC");
    await page.locator("#careerForm").evaluate((form) => form.requestSubmit());
    await page.waitForFunction(() => !document.getElementById("careerGame").classList.contains("hidden"));

    await page.evaluate((key) => {
      const saved = JSON.parse(localStorage.getItem(key));
      saved.week = 10;
      saved.offers = [{ type: "transfer", club: "Oferta vencida", salary: 999, years: 4 }];
      localStorage.setItem(key, JSON.stringify(saved));
    }, storageKey);
    await page.reload({ waitUntil: "networkidle" });
    await page.locator("#continueCareerBtn").click();
    await page.locator("[data-tab='market']").click();

    const closed = await page.evaluate(() => ({
      agentDisabled: document.getElementById("agentBtn").disabled,
      status: document.getElementById("contractStatus").innerText,
      externalOffers: document.querySelectorAll("[data-offer]").length
    }));
    if (!closed.agentDisabled || !closed.status.includes("Mercado cerrado") || closed.externalOffers !== 0) {
      fail("El mercado cerrado conserva ofertas o permite contactar al agente", closed);
    }

    await page.evaluate((key) => {
      const saved = JSON.parse(localStorage.getItem(key));
      saved.week = 20;
      saved.offers = [];
      localStorage.setItem(key, JSON.stringify(saved));
    }, storageKey);
    await page.reload({ waitUntil: "networkidle" });
    await page.locator("#continueCareerBtn").click();
    await page.locator("[data-tab='market']").click();

    const winter = await page.evaluate(() => ({
      agentDisabled: document.getElementById("agentBtn").disabled,
      status: document.getElementById("contractStatus").innerText
    }));
    if (winter.agentDisabled || !winter.status.includes("Mercado de invierno")) {
      fail("La ventana de invierno no se habilita en la semana 20", winter);
    }

    await page.locator("#agentBtn").click();
    const activity = await page.evaluate(() => ({
      offers: document.querySelectorAll("[data-offer]").length,
      rumors: document.querySelectorAll(".transfer-rumor").length,
      journalist: document.querySelector(".transfer-rumor strong")?.innerText || ""
    }));
    if (!activity.offers || !activity.rumors || !activity.journalist) {
      fail("El mercado abierto no genera ofertas y rumores detallados", activity);
    }

    await assertNoRuntimeIssues("mercado de fichajes", issues);
    console.log("ok career transfer windows");
  });
}

(async () => {
  const localServer = await ensureServer();
  let browser = null;
  try {
    browser = await launchBrowser();
    await runDirectRouteChecks(browser);
    await runTorreSurrenderCheck(browser);
    await runCareerSkillTreeCheck(browser);
    await runCareerMarketCheck(browser);
    await runMenuChecks(browser);
    await runMobileRouteChecks(browser);
    await runMobileMenuChecks(browser);
    console.log("Smoke test OK");
  } finally {
    if (browser) await browser.close();
    if (localServer) localServer.kill();
  }
})().catch((error) => {
  console.error("Smoke test FAILED");
  console.error(error.message);
  if (error.details) console.error(JSON.stringify(error.details, null, 2));
  process.exit(1);
});
