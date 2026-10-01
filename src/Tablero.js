import React, { useEffect, useState } from "react";
import Carta from "./Carta";
import "./Tablero.css";

import Charizard from "./img/cartas/Charizard-Tera.webp";
import Lapras from "./img/cartas/Lapras-Vmax.webp";
import Rayquaza from "./img/cartas/MegaRayquaza-EX.webp";
import Mewtwo from "./img/cartas/Mewtwo-ex.webp";
import Phanpy from "./img/cartas/Phanpy.webp";
import Pikachu from "./img/cartas/Pikachu-Vmax.webp";
import luigiWin from "./img/fondo/luigi-win.gif";

//Cada carta aparece dos veces en el tablero. "tipo" es lo que se compara para saber si dos cartas son pareja.
const CARTAS = [
  { tipo: "Charizard", imagen: Charizard },
  { tipo: "Lapras", imagen: Lapras },
  { tipo: "Rayquaza", imagen: Rayquaza },
  { tipo: "Mewtwo", imagen: Mewtwo },
  { tipo: "Phanpy", imagen: Phanpy },
  { tipo: "Pikachu", imagen: Pikachu },
];

//Tiempo que siguen visibles dos cartas que no coinciden antes de volver a taparse.
const ESPERA_FALLO_MS = 1000;

//Algoritmo de Fisher-Yates: todas las ordenaciones posibles tienen la misma probabilidad.
//"sort(() => Math.random() - 0.5)" no lo garantiza, porque el resultado depende del algoritmo de ordenación del navegador.
export function barajarFisherYates(cartas) {
  const barajadas = [...cartas];
  for (let i = barajadas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [barajadas[i], barajadas[j]] = [barajadas[j], barajadas[i]];
  }
  return barajadas;
}

//"Volver a empezar" cambia la "key" de la partida: React la desmonta y monta una nueva con todo el estado desde cero.
//Así no hay que reiniciar cada variable a mano, y al desmontarse se cancela cualquier espera pendiente.
//"barajar" se puede sustituir (por ejemplo en los tests) para colocar las cartas en un orden conocido.
function Tablero({ barajar = barajarFisherYates }) {
  const [partida, setPartida] = useState(0);

  return (
    <Partida
      key={partida}
      barajar={barajar}
      onReiniciar={() => setPartida((numero) => numero + 1)}
    />
  );
}

function Partida({ barajar, onReiniciar }) {
  //Se pasa una función para que React solo baraje al crear la partida y no en cada render.
  const [tablero] = useState(() => barajar([...CARTAS, ...CARTAS]));

  //Posiciones de las cartas levantadas en este turno (como máximo 2).
  const [seleccionadas, setSeleccionadas] = useState([]);

  //Tipos de las parejas ya encontradas.
  const [encontradas, setEncontradas] = useState([]);

  const [movimientos, setMovimientos] = useState(0);

  //Lo que se puede calcular a partir del estado no se guarda aparte, así nunca se desincroniza.
  const partidaGanada = encontradas.length === CARTAS.length;

  const seleccionar = (posicion) => {
    const yaEncontrada = encontradas.includes(tablero[posicion].tipo);

    //Con dos cartas levantadas no se acepta otra hasta que se tapen.
    if (seleccionadas.length === 2 || seleccionadas.includes(posicion) || yaEncontrada) {
      return;
    }

    const nuevasSeleccionadas = [...seleccionadas, posicion];
    setSeleccionadas(nuevasSeleccionadas);

    if (nuevasSeleccionadas.length < 2) {
      return;
    }

    setMovimientos((total) => total + 1);

    const [primera, segunda] = nuevasSeleccionadas;
    if (tablero[primera].tipo === tablero[segunda].tipo) {
      setEncontradas((tipos) => [...tipos, tablero[primera].tipo]);
      setSeleccionadas([]);
    }
  };

  //Si las dos cartas levantadas no coinciden, se quedan a la vista un momento y después se tapan.
  //La función de limpieza cancela la espera si la partida se desmonta antes, por ejemplo al reiniciar.
  useEffect(() => {
    if (seleccionadas.length < 2) {
      return;
    }

    const espera = setTimeout(() => setSeleccionadas([]), ESPERA_FALLO_MS);
    return () => clearTimeout(espera);
  }, [seleccionadas]);

  //Las 12 cartas van en una sola cuadrícula; el número de columnas y su tamaño los decide "Tablero.css".
  //El mensaje de victoria está dentro de un "role=status" para que los lectores de pantalla lo anuncien.
  return (
    <div className="tablero">
      <p className="marcador"><button type="button" className="boton-reiniciar" onClick={onReiniciar}>Volver a empezar</button> |  Movimientos: {movimientos}</p>
      <div role="status">
        {partidaGanada ? <div><p className="marcador">¡Has Ganado!</p><img className="gif-luigi" src={luigiWin} alt="Luigi celebrando la victoria"/></div> : null}
      </div>
      <div className="cuadricula" role="group" aria-label="Cartas">
        {tablero.map((carta, posicion) => {
          const emparejada = encontradas.includes(carta.tipo);

          return (
            <Carta
              key={posicion}
              imagen={carta.imagen}
              tipo={carta.tipo}
              bocaArriba={emparejada || seleccionadas.includes(posicion)}
              emparejada={emparejada}
              onSeleccionar={() => seleccionar(posicion)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Tablero;
