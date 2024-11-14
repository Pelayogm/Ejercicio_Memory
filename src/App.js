import './App.css';
import { Helmet } from 'react-helmet';
import Tablero from './Tablero';
import luigi from './luigi';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Memory Game | Pelayogm & Danielma</title>
      </Helmet>
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
