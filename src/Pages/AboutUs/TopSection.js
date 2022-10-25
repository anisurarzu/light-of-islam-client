import React from "react";
import "./aboutus.css";
import IMG1 from '../../images/topsection1.png'
import IMG2 from '../../images/topsection2.png'
import IMG3 from '../../images/topsection3.png'
import IMG4 from '../../images/topsection4.png'
import IMG5 from '../../images/topsection5.png'
import IMG6 from '../../images/topsection6.png'

const TopSection = () => {
  return (
    <div className="mt-7 top-section min-h-screen">
      <br />
      <br />
      <br />
      <p className="text-xl font-bold top-mini">Top Courses</p>
      <h1 className="text-4xl font-bold top-color">আমাদের জনপ্রিয় কোর্স </h1>
      <div className="mx-auto grid md:grid-cols-3 mt-5 ml-0 container">
        

        <div className="ml-0 text-left">
        <img className="top-img mt-4" src={IMG1} alt="" />
          <h1 className="text-2xl font-bold ml-0 top-texs mt-4">কুরআন মুখস্থ করা</h1>
          <p className="text-xl  mt-3 text-gray-500">
          এই কোর্সটি শিক্ষার্থীদের পবিত্র কুরআন মুখস্থ করতে সহায়তা করার উদ্দেশ্যে।
             যে শিক্ষার্থীরা কুরআনের একটি অংশ বা পুরোটা মুখস্থ করতে চায়।
          </p>
        </div>
        <div className="ml-0 text-left">
        <img className="top-img mt-4" src={IMG2} alt="" />
           
          <h1 className="text-2xl font-bold ml-0 top-texs mt-4">কুরআন মুখস্থ করা</h1>
          <p className="text-xl  mt-3 text-gray-500">
          এই কোর্সটি শিক্ষার্থীদের পবিত্র কুরআন মুখস্থ করতে সহায়তা করার উদ্দেশ্যে।
             যে শিক্ষার্থীরা কুরআনের একটি অংশ বা পুরোটা মুখস্থ করতে চায়।
          </p>
        </div>
        <div className="ml-0 text-left">
        <img className="top-img mt-4" src={IMG3} alt="" />
          <h1 className="text-2xl font-bold ml-0 top-texs mt-4">কুরআন মুখস্থ করা</h1>
          <p className="text-xl  mt-3 text-gray-500">
          এই কোর্সটি শিক্ষার্থীদের পবিত্র কুরআন মুখস্থ করতে সহায়তা করার উদ্দেশ্যে।
             যে শিক্ষার্থীরা কুরআনের একটি অংশ বা পুরোটা মুখস্থ করতে চায়।
          </p>
        </div>
        <div className="ml-0 text-left">
        <img className="top-img mt-4" src={IMG4} alt="" />
          <h1 className="text-2xl font-bold ml-0 top-texs mt-4">কুরআন মুখস্থ করা</h1>
          <p className="text-xl  mt-3 text-gray-500">
          এই কোর্সটি শিক্ষার্থীদের পবিত্র কুরআন মুখস্থ করতে সহায়তা করার উদ্দেশ্যে।
             যে শিক্ষার্থীরা কুরআনের একটি অংশ বা পুরোটা মুখস্থ করতে চায়।
          </p>
        </div>
        <div className="ml-0 text-left">
        <img className="top-img mt-4" src={IMG5} alt="" />
          <h1 className="text-2xl font-bold ml-0 top-texs mt-4">কুরআন মুখস্থ করা</h1>
          <p className="text-xl  mt-3 text-gray-500">
          এই কোর্সটি শিক্ষার্থীদের পবিত্র কুরআন মুখস্থ করতে সহায়তা করার উদ্দেশ্যে।
             যে শিক্ষার্থীরা কুরআনের একটি অংশ বা পুরোটা মুখস্থ করতে চায়।
          </p>
        </div>
        <div className="ml-0 text-left">
        <img className="top-img mt-4" src={IMG6} alt="" />
          <h1 className="text-2xl font-bold ml-0 top-texs mt-4">কুরআন মুখস্থ করা</h1>
          <p className="text-xl mt-3 text-gray-500">
          এই কোর্সটি শিক্ষার্থীদের পবিত্র কুরআন মুখস্থ করতে সহায়তা করার উদ্দেশ্যে।
             যে শিক্ষার্থীরা কুরআনের একটি অংশ বা পুরোটা মুখস্থ করতে চায়।
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
