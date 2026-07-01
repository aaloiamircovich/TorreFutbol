# Sistema de fases automaticas por minijuego

Este sistema convierte el pulido de FutbolMIX en un ciclo repetible. Cada minijuego avanza por las mismas fases y el reporte `reports/minigame-phase-audit.md` muestra que falta para cerrarlo con calidad de entrega.

## Comandos

- `npm run audit:minigames`: genera el tablero de fases por minijuego.
- `npm run audit:assets`: prioriza imagenes faltantes por frecuencia de uso.
- `npm run audit:data`: detecta nombres raros, placeholders o datos rotos.
- `npm run test:smoke`: valida menu, desktop/mobile y flujos clave en local.
- `npm run verify:prod`: valida HTTP, cabeceras, rutas y assets pesados en produccion.
- `npm run test:smoke:prod`: valida produccion con Playwright.

## Fases

1. Inventario: Existe en menu, vista y smoke test.
2. Jugabilidad: Tiene datos suficientes y flujo cubierto por QA.
3. Visual/UX: Tiene superficie UI, fallback visual y reglas responsive.
4. Imagenes: Fotos, escudos o banderas cubiertas con prioridad de calidad.
5. Datos/balance: Datos auditables, balanceables y sin placeholders.
6. QA final: Incluido en comandos de release y verificacion de produccion.

## Regla de trabajo

1. Ejecutar `npm run audit:minigames`.
2. Tomar el primer juego con fase incompleta.
3. Resolver primero jugabilidad y datos; luego visual, imagenes y QA.
4. Ejecutar `npm run test:release` antes de publicar.
5. Ejecutar `npm run verify:prod` y `npm run test:smoke:prod` despues del deploy.

## Criterio de imagen correcta

- Preferir assets locales optimizados en `assets/players`, `assets/teams` y `assets/flags`.
- Evitar depender de URLs remotas para elementos frecuentes.
- Cada imagen importante debe tener fallback y no romper layout si falla.
- Priorizar primero las imagenes listadas por `reports/asset-priorities.md` y por el reporte de fases.

