import React from "react";
import { Link } from "react-router-dom";
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
          <p className="text-xl bangla-text pl-6 xl:pl-12 lg:pl-12 py-4 text-left">
            চার দশকের ব্যবধানে সভ্যতার শীর্ষে মুসলমানদের উত্থান ইসলামের শিক্ষার
            উপর জোর দেওয়ার উপর ভিত্তি করে। এটি সুস্পষ্ট হয় যখন কেউ কুরআন এবং
            নবী মুহাম্মদের (সঃ) ঐতিহ্যের দিকে নজর দেয়।
          </p>
          <div className="xl:flex xl:pl-12 pt-2 lg:pl-12">
            <Link to="/dashboard/takeschedule">
              <button className="btn-design bangla-text rounded-full text-white p-2 px-4">
                শিডিউল নিন
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
