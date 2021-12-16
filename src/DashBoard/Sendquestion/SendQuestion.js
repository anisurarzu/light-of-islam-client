import userEvent from "@testing-library/user-event";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import "./SendQuestion.css";
const SendQuestion = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const { user } = useAuth();
  return (
    <div className="p-4 send-container  xl:ml-12 lg:ml-12">
      <h5>Send Your Question With Valid Information!</h5>
      <form
        className="flex flex-col text-left  p-4 mt-4 xl:mx-44"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="pb-2" htmlFor="name">
          Name
        </label>
        <input
          className="p-2 border-2 border-green-800 rounded"
          {...register("name")}
          placeholder="enter your name"
          required
        />
        <label className="pb-2" htmlFor="name">
          Email
        </label>
        <input
          className="p-2 border-2 border-green-800 rounded"
          defaultValue={user.email}
          {...register("email")}
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
