import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const UserNormal = () => {
  const { scholars } = useAuth();
  const [bookingDates, setBookingDates] = useState();

  console.log(bookingDates);
  /*  const [scholarList, setScholarList] = useState();
  setScholarList(scholar);

  const handleSearch = (event) => {
    const searchText = event.target.value;

    const matchedDetails = scholar.filter((details) =>
      details.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setScholarList(matchedDetails);
  }; */
  return (
    <div className="eventDetailsContainer px-8">
      <div class="bg-white p-8 rounded-md w-full">
        <div class=" flex items-center justify-between pb-6">
          <div>
            <h2 class="text-gray-600 font-semibold">Scholar Details</h2>
            <span class="text-xs">All Registered Scholars</span>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex bg-gray-50 items-center p-2 rounded-md">
              {/* <svg
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
              </svg> */}
              {/* <input
                  onChange={handleSearch}
                class="bg-gray-50 outline-none ml-1 block "
                type="text"
                name=""
                id=""
                placeholder="search..."
              /> */}
            </div>
            <div class="lg:ml-40 ml-10 space-x-8">
              <Link to="/dashboard/addscholar">
                <button class="service-btn px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
                  Create
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full  rounded-lg overflow-hidden">
              <table class="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th class="pl-28 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Name
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Email
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Scholar ID
                    </th>

                    <th class=" py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Booking Dates
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {scholars?.map((scholar) => (
                    <tr>
                      <td class="px-5  border-b border-gray-200 bg-white text-sm">
                        <div class="flex items-center">
                          <div class=" w-10 h-10">
                            <img
                              class="w-full h-full rounded-full"
                              src={
                                scholar?.image ||
                                "https://i.ibb.co/PFkN0mF/user.png"
                              }
                              alt=""
                            />
                          </div>
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap pt-3 justify-center">
                              {scholar?.displayName}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="pt-3 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                          {scholar?.email}
                        </p>
                      </td>
                      <td class="  border-b border-gray-200 bg-white text-sm">
                        <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            aria-hidden
                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                          ></span>
                          <span class="relative">{scholar?._id}</span>
                        </span>
                      </td>

                      <td className="border-b border-gray-200">
                        <button
                          onClick={() => setBookingDates(scholar)}
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          class="text-white font-bold py-1 px-3 ml-2 rounded text-xs bg-green-500 hover:bg-green-dark"
                        >
                          Dates
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
                      <div class="flex items-center">
                        <div class=" w-10 h-10">
                          <img
                            class="w-full h-full rounded-full"
                            src={
                              bookingDates?.image ||
                              "https://i.ibb.co/PFkN0mF/user.png"
                            }
                            alt=""
                          />
                        </div>
                        <div class="ml-3">
                          <p class="text-gray-900 whitespace-no-wrap pt-3 justify-center">
                            {bookingDates?.displayName}
                          </p>
                        </div>
                      </div>
                      <div>
                        <h2 className="bangla-text py-2">শিডিউল তারিখ সমূহ</h2>
                        {bookingDates?.bookedDates?.map((date) => (
                          <ul>
                            <ol className=" bg-green-200 mx-32 rounded-full">
                              {date}
                            </ol>
                          </ul>
                        ))}
                      </div>
                      <div class="">
                        <div class=" text-center md:block">
                          <button
                            type="button"
                            data-bs-dismiss="modal"
                            className="service-btn px-4 py-2"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Modal end */}
            <div className="py-4 flex align-items-baseline">
              <Link to="/dashboard">
                <button
                  type="button"
                  className="border service-btn rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-red-600 focus:outline-none focus:shadow-outline"
                  data-bs-dismiss="modal"
                >
                  Back
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserNormal;
