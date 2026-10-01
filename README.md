# Juego Memory

Juego de memoria con cartas Pokémon hecho en React por Pelayogm y Danielma.

## Cómo se juega

- El tablero tiene 12 cartas boca abajo, es decir, 6 parejas.
- Levanta dos cartas: si son iguales, la pareja desaparece; si no, se vuelven a tapar al cabo de un segundo.
- Cada par de cartas levantadas cuenta como un movimiento. La partida termina al encontrar las 6 parejas.
- "Volver a empezar" baraja de nuevo y pone el contador a 0.
- Se puede jugar con ratón, pantalla táctil o teclado (Tab para pasar de una carta a otra, Enter o Espacio para levantarla).
- El diseño se adapta a la pantalla: 4 columnas en escritorio y en móvil en vertical, y 6 columnas en móvil en horizontal.

## Requisitos

- Node.js 18 o superior y npm.

## Scripts

| Comando | Qué hace |
| --- | --- |
| `npm install` | Instala las dependencias. |
| `npm start` | Arranca la app en modo desarrollo en http://localhost:3000. |
| `npm test` | Ejecuta los tests (Jest y Testing Library). |
| `npm run build` | Genera la versión de producción en `build/`. |

## Estructura

- `src/App.js`: título, GIF de cabecera y tablero.
- `src/Tablero.js`: lógica de la partida (barajado, cartas levantadas, parejas encontradas, movimientos y reinicio).
- `src/Carta.js`: carta con volteo 3D; es un botón, así que también funciona con teclado.
- `src/App.test.js` y `src/Tablero.test.js`: tests.
- `src/img/`: imágenes de las cartas y del fondo.

## Autores

- Pelayogm
- Danitinhg (Danielma)

## Créditos

Las imágenes de las cartas pertenecen a The Pokémon Company, Nintendo, Creatures y GAME FREAK; el fondo (Coconut Mall) y los GIF de Luigi, a Nintendo. Se usan en un ejercicio educativo sin ánimo de lucro. Este proyecto no está afiliado a ninguna de esas empresas.
