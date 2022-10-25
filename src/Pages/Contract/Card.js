import React from "react";
import "./Contract.css";
import { GiWorld } from "react-icons/gi";
import { AiOutlineMail} from "react-icons/ai";
import { RiCustomerService2Fill} from "react-icons/ri";

const Card = () => {
  return (
    <div>
        <br />
      <div className=" mx-auto grid md:grid-cols-3 container ">
        <div className="bg-white shadow-md rounded-md mr-2 ml-2 ml-auto mr-auto">
          <h1 className=" card-text-top text-2xl  mt-4">
          25 নর্থ স্ট্রিট, দুবাই
          </h1>
          <ul className="grid grid-cols-2 mt-5">
            <li className=" card-hard-text ml-auto mr-auto  text-center mt-1">
              <GiWorld
                size={60}
                className="icon-class1 icon text-center mr-5 animate-spin"
                
              ></GiWorld>
            </li>
            <li className="text-xl ml-0 text-gray-500 mt-4 office-class">
              Office Address
            </li>
          </ul>
          <br />
        </div>
        {/* 2 conrd */}
        <div className="bg-white shadow-md mr-2 ml-2 ml-auto mr-auto">
          <h1 className=" card-text-top text-2xl  mt-4">
          25 নর্থ স্ট্রিট, দুবাই
          </h1>
          <ul className="grid grid-cols-2 mt-5">
            <li className="  card-hard-text ml-auto mr-auto  text-center mt-1 ">
              
              <AiOutlineMail
                size={60}
                className="icon-class2 icon text-center mr-5 text-green-500"
              ></AiOutlineMail>
            </li>
            <li className="text-xl ml-0 text-gray-500 mt-4 office-class">
              Office Address
            </li>
          </ul>
          <br />
        </div>
        {/* 3 conrd */}
        <div className="bg-white shadow-md mr-2 ml-2 ml-auto mr-auto" >
          <h1 className=" card-text-top text-2xl mt-4">
          25 নর্থ স্ট্রিট, দুবাই
          </h1>
          <ul className="grid grid-cols-2 mt-5">
            <li className="  card-hard-text ml-auto mr-auto  text-center mt-1">
              <RiCustomerService2Fill
                size={60}
                className="icon-class3 icon text-center mr-5  "
              ></RiCustomerService2Fill>
            </li>
            <li className="text-xl ml-0 text-gray-500 mt-4 office-class">
              Office Address
            </li>
          </ul>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Card;
