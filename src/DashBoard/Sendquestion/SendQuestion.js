import userEvent from "@testing-library/user-event";
import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import "./SendQuestion.css";
const SendQuestion = () => {
  const { register, reset, handleSubmit } = useForm();
  const [message, setMessage] = useState("");
  const onSubmit = (data) => {
    console.log(data);
    setMessage("");
    axios.post("http://localhost:5000/questions", data).then((res) => {
      if (res.data.insertedId) {
        setMessage("Your question submitted SuccessFully!");
        reset();
        window.location.replace("/dashboard/myquestions");
      }
    });
  };
  const { user } = useAuth();
  return (
    <div className="p-4 send-container  xl:ml-12 lg:ml-12">
      <h5>Send Your Question With Valid Information!</h5>
      <i class="fas fa-question-circle question-icon text-6xl pt-4"></i>
      {message ? (
        <div class="flex mt-2">
          <div class="m-auto">
            <div class="bg-white rounded-lg border-gray-300 border p-3 shadow-lg">
              <div class="flex flex-row">
                <div class="px-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 1792 1792"
                    fill="#44C997"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1299 813l-422 422q-19 19-45 19t-45-19l-294-294q-19-19-19-45t19-45l102-102q19-19 45-19t45 19l147 147 275-275q19-19 45-19t45 19l102 102q19 19 19 45t-19 45zm141 83q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zm224 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
                  </svg>
                </div>
                <div class="ml-2 mr-6">
                  <span class="font-semibold">{message}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div />
      )}
      <form
        className="flex flex-col text-left  p-4 mt-0 xl:mx-44"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="pb-2" htmlFor="name">
          Name
        </label>
        <input
          className="p-2 border-2 border-green-800 rounded"
          {...register("name")}
          defaultValue={user.displayName}
          placeholder="enter your name"
          disabled
          required
        />
        <label className="pb-2" htmlFor="name">
          Email
        </label>
        <input
          className="p-2 border-2 border-green-800 rounded"
          defaultValue={user.email}
          {...register("email")}
          disabled
          required
        />
        <label className="py-2" htmlFor="name">
          Write your question here
        </label>
        <textarea
          className="p-2 border-2 border-green-800 rounded"
          {...register("question")}
          required
          placeholder="enter your text here"
        />
        <label className="py-2" htmlFor="name">
          Gender
        </label>
        <select
          className="p-2 border-2 border-green-800 rounded"
          {...register("gender")}
          required
        >
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="other">other</option>
        </select>
        <input
          className="py-2 rounded mt-4 login-registration-btn text-white"
          type="submit"
        />
      </form>
    </div>
  );
};

export default SendQuestion;
