import React from "react";
import { Link } from "react-router-dom";
import "./TopHeader.css";

const TopHeader = () => {
  return (
    <div className="top-nav-container">
      <nav className=" grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 py-2 top-nav xl:fixed xl:z-50 xl:left-0 xl:right-0">
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2">
          <p className="phn xl:pl-48 lg:pl-48 xl:pt-2 lg:pt-2">
            <i class="fas fa-headset pr-2"></i>
            01789879345
          </p>
          <p className="xl:pr-32 lg:pr-32 xl:pt-2 lg:pt-2">
            <i class="far fa-envelope pr-2"></i>lightofislam@gmail.com
          </p>
        </div>
        <div className="mt-1">
          <Link to="/donation">
            <button className="btn-donate text-white px-4 pt-1 rounded-xl">
              <i class="fas fa-donate pr-2"></i>দান করুন
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default TopHeader;
