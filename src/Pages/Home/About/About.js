import React from "react";
import "./About.css";
import about from "../../../images/about.png";

const About = () => {
  return (
    <div className="about-container">
      <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 container ">
        <div>
          <img className="px-12" src={about} alt="" />
        </div>
        <div className="xl:pt-28 lg:pt-28  pr-4">
          <h4 className="py-4 xl:text-left lg:text-left  xl:px-12 lg:px-12">
            About Us
          </h4>
          <h2 className="text-left pl-6 text-2xl xl:text-5xl lg:text-5xl font-bold xl:pl-12 lg:pl-12">
            Seeking of knowledge is a duty of every Muslim
          </h2>
          <p className="text-xl pl-6 xl:pl-12 lg:pl-12 py-4 text-left">
            The rise of Muslims to the zenith of civilization in a period of
            four decades was based on lslam's emphasis on learning. This is
            obvious when one takes a look at the Qur'an and the traditions of
            Prophet Muhammad which are filled with references to learning,
            education, observation.
          </p>
          <div className="xl:flex xl:pl-12 pt-2 lg:pl-12">
            <button className="btn-design rounded-full text-white p-2 px-2">
              Get Schedule
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
