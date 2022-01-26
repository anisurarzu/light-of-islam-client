import userEvent from "@testing-library/user-event";
import React, { useState } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import { Alert } from "antd";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import "./SendQuestion.css";
const SendQuestion = () => {
  const { register, reset, handleSubmit } = useForm();
  const [message, setMessage] = useState("");
  const onSubmit = (data) => {
    console.log(data, "form");
    setMessage("");
    axios
      .post("https://limitless-lowlands-32082.herokuapp.com/questions", data)
      .then((res) => {
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
      <i class="fas fa-question-circle question-icon text-6xl pt-4 pb-2"></i>
      {message ? (
        <div className="mx-8">
          <Alert message={message} type="success" />
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
          className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
          {...register("name")}
          defaultValue={user.displayName}
          placeholder="enter your name"
          required
        />
        <label className="pb-2" htmlFor="name">
          Email
        </label>
        <input
          className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
          defaultValue={user.email}
          {...register("email")}
          required
        />
        <label className="py-2" htmlFor="name">
          Write your question here
        </label>
        <textarea
          className="w-full focus:ring-blue-400 px-2 py-2 text-gray-700 bg-gray-200 rounded"
          {...register("question")}
          required
          placeholder="enter your text here"
          rows="6"
        />
        <label className="py-2" htmlFor="name">
          Gender
        </label>
        <select
          className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
          {...register("gender")}
          required
        >
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="other">other</option>
        </select>
        <input
          className="py-2 rounded mt-4 service-btn text-white"
          type="submit"
        />
      </form>
    </div>
  );
};

export default SendQuestion;
