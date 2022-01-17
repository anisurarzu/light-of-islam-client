import React from "react";
import "./DashboardHome.css";

const DashboardHome = () => {
  return (
    <div className="">
      <main class="flex-1 overflow-x-hidden overflow-y-auto ">
        <div class="container mx-auto px-6 py-8">
          <div class="mt-2">
            <div class="flex flex-wrap -mx-6">
              <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
                <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                  <div class="mx-5 ">
                    <div className="flex justify-center">
                      <img
                        className="w-2/4"
                        src=" https://i.ibb.co/8KyGhPG/question.png"
                        alt=""
                      />
                    </div>

                    <h4 class="text-2xl font-semibold text-gray-700">8,282</h4>
                    <div class="text-gray-500">Questions</div>
                  </div>
                </div>
              </div>

              <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
                <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                  <div class="mx-5">
                    <div className="flex justify-center">
                      <img
                        className="w-2/4"
                        src="https://i.ibb.co/CQ6cw5j/answer.png"
                        alt=""
                      />
                    </div>
                    <h4 class="text-2xl font-semibold text-gray-700">
                      200,521
                    </h4>
                    <div class="text-gray-500">Answers</div>
                  </div>
                </div>
              </div>

              <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
                <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                  <div class="mx-5">
                    <div className="flex justify-center">
                      <img
                        className="w-2/4"
                        src="https://i.ibb.co/7Gz9MCh/time-management.png"
                        alt=""
                      />
                    </div>

                    <h4 class="text-2xl font-semibold text-gray-700">
                      215,542
                    </h4>
                    <div class="text-gray-500">Events</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <div>
        <img
          className="w-1/6"
          src="https://c.tenor.com/2oxcBlG5vf4AAAAi/asslamo-alikum.gif"
          alt=""
        />
      </div> */}
    </div>
  );
};

export default DashboardHome;
