import Carta from "./Carta";

function Tablero () {

    const mapaCartas = [{   
          "type": "Charizard",
          "image": "./img/cartas/Charizard-Tera.png"} ];
    

    return (
        <div className="tablero">
          <div id = "row"  className = 'row'>
            <Carta></Carta>
          </div>
        </div>
    )
}
export default Tablero;