import Carta from "./Carta";
import React, { useEffect, useRef, useState } from "react";
import "./Tablero.css"

import Charizard from "./img/cartas/Charizard-Tera.png";
import Lapras from "./img/cartas/Lapras-Vmax.png"
import Rayquaza from "./img/cartas/MegaRayquaza-EX.png"
import Mewtwo from "./img/cartas/Mewtwo-ex.png"
import Phanpy from "./img/cartas/Phanpy.png"
import Pikachu from "./img/cartas/Pikachu-Vmax.png"
import luigiWin from "./img/fondo/luigi-win.gif"

function Tablero () {

  const carta = useRef(null);

  //Array de cartas, con su tipo y su ruta de imagen en los directorios
    const mapaCartas = [
      {type: "Charizard", image: Charizard},
      {type: "Lapras", image: Lapras},
      {type: "Rayquaza", image: Rayquaza},
      {type: "Mewtwo", image: Mewtwo},
      {type: "Phanpy", image: Phanpy},
      {type: "Pikachu", image:Pikachu},
    ];

    //Esta constante se utiliza para el contador de movimientos por defecto, se inicializa siempre en 0.
    const [moves, setMoves] = useState(0);

    //Este array tiene las cartas del "mapaCartas" que son las que habrá en el tablero y las ordena y aleatoriza con la función "Math.random".
    const [cartasDuplicadas, setCartasDuplicadas] = useState([...mapaCartas, ...mapaCartas].sort(() => Math.random() - 0.5));

    //Este array nos permitirá saber las cartas que han sido clickadas.
    const [selectedCards, setSelectedCards] = useState([]);

    //Este array con la longitud de "mapaCartas" sirve para saber que cartas estan giradas, por defecto se inicializa, entero en "false", cuando se gire una carta, "setFlippedCards"
    // actualizará el array con la posición que se le mande para establecerlo en el valor "true".
    const [flippedCards, setFlippedCards] = useState(Array(mapaCartas.length).fill(false));

    //Creamos otro array para contabilizar cuantas cartas, han coincidido. Por defecto se inicializa en "false", para indicar que ninguna ha tenido coincidencia.
    const[hiddenCards, setHiddenCards] = useState(Array(mapaCartas.length).fill(false));

    //Esta variable sirve para comprobar que la partida ha sido completada.
    const[matchWinned, setMatchWinned] = useState(false);

    //El Div que se devolvera para ser el tablero, se divide en 3 filas con la función "slice()", cada fila con 4 Cartas, que se recogen de el array de "cartasDuplicadas".
    const rows = [
      cartasDuplicadas.slice(0,4),
      cartasDuplicadas.slice(4,8),
      cartasDuplicadas.slice(8,12),
    ];

    //Con "setMatchWinned", ponemos el booleano en false, para evitar que salga la ventana de la victoria.
    //Esta función usa "setFlippedCards" para poner todas las cartas en "false", indicando que están todas sin voltear.
    //Y también se llama a "setHiddenCards" estableciendolo entero en "false", para indicar que no hay ninguna coincidencia.
    //"setSelectedCards", pone el array de "selectedCards", el array que tenemos para saber que cartas han sido escogidas, lo pone vacío. 
    //Después setCartasDuplicadas aleatoriza las cartas.
    //Y se ponen los movimientos a 0.
    const resetCards = () => {
      setMatchWinned(false);
      setFlippedCards(Array(mapaCartas.length).fill(false));
      setHiddenCards(Array(mapaCartas.length).fill(false));
      setSelectedCards([]);
      setCartasDuplicadas([...mapaCartas, ...mapaCartas].sort(() => Math.random() - 0.5));
      setMoves(0);
    };

    //Esta función es llamada con "index", nos indica en la posición en la que hemos llamado a la carta.
    //Al entrar en la función si el array de cartas Seleccionadas "(selectedCards)" es menor de 2 y la carta en "index" NO ha sido girada y ni tampoco ha sido comparada
    //El array de "flippedCards" es actualizado con la función de "setFlippedCards" enviandole el estado "prevFlipped" de las cartas.
    //Se crea una copia de el estado anterior, para actualizarla, la actualizamos poniendo a "newFlipped" de manera contraria a como esta ((Si es "true" pasa a ser "false") y viceversa).
    //Retornamos "newFlipped", para reemplazar el antiguo estado.

    const toggleCard = (index) => {
      if(selectedCards.length < 2 && !flippedCards[index] && !hiddenCards[index]) {
        setFlippedCards((prevFlipped) => {
          const newFlipped = [...prevFlipped];
          newFlipped[index] = !newFlipped[index];
          return newFlipped;
        });
        setSelectedCards([...selectedCards, index])
      }
    };

    //Usamos la función "useEffect" para gestionar la comparación entre cartas.
    //Primero de todo, si la longitud de el array de "selectedCards" no es 2. No entramos en la función, porque nos da a entender que no tenemos suficientes
    //cartas para comparar.

    //Creamos 2 constantes, que actualizamos cada vez que llamamos a "useEffect", siempre que entremos en la condición, gracias a estas 2 variables. Comparamos el type que tienen
    //las cartas.

    //Los movimientos aunque no coincidan, aumentan cuando 2 cartas han sido seleccionadas.

    //Si la condición se cumple, creamos una copia de el estado y cogemos a las variables "first" y "second", y la establecemos en "true". Para indicar que han coincidido.
    //Y retornamos el nuevo estado para reemplazar al anterior. Con esto "hiddenCards" tendrá las cartas que ocultaremos.

    //Si la condición no se cumple, llamamos a la función "setFlippedCards" con un estado antes de efectuar los cambios.
    //Creamos una copia del estado, y sobre ella editamos, pero está vez poniendo los valores en "false", indicando que se tienen que poner otra vez invertidas.
    //Retornamos la copia de el estado actualizada, y con "setTimeout" que es el la función desde la que hemos ejecutado todo ponemos al final "1000" para indicar que espere esos
    //milisegundos.

    //Y fuera de todas las condiciones exceptuando ("selectedCards.length === 2"), el array de cartas seleccionadas "selectedCards", lo vaciamos para volver a llenarlo con más cartas
    //selecionadas.

    //"[selectedCards, cartasDuplicadas]" esto permite activar a "useEffect", cuando esas variables han sido actualizadas.

    useEffect(() => {
      if (selectedCards.length === 2) {
        const [first, second] = selectedCards;

        const firstCard = cartasDuplicadas[first];
        const secondCard = cartasDuplicadas[second];

        setMoves(moves + 1);

        if(firstCard.type === secondCard.type) {
            setHiddenCards((prevHidden) => {
              const newHidden = [...prevHidden];
              newHidden[first] = true;
              newHidden[second] = true;

              if(newHidden.every((card => card === true))) {
                setMatchWinned(true);
              }

              return newHidden;
            });
        } else {
          setTimeout(() =>{
              setFlippedCards((prevFlipped) => {
                const newFlipped = [...prevFlipped];
                newFlipped[first] = false;
                newFlipped[second] = false;
                return newFlipped;
              });
          }, 1000);
        }
        setSelectedCards([])
      }
    }, [selectedCards, cartasDuplicadas]);
    
    //Se crea un div para el tablero en el que contiene todo lo necesario para el juego.
    //El botón llama a la funcion "resetCards" al darle clic. Explicación de la función más arriba.
    //Se crea otro div, para el lugar dónde iran colocadas las cartas.
    //Recorremos rows, que tienen ya las cartas asignadas y vamos asignando los valores al componente "Carta".

    //Con index, que es un valor que obtenemos mientras recorremos row.map, se lo asignamos a cada Carta, ese index nos permitrá identificarla.

    //"isFlipped", actualiza el array de "flippedCards" con la posicion en la que está para saber que la carta se ha girado. 

    //"setValue", sirve para hacer saber a la carta que hemos interactuado con ella, y con eso llamamos a la función "toggleCard()", a la cuál le pasamos un valor que sacamos
    //calculando con "index" y con "rowIndex" multiplicado por las 4 cartas, para localizar la carta.

    //"hidden", es utilizado para actualizar el array de "hiddenCards" con la posición de la carta. Destacamos que este array de cartas que se esconden, solo se actualiza cuando el tipo de las 2 cartas que se
    //seleccionan coinciden.

    //"image", es el valor que le damos a la carta, cuando "isFlipped" sea "true", actualizamos la imagen, a la que sacamos de "mapaCartas".

    //"type", sirve para darle el tipo a la carta, que será con lo que compararemos las cartas.

    return (
      <div className="tablero">
      <p className="moves">Movimientos: {moves}</p>
      <button onClick={resetCards}>Reiniciar Cartas</button>
      <br/>
      {matchWinned ? <div><p className="moves">¡Has Ganado!</p><img className="gifLuigi" src={luigiWin} alt='luigi'/></div>: null}
      <br/>
      <div className="grid">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="row" ref={carta}>
            {row.map((carta, index) => (
              <Carta
                key={index}
                isFlipped={flippedCards[rowIndex * 4 + index]}
                setValue={() => toggleCard(rowIndex * 4 + index)}
                hidden={hiddenCards[rowIndex * 4 + index]}
                image={carta.image}
                type={carta.type}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
    );
  }
  
  export default Tablero;