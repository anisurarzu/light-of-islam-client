import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const ViewQuestion = () => {
  const [question, setQuestion] = useState({});
  const [message, setMessage] = useState("");
  const { questionId } = useParams();
  // console.log("orderid", orderId);
  console.log(questionId);
  useEffect(() => {
    fetch(`http://localhost:5000/questions/${questionId}`)
      .then((res) => res.json())
      .then((data) => setQuestion(data));
  }, []);
  console.log(question);
  return (
    <div className="px-24 py-12 " style={{ background: "#ECFBF9" }}>
      <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4">
        <div className="xl:col-span-1">
          <Link to="/dashboard">
            <img
              className="w-1/4"
              src="https://i.ibb.co/XJMCHYz/7214473.png"
              alt=""
            />
          </Link>
        </div>
        <div className="xl:col-span-3">
          <div class="w-full mx-auto">
            <div class="bg-white shadow-md rounded my-6">
              <table class="text-left w-full border-collapse">
                <thead>
                  <tr>
                    <th class="py-4 xl:px-6 bg-grey-lightest text-2xl  text-grey-dark border-b border-grey-light">
                      {question.question}
                    </th>
                    <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="hover:bg-grey-lighter">
                    <td class="py-4 px-6 border-b border-grey-light">
                      Answer:
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Link to="/dashboard/myquestions">
              <i className="fas fa-backward btn-design text-white text-xl px-4 rounded-full"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewQuestion;
