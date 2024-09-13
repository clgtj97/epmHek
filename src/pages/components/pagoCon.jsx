import React, { useEffect, useState } from 'react';
import Menu from "./menu";
import './layout.css';

function getFormattedDateTime() {
  const today = new Date();
  const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
  return today.toLocaleDateString('en-US', options);
}

const PagoCon = () => {
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
 
  const [formattedDateTime, setFormattedDateTime] = useState(getFormattedDateTime());
  const [paymentIntent, setPaymentIntent] = useState(null);

  useEffect(() => {
    // Extract payment intent from URL
    const url = new URL(window.location.href);
    const paymentIntentParam = url.searchParams.get('payment_intent');

    // Update state with payment intent
    setPaymentIntent(paymentIntentParam);

    // Update the formatted date and time
    const newFormattedDateTime = getFormattedDateTime();
    setFormattedDateTime(newFormattedDateTime);
  }, []);

  return (
    <div>
      <Menu />

      <div className="gradGreen columns slideFirst has-text-centered position-relative shadow">
        <div className="column is-2by1">
          <div className="column overlay" style={overlayStyle}>
            <div className="columns is-mobile is-centered">
              <div className="column is-half">
                <p className="title is-2 has-text-light">
                 
¡Pago exitoso! 🎉 Gracias por elegirnos. Tu transacción se ha completado con éxito. Ahora, prepárate para disfrutar de tu compra. ¡Gracias por confiar en Express Parts Mexico!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="columns goodText has-text-weight-bold has-text-centered position-relative">
        <div class="column is-three-fifths is-offset-one-fifth">
        Numero de Pedido: {paymentIntent}
        </div>
      </div>

      <div class="goodText columns is-mobile has-text-centered position-relative">
        <div class="column is-three-fifths is-offset-one-fifth">
        {formattedDateTime}
        </div>
      </div>

      <div class="goodText columns is-mobile has-text-centered position-relative">
        <div class="column is-three-fifths is-offset-one-fifth">
        Con tu número de pedido, nuestro representante puede mantenerte informado y rastrear tu compra. ¡Estamos aquí para brindarte la mejor experiencia de seguimiento en Express Parts Mexico!
        </div>
      </div>

    </div>
  );
};

export default PagoCon;
