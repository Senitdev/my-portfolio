import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Bonjour mes amies</p>
        <p>Je test le déploiement  par Vercel</p>
        <p>Formulaire de saisie</p>
        <label>Prenom</label>
        <input type='text' placeholder='saisir ton prenom'></input>
        <label>Nom</label>
        <input type='text' placeholder='Saisir ton nom'></input>
        <button>Envoyer</button>
      </header>
    </div>
  );
}

export default App;
