import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
// import { toast, ToastContainer } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import Payment from "../../Pages/Payment/Payment";

export default function LoanRequest() {
  const { user, userInfo } = useAuth();
  console.log(userInfo?.dmfID);
  const { register, reset, handleSubmit } = useForm();

  const [message, setMessage] = useState("");
  const onSubmit = (data) => {
    console.log(data, "form");

    data.image = userInfo?.image;
    data.dmfID = userInfo?.dmfID;
    data.displayName = userInfo?.displayName;
    data.email = userInfo?.email;
    data.date = new Date();
    data.status = "Pending";

    axios
      //
      .post("https://yellow-sparkly-station.glitch.me/deposit", data)
      .then((res) => {
        if (res.data.insertedId) {
          reset();
          setMessage("Successfully save! ");
          // toast.success("Wow so easy!");
        }
      });
  };
  return (
    <div className="mt-4">
      {message?.length > 0 && (
        <h3 className="text-l text-center  rounded px-4 text-green-500 mx-44 py-1 ">
          {message}
        </h3>
      )}

      <div className="flex justify-center">
        <div className="text-center btn-grad p-3 text-white w-44 justify-center my-4 rounded">
          <h2 className="text-l font-bold text-white ">DEPOSIT AMOUNT</h2>
        </div>
      </div>

      <form
        className="w-full max-w-lg flex flex-col justify-center text-center  ml-auto mr-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left ml-1 "
          for="grid-first-name"
        >
          Payment Type
        </label>
        <select
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          {...register("paymentType")}
          required
        >
          <option value="bkash">Bkash</option>
          <option value="rocket">Rocket</option>
          <option value="nagad">Nagad</option>
          <option value="cash">Cash</option>
        </select>
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left ml-1 "
          htmlFor="name"
        >
          Transaction ID
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          {...register("transactionID")}
          required
        />
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left ml-1 "
          htmlFor="name"
        >
          Amount
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          {...register("depositAmount")}
          required
        />
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left ml-1 "
          htmlFor="name"
        >
          Comment
        </label>
        <textarea
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          {...register("comment")}
        ></textarea>
        <input
          className="py-2 rounded mt-4 service-btn text-white"
          type="submit"
        />
      </form>
    </div>
  );
}
