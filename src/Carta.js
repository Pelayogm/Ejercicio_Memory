import React from "react";
import parteTrasera from "./img/cartas/Carta-atras.webp";
import "./Carta.css";

//La carta tiene dos caras superpuestas. Al levantarla, el contenedor gira 180° y "backface-visibility: hidden"
//(en "Carta.css") oculta la cara que queda de espaldas, así el anverso se ve sin que la imagen salga invertida.

//Es un <button> para que se pueda usar con el teclado. El "aria-label" solo dice qué carta es cuando está boca arriba,
//para que un lector de pantalla no revele las cartas tapadas. Las parejas encontradas se desactivan.
const Carta = ({ imagen, tipo, bocaArriba, emparejada, onSeleccionar }) => {
  return (
    <button
      type="button"
      className={`carta${bocaArriba ? " boca-arriba" : ""}${emparejada ? " emparejada" : ""}`}
      onClick={onSeleccionar}
      disabled={emparejada}
      aria-label={bocaArriba ? tipo : "Carta boca abajo"}
    >
      <span className="carta-interior">
        <img className="cara cara-trasera" src={parteTrasera} alt="" />
        <img className="cara cara-delantera" src={imagen} alt="" />
      </span>
    </button>
  );
};

export default Carta;
