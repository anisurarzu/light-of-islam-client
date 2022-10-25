import React from "react";
import { Link } from "react-router-dom";
import Img1 from "../../images/ouerEvents1.jpg";
import Img2 from "../../images/ouerEvents2.jpg";
import "./aboutus.css";
import { BiTimeFive } from "react-icons/bi";
import { ImLocation } from "react-icons/im";

const Membership = ({ users }) => {
  return (
    <div className="our-member-body py-4">
      <div className="min-h-screen container pt-4  ">
        <p className="font-bold text-xl our-events-class3">Our Members </p>
        <h1 className="text-4xl font-bold our-events-class"> আমাদের সদস্য</h1>

        <div className="grid md:grid-cols-3 gap-2">
          {users?.map((user, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 flex bg-white shadow-md md:mr-3 mt-5 md:h-60"
            >
              <div className="flex justify-center  p-4">
                <img
                  className="rounded-full w-48 h-40"
                  src={user?.image}
                  alt=""
                />
              </div>
              <div className="text-left m-2">
                <br />
                <p className="text-2xl mt-2 font-bold our-events-class2 our-events-class2">
                  {user?.displayName}
                </p>
                <ul className="flex font-bold">
                  <ul className="flex">
                    <BiTimeFive
                      size={18}
                      className="mt-1 animate-spin"
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
                <Link>Learn More...</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Membership;
