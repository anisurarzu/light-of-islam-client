import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import useAuth from "../../hooks/useAuth";
import CheckoutForm from "./CheckoutForm";
// import "./Payment.css";

const stripePromise = loadStripe(
  "pk_test_51KJHSRLEoW8AGWeEtzJAwqBho9m7yye9tatFEUhK9g9OwCND52ydMPh4qC7h0YdUIT6J0uvvEnJxhJObCOTrVAiq00gL6WtBHe"
);

const price = 100;

const Payment = () => {
  const { user } = useAuth();

  return (
    <div className="py-12 px-12">
      <h2>Plase pay for: Child Education</h2>
      <h4>Pay : ${price}</h4>
      {price && (
        <Elements stripe={stripePromise}>
          <CheckoutForm price={price} DonnerInfo={user} />
        </Elements>
      )}
    </div>
  );
};

export default Payment;
