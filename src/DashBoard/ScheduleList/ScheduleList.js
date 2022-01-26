import React, { useEffect, useState } from "react";

import { Spin } from "antd";
import "./ScheduleList.css";
import useAuth from "../../hooks/useAuth";

const ScheduleList = () => {
  const { user } = useAuth();
  const [scheduleList, setScheduleList] = useState();
  const [currentSchedule, setCurrentSchedule] = useState();
  //   console.log("scheduleList", scheduleList);
  let email = user?.email;
  useEffect(() => {
    fetch("https://limitless-lowlands-32082.herokuapp.com/schedule")
      .then((res) => res.json())
      .then((data) => {
        // console.log("event data", data[0].email);
        const schedule = data.filter((data) => data?.userEmail === email);
        setScheduleList(schedule);
        // console.log(event);
      });
  }, []);

  // searching method
  const handleSearch = (event) => {
    const searchText = event.target.value;

    const matchedDetails = scheduleList.filter((details) =>
      details.scholarName.toLowerCase().includes(searchText.toLowerCase())
    );

    setScheduleList(matchedDetails);
  };

  return (
    <div>
      <div class="inline-block min-w-full  rounded-lg overflow-hidden">
        <div class=" flex items-center justify-between pb-6">
          <div>
            <h2 class="text-gray-600 font-semibold">
              Schedule Booking Details
            </h2>
            <span class="text-xs">All Schedule List</span>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex bg-gray-50 items-center p-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                onChange={handleSearch}
                class="bg-gray-50 outline-none ml-1 block "
                type="text"
                name=""
                id=""
                placeholder="search...by user name"
              />
            </div>
          </div>
        </div>
        <table class="min-w-full leading-normal">
          <thead>
            <tr>
              <th class="pl-28 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Scholar Name
              </th>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Scholar Email
              </th>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Apply From
              </th>
              <th class=" py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Apply For: Date
              </th>
              <th class=" py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Status
              </th>
              <th class=" py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            {scheduleList?.map((schedule) => (
              <tr>
                <td class="px-5  border-b border-gray-200 bg-white text-sm">
                  <div class="flex items-center">
                    <div class=" w-10 h-10">
                      <img
                        class="w-full h-full rounded-full"
                        src={
                          schedule?.scholarImage ||
                          "https://i.ibb.co/PFkN0mF/user.png"
                        }
                        alt=""
                      />
                    </div>
                    <div class="ml-3">
                      <p class="text-gray-900 whitespace-no-wrap pt-3 justify-center">
                        {schedule?.scholarName}
                      </p>
                    </div>
                  </div>
                </td>
                <td class="pt-3 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {schedule?.scholarEmail}
                  </p>
                </td>
                <td class="pt-3 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {schedule?.city}
                  </p>
                </td>
                <td class="  border-b border-gray-200 bg-white text-sm">
                  <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span
                      aria-hidden
                      class="absolute inset-0 bg-indigo-200 opacity-50 rounded-full"
                    ></span>
                    <span class="relative">{schedule?.bookingDate}</span>
                  </span>
                </td>

                <td class="  border-b border-gray-200 bg-white text-sm">
                  <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span
                      aria-hidden
                      className={`${
                        schedule?.status === "Accept"
                          ? "absolute inset-0 bg-green-200 opacity-50 rounded-full"
                          : schedule?.status === "Reject"
                          ? "absolute inset-0 bg-red-200 opacity-50 rounded-full"
                          : "absolute inset-0 bg-yellow-200 opacity-50 rounded-full"
                      }`}
                    ></span>
                    <span class="relative">{schedule?.status}</span>
                  </span>
                </td>
                {schedule?.status === "Accept" ? (
                  <td className="border-b border-gray-200">
                    <button
                      onClick={() => setCurrentSchedule(schedule)}
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      class="text-white font-bold py-1 px-3 ml-2 rounded text-xs bg-green-500 hover:bg-green-dark"
                    >
                      Details
                    </button>
                  </td>
                ) : schedule?.status === "Reject" ? (
                  <td>
                    <button
                      type="button"
                      class="text-white font-bold py-1 px-3 ml-2 rounded text-xs bg-red-500 hover:bg-green-dark"
                    >
                      Reject.
                    </button>
                  </td>
                ) : (
                  <td>
                    <button
                      type="button"
                      class="text-white font-bold py-1 px-3 ml-2 rounded text-xs bg-yellow-500 hover:bg-green-dark"
                    >
                      Wait <span className="animate-pulse">...</span>
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        {/* modal start */}
        {/* modal */}
        <div
          class="modal fade mt-12"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div>
                <div class="absolute bg-white rounded opacity-80 inset-0 z-0"></div>
                <div class="w-full   max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
                  <h3 className="text-xl py-2">Schedule Information</h3>

                  <div className="text-left">
                    <p>Schedule Date : {currentSchedule?.bookingDate}</p>
                    <div className="flex gap-4">
                      <p>City: {currentSchedule?.city}</p>
                      <p>Postal Code: {currentSchedule?.postCode}</p>
                    </div>
                    <p>Area: {currentSchedule?.area}</p>
                    <p>Scholar Name: {currentSchedule?.scholarName}</p>
                    <p>Schedule Id: {currentSchedule?._id}</p>
                  </div>
                  <p className="text-left text-sm">
                    [ আসসালামু আলাইকুম, প্রিয় গ্রাহক, আপনার করা আবেদনটি মঞ্জুর
                    করা হয়েছে।সম্মানিত আলেমগণ আপনার সাথে যথাসময়ের পূর্বেই
                    যোগাযোগ করবে। আপনার ফোন/ই-মেইলে। কোন প্রকার তথ্য পেতে আপনার
                    শিডিউল আইডি ব্যবহার করে আমাদেরকে মেসেজ করুন। -শুকরিয়া
                    জাজাকাল্লাহ খাইরান ]
                  </p>
                  <p>If You Want Contact With Your Scholar Using His Email</p>
                  <div class="">
                    {/* <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex justify-center py-4"
                      >
                        <input
                          {...register("status", {
                            required: true,
                          })}
                          type="text"
                          class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="Status"
                        />

                        <input
                          type="submit"
                          class="text-white font-bold py-1 px-3 ml-2 rounded text-xs bg-green-500 hover:bg-green-dark"
                        />
                      </form> */}
                    <div class=" text-center md:block">
                      <button
                        type="button"
                        data-bs-dismiss="modal"
                        className="mb-2 md:mb-0 service-btn px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-white rounded-full hover:shadow-lg hover:bg-red-500"
                      >
                        Back
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Modal end */}
      </div>
    </div>
  );
};

export default ScheduleList;
