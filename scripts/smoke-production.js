process.env.SMOKE_BASE_URL = process.env.SMOKE_BASE_URL || process.env.SMOKE_PRODUCTION_URL || "https://torrefutbol-production.up.railway.app";

console.log(`Smoke production target: ${process.env.SMOKE_BASE_URL}`);
require("./smoke-test");
