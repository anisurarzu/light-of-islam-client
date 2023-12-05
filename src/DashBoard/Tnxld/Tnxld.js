import axios from "axios";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Loader from "../../components/Loader/Loader";
import useAuth from "../../hooks/useAuth";

import Payment from "../../Pages/Payment/Payment";

export default function Tnxld() {
  const { user, userInfo } = useAuth();
  const { register, reset, handleSubmit } = useForm();
  const [message, setMessage] = useState("");
  const [depositInfo, setDepositInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //https://yellow-sparkly-station.glitch.me/
    fetch(`https://yellow-sparkly-station.glitch.me/deposit`)
      .then((res) => res.json())
      .then((data) => {
        const latestData = data.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        setDepositInfo(latestData);
      });
  }, []);

  const onSubmit = (data) => {
    const result = depositInfo?.filter(
      (singleDeposit) => singleDeposit?.transactionID === data?.transactionID
    );
    if (result?.length > 0) {
      data.depositID = result[0]?._id;
      if (result[0]?.status === "Accepted") {
        toast.error("Already Inserted!");
      } else {
        data.status = "Accepted";
        try {
          setLoading(true);
          axios
            .put("https://yellow-sparkly-station.glitch.me/deposit", data)
            .then((res) => {
              setLoading(false);
              if (res.status === 200) {
                toast.success("Successfully Update!");
                reset();
              }
            });
        } catch (err) {
          setLoading(false);
          toast.error(err);
        }
      }
    } else {
      toast.error("does not matched or not payment yet");
    }
  };

  console.log("me", message);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="mt-8">
          <h3 className="text-l text-center  rounded px-4 text-green-500 mx-44 py-4 ">
            {message}
          </h3>

          <div className="flex justify-center">
            <div className="text-center btn-grad p-3 text-white w-48 justify-center my-4 rounded">
              <h2 className="text-l font-bold text-white ">
                Insert Deposit History
              </h2>
            </div>
          </div>

          <form
            className="w-full max-w-lg flex flex-col justify-center text-center  ml-auto mr-auto"
            onSubmit={handleSubmit(onSubmit)}>
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left ml-1 "
              htmlFor="name">
              Transaction ID
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              {...register("transactionID")}
              required
            />

            <input
              className="py-2 rounded mt-4 service-btn text-white"
              type="submit"
            />
          </form>
        </div>
      )}
    </div>
  );
}
