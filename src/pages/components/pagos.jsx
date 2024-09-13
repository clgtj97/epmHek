import React, { useEffect, useState } from 'react';
import Menu from "./menu";
import Stripe from 'stripe';
import ImageModal from './ImageModal';
import FooterMain from './footerMain';


function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}/${date}/${year}`;
}

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

const stripeKey = process.env.REACT_APP_STRIPE_KEY;
const stripe = new Stripe(stripeKey);
console.log(stripeKey)


const Pagos = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [modalPrice, setModalPrice] = useState(0);
  const [modalName, setModalName] = useState("");

  function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productIds = ['price_1OEk9dFrT7IGAV5fh3LwMTgI', 'price_1OJaBNFrT7IGAV5fV2vBua5s', 'price_1OJaFvFrT7IGAV5fExs2NJgG']; // Array of product IDs
        const productsData = await Promise.all(productIds.map(productId => fetchProductInfo(productId)));
        setProducts(productsData);
      } catch (error) {
        console.error('Error retrieving products:', error);
      }
    };

    const fetchProductInfo = async (productId) => {
      try {
        const price = await stripe.prices.retrieve(productId);
        const product = await stripe.products.retrieve(price.product);
        return {
          price,
          product,
        };
      } catch (error) {
        console.error(`Error retrieving product info for ${productId}:`, error);
        return null;
      }
    };

    fetchProducts();
  }, []);

  const openModal = (image, price, name) => {
    setIsModalOpen(true);
    setModalImage(image);
    setModalPrice(price);
    setModalName(name);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
    setModalPrice(0);
    setModalName("");
  };

  const [currentDate, setCurrentDate] = useState(getDate());

  const titleBox = {
    background: 'rgba(0,0,0,0.6)',
    padding: '1rem',
    borderRadius: '2rem'
  }

  return (
    <div>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fira+Sans:wght@500&display=swap"></link>
      <Menu />

      {/* Render the ImageModal component if the modal is open */}
      {isModalOpen && (
        <ImageModal image={modalImage} price={modalPrice} name={modalName} onClose={closeModal} />
      )}

      <div className="columns backgroundImgTwo slideFirst has-text-centered position-relative shadow">
        <div className="column is-2by1">
          <div className=" column overlay" id="pagosTitulo" style={overlayStyle}>
            <div className="columns is-mobile is-centered" >
              <div className="column is-half pagosTextMobile" >
                <p className="slideTwoTextT title is-size-5 is-size-6-mobile-only has-text-light" style={titleBox}>
                  Utilizamos métodos de pago confiables y trabajamos con compañías reconocidas para garantizar la protección de tus transacciones.
                </p>
                <p className="slideTwoTextT title is-size-6 is-size-6-mobile-only has-text-light" style={titleBox}>
                  En Express Parts Mexico nos comprometemos a entregar tus pedidos a tiempo. Valoramos tu tiempo y trabajamos diligentemente para garantizar que recibas tus productos puntualmente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="columns is-centered" style={{ marginTop: "10px" }}>
        {/* Generate a column for each product */}
        {products.map((product, index) => (
          <div className="column is-one-fifth" key={index}>
            {product && (
              <div className="card">
                <div className="card-image" onClick={() => openModal(product.product.images[0], product.price.unit_amount, product.product.name)}>
                  <figure className="image is-0.75by1">
                    <img src={product.product.images[0]} alt="Placeholder image" className="is-small-image" />
                  </figure>
                </div>

                <div className="card-content has-text-centered">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4" style={{ color: '#2B2B2B' }}>{product.product.name}</p>
                      <p className="subtitle is-6">${formatNumberWithCommas((product.price.unit_amount / 100).toFixed(2))}</p>
                    </div>
                  </div>

                  <div className="content" style={{ lineHeight: "1.5" }}>
                    {product.product.description}
                    <a href="#">#expresspartsmx</a>
                    <br />
                    <time dateTime="2023-1-1">{currentDate}</time>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <FooterMain id="footerPagos" />
    </div>
  );
};

export default Pagos;
