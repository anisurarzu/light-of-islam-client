import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import "./MyQuestion.css";

const MyQuestion = () => {
  const [questions, setQuestions] = useState();
  const [message, setMessage] = useState("");
  const { user } = useAuth();
  let email = user?.email;
  useEffect(() => {
    fetch("https://yellow-sparkly-station.glitch.me/questions")
      .then((res) => res.json())
      .then((data) => {
        const question = data.filter((data) => data.email === email);
        setQuestions(question);
        console.log(question);
      });
  }, []);

  const handleDeleteQuestion = (id) => {
    const check = window.confirm(
      "Are you sure,you want to delete this question?"
    );

    if (check) {
      const url = `https://yellow-sparkly-station.glitch.me/questions/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount > 0) {
            const restQuestion = questions.filter(
              (question) => question._id !== id
            );
            setQuestions(restQuestion);
            setMessage("Your question deleted Successfully!");
          }
        });
    }
  };
  return (
    <div className="question-container">
      <h1 className="text-2xl heading-text  py-2">
        Questions: {questions?.length}
      </h1>
      <span>{message}</span>

      <div className="w-4/5 mx-auto">
        <div className="bg-white  rounded my-2">
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
              {questions?.map((question) => (
                <tr key={question._id} className="hover:bg-gray-100">
                  <td className="py-4 xl:px-6 border-b border-grey-light">
                    {question.question}
                  </td>

                  <td className="py-4 xl:px-6 border-b border-grey-light flex">
                    <Link
                      to={`/viewquestion/${question._id}`}
                      className="text-white font-bold py-1 px-3 mr-1 rounded text-xs bg-green-500 hover:bg-green-600"
                    >
                      View
                    </Link>
                    {/* <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      className="text-white font-bold py-1 px-3  rounded text-xs bg-red-500 hover:bg-red-600"
                    >
                      <i class="far fa-trash-alt"></i>
                    </button> */}
                    <button
                      className="text-white font-bold py-1 px-3  rounded text-xs bg-red-500 hover:bg-red-600"
                      onClick={() => handleDeleteQuestion(question._id)}
                    >
                      <i class="far fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* modal */}

        {/* modal */}
      </div>
    </div>
  );
};

export default MyQuestion;
