import React, { useState } from "react";
import parteTrasera from "./img/cartas/Carta-atras.png";
import parteDelantera from "./img/cartas/Lapras-Vmax.png";

const Carta = () => {
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
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default Carta;