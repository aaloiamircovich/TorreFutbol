const DEFAULT_BASE_URL = 'https://torrefutbol-production.up.railway.app';
const BASE_URL = (process.env.PRODUCTION_BASE_URL || process.env.SMOKE_PRODUCTION_URL || process.env.SMOKE_BASE_URL || DEFAULT_BASE_URL).replace(/\/+$/, '');
const failures = [];

const routes = [
    '/',
    '/modes/carrera-jugador/index.html',
    '/modes/torneo-selecciones/index.html',
    '/modes/torneo-clubes/index.html'
];

function check(condition, message) {
    if (condition) {
        console.log(`[ok] ${message}`);
        return;
    }

    failures.push(message);
    console.error(`[error] ${message}`);
}

async function fetchWithTimeout(path, options = {}) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
        return await fetch(`${BASE_URL}${path}`, { ...options, signal: controller.signal });
    } finally {
        clearTimeout(timeout);
    }
}

async function verifyHealth() {
    const response = await fetchWithTimeout('/health');
    const body = await response.json();
    check(response.ok && body.ok === true && body.service === 'futbol-mix', 'Produccion responde correctamente en /health');
    check(response.headers.get('x-content-type-options') === 'nosniff', 'Produccion evita MIME sniffing');
    check(response.headers.get('x-frame-options') === 'SAMEORIGIN', 'Produccion bloquea framing externo');
    check(!response.headers.has('x-powered-by'), 'Produccion no expone la firma de Express');
}

async function verifyRoute(route) {
    const response = await fetchWithTimeout(route);
    const contentType = response.headers.get('content-type') || '';
    const text = await response.text();
    check(response.ok, `Ruta ${route} responde 200`);
    check(contentType.toLowerCase().includes('text/html'), `Ruta ${route} entrega HTML`);
    check(/F[úu]tbol|Torneo|Carrera|Futbol/i.test(text), `Ruta ${route} contiene contenido esperado`);
}

async function verifyHeavyAssetCompression() {
    const response = await fetchWithTimeout('/modes/carrera-jugador/career-data.js', {
        headers: { 'accept-encoding': 'gzip, deflate, br' }
    });
    check(response.ok, 'Asset pesado de carrera responde 200');
    check(Boolean(response.headers.get('content-encoding')), 'Asset pesado de carrera se entrega comprimido');
}

async function main() {
    console.log(`Production target: ${BASE_URL}`);
    await verifyHealth();
    for (const route of routes) {
        await verifyRoute(route);
    }
    await verifyHeavyAssetCompression();

    if (failures.length) {
        console.error(`\nVerificacion de produccion fallida: ${failures.length} problema(s).`);
        process.exitCode = 1;
        return;
    }

    console.log('\nProduccion verificada correctamente.');
}

main().catch((error) => {
    console.error(`[error] ${error.message}`);
    process.exitCode = 1;
});
