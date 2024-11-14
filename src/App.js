import './App.css';
import Tablero from './Tablero';
import luigi from './luigi';

function App() {
  return (
    <div className="App">
      <body>
        <div className='App'>
          <p className='titulo-juego'>Juego Memory</p>
            <img src={luigi} alt='luigi'/>
            <Tablero></Tablero>
        </div>
      </body>
    </div>
  );
}

export default App;
