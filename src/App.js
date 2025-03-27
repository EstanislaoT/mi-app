import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    if (searchText.trim()) {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(searchText)}`, '_blank');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="search-container">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Buscar en Google..."
            className="search-input"
          />
          <button onClick={handleSearch} className="search-button">
            <span className="google-g">G</span>
            Buscar
          </button>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Hola Mundo! Soy un nuevo mensaje en la aplicación de React
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
