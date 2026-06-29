# FutbolMIX - checklist de deploy

Fecha de revision: 2026-06-29

## Verificado en el repositorio

- Node.js 20 o superior declarado en `package.json`.
- Un unico comando de produccion: `npm start`.
- Railway construye la aplicacion mediante `Dockerfile`.
- Docker y Railway ejecutan el mismo comando de produccion.
- El servidor escucha `PORT` y `HOST` desde variables de entorno.
- El endpoint `/health` forma parte del servidor y del health check de Railway.
- Los archivos estaticos pesados se entregan con compresion HTTP.
- Socket.IO admite `PUBLIC_ORIGIN`, `CORS_ORIGINS` o `SOCKET_IO_ORIGINS`.
- Las salas de subasta inactivas se eliminan automaticamente.

Ejecutar `npm run verify:deploy` antes de publicar. El comando valida la configuracion, inicia temporalmente el servidor y consulta `/health`.

## Verificado en produccion

- Dominio publico: `https://torrefutbol-production.up.railway.app`.
- `/health` responde `200` con `{"ok":true,"service":"futbol-mix"}`.
- GitHub/Railway reporto `success` para el ultimo commit publicado en `main`.
- `npm run test:smoke:prod` recorre produccion con Playwright y paso completo.

## Verificacion en Railway

Estos puntos requieren acceso al panel del proyecto o Railway CLI autenticado:

- Los logs no muestran reinicios continuos, errores de CORS ni recursos faltantes.

Checklist de logs:

- Abrir el deploy marcado como exitoso para el ultimo commit de `main`.
- Revisar logs de build: instalacion de dependencias, ausencia de errores de Docker y salida limpia de `npm start`.
- Revisar logs de runtime: sin reinicios en bucle, sin excepciones de Node, sin errores 404 repetidos para assets criticos.
- Probar una sala de subasta online y confirmar que no aparecen errores de Socket.IO/CORS.

Para restringir Socket.IO al dominio de produccion, definir `PUBLIC_ORIGIN=https://dominio-del-proyecto` en Railway. Durante una migracion con varios dominios, usar `CORS_ORIGINS` con una lista separada por comas.

## Criterio de publicacion

No considerar un deploy terminado hasta que el commit de Railway coincida con GitHub, `/health` responda correctamente, `npm run test:smoke:prod` pase y los logs de Railway no muestren errores operativos.
