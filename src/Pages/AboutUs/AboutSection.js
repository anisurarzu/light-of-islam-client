import React from "react";
import About from "../../images/about.png";
import { MdOutlineSlowMotionVideo} from 'react-icons/md';
import './aboutus.css'

const AboutSection = () => {
  return (
    <div className="w-full  py-16 px-6 container">
      <div className="abut-section-head max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="mx-auto my-4 animate-pulse transform '" src={About} alt="" />

        <div className="flex flex-col justify-center text-left py-1 ">
          <p className="text-2xl text-green-500 font-bold sm:py-0 mt-14">
            About Us
          </p>
          <h2 className="  md:text-4xl sm:text-3xl text-2xl font-bold ">
          জ্ঞান অন্বেষণ প্রত্যেক মুসলমানের কর্তব্য।
          </h2>
          <p className="abut-section-p py-4 text-xl">
             এক যুগে সভ্যতার শীর্ষে মুসলমানদের উত্থান
             চার দশক শিক্ষার উপর ইসলামের জোরের উপর ভিত্তি করে ছিল। এই
             স্পষ্টতই যখন কেউ কুরআন এবং এর ঐতিহ্যের দিকে নজর দেয়
             শেখার রেফারেন্সে ভরা নবী মুহাম্মদ সা.
             শিক্ষা, পর্যবেক্ষণ।
          </p>
          <div className=" flex m-2">
            <button className=" discoverButton text-sm  btn-donate ring-green-100 ring-offset-1 ring  text-white rounded-full  w-40 h-10  px-4 p-2 md:m-0 ">
            Discover 

            </button>
            <button className=" midiyaButton ml-3 text-sm   text-white  w-10 h-10 rounded-full  
                      shadow-md text-white ">
                        <MdOutlineSlowMotionVideo size={25} className="animate-spin  text-center font-bold text-green-300 ml-2 "></MdOutlineSlowMotionVideo>
            
            </button>
              <p style={{color:'aqua'}} className="watch-video ml-3 phoneScen md:ml-4  justify-center text-center mt-2
               underline decoration-1 text-xl font-bold ">Watch Our Video</p>
              
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
