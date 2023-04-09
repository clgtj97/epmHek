import React from "react"

// Stripe
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe(
  "pk_test_51MWUVxEXmkeP2x0kpy8Mihk05erBkx652GmzPz3rjfdbdOMmc1mqiMubuIrb8YDbyIMlolOmXp2k7FgbQgsDozkP00NLdW87HB"
)

const StripeCheckout = () => {
  // Product
  const cubanLink = {
    price: "price_1MYMEgEXmkeP2x0kTbPqpVx8",
    quantity: 2,
  }

  // Checkout Options
  const checkoutOptions = {
    mode: "payment",
    lineItems: [cubanLink],
    successUrl: `http://localhost:8001/`, // You can set custom page here
    cancelUrl: `http://localhost:8001/`, // ----------------
  }

  // Redirect To Checkout
  const redirectToCheckout = async () => {
    const stripe = await stripePromise
    const result = await stripe.redirectToCheckout(checkoutOptions)
  }

  // Return
  return (
    <div>
      Stripe Checkout
      <br />
      <button onClick={redirectToCheckout}>Buy CubanLink</button>
    </div>
  )
}

export default StripeCheckout