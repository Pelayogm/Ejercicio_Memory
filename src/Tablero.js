import Carta from "./Carta";

function Tablero () {

    const mapaCartas = [
      {"type": "Charizard", "image": "./img/cartas/Charizard-Tera.png"},
      {"type": "Lapras", "image": "./img/cartas/Lapras-Vmax.png"},
    
    ];
    

    return (
        <div className="tablero">
          <Carta></Carta>
          <Carta></Carta>
          <Carta></Carta>
          <Carta></Carta>
          <Carta></Carta>
          <Carta></Carta>
          <Carta></Carta>
          <Carta></Carta>
        </div>
    );
}
export default Tablero;