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
      {/* <h5>Send Your Question With Valid Information!</h5>
      <i class="fas fa-question-circle question-icon text-6xl pt-4 pb-2"></i>
      {message ? (
        <div className="mx-8">
          <Alert message={message} type="success" />
        </div>
      ) : (
        <div />
      )} */}


      {/* <form
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
      </form> */}
      <div className="text-white md:shadow md:shadow-md rounded-md question-from">
        <br />
        <br />
      <h5 className="text-xl">Send Your Question With Valid Information!</h5>
      <br /><br />
      {message ? (
        <div className="mx-8">
          <Alert message={message} type="success" />
        </div>
      ) : (
        <div />
      )}
        <form className="w-full max-w-lg flex flex-col justify-center text-center  ml-auto mr-auto">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left ml-1 "
                for="grid-first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left ml-1"
                for="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left ml-1"
                for="grid-password"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="email"
                placeholder="Enter Your Email"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left ml-1"
                for="grid-password"
              >
                Subject
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="text"
                type="text"
                placeholder="Enter Subject Name"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left ml-1"
                for="grid-password"
              >
                Message
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="text"
                type="text"
                placeholder="Enter Your Messages"
              />
            </div>
          </div>
          <button className=" text-sm btn-donate text-white font-bold text-xl rounded-full  px-5 p-2 mt-2 ">
            Send
          </button>
          <br />
          <br />
        </form>
      </div>
    </div>
  );
};

export default SendQuestion;
