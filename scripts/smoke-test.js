const { chromium } = require("playwright");

const BASE_URL = process.env.SMOKE_BASE_URL || "http://127.0.0.1:3000";
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

async function runDirectRouteChecks(browser) {
  for (const route of directRoutes) {
    await withPage(browser, route, async (page, issues) => {
      await assertNoRuntimeIssues(route, issues);
      await assertNoDesktopOverflow(page, route);
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

(async () => {
  const browser = await launchBrowser();
  try {
    await runDirectRouteChecks(browser);
    await runMenuChecks(browser);
    await runMobileRouteChecks(browser);
    await runMobileMenuChecks(browser);
    console.log("Smoke test OK");
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error("Smoke test FAILED");
  console.error(error.message);
  if (error.details) console.error(JSON.stringify(error.details, null, 2));
  process.exit(1);
});
