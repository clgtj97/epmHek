import React, { useEffect, useState } from 'react';
import Menu from "./menu";
import Stripe from 'stripe';
import ImageModal from './ImageModal';
import './layout.css';
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

const SlidepgTwo = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [modalPrice, setModalPrice] = useState(0);

  function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productIds = []; // Array of product IDs ADD PRICE ID HERE for products
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

  const openModal = (image, price) => {
    setIsModalOpen(true);
    setModalImage(image);
    setModalPrice(price);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
    setModalPrice(0);
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
        <ImageModal image={modalImage} price={modalPrice} onClose={closeModal} />
      )}

<div className=" columns slideFirst has-text-centered position-relative backgroundImgFive shadow">
        <div className="column is-2by1">
          
          <div className="column overlay" style={overlayStyle}>
            <div className="columns is-mobile is-centered" >
              <div className="column is-half" style={titleBox}>
                <p className="slideTwoTextT title is-2 has-text-light">
                En Express Parts Mexico, te ofrecemos partes usadas originales de agencia con la misma calidad, mejor precio, disponibilidad inmediata y garantía de uso. Tu vehículo merece lo mejor sin sacrificar tu presupuesto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="columns is-centered is-mobile" style={{ marginTop: "10px" }}>
        {/* Generate a column for each product */}
        {products.map((product, index) => (
          <div className="column is-one-fifth" key={index}>
            {product && (
              <div className="card">
                <div className="card-image" onClick={() => openModal(product.product.images[0], product.price.unit_amount)}>
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

<FooterMain />
    </div>
  );
};
export default SlidepgTwo;
