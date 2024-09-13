import React from 'react';
import './layout.css'; // Assuming your custom styles are here
import slideOne from '../../images/fordFB.webp';

const SlidersTwo = () => {

  const overlayTwoDos = {
    position: 'relative',
    bottom: '7vh'
  };

  const textTwoColor = {
    color: '#0074BC',
    letterSpacing: '4px',
    fontFamily: 'Fira Sans'
  };

  return (
    <div className="tile is-ancestor slideTwo" >
      <div className="tile is-10 is-vertical is-parent">
        <div className="tile is-child box" >
          <p className="title mx-5 has-text-centered is-size-6 is-size-3-mobile" style={textTwoColor}>
            En Express Parts Mexico, te ofrecemos partes taiwanesas de calidad, nuevas de agencia y usadas
          </p>
          <p className="title mx-6 has-text-centered is-size-7 is-size-5-mobile" style={textTwoColor}>
            Todas nuestras partes son importadas directamente de Estados Unidos a Tijuana.
          </p>
          <p className="title mx-6 has-text-centered is-size-7 is-size-5-mobile" style={textTwoColor}>
            Cada parte cuenta con garantía, y te garantizamos entregas inmediatas o según tus necesidades.
          </p>
          <p className="title mx-6 has-text-centered is-size-7 is-size-5-mobile" style={textTwoColor}>
            Confía en nosotros para mantener tu vehículo en óptimas condiciones. ¡Contáctanos hoy y descubre la calidad que tu automóvil merece!
          </p>
        </div>
      </div>

      <div className="tile is-parent" >
        <div className="tile is-child">
          <img src={slideOne} alt="imgextra" className="overlayTwo title" />
        </div>
      </div>

    </div>

  );
};

export default SlidersTwo;
