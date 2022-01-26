import { restElement } from "@babel/types";
import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const ScholarQuestion = () => {
  const { user, userInfo } = useAuth();
  const [scholarQuestions, setScholarQuestions] = useState();
  console.log(scholarQuestions);
  const [message, setMessage] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState();

  const [answer, setAnswer] = useState("");

  // console.log(currentQuestion);
  //   const { register, reset, handleSubmit } = useForm();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: currentQuestion?._id,
      answer: answer,
      answeredBy: userInfo?.displayName,
    };
    console.log(data);
    fetch("https://limitless-lowlands-32082.herokuapp.com/questions/answer", {
      method: "PUT",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        // console.log(res);
        // alert("image uploaded done");
        // reset();
        window.location.reload();
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  useEffect(() => {
    fetch("https://limitless-lowlands-32082.herokuapp.com/questions")
      .then((res) => res.json())
      .then((data) => {
        setScholarQuestions(data);
        // console.log(data);
      });
  }, []);

  return (
    <div className="question-container">
      <span>{message}</span>

      <div className="w-4/5 mx-auto">
        <div className="bg-white shadow-md rounded my-2">
          <table className="text-left w-full border-collapse">
            <thead>
              <tr>
                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                  Questions
                </th>
                <th className="py-4  pl-2 xl:px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {scholarQuestions?.map((question) => (
                <tr key={question._id} className="hover:bg-gray-100">
                  <td className="py-4 xl:px-6 border-b border-grey-light">
                    {question.question}
                  </td>
                  {/* <td>{question?.name}</td> */}
                  {question?.answer ? (
                    <td className="py-4 xl:px-6 border-b border-grey-light flex">
                      <button
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => setCurrentQuestion(question)}
                        type="button"
                        className="text-white font-bold py-1 px-3 mr-1 rounded text-xs bg-yellow-500 hover:bg-yellow-600"
                      >
                        Done
                      </button>
                    </td>
                  ) : (
                    <td className="py-4 xl:px-6 border-b border-grey-light flex">
                      <button
                        onClick={() => setCurrentQuestion(question)}
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        className="text-white font-bold py-1 px-3 mr-1 rounded text-xs bg-green-500 hover:bg-green-600"
                      >
                        Answer
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* modal */}
      <div
        class="modal fade mt-8"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div>
              <div class="absolute bg-white rounded opacity-80 inset-0 z-0"></div>
              <div class="w-full   max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
                <div class="">
                  <div class="text-center p-5 flex-auto justify-center">
                    <div className="flex justify-center">
                      <img
                        className="w-2/5"
                        src="https://i.ibb.co/CQ6cw5j/answer.png"
                        alt=""
                      />
                    </div>
                    <h2 class="text-sm  font-bold pb-2 ">
                      {currentQuestion?.question}
                    </h2>
                    {currentQuestion?.answer ? (
                      <p>Answer: {currentQuestion?.answer}</p>
                    ) : (
                      <form onSubmit={handleSubmit}>
                        <textarea
                          type="text"
                          className="border-dashed border-2 p-4 rounded border-blue-500"
                          placeholder="আপনার উত্তর এখানে লিখুন"
                          // {...register("answer")}
                          required
                          onChange={(e) => setAnswer(e.target.value)}
                        />
                        <input
                          className="mt-2 bg-purple-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-600"
                          type="submit"
                          value="Submit"
                        />
                      </form>
                    )}
                  </div>

                  <div class=" text-center md:block">
                    <button
                      type="button"
                      data-bs-dismiss="modal"
                      className="mb-2 md:mb-0 bg-yellow-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-white rounded-full hover:shadow-lg hover:bg-red-500"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarQuestion;
