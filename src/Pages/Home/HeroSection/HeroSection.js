import React from "react";
import "./HeroSection.css";
import hero from "../../../images/hero.png";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <div className="hero-container ">
      <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-4 ">
        <div className="py-12 first-width pt-28">
          <button className="p-2 bangla-text  xl:mr-96 lg:mr-96 xl:ml-12 lg:ml-12 btn-text px-4 bg-white rounded-full"></button>
          <div className="p-text xl:py-16 lg:py-16 py-8">
            <h2 className=" text-left pl-6 text-2xl xl:text-5xl lg:text-5xl font-bold xl:pl-20 lg:pl-20">
              Read! In the Name of Almighty Allah, Who has created
            </h2>
            <p className="text-xl bangla-text px-6 xl:px-20 lg:px-20 py-4 text-left">
              আমরা দিচ্ছি কোরান এবং সহীহ্ হাদিস শিহ্মার নিশ্চয়তা। আসুন সঠিক
              ইসলাম সম্পর্কে জেনে নেই।
            </p>
            <div className="xl:flex xl:pl-20 pt-2 lg:pl-20">
              <Link to="/dashboard/sendquestions">
                <button className="btn-design bangla-text  p-2 text-white rounded-full px-4">
                  প্রশ্ন করুন?
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="xl:py-16 xl:mt-8 lg:mt-8 lg:py-16 px-20 img-design relative">
          <div className="absolute img-border" />
          <img
            className="hero hero-img transition-all  duration-100  "
            // animate-bounce
            src={hero}
            alt="Mother with his child"
          />
          <div className="hero-thumb shadow-md rounded-full  ">
            <img
              className="xl:p-2 lg:p-2  "
              src="https://i.ibb.co/yf4WjRZ/quran.png"
              alt=""
            />
          </div>
          <div className="hero-thumb-1 shadow-md rounded-full  ">
            <img
              className="xl:p-2 lg:p-2"
              src="https://i.ibb.co/r0SV0P4/moslem.png"
              alt=""
            />
          </div>
          <div className="hero-thumb-2 shadow-md rounded-full  ">
            <img
              className="xl:p-2 lg:p-2"
              src="https://i.ibb.co/SyxHbk9/allah.png"
              alt=""
            />
          </div>
          <div className="hero-thumb-3 shadow-md rounded-full ">
            <img
              className="xl:p-2 lg:p-2"
              src="https://i.ibb.co/NYrX8hY/prayer.png"
              alt=""
            />
          </div>
          <div className="hero-thumb-4 shadow-md rounded-full ">
            <img
              className="xl:p-2 lg:p-2"
              src="https://i.ibb.co/stkxJ8w/donation.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,192L48,165.3C96,139,192,85,288,64C384,43,480,53,576,74.7C672,96,768,128,864,149.3C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default HeroSection;
