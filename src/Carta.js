import React, { useState } from "react";
import parteTrasera from "./img/cartas/Carta-atras.png";
import parteDelantera from "./img/cartas/Lapras-Vmax.png";

const Carta = ({carta}) => {
  const [isFlipped, setIsFlipped] = useState(false);


  const cambiarImagen = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div>
      <img
        src={isFlipped ? parteDelantera : parteTrasera}
        onClick={cambiarImagen}
        alt="Carta"
        style={{ width: "242px", height: "337px" }}
      />
    </div>
  );
};

export default Carta;