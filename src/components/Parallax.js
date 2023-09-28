import React, { useEffect, useState } from 'react';
import './Parallax.css';
import fondo2 from '../assets/fondo2.png'; // Importa la imagen de fondo
import frente3 from '../assets/frente3.png'; // Importa la imagen frontal

function Parallax() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="parallax-container">
      <div
        className="parallax-layer parallax-background"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`, // Invierte la dirección para el fondo
          backgroundImage: `url(${fondo2})`,
        }}
      />
      <div className="parallax-layer parallax-foreground">
        {/* Contenido dentro del paralaje */}
        <div className="parallax-content">
          <div className='title'>
            <h3>INNOVA CON ALIENÍGENAS, PRODUCTORA Y AGENCIA CREATIVA ENCARGADA DE CUENTAS TECNOLÓGICAS EN TODA LATAM. DISEÑA, CREA Y GESTIONA CAMPAÑAS DE VANGUARDIA 100% CON NOSOTROS.</h3>
            <p>• Inteligencia Artificial AI • Web AR/VR
            • Marketing Digital • Automatización
            • Eventos virtuales y presenciales
            • Estudio de TV & Streaming
            • Eventos chroma key effects</p>
          </div>
        </div>
        <img
          className='imgFrente'
          src={frente3}
          alt="Imagen frontal"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </div>
    </div>
  );
}

export default Parallax;


/*import React, { useEffect, useState } from 'react';
import './Parallax.css';
import fondo from '../assets/fondo.png';
import frente from '../assets/frente.png';

function Parallax() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="parallax-container">
      <div
        className="parallax-layer"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <img className='img-background' src={fondo} alt="Imagen de fondo" />
      </div>
      <div
        className="parallax-layer"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <img className='img-front' src={frente} alt="Imagen de fondo" />
      </div>
    </div>
  );
}

export default Parallax;
*/