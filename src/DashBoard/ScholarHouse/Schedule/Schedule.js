import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import { Spin } from "antd";
import "./Schedule.css";

import { useState } from "react/cjs/react.development";
import useAuth from "../../../hooks/useAuth";

const Schedule = () => {
  const { user } = useAuth();
  const [currentSchedule, setCurrentSchedule] = useState();
  const [scheduleList, setScheduleList] = useState();
  //   console.log("scheduleCurrent", currentSchedule);
  let email = user?.email;
  useEffect(() => {
    fetch("http://localhost:5000/schedule")
      .then((res) => res.json())
      .then((data) => {
        // console.log("event data", data[0].email);
        const schedule = data.filter((data) => data?.scholarEmail === email);
        setScheduleList(schedule);
        // console.log(event);
      });
  }, []);
  // send scheduleBooking date and  change schedule status
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.bookedDates = currentSchedule?.bookingDate;
    data.scholarId = currentSchedule?.scholarId;
    data.scheduleId = currentSchedule?._id;
    console.log("bookedDates", data);

    fetch("http://localhost:5000/schedule/bookingInfo", {
      method: "PUT",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        // console.log(res);
        // alert("image uploaded done");
        // reset();

        reset();

        // window.location.reload();
      })
      .catch((error) => {
        // console.log(error);
      });
    //   send status to database
    fetch("http://localhost:5000/schedule/bookingStatus", {
      method: "PUT",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        // console.log(res);
        // alert("image uploaded done");
        // reset();

        reset();

        window.location.reload();
      })
      .catch((error) => {
        // console.log(error);
      });
  };
  return (
    <div>
      <div class="inline-block min-w-full  rounded-lg overflow-hidden">
        <table class="min-w-full leading-normal">
          <thead>
            <tr>
              <th class="pl-28 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                User Name
              </th>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                User Email
              </th>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Apply From
              </th>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Date
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
                          schedule?.userImage ||
                          "https://i.ibb.co/PFkN0mF/user.png"
                        }
                        alt=""
                      />
                    </div>
                    <div class="ml-3">
                      <p class="text-gray-900 whitespace-no-wrap pt-3 justify-center">
                        {schedule?.userName}
                      </p>
                    </div>
                  </div>
                </td>
                <td class="pt-3 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {schedule?.userEmail}
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
                      class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                    ></span>
                    <span class="relative">{schedule?.status}</span>
                  </span>
                </td>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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

                  <p>Phone: {currentSchedule?.phone}</p>
                  <div className="flex gap-4">
                    <p>City: {currentSchedule?.city}</p>
                    <p>Postal Code: {currentSchedule?.postCode}</p>
                  </div>
                  <p>Area: {currentSchedule?.area}</p>
                  <p>Name: {currentSchedule?.userName}</p>
                  <p>Schedule Id: {currentSchedule?._id}</p>
                  <p>Schedule Status: {currentSchedule?.status}</p>
                </div>
                <div class="">
                  <form
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
                  </form>
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
  );
};

export default Schedule;
