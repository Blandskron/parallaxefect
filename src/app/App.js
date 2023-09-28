import React from 'react';
import './App.css';
import Parallax from '../components/Parallax';
import logo from '../assets/Logo.png';

function App() {
  return (
    <div className="App">
      <header>
        <img className='imgLogo' src={logo} alt="Imagen frontal" />
      </header>
      <Parallax />
      <div className="content">
        <p>Contenido de la página</p>
        {/* Agrega más contenido aquí */}
      </div>
    </div>
  );
}

export default App;
