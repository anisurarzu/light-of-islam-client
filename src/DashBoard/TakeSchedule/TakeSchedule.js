import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import "./TakeSchedule.css";

const TakeSchedule = () => {
  const { scholars } = useAuth();
  console.log("scholar", scholars);
  return (
    <div>
      <p className="my-2 pb-8 px-4 text-design">
        "আলহামদুলিল্লাহ!! দেশের শ্রেষ্ঠ আলেমসমাজ এখন আমাদের প্ল্যাটফর্ম এ একসাথে
        !!" আপনারা যারা ইসলামিক কনফারেন্স বা ওয়াজ-মাহফিল এর জন্য আলেমদের শিডিউল
        নিতে চান তারা "Take Schedule" বাটনটি চাপুন এবং আপনার শিডিউল এর জন্য
        আবেদন করুন"
      </p>
      <div className="grid gap-8 xl:grid-cols-3 xl:px-12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
        {scholars?.map((scholar) => (
          <div>
            {/* card-1 */}

            <div
              data-aos="fade-down"
              className="grid justify-center items-center xl:shadow lg:shadow
          sm:shadow-lg "
            >
              <div className="flex items-center justify-center pt-4">
                <img
                  className="lg:object-cover h-28 w-28 rounded-full"
                  src={scholar.image}
                  alt="wise scholars"
                />
              </div>
              <h3 className="text-xl xl:text-xl lg:text-xl md:text-2xl font-bold text-gray-700 pt-2">
                {scholar.displayName}
              </h3>
              <small className="xl:shadow text-white mx-24 xl:mx-0 xl:px-2  mb-4">
                Our Scholar
              </small>
              <p className="text-gray-600 px-8 ">
                আমারা দিচ্ছি শতভাগ কুরান এবং সহীহ্ হাদিস দিয়ে দাওয়াহ পরিচালনার
                প্রতিশ্রুতি। ইন শা আল্লাহ, এই দেশকে একদিন শিরক এবং বি'দাত মুক্ত
                করবো ইন শা আল্লাহ।
              </p>
              <div>
                <Link to={`/takeschedule/${scholar?.email}`}>
                  <button
                    type="button"
                    className="text-white font-bold py-1 px-3  mr-1 mb-4 rounded text-xs scholar-btn"
                  >
                    Take Schedule
                  </button>
                </Link>
              </div>

              <div className="grid grid-cols-4 gap-1 px-20 pb-12 icon">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-linkedin-in"></i>
                <i className="fab fa-instagram"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TakeSchedule;