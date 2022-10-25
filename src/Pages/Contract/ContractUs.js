import React from "react";
import { Link } from "react-router-dom";

const ContractUs = () => {
  return (
    <div>
      <div className="aboutUs bg-[#ecfbf9] flex flex-col justify-center">
        <h1 className="text-4xl font-bold color">Contact Us</h1>
        <ul className="flex text-center justify-center text-xl ">
          <li>
            <Link to="/home">
              Home <span className="text-black"> /</span>
            </Link>
          </li>
          <li>
            <span className="span-color"> &nbsp; Contact</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContractUs;
