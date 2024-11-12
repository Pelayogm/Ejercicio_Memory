import React, { useState } from "react";
import parteTrasera from "./img/cartas/Carta-atras.png";
import "./Carta.css";

const Carta = ({ isFlipped, onClick, image, type }) => {
  return (
    <div className="carta" onClick={onClick}>
      <img
        src={isFlipped ? image : parteTrasera}
        alt={type}
        className={isFlipped ? 'isFlipped' : ''}
      />
    </div>
  );
};

export default Carta;