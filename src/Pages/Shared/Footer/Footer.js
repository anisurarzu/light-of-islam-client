import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="pt-8">
      <div className="footer-container ">
        <div className="max-w-2xl mx-auto text-white py-2">
          <div className="text-center">
            <h3 className="text-2xl my-3 text-white">
              {" "}
              Download our mobile app{" "}
            </h3>
            <p> Stay fit. All day, every day. </p>
            <div className="flex justify-center my-10">
              <div className="flex items-center border w-auto rounded-lg px-4 py-2 mx-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                  className="w-7 md:w-8"
                />
                <div className="text-left ml-3">
                  <p className="text-xs text-gray-200">Download on </p>
                  <p className="text-sm md:text-base"> Google Play Store </p>
                </div>
              </div>
              <div className="flex items-center border w-auto rounded-lg px-4 py-2  mx-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                  className="w-7 md:w-8"
                />
                <div className="text-left ml-3">
                  <p className="text-xs text-gray-200">Download on </p>
                  <p className="text-sm md:text-base"> Apple Store </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
            <p className="order-2 md:order-1 mt-8 md:mt-0">
              {" "}
              &copy; Light Of Islam, 2021.{" "}
            </p>
            <div className="order-1 md:order-2">
              <span className="px-2">About us</span>
              <span className="px-2 border-l">Contact us</span>
              <span className="px-2 border-l">Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
