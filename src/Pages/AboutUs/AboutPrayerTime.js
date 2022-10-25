import React from "react";
import "./aboutus.css";
import Img from "../../images/Aboutpray1.png";
import Img2 from "../../images/Aboutpray2.png";

const AboutPrayerTime = () => {
  return (
    <div className="phone px-6 container  bg-pray-color min-h-screen mt-4">
      <div className="mx-auto grid md:grid-cols-2">
        <div className="py-2 ">
          <div className="text-class">
            <h1 className="ml-0 text-5xl font-bold mt-5  Prayer-Times-class">
              নামাজের সময়
            </h1>
            <p className="text-xl font-bold">
              সংযুক্ত আরব আমিরাতে নামাজের সময়
            </p>
            <p className=" underline decoration-1 text-xl text-green-700 font-bold">
              Mon 15 Jan, 2021
            </p>
          </div>

          <div className="img-prayer ml-0 md:flex  ">
            <img className=" mb-0 fast-img" src={Img} alt="" />
            <img className="" src={Img2} alt="" />
          </div>
        </div>

        <div className="fajor-namaz sm:m-5 ml-auto mr-auto container">
          <ul className="mt-5 mr-30  namaz-form-phone ul-class ">
            <li className="bg-green-200  li-1 bg-gray-600 w-80 py-3 rounded-md mt-2 ml-60 font-bold text-green ">
              Fajr &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; 05:47
            </li>

            <li className=" bg-rose li-2 bg-red-300 w-80 ml-10 py-3 rounded-md mt-2 ml-40">
              Fajr &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; 05:47
            </li>

            <li className="li-1 bg-blue-300 w-80 py-3 rounded-md mt-2 ml-60 ">
              Fajr &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; 05:47
            </li>

            <li className="li-2 bg-green-300 w-80 ml-10 py-3 rounded-md mt-2 ml-40">
              Fajr &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; 05:47
            </li>

            <li className="li-1 bg-blue-200 w-80 py-3 rounded-md mt-2 ml-60 ">
              Fajr &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; 05:47
            </li>

            <li className=" li-2 bg-indigo-400 justify-between w-80 ml-10 py-3 rounded-md mt-2 ml-40">
              Fajr &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; 05:47
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPrayerTime;
