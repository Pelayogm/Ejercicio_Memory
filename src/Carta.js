import React, { useState } from "react";
import parteTrasera from "./img/cartas/Carta-atras.png";
import parteDelantera from "./img/cartas/Lapras-Vmax.png";
import "./Carta.css";

const Carta = ({carta}) => {
  const [isFlipped, setIsFlipped] = useState(false);


  const cambiarImagen = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="carta" onClick={cambiarImagen}>
      <img
        src={isFlipped ? parteDelantera : parteTrasera}
        alt="Carta"
        className={isFlipped ? 'isFlipped' : ''}
      />
    </div>
  );
};

export default Carta;