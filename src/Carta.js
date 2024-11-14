import React, { useState } from "react";
import parteTrasera from "./img/cartas/Carta-atras.png";
import "./Carta.css";

//El componente "Carta" tiene como valores "isFlipped", "setValue", "image", "type"
//Se crea un div para la carta que cuando se hace "setValue" al hacer clic en él.

//Usamos "hidden" para activar la clase ".hidden" que esta en el ".css". Esto se realiza si se cumple la condición.

//Alterna el estado isFlipped con el valor "image" que le pasamos y con "parteTrasera" que es la imagen por defecto que tendrá la carta.

//El "type" se lo pasamos también.

//Y su clase se actualizará con "isFlipped", si es "true" tendrá una clase llamada "isFlipped" que en el ".css" tendrá una transición para el efecto que hacen las cartas.

const Carta = ({ isFlipped, setValue, hidden, image, type }) => {
  return (
    <div className={`carta ${hidden ? 'hidden' : ''}`} onClick={setValue}>
      <img
        src={isFlipped ? image : parteTrasera}
        alt={type}
        className={isFlipped ? 'isFlipped' : ''}
      />A
    </div>
  );
};

export default Carta;