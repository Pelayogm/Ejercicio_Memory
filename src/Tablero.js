import Carta from "./Carta";

function Tablero () {

    const mapaCartas = [{   
          "type": "Charizard",
          "image": "./img/cartas/Charizard-Tera.png", 
        },
        {
          "type": "Lapras",
          "image": "./img/cartas/Lapras-Vmax.png",
        }
        ];
    

    return (
        <div className="tablero">
            <div id = "row" className = 'row'>
              <div row = "1" colunm = "1"><Carta></Carta></div>
              <div row = "1" colunm = "2"><Carta></Carta></div>
              <div row = "1" colunm = "3"><Carta></Carta></div>
              <div row = "1" colunm = "4"><Carta></Carta></div>
            </div>
            <div id = "row" className = 'row'>
              <div row = "2" colunm = "1"><Carta></Carta></div>
              <div row = "2" colunm = "2"><Carta></Carta></div>
              <div row = "2" colunm = "3"><Carta></Carta></div>
              <div row = "2" colunm = "4"><Carta></Carta></div>
            </div>
        </div>
    );
}
export default Tablero;