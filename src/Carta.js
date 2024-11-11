import React from "react";
import parte_trasera from "./img/cartas/Carta-atras.png";
import parte_delantera from "./img/cartas/Lapras-Vmax.png";

const Carta = ({ onClick, card, index, isInactive, isFlipped, isDisabled }) => {

  function cambiarImagen() {
    const imagen = document.getElementById("carta");


    if (imagen.src.includes({parte_trasera})) {
        imagen.src = {parte_delantera};
    } else {
        imagen.src = "imagen1.jpg";
    }
}
  return (
    <div>
      <img src={parte_trasera} onClick={cambiarImagen} id="carta" />
    </div>
  );
};
export default Carta;