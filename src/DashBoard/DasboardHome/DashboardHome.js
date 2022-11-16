import React, { useContext } from "react";
import { NewAppContext } from "../../App";
import "./DashboardHome.css";

const DashboardHome = () => {
  const { depositInfo, setDepositInfo } = useContext(NewAppContext);

  // calculate deposit amount

  console.log(depositInfo);

  const depositAmount = [];

  depositInfo?.map((data) => depositAmount?.push(data?.depositAmount));
  const totalDeposit =
    depositAmount.length > 0 &&
    depositAmount?.reduce((prev, curr) => parseFloat(prev) + parseFloat(curr));

  console.log("object", totalDeposit);
  return (
    <div className="">
      <main className="flex-1 overflow-x-hidden overflow-y-auto ">
        <div className="container mx-auto px-6 py-8">
          <div className="mt-2">
            <div className="flex flex-wrap -mx-6">
              <div className="w-full px-6 sm:w-1/2 xl:w-1/3 ">
                <div className="flex items-center px-5 py-6 shadow-sm rounded-md  bg-white border-2 border-green-100">
                  <p className="text-gray-700 text-l font-bold">
                    Current Balance
                  </p>
                  <div className="mx-5 ">
                    <div classNameName="flex justify-center mr-auto ml-auto ">
                      <img
                        classNameName="w-2/3 mr-auto ml-auto"
                        src=" https://i.ibb.co/P5BnLHB/2489756-removebg-preview.png"
                        alt=""
                      />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-700 pt-2">
                      {totalDeposit}
                    </h4>
                  </div>
                </div>
              </div>

              {/* card 2 */}
              <div className="w-full px-6 sm:w-1/2 xl:w-1/3 ">
                <div className="flex items-center px-5 py-6 shadow-sm rounded-md  border-2 border-blue-100 bg-white">
                  <p className="text-gray-700 text-l font-bold">
                    Deposit Balance
                  </p>
                  <div className="mx-5 ">
                    <div classNameName="flex justify-center mr-auto ml-auto ">
                      <img
                        classNameName="w-2/3 mr-auto ml-auto"
                        src=" https://i.ibb.co/P5BnLHB/2489756-removebg-preview.png"
                        alt=""
                      />
                    </div>

                    <h4 className="text-xl font-semibold text-gray-700 pt-2">
                      {totalDeposit}
                    </h4>
                  </div>
                </div>
              </div>
              {/* card 3 */}
              <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
                <div className="flex items-center px-5 py-6 shadow-sm rounded-md border-2 border-red-100 bg-white">
                  <p className="text-gray-700 text-l font-bold">
                    Withdrawal Balance
                  </p>
                  <div className="mx-5 ">
                    <div classNameName="flex justify-center mr-auto ml-auto ">
                      <img
                        classNameName="w-2/3 mr-auto ml-auto"
                        src=" https://i.ibb.co/P5BnLHB/2489756-removebg-preview.png"
                        alt=""
                      />
                    </div>

                    <h4 className="text-2xl font-semibold text-gray-700">
                      8,282
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <div>
        <img
          classNameName="w-1/6"
          src="https://c.tenor.com/2oxcBlG5vf4AAAAi/asslamo-alikum.gif"
          alt=""
        />
      </div> */}
    </div>
  );
};

export default DashboardHome;
