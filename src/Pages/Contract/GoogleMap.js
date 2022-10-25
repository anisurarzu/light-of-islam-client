import React from "react";
import "./Contract.css";

const GoogleMap = () => {
  return (
    <div className="w-full  py-16 px-6 container">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 mt-5">
        {/* form aria */}
        {/* form aria */}
        {/* form aria */}
        <div className=" bg-white shadow shadow-md rounded-md  md:mr-5 text-center container ">
          <br />
          <h1 className="text-4xl font-bold bg-[#ecfbf9] from-top-text">
          যোগাযোগ করুন
          </h1>
          <br />
          <form className="w-full max-w-lg flex flex-col justify-center text-center  ml-auto mr-auto">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left ml-1 "
                  for="grid-first-name"
                >
                নামের প্রথম অংশ  
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="নামের প্রথম অংশ "
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left ml-1"
                  for="grid-last-name"
                >
                  নামের শেষাংশ
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="নামের শেষাংশ"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left ml-1"
                  for="grid-password"
                >
                ইমেইল 
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="email"
                  placeholder=" ইমেইল প্রবেশ করাও"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left ml-1"
                  for="grid-password"
                >
                  বিষয়
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="text"
                  type="text"
                  placeholder="বিষয়ের নাম লিখুন"
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left ml-1"
                  for="grid-password"
                >
               বার্তা
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="text"
                  type="text"
                  placeholder="আপনার বার্তা লিখুন"
                />
              </div>
            </div>
            <button className=" text-sm btn-donate text-white font-bold text-xl rounded-full  px-5 p-2 mt-2 ">
            পাঠান
            </button>
            <br />
          </form>
        </div>

        <div className="flex flex-col justify-center text-left py-1 google-phone-responsib container">
          <iframe
            className="map-width-className md:w-100 sm:w-100 w-100"
            width="650"
            height="704"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Daffodil%20International%20University%20ashulia&t=&z=15&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;
