import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import CheckoutForm from "./CheckoutForm";
import { useForm } from "react-hook-form";
// import "./Payment.css";

const stripePromise = loadStripe(
  "pk_test_51KJHSRLEoW8AGWeEtzJAwqBho9m7yye9tatFEUhK9g9OwCND52ydMPh4qC7h0YdUIT6J0uvvEnJxhJObCOTrVAiq00gL6WtBHe"
);

const Payment = () => {
  const { user } = useAuth();
  const [price, setPrice] = useState();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    setPrice(data?.price);
  };

  return (
    <div className="py-12 px-12">
      <h2>Plase pay for: Child Education</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="p-2 rounded-full mt-4 time-input"
          type="number"
          {...register("price")}
          placeholder="enter your amount"
          required
        />
        <br />

        <input
          className="btn-design my-4 px-2 rounded-full text-white"
          type="submit"
          value="Add Amount"
        />
      </form>

      {price && (
        <Elements stripe={stripePromise}>
          <CheckoutForm price={price} DonnerInfo={user} />
        </Elements>
      )}
    </div>
  );
};

export default Payment;
