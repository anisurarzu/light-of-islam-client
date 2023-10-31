import React from "react";
import { Link, useHistory, useRouteMatch } from "react-router-dom";

export default function Card({ title, amount }) {
  console.log("object", amount);
  const { history } = useHistory();
  let { path, url } = useRouteMatch();

  const gotToFinance = () => {
    console.log("first");
    history.push(`/dashboard/myFinance`);
  };
  return (
    <div>
      <div class="">
        <div class="">
          <div class="w-full ">
            <div
              class={`flex flex-col px-6  overflow-hidden   rounded-xl shadow duration-300  group`}
            >
              <div class="flex flex-row justify-between items-center">
                <Link to={`${url}/myFinance`} class="">
                  <div class="px-4 py-2 bg-gray-300 mt-2  rounded-xl bg-opacity-30">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </Link>

                <div class="inline-flex text-sm text-gray-600 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 mr-2 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <h1 class="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-700 mt-4 ">
                {amount || 0}
              </h1>
              <div class="flex flex-row justify-between py-4">
                <p>{title}</p>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-indigo-600 "
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
