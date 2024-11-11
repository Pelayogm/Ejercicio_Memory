import Carta from "./Carta";

function Tablero () {

    const mapaCartas = [
        {
          type: "Charizard",
          image: require(`./img/cartas/Charizard-Tera.png`)
        },
        {
          type: "Eternatus",
          image: require(`./img/cartas/Eternatus-Vmax.png`)
        },
        {
          type: "Lapras",
          image: require(`./img/cartas/Lapras-Vmax.png`)
        },
        {
          type: "Rayquaza",
          image: require(`./img/cartas/MegaRayquaza-EX.png`)
        },
        {
          type: "Phanpy",
          image: require(`./img/cartas/Phanpy.png`)
        },
        {
          type: "Pikachu",
          image: require(`./img/cartas/Pikachu-Vmax.png`)
        }
      ];
    

    return (
        <div className="tablero">
          <div id = "row"  className = 'row'>
            <Carta></Carta>
          </div>
        </div>
    )
}
export default Tablero;