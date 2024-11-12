import logo from './logo.svg';
import './App.css';
import Tablero from './Tablero';

function App() {
  return (
    <div className="App">
      <header>
        <p className='titulo-juego'>Juego Memory</p>
      </header>
      <body>
        <div className='App'>
            <Tablero></Tablero>
        </div>
      </body>
    </div>
  );
}

export default App;
