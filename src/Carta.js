import React, { useState } from "react";
import parteTrasera from "./img/cartas/Carta-atras.png";
import "./Carta.css";

const Carta = ({ isFlipped, setValue, image, type }) => {
  return (
    <div className="carta" onClick={setValue}>
      <img
        src={isFlipped ? image : parteTrasera}
        alt={type}
        className={isFlipped ? 'isFlipped' : ''}
      />
    </div>
  );
};

export default Carta;