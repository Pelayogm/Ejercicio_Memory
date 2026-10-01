import './App.css';
import Tablero from './Tablero';
import luigi from './luigi';

//El título de la pestaña está en "public/index.html"; al ser fijo no hace falta ninguna librería para cambiarlo.
function App() {
  return (
    <main className="App">
      <h1 className='titulo-juego'>Juego Memory</h1>
      <img className='luigi' src={luigi} alt=''/>
      <Tablero />
    </main>
  );
}

export default App;
