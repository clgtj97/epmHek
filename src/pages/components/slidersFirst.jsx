import React from 'react';
import './layout.css'; // Assuming your custom styles are here
import slideOne from '../../images/jeepbackOne.jpg';
import './layout.css';

const SlidersFirst = () => {
  const overlayStyle = {
    position: 'absolute',
    top: '40vh',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    width: '100%',
    padding: '20px', // Adjust the padding as needed
    height: 'auto', // You can also set a specific height if needed
  };

  return (
    <div>
      <div className="columns backImgOne slideFirst has-text-centered position-relative shadow">
        <div className="column is-2by1">

          <div className="column overlay textOneMain">
            <div className="columns is-mobile is-centered" >
              <div className="column is-half">
                <p className="backShadow title is-size-2 is-size-3-mobile has-text-light ">
                  Tu Ruta Confiable: Piezas Nuevas de Taiwán, Originales de Agencia y Usadas. Estamos en Tijuana y en la Web. ¡Encuentra lo que necesitas en Nombre de tu tienda Express Parts Mexico!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlidersFirst;
