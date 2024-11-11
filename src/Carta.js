import React from "react";
import parte_trasera from "./img/cartas/Carta-atras.png";

const Carta = ({ onClick, card, index, isInactive, isFlipped, isDisabled }) => {
  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(index);
  };

  return (
    <div onClick={handleClick}>
      <img src="./img/cartas/Charizard-Tera.png"></img>
    </div>
  );
};
export default Carta;