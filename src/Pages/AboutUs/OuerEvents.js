import React from "react";
import { Link } from "react-router-dom";
import Img1 from "../../images/ouerEvents1.jpg";
import Img2 from "../../images/ouerEvents2.jpg";
import "./aboutus.css";
import { BiTimeFive } from "react-icons/bi";
import { ImLocation } from "react-icons/im";

const OuerEvents = () => {
  return (
    <div className="min-h-screen container our-events-body">
      <br />
      <br />
      <br />
      <br />
      <p className="font-bold text-xl our-events-class3">Our Events</p>
      <h1 className="text-4xl font-bold our-events-class">
        {" "}
        আমাদের আসন্ন ইভেন্ট
      </h1>
      <div className="grid md:grid-cols-2 ">
        <div className="grid md:grid-cols-2 flex shadow-md md:mr-3 mt-5 ">
       

     
          {/* https://i.ibb.co/C5C2gHX/text-img.png */}
          
          
          <img  className=" our-events-img w-100" src={Img1} alt="" />
          <div className="text-left m-2">
            <br />
            <p className="text-2xl mt-2 font-bold our-events-class2 our-events-class2">
              হজ সম্পর্কে জানুন
            </p>
            <ul className="flex font-bold">
              <ul className="flex">
                <BiTimeFive
                  size={18}
                  className="mt-1 animate-spin  "
                ></BiTimeFive>
                <li className="ml-4">8.00 - 5.00</li>
              </ul>
              <ul className="flex">
                <ImLocation
                  size={18}
                  className=" ml-3 mt-1 animate animate-bounce location"
                ></ImLocation>
                <li className="ml-2">Newyork City</li>
              </ul>
            </ul>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <Link>আরও জানুন...</Link>
          </div>
        </div>
        <div className="grid md:grid-cols-2 flex shadow-md md:ml-3 mt-5 ">
          <img className="our-events-img w-100" src={Img2} alt="" />
          <div className="text-left m-2">
            <br />
            <p className="text-2xl mt-2 font-bold our-events-class2">হজ সম্পর্কে জানুন</p>
            <ul className="flex font-bold">
              <ul className="flex">
                <BiTimeFive
                  size={18}
                  className="mt-1 animate-spin  "
                ></BiTimeFive>
                <li className="ml-4">8.00 - 5.00</li>
              </ul>
              <ul className="flex">
                <ImLocation
                  size={18}
                  className=" ml-3 mt-1 animate animate-bounce location"
                ></ImLocation>
                <li className="ml-2">Newyork City</li>
              </ul>
            </ul>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <Link>আরও জানুন...</Link>
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OuerEvents;
