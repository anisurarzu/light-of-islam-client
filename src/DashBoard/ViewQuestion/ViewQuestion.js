import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

import "./ViewQuestion.css";

const ViewQuestion = () => {
  const [question, setQuestion] = useState({});
  const [message, setMessage] = useState("");
  const { questionId } = useParams();
  // console.log("orderid", orderId);
  console.log(questionId);
  useEffect(() => {
    fetch(
      `https://limitless-lowlands-32082.herokuapp.com/questions/${questionId}`
    )
      .then((res) => res.json())
      .then((data) => setQuestion(data));
  }, []);
  console.log(question);
  return (
    <div className="px-24 py-12 " style={{ background: "#ECFBF9" }}>
      <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4">
        <div className="xl:col-span-1 pl-4 view-div">
          <img
            className="w-full mt-32 "
            src="https://i.ibb.co/CwLgyBp/Pngtree-muslim-man-arabic-show-you-6826188.png"
            alt=""
          />
        </div>
        <div className="xl:col-span-3">
          <div class="w-full mx-auto">
            <div class="bg-white shadow-md rounded my-6">
              <table class="text-left w-full border-collapse">
                <thead>
                  <tr>
                    <th class="py-4 heading-text xl:px-6 bg-grey-lightest text-xl  text-grey-dark border-b border-grey-light">
                      প্রশ্ন: {question.question}
                    </th>
                    <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="hover:bg-grey-lighter">
                    <td class="py-4 px-6 border-b border-grey-light">
                      উত্তর:
                      {question?.answer ? (
                        <div>
                          <p>{question?.answer}</p>
                          <span>[{question?.answeredBy}]</span>
                        </div>
                      ) : (
                        <p style={{ color: "#00BBE2" }}>
                          আসসালামু আলাইকুম! আগামী ২৪ ঘন্টার মধ্যে আপনি আপনার
                          প্রশ্নের উত্তর পেয়ে যাবেন ইং শা আল্লাহ!
                        </p>
                      )}
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
