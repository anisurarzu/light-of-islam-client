import React from "react";
import "./Pillers.css";
const Pillers = () => {
  return (
    <div className="">
      <div className="px-28 py-4 grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-4 card-container gap-4 container">
        <div className="parent grid justify-center">
          <div className="shadow-md rounded-full box0 child"></div>
          <h4 className="text-1">টাকা যোগ করুন</h4>
        </div>
        <div className="parent grid justify-center">
          <div className="shadow-md rounded-full box1 child"></div>
          <h4 className="text-2">তহবিল স্থানান্তর</h4>
        </div>
        <div className="parent grid justify-center">
          <div className="shadow-md rounded-full box2 child "></div>
          <h4 className="text-3">শেবা অফার</h4>
        </div>
        <div className="parent grid justify-center">
          <div className="shadow-md rounded-full box3  child"></div>
          <h4 className="text-4">নগদ ফেরত</h4>
        </div>
      </div>
    </div>
  );
};

export default Pillers;
