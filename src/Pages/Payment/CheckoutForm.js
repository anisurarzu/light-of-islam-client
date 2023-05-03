import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const CheckoutForm = ({ price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [process, setProcess] = useState(false);

  const [clientSecret, setClientSecret] = useState("");
  console.log(price);

  useEffect(() => {
    fetch("https://yellow-sparkly-station.glitch.me/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch((error) => {
        console.log(error);
      });
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    setProcess(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
      setSuccess("");
    } else {
      setError("");
      console.log(paymentMethod);
    }
    // payment intent
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName,
            email: user?.email,
          },
        },
      });
    if (intentError) {
      setError(intentError.message);
      setSuccess("");
    } else {
      setError("");
      setSuccess("Your payment processed successfully!");
      console.log(paymentIntent);
      setProcess(false);
      // save to database

      const payment = {
        name: user?.displayName,
        email: user?.email,
        amount: paymentIntent.amount,
        created: paymentIntent.created,
        transaction: paymentIntent.client_secret.slice("_secret")[0],
        lastFourDigit: paymentMethod.card.last4,
      };
      fetch("https://yellow-sparkly-station.glitch.me/paymentInfo", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          window.location.replace("dashboard/mypaymentInfo");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div>
      <form className="mx-96" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {process ? (
          <Spin></Spin>
        ) : (
          <button className="service-btn" type="submit" disabled={!stripe}>
            Pay ${price}
          </button>
        )}
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
};

export default CheckoutForm;
