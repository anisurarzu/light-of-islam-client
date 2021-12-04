import React from "react";
import "./Pillers.css";
const Pillers = () => {
  return (
    <div className="">
      <div className="px-28 py-4 grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-5 card-container gap-4 container">
        <div className="parent grid justify-center">
          <div className="shadow-md rounded-full box0 child"></div>
          <h4 className="text-1">Shahadah</h4>
        </div>
        <div className="parent grid justify-center">
          <div className="shadow-md rounded-full box1 child"></div>
          <h4 className="text-2">Salah</h4>
        </div>
        <div className="parent grid justify-center">
          <div className="shadow-md rounded-full box2 child "></div>
          <h4 className="text-3">Sawm</h4>
        </div>
        <div className="parent grid justify-center">
          <div className="shadow-md rounded-full box3  child"></div>
          <h4 className="text-4">Zakah</h4>
        </div>
        <div className="parent grid justify-center">
          <div className=" shadow-md rounded-full box4 child "></div>
          <h4 className="text-5">Hajj</h4>
        </div>
      </div>
    </div>
  );
};

export default Pillers;
