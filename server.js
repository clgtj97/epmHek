const express = require("express");
const app = express();
const stripe = require("stripe")('sk_test_51OEdyLFrT7IGAV5fcgwarKO2gavlnX3HCINtUK2suvILOmSURfLh7OyEDEkH8s5xG13Ybpze0CnHlcofwO4aaT0s00Z9RUB6qj');

app.use(express.static("public"));
app.use(express.json());


app.post("/create-payment-intent", async (req, res) => {
  const { amount, currency, items } = req.body;

  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency,
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(4242, () => console.log("Node server listening on port 4242!"));
