import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import about from "../../../images/test-2.png";

const About = () => {
  return (
    <div className="about-container">
      <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 container ">
        <div className="">
          <img className="px-12 object-cover pt-12" src={about} alt="" />
        </div>
        <div className="xl:pt-28 lg:pt-28  pr-4">
          <h4 className="py-4 xl:text-left lg:text-left  xl:px-12 lg:px-12">
            About Us
          </h4>
          <h2 className="text-left pl-6 text-2xl xl:text-5xl lg:text-5xl font-bold xl:pl-12 lg:pl-12">
            "নিজের রিচার্জ নিজেই করুন, রেফার করে আয় করুন"
          </h2>
          <p className="text-xl bangla-text pl-6 xl:pl-12 lg:pl-12 py-4 text-left">
            প্রিয় গ্রাহকবৃন্দ,আসসালামু আলাইকুম। বাংলাদেশে এ প্রথম
            ব্যাতিক্রমধর্মী অনলাইন মোবাইল রিচার্জ ব্যবসা নিয়ে এলো বিজয় রিচার্জ।
            আপনি অন্য সকল পেশার পাশাপাশি এই ব্যবসা করে বাড়তি আয় করতে পারবেন।
            আপনি চাইলে আপনার ইচ্ছেমত ইনকাম বাড়াতে পারবেন হাজার থেকে লক্ষ টাকা
            পর্যন্ত।
          </p>
          <div className="xl:flex xl:pl-12 pt-2 lg:pl-12">
            <Link to="">
              <button className="btn-design bangla-text rounded-full text-white p-2 px-4">
                Learn More!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
