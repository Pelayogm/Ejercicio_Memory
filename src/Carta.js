import React from "react";
import parte_trasera from "./img/cartas/Carta-atras.png";

const Carta = ({ onClick, card, index, isInactive, isFlipped, isDisabled }) => {
  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(index);
  };

  return (
    <div
      
      onClick={handleClick}
    >
      <div className="parte_trasera">
        <img src={parte_trasera} alt="pokeball" />
      </div>
      <div className="parte_frontal">
        <img src={card.image} alt="pokeball" />
      </div>
    </div>
  );
};
export default Carta;