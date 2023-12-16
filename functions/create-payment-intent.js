const stripe = require("stripe")('sk_test_51OEdyLFrT7IGAV5fcgwarKO2gavlnX3HCINtUK2suvILOmSURfLh7OyEDEkH8s5xG13Ybpze0CnHlcofwO4aaT0s00Z9RUB6qj');

exports.handler = async function (event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  const { amount, currency, items } = JSON.parse(event.body);

  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency,
    automatic_payment_methods: {
      enabled: true,
    },
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
  };
};
