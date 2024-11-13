import Carta from "./Carta";
import React, { useEffect, useRef, useState } from "react";

import Charizard from "./img/cartas/Charizard-Tera.png";
import Lapras from "./img/cartas/Lapras-Vmax.png"
import Eternatus from "./img/cartas/Eternatus-Vmax.png"
import Rayquaza from "./img/cartas/MegaRayquaza-EX.png"
import Mewtwo from "./img/cartas/Mewtwo-ex.png"
import Ondulagua from "./img/cartas/Ondulagua-ex.png"
import Phanpy from "./img/cartas/Phanpy.png"
import Pikachu from "./img/cartas/Pikachu-Vmax.png"

function Tablero () {

  const carta = useRef(null);

    const mapaCartas = [
      {type: "Charizard", image: Charizard},
      {type: "Lapras", image: Lapras},
      {type: "Rayquaza", image: Rayquaza},
      {type: "Mewtwo", image: Mewtwo},
      {type: "Phanpy", image: Phanpy},
      {type: "Pikachu", image:Pikachu},
    ];

    const [cartasDuplicadas] = useState([...mapaCartas, ...mapaCartas].sort(() => Math.random() - 0.5));

    const [selectedCards, setSelectedCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState(
      Array(mapaCartas.length).fill(false)
    );

    const rows = [
      cartasDuplicadas.slice(0,4),
      cartasDuplicadas.slice(4,8),
      cartasDuplicadas.slice(8,12),
    ];

    const resetCards = () => {
      setFlippedCards(Array(mapaCartas.length).fill(false));
    };

    const toggleCard = (index) => {
      setFlippedCards((prevFlipped) => {
        const newFlipped = [...prevFlipped];
        newFlipped[index] = !newFlipped[index];
        return newFlipped;
      });
    };

    useEffect(() => {
      if (selectedCards.length === 2) {
        const [firstCard, secondCard] = selectedCards;

        if(firstCard.type === secondCard.type) {
            carta.current.hidden = true;
        }
      }


    }, [flippedCards]
    
    
    );

    
    
    return (
      <div className="tablero">
      <button onClick={resetCards}>Reiniciar Cartas</button>
      <br />
      <div className="grid">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="row" ref={carta}>
            {row.map((carta, index) => (
              <Carta
                key={index}
                isFlipped={flippedCards[rowIndex * 4 + index]}
                setValue={() => toggleCard(rowIndex * 4 + index)}
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