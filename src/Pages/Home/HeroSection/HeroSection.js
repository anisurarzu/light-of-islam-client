import React from "react";
import "./HeroSection.css";
import hero from "../../../images/test-removebg-preview.png";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <div className="hero-container ">
      <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-4 ">
        <div className="py-12 first-width pt-28">
          <button className="p-2 bangla-text  xl:mr-96 lg:mr-96 xl:ml-12 lg:ml-12 btn-text px-4 bg-white rounded-full"></button>
          <div className="p-text xl:py-16 lg:py-16 py-8">
            <h2 className=" text-left pl-6 text-2xl xl:text-5xl lg:text-5xl font-bold xl:pl-20 lg:pl-20">
              "Best Mobile Service Provider"
            </h2>
            <p className="text-xl bangla-text px-6 xl:px-20 lg:px-20 py-4 text-left">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
              beatae ea debitis perferendis libero consequuntur porro eum, aut
              natus magni, dolore magnam consequatur laboriosam. Ipsa voluptatem
              hic recusandae et praesentium.
            </p>
            <div className="xl:flex xl:pl-20 pt-2 lg:pl-20">
              <Link to="">
                <button className="btn-design bangla-text  p-2 text-white rounded-full px-4">
                  Try Ii Now!
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="xl:py-16 xl:mt-8 lg:mt-8 lg:py-16 px-20 img-design relative">
          <div className="absolute img-border" />
          <img
            className="hero transition-all  duration-100  "
            // animate-bounce
            src={"https://i.ibb.co/1mbsqny/service-removebg-preview.png"}
            alt="Mother with his child"
          />
          <div className="hero-thumb shadow-md rounded-full  ">
            <img
              className="xl:p-2 lg:p-2  "
              src="https://i.ibb.co/F3chZX4/samsung9636.jpg"
              alt=""
            />
          </div>
          <div className="hero-thumb-1 shadow-md rounded-full  ">
            <img
              className="xl:p-2 lg:p-2"
              src="https://i.ibb.co/kBy246H/Apple-Logo.png"
              alt=""
            />
          </div>
          <div className="hero-thumb-2 shadow-md rounded-full  ">
            <img
              className="xl:p-2 lg:p-2"
              src="https://i.ibb.co/sVBYBXp/Xiaomi-logo-2021-svg.png"
              alt=""
            />
          </div>
          <div className="hero-thumb-3 shadow-md rounded-full ">
            <img
              className="xl:p-2 lg:p-2"
              src="https://i.ibb.co/FDjQpLN/OPPO-LOGO-2019.png"
              alt=""
            />
          </div>
          <div className="hero-thumb-4 shadow-md rounded-full ">
            <img
              className="xl:p-2 lg:p-2"
              src="https://i.ibb.co/CKjHY4z/kisspng-vivo-logo-smartphone-branding-5acf57274b6e50-967449261523537703309.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
