import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PaymentInfo = () => {
  const { user } = useAuth();
  const [payment, setPayment] = useState();
  //   console.log(payment);

  useEffect(() => {
    fetch("https://yellow-sparkly-station.glitch.me/paymentInfo")
      .then((res) => res.json())
      .then((data) => {
        /* const question = data.filter((data) => data.email === user?.email); */
        setPayment(data);
        //    console.log(question);
      });
  }, []);

  const handleSearch = (event) => {
    const searchText = event.target.value;

    const matchedDetails = payment.filter((details) =>
      details.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setPayment(matchedDetails);
  };
  return (
    <div className="eventDetailsContainer px-8">
      <div class="bg-white p-8 rounded-md w-full">
        <div class=" flex items-center justify-between pb-6">
          <div>
            <h2 class="text-gray-600 font-semibold">
              Payment Information Details
            </h2>
            <span class="text-xs bangla-text">পেমেন্ট তথ্য</span>
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
                placeholder="search..."
              />
            </div>
            <div class="lg:ml-40 ml-10 space-x-8"></div>
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
                      Last Four Digit
                    </th>

                    <th class=" py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      amount
                    </th>
                    <th class=" py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      transaction
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {payment?.map((details) => (
                    <tr>
                      <td class="px-5  border-b border-gray-200 bg-white text-sm">
                        <div class="text-left">
                          {/* <div class=" w-10 h-10">
                            <img
                              class="w-full h-full rounded-full"
                              src={
                                details?.photoURL ||
                                "https://i.ibb.co/PFkN0mF/user.png"
                              }
                              alt=""
                            />
                          </div> */}
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap pt-3 justify-center">
                              {details?.name}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="pt-3 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                          {details?.email}
                        </p>
                      </td>
                      <td class="pt-3 border-b border-gray-200 bg-white text-sm">
                        <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            aria-hidden
                            class="absolute inset-0 bg-yellow-200 opacity-50 rounded-full"
                          ></span>
                          <span class="relative">{details?.lastFourDigit}</span>
                        </span>
                      </td>

                      <td class="  border-b border-gray-200 bg-white text-sm">
                        <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            aria-hidden
                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                          ></span>
                          <span class="relative">${details?.amount / 100}</span>
                        </span>
                      </td>
                      <td className="border-b border-gray-200">
                        {details?.transaction}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* modal start */}
            {/* modal */}
            {/*  <div
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
                      <div class="">
                        <div class=" text-center md:block">
                          <button
                            type="button"
                            data-bs-dismiss="modal"
                            className="mb-2 md:mb-0 bg-yellow-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-white rounded-full hover:shadow-lg hover:bg-red-500"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
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

export default PaymentInfo;
