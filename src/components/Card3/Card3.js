import React from "react";
import { Link, useHistory, useRouteMatch } from "react-router-dom";

export default function Card3({
  title,
  amount,
  amount2,
  totalRefundableOrder,
  totalDeletedOrder,
  totalCompletedOrder,
}) {
  console.log("object", amount);
  const { history } = useHistory();
  let { path, url } = useRouteMatch();

  const gotToFinance = () => {
    console.log("first");
    history.push(`/dashboard/myFinance`);
  };
  return (
    <div>
      <div class="">
        <div class="">
          <div class="w-full ">
            <div
              class={`flex flex-col px-6  overflow-hidden   rounded-xl shadow duration-300  group`}
            >
              <div className="text-left pt-2">
                <p className="bg-blue-600 rounded p-1 text-white font-bold">
                  Total Countable Order : {amount}
                </p>
                <p className="bg-red-600 rounded p-1 text-white font-bold">
                  Total Rejected Order : {amount2}
                </p>
                <p className="bg-yellow-600 rounded p-1 text-white font-bold">
                  Total Refundable Order : {totalRefundableOrder}
                </p>
                <p className="bg-red-900 rounded p-1 text-white font-bold">
                  Total Deleted Order : {totalDeletedOrder}
                </p>
                <p className="bg-green-600 rounded p-1 text-white font-bold">
                  Total Completed Order : {totalCompletedOrder}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
