import React from "react";
import "./Donation.css";

const Donation = () => {
  return (
    <div className="donate-container xl:px-8 lg:px-8 mt-12 mb-8 pb-8">
      <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 container ">
        <div>
          <img
            className="px-12 pt-24"
            src="https://i.ibb.co/Fzsf4ST/img-2-e8de61f3-1.png"
            alt=""
          />
        </div>
        <div className="xl:pt-28 lg:pt-28  pr-4">
          <h4 className="py-4 xl:text-left lg:text-left  xl:px-12 lg:px-12 btn-text">
            Support Us
          </h4>
          <h2 className="text-left pl-6 text-2xl xl:text-5xl lg:text-5xl font-bold xl:pl-12 lg:pl-12">
            We Need Your Help
          </h2>
          <p className="text-xl pl-6 xl:pl-12 lg:pl-12 py-4 text-left">
            The Weekend School of the Islamic Center of Allah is committed to
            providing quality Islamic Education according to the Quran.
          </p>
          <div className="xl:flex xl:pl-12 pt-2 lg:pl-12">
            <button className="btn-design rounded-full text-white p-2 px-2">
              Donate US
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;
