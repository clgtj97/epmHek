import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  LinkAuthenticationElement,
} from "@stripe/react-stripe-js";
import { Elements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (elements, stripe) => {
    // Your existing handleSubmit logic
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <div>
      <form
        id="payment-form"
        onSubmit={(e) => handleSubmit(e, email, setMessage, setIsLoading)}
        className="payMobile"
      >
        <LinkAuthenticationElement
          id="link-authentication-element"
          onChange={(e) => setEmail(e.target.value)}
        />
        <PaymentElement
          id="payment-element"
          options={paymentElementOptions}
        />
        <button
          disabled={isLoading}
          id="submit"
        >
          <span id="button-text">
            {isLoading ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              "Pay now"
            )}
          </span>
        </button>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
      </form>
    </div>
  );
};

const WrappedCheckoutForm = () => {
  const stripePromise = loadStripe('pk_test_51OEdyLFrT7IGAV5f4HIj6TwDM5WMWdsADNtC5wtnPY98oNp6IwankNJ5J9uJMvwlNnircaaJHGmG5iOxYjMYmKYX006q3poQhw');

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default WrappedCheckoutForm;
