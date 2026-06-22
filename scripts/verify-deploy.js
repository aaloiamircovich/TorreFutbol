const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const failures = [];

function check(condition, message) {
    if (condition) {
        console.log(`[ok] ${message}`);
        return;
    }

    failures.push(message);
    console.error(`[error] ${message}`);
}

function read(relativePath) {
    return fs.readFileSync(path.join(ROOT, relativePath), 'utf8');
}

async function verifyHealthEndpoint() {
    const port = 3900 + Math.floor(Math.random() * 500);
    const child = spawn(process.execPath, ['-r', './viewport-fit-server.js', 'server.js'], {
        cwd: ROOT,
        env: { ...process.env, HOST: '127.0.0.1', PORT: String(port) },
        stdio: ['ignore', 'pipe', 'pipe']
    });

    let stderr = '';
    child.stderr.on('data', (chunk) => {
        stderr += chunk.toString();
    });

    const deadline = Date.now() + 10000;
    try {
        while (Date.now() < deadline) {
            if (child.exitCode !== null) {
                throw new Error(stderr.trim() || `El servidor termino con codigo ${child.exitCode}`);
            }

            try {
                const response = await fetch(`http://127.0.0.1:${port}/health`);
                const body = await response.json();
                check(response.ok && body.ok === true && body.service === 'futbol-mix', 'El comando de produccion responde correctamente en /health');
                check(response.headers.get('x-content-type-options') === 'nosniff', 'El servidor evita MIME sniffing');
                check(response.headers.get('x-frame-options') === 'SAMEORIGIN', 'El servidor bloquea framing externo');
                check(!response.headers.has('x-powered-by'), 'El servidor no expone la firma de Express');
                const assetResponse = await fetch(`http://127.0.0.1:${port}/modes/carrera-jugador/career-data.js`, {
                    headers: { 'accept-encoding': 'gzip, deflate' }
                });
                check(assetResponse.ok && Boolean(assetResponse.headers.get('content-encoding')), 'Los assets pesados se entregan con compresion HTTP');
                return;
            } catch (error) {
                await new Promise((resolve) => setTimeout(resolve, 250));
            }
        }

        throw new Error('El servidor no estuvo listo dentro de 10 segundos');
    } finally {
        child.kill();
    }
}

async function main() {
    const packageJson = JSON.parse(read('package.json'));
    const railway = JSON.parse(read('railway.json'));
    const dockerfile = read('Dockerfile');
    const server = read('server.js');

    check(packageJson.engines?.node === '>=20', 'package.json exige Node 20 o superior');
    check(packageJson.scripts?.start === 'node -r ./viewport-fit-server.js server.js', 'package.json define el comando de produccion esperado');
    check(railway.build?.builder === 'DOCKERFILE', 'Railway construye mediante Dockerfile');
    check(railway.deploy?.startCommand === 'npm start', 'Railway ejecuta npm start');
    check(railway.deploy?.healthcheckPath === '/health', 'Railway consulta /health antes de activar un deploy');
    check(/EXPOSE\s+8080/.test(dockerfile), 'Dockerfile documenta el puerto 8080');
    check(/CMD\s*\[\s*["']npm["']\s*,\s*["']start["']\s*\]/.test(dockerfile), 'Dockerfile ejecuta npm start');
    check(/process\.env\.PORT/.test(server), 'El servidor respeta PORT de Railway');
    check(/process\.env\.HOST/.test(server), 'El servidor permite configurar HOST');
    check(/app\.get\(['"]\/health['"]/.test(server), 'El servidor expone /health');
    check(/app\.use\(compression\(/.test(server), 'El servidor comprime respuestas estaticas');
    check(/app\.disable\(['"]x-powered-by['"]\)/.test(server), 'El servidor oculta la firma de Express');
    check(/SOCKET_IO_ORIGINS|CORS_ORIGINS|PUBLIC_ORIGIN/.test(server), 'Socket.IO permite restringir origen por entorno');

    if (!failures.length) {
        await verifyHealthEndpoint();
    }

    if (failures.length) {
        console.error(`\nVerificacion fallida: ${failures.length} problema(s).`);
        process.exitCode = 1;
        return;
    }

    console.log('\nDeploy local verificado correctamente.');
}

main().catch((error) => {
    console.error(`[error] ${error.message}`);
    process.exitCode = 1;
});
