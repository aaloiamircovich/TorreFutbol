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
- [x] Revisar textos cortados y jerarquia visual en cada modo.
- [x] Normalizar animaciones para que sean fluidas y no molesten.
- [x] Agregar fallback visual elegante para logos/fotos faltantes.

## Fase 3 - Modo carrera

- [x] Corregir caso donde el jugador puede participar como goleador y asistidor de la misma jugada.
- [x] Auditar progresion semanal y ritmo de crecimiento.
- [x] Extender arboles de habilidades por categoria y posicion.
- [x] Balancear recompensas de XP, dinero, popularidad y valor de mercado.
- [x] Revisar ventanas de fichajes y rumores.
- [x] Reducir costo de carga de career-data.js.

## Fase 4 - Torneos

- [x] Revisar balance de valoraciones por seleccion/club historico.
- [x] Validar que botones de simular/pasar partido no queden cortados.
- [x] Revisar narracion minuto a minuto.
- [x] Verificar que skips y sorteos no queden sin opciones.
- [x] Confirmar que todos los equipos/selecciones corresponden a torneos validos.

## Fase 5 - Datos y assets

- [x] Ejecutar auditoria de nombres raros, numeros y caracteres basura.
- [x] Priorizar logos de equipos y selecciones mas frecuentes.
- [x] Priorizar fotos de jugadores mas usados.
- [x] Comprimir assets pesados.
- [x] Revisar aliases de busqueda para juegos de adivinar.

## Fase 6 - Backend y deploy

- [x] Unificar comando de produccion entre railway.json, Dockerfile y package.json.
- [x] Configurar CORS por variable de entorno.
- [x] Agregar limpieza de salas inactivas en subasta.
- [ ] Revisar logs de Railway.
- [x] Confirmar deploy automatico desde GitHub.

Avance 2026-06-22:

- [x] Agregar verificacion automatica de configuracion y arranque de produccion.
- [x] Configurar `/health` como health check nativo de Railway.
- [x] Hacer que el smoke test levante y cierre su propio servidor.
- [x] Confirmar que la rama local estaba sincronizada con `origin/codex/release-polish` antes de los cambios.
- [ ] Validar en el panel de Railway los logs de produccion.

Avance 2026-06-29:

- [x] Publicar `main` con la entrega verificada para activar la rama por defecto.
- [x] Confirmar en GitHub que Railway reporto `success` para los commits de cierre publicados en `main`.
- [x] Descubrir dominio publico de Railway: `https://torrefutbol-production.up.railway.app`.
- [x] Probar `/health` de produccion con respuesta `200`.
- [x] Ejecutar `SMOKE_BASE_URL=https://torrefutbol-production.up.railway.app npm run test:smoke` contra produccion.
- [ ] Revisar logs desde el panel de Railway o una CLI autenticada.

## Criterio de entrega

- Todos los modos abren, se juegan y vuelven al menu.
- No hay errores visibles de consola en flujo normal.
- Desktop 1366x768 sin scroll obligatorio en menu ni controles principales.
- Mobile utilizable sin superposiciones.
- Datos principales sin nombres rotos.
- Assets faltantes tienen fallback prolijo.
- Railway despliega la misma version que GitHub y el smoke test de produccion pasa.

## Fase 7 - Calidad continua

- [x] Crear un comando unico `npm run test:release`.
- [x] Validar sintaxis de todos los archivos JavaScript.
- [x] Ejecutar controles de release en pull requests y pushes con GitHub Actions.
- [x] Ejecutar el pipeline completo y revisar el diff final.

## Fase 8 - Rendimiento y seguridad

- [x] Compactar `career-data.js` de 3,44 MB a 1,62 MB sin perder datos.
- [x] Servir assets pesados con compresion HTTP (aprox. 294 KB para `career-data.js`).
- [x] Corregir vulnerabilidades conocidas de dependencias (`npm audit`: 0).
- [x] Bloquear releases con vulnerabilidades altas en dependencias de produccion.
- [x] Ejecutar nuevamente el pipeline final con controles de seguridad.

## Fase 9 - Accesibilidad basica

- [x] Auditar nombres accesibles de botones y controles visibles.
- [x] Auditar etiquetas de campos de formulario.
- [x] Auditar atributo `alt` en imagenes visibles.
- [x] Ejecutar el smoke test y corregir hallazgos.

## Fase 10 - Seguridad HTTP

- [x] Ocultar la firma `X-Powered-By` de Express.
- [x] Agregar proteccion contra MIME sniffing y framing externo.
- [x] Restringir permisos de camara, microfono y geolocalizacion.
- [x] Verificar cabeceras y ejecutar el pipeline final.
