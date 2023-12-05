import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./checkoutForm";
import "./layout.css";

const stripePromise = loadStripe("pk_test_51OEdyLFrT7IGAV5f4HIj6TwDM5WMWdsADNtC5wtnPY98oNp6IwankNJ5J9uJMvwlNnircaaJHGmG5iOxYjMYmKYX006q3poQhw");

const ImageModal = ({ image, price, name, onClose }) => {
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4242/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: price,
        currency: "usd",
        items: [{ id: "prod_NIyBcFS0zw42KG", price: "price_1MYMEgEXmkeP2x0kTbPqpVx8" }],
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch client secret");
        }
        return res.json();
      })
      .then((data) => {
        setClientSecret(data.clientSecret);
        console.log("Client secret:", data.clientSecret);
      })
      .catch((error) => {
        console.error(error);
        // Handle error condition
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  console.log("Client secret:", clientSecret);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-content">
        <div className="columns is-vcentered">
          <div className="column">
            <img src={image} alt="Modal" className="centered-image" />
            <div className="column has-text-centered modalText">
              <p>${((price / 100).toFixed(2))}</p>
              <p>{name}</p>
            </div>
          </div>
          <div className="column is-two-thirds">
            <div className="App">
              {loading ? (
                <div className="columns is-centered">
                  <div className="column loader-wrapper">
                    <div className="loader is-loading"></div>
                  </div>
                </div>
              ) : (
                <Elements stripe={stripePromise}>
                  <CheckoutForm />
                </Elements>
              )}
            </div>
          </div>
        </div>
      </div>
      <button className="modal-close is-large" aria-label="close" onClick={onClose}></button>
    </div>
  );
};

export default ImageModal;
