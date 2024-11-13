import logo from './logo.svg';
import './App.css';
import Tablero from './Tablero';

function App() {
  return (
    <div className="App">
      <body>
        <div className='App'>
          <p className='titulo-juego'>Juego Memory</p>
            <Tablero></Tablero>
        </div>
      </body>
    </div>
  );
}

export default App;
