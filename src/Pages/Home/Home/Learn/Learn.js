import React from "react";
import "./Learn.css";
const Learn = () => {
  return (
    <div className="learn-container ">
      <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-4 ">
        <div className="py-12  pt-2">
          <button className="p-2 xl:mr-96 lg:mr-96 xl:ml-12 lg:ml-12 btn-text px-4 bg-white rounded-full">
            Jumah Khutba
          </button>
          <div className="p-text xl:py-16 lg:py-16 py-8">
            <h2 className="  px-4 xl:px-24 lg:px-20  text-2xl xl:text-5xl lg:text-5xl font-bold ">
              "নিজের রিচার্জ নিজেই করুন, রেফার করে আয় করুন"
            </h2>
            <p className="text-xl px-6 xl:px-20 lg:px-20 py-4 text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
              consequuntur eum. Ut praesentium et deserunt sapiente dolorum
              maxime, esse asperiores voluptatibus dolorem eveniet temporibus
              consectetur? Tenetur est quo culpa sed.
            </p>
            <div className="xl:flex xl:pl-20 pt-2 lg:pl-20">
              <button className="btn-design   p-2 text-white rounded-full px-4">
                Know More
              </button>
            </div>
          </div>
        </div>
        <div className="xl:py-16 lg:py-16 px-20">
          <img
            className="hero"
            src="https://i.ibb.co/PFmMJMw/img-1-a2c18775.png"
            alt="Mother with his child"
          />
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

export default Learn;
