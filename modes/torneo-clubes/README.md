# Torneo de Clubes Historicos

Juego standalone hecho con HTML, CSS y JavaScript puro.

## Mecanica

1. Primero eliges formacion: 4-3-3, 4-4-2, 3-5-2, 3-4-3 o 5-3-2.
2. Se sortea un club historico de Champions League o Libertadores.
3. De esa plantilla eliges 1 jugador para tu XI, siempre respetando su posicion especifica.
4. Los puestos disponibles son POR, LD, DFC, LI, MCD, MC, MCO, EI, ED y DC.
5. Si una posicion exacta ya completo sus cupos, sus jugadores quedan bloqueados.
6. Se repite hasta completar 11 jugadores.
7. Hay 3 skips compartidos: "Otro club" sortea otro club de la misma edicion y "Otra edicion" mantiene el club pero cambia el ano.
8. Al completar el XI se simula fase de grupos, dieciseisavos, octavos, cuartos, semis y final.

## Clubes incluidos

La base inicial incluye equipos historicos de Champions League y Copa Libertadores. Los clubes aparecen en varias ediciones cuando es posible para que los re-sorteos tengan alternativas.

## Simulacion

El resultado no se calcula como 50/50. Cada partido usa:

- Media total del equipo.
- Valoracion por lineas: arquero, defensa, medio y ataque.
- Penalizacion si el XI queda desbalanceado por posiciones.
- Probabilidad ponderada segun diferencia de rating.
- Eventos de partido: goles, penales, tiros libres, amarillas, rojas, penales atajados y definicion por penales.

## Integracion

Abre `index.html` directamente en el navegador o copia `index.html`, `styles.css`, `club-data.js` y `script.js` dentro de tu pagina.
