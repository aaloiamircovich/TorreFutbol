# Torneo de Selecciones Historicas

Juego standalone hecho con HTML, CSS y JavaScript puro.

## Mecanica

1. Primero eliges formacion: 4-3-3, 4-4-2, 3-5-2, 3-4-3 o 5-3-2.
2. Se sortea una seleccion historica de un ano especifico.
3. De esa plantilla eliges 1 jugador para tu XI, siempre respetando su posicion especifica.
4. Los puestos disponibles son POR, LD, DFC, LI, MCD, MC, MCO, EI, ED y DC.
5. Si una posicion exacta ya completo sus cupos, sus jugadores quedan bloqueados.
6. Se repite hasta completar 11 jugadores.
7. Hay 3 skips para descartar selecciones sorteadas.
8. Al completar el XI se simula fase de grupos, dieciseisavos, octavos, cuartos, semis y final.

## Selecciones incluidas

La base incluye 70 selecciones historicas de Mundiales. La distribucion esta pensada para que cada mundial tenga varias selecciones y cada pais tenga mas de una aparicion, reduciendo los casos donde no haya re-sorteo posible.

## Simulacion

El resultado no se calcula como 50/50. Cada partido usa:

- Media total del equipo.
- Valoracion por lineas: arquero, defensa, medio y ataque.
- Penalizacion si el XI queda desbalanceado por posiciones.
- Probabilidad ponderada segun diferencia de rating.
- Eventos de partido: goles, penales, tiros libres, amarillas, rojas, penales atajados y definicion por penales.

## Fuentes

Las plantillas se armaron tomando como referencia listados historicos de Wikipedia, FIFA y Transfermarkt. Los ratings son manuales para gameplay y deben ajustarse si luego quieres una base mas realista.
