# FutbolMIX - checklist de deploy

Fecha de revision: 2026-06-22

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

## Verificacion en Railway

Estos puntos requieren acceso al panel del proyecto y no pueden inferirse solo desde Git:

- El servicio esta conectado a `aaloiamircovich/TorreFutbol`.
- La rama configurada coincide con la rama que se quiere publicar.
- Automatic Deployments esta habilitado.
- El SHA del ultimo deployment coincide con el ultimo commit enviado a GitHub.
- El dominio publico responde `200` en `/health`.
- Los logs no muestran reinicios continuos, errores de CORS ni recursos faltantes.

Para restringir Socket.IO al dominio de produccion, definir `PUBLIC_ORIGIN=https://dominio-del-proyecto` en Railway. Durante una migracion con varios dominios, usar `CORS_ORIGINS` con una lista separada por comas.

## Criterio de publicacion

No considerar un deploy terminado hasta que el commit de Railway coincida con GitHub, `/health` responda correctamente y se complete un recorrido rapido por el menu, modo carrera, torneos y subasta online.
