# FutbolMIX - plan de pulido para entrega

Fecha: 2026-06-17
Rama de trabajo: codex/release-polish

## Estado inicial

- Repositorio sincronizado con origin/main mediante fast-forward.
- Servidor local probado en http://127.0.0.1:3000.
- Health check correcto: /health responde ok.
- Menu principal probado en 1366x768 sin overflow vertical.
- Modos grandes probados por URL directa sin errores de consola:
  - /modes/carrera-jugador/index.html
  - /modes/torneo-selecciones/index.html
  - /modes/torneo-clubes/index.html

## Riesgos principales

- index.html sigue siendo monolitico y concentra demasiada UI/logica.
- career-data.js pesa mas de 3 MB y se carga completo en modo carrera.
- Cobertura visual de imagenes/logos muy baja segun reports/data-audit.md.
- Hay muchos handlers inline onclick y mucho innerHTML.
- Socket.IO ya tiene origen configurable por entorno; falta definir origen exacto en Railway si se quiere restriccion estricta.
- Subasta online guarda salas en memoria; tiene limpieza de salas inactivas, pero un reinicio de Railway borra partidas.
- No hay scripts formales de test/lint/build en package.json.
- Railway, Docker y package.json usan el mismo comando de produccion.

## Fase 1 - Estabilidad de entrega

- [x] Probar todos los modos desde el menu principal.
- [x] Revisar que cada modo pueda volver al menu sin bloquear modales.
- [x] Corregir cualquier boton cortado en 1366x768.
- [x] Revisar mobile en 390x844.
- [x] Revisar consola sin errores.
- [x] Detectar recursos 404 reales, incluyendo favicon/assets.
- [x] Agregar smoke test automatizado minimo para rutas principales.
- [x] Ampliar smoke test a mobile 390x844 sin overflow horizontal.

## Fase 2 - UX/UI profesional

- [x] Unificar estilos de botones, paneles, inputs y pantallas internas.
- [x] Ajustar menu para que escale con 10+ juegos sin scroll en desktop.
- [x] Mejorar estados de carga para modos pesados.
- [ ] Revisar textos cortados y jerarquia visual en cada modo.
- [x] Normalizar animaciones para que sean fluidas y no molesten.
- [x] Agregar fallback visual elegante para logos/fotos faltantes.

## Fase 3 - Modo carrera

- [x] Corregir caso donde el jugador puede participar como goleador y asistidor de la misma jugada.
- [x] Auditar progresion semanal y ritmo de crecimiento.
- [ ] Extender arboles de habilidades por categoria y posicion.
- [x] Balancear recompensas de XP, dinero, popularidad y valor de mercado.
- [ ] Revisar ventanas de fichajes y rumores.
- [ ] Reducir costo de carga de career-data.js.

## Fase 4 - Torneos

- [x] Revisar balance de valoraciones por seleccion/club historico.
- [x] Validar que botones de simular/pasar partido no queden cortados.
- [ ] Revisar narracion minuto a minuto.
- [x] Verificar que skips y sorteos no queden sin opciones.
- [x] Confirmar que todos los equipos/selecciones corresponden a torneos validos.

## Fase 5 - Datos y assets

- [x] Ejecutar auditoria de nombres raros, numeros y caracteres basura.
- [ ] Priorizar logos de equipos y selecciones mas frecuentes.
- [ ] Priorizar fotos de jugadores mas usados.
- [ ] Comprimir assets pesados.
- [ ] Revisar aliases de busqueda para juegos de adivinar.

## Fase 6 - Backend y deploy

- [x] Unificar comando de produccion entre railway.json, Dockerfile y package.json.
- [x] Configurar CORS por variable de entorno.
- [x] Agregar limpieza de salas inactivas en subasta.
- [ ] Revisar logs de Railway.
- [ ] Confirmar deploy automatico desde GitHub.

## Criterio de entrega

- Todos los modos abren, se juegan y vuelven al menu.
- No hay errores visibles de consola en flujo normal.
- Desktop 1366x768 sin scroll obligatorio en menu ni controles principales.
- Mobile utilizable sin superposiciones.
- Datos principales sin nombres rotos.
- Assets faltantes tienen fallback prolijo.
- Railway despliega la misma version que GitHub.
