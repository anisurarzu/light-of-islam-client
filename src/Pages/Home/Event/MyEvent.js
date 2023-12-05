import React, { useState } from "react";
import { useEffect } from "react";
import useAuth from "../../../hooks/useAuth";

const MyEvent = () => {
  const [bookingStatus, setBookingStatus] = useState();
  const { user } = useAuth();
  //getting booking status form db
  let userEmail = user?.email;
  console.log("br", userEmail);
  useEffect(() => {
    fetch(`https://yellow-sparkly-station.glitch.me/bookingStatus`)
      .then((res) => res.json())
      .then((data) => {
        const newBookingStatus = data.filter(
          (data) => data?.email === userEmail
        );
        setBookingStatus(newBookingStatus);
      });
  }, []);
  // searching method

  const handleSearch = (event) => {
    const searchText = event.target.value;

    const matchedDetails = bookingStatus.filter((details) =>
      details.eventName.toLowerCase().includes(searchText.toLowerCase())
    );

    setBookingStatus(matchedDetails);
  };
  return (
    <div>
      <div class="inline-block min-w-full  rounded-lg overflow-hidden">
        <div class=" flex items-center justify-between pb-6">
          <div>
            <h2 class="text-gray-600 font-semibold">
              Event Booking Confirm List
            </h2>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex bg-gray-50 items-center p-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor">
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
                Event Name
              </th>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                User Email
              </th>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Event joining Time
              </th>

              <th class=" py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Joining Link
              </th>
            </tr>
          </thead>
          <tbody>
            {bookingStatus?.map((booking) => (
              <tr>
                <td class="px-5  border-b border-gray-200 bg-white text-sm">
                  <div class="flex items-center">
                    <div class="ml-3">
                      <p class="text-gray-900 whitespace-no-wrap pt-3 justify-center">
                        {booking?.eventName}
                      </p>
                    </div>
                  </div>
                </td>
                <td class="pt-3 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {booking?.email}
                  </p>
                </td>
                <td class="pt-3 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {booking?.eveTime}
                  </p>
                </td>
                <td class="  border-b border-gray-200 bg-white text-sm">
                  <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span
                      aria-hidden
                      class="absolute inset-0 bg-indigo-200 opacity-50 rounded-full"></span>
                    <span class="relative">{booking?.eventLink}</span>
                  </span>
                </td>

                {/*     <td class="  border-b border-gray-200 bg-white text-sm">
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
                </td> */}
                {/*  <td className="border-b border-gray-200">
                  <button
                    // onClick={() => setCurrentSchedule(schedule)}
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    class="text-white font-bold py-1 px-3 ml-2 rounded text-xs bg-green-500 hover:bg-green-dark"
                  >
                    Details
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* modal start */}
      {/* modal */}

      {/* Modal end */}
    </div>
  );
};

export default MyEvent;
