import React from "react";
import { Link } from "react-router-dom";
import Img1 from "../../images/ouerEvents1.jpg";
import Img2 from "../../images/ouerEvents2.jpg";
import "./aboutus.css";
import { BiTimeFive } from "react-icons/bi";
import { ImLocation } from "react-icons/im";

const Membership = ({ users }) => {
  return (
    <div className=" py-4 bg-gray-50">
      <div className="min-h-screen container pt-4  ">
        <p className="font-bold text-xl our-events-class3">Our Members </p>
        <h1 className="text-4xl font-bold our-events-class">আমাদের সদস্য গণ</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-2">
          {users?.map((user, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 our-member-body flex shadow-sm md:mr-3 mt-5 md:h-60 p-2 rounded"
            >
              <div>
                <div className="flex justify-center items-center  p-4 ">
                  <img
                    className="rounded-full w-32 h-32 bg-white object-cover"
                    src={user?.image}
                    alt=""
                  />
                </div>
                <div className=" rounded-md p-1 w-28 shadow mt-3 border-2 bg-blue-900 text-sm text-white">
                  {user?.role}
                </div>
              </div>

              <div className="text-left">
                <br />
                <h3 className="text-2xl our-events-class font-bold">
                  {user?.displayName}
                </h3>
                <ul className="flex ">
                  <ul className="flex">
                    <ImLocation
                      size={18}
                      className="  mt-1 animate animate-bounce location"
                    ></ImLocation>
                    <li className="ml-2">{user?.location}</li>
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
