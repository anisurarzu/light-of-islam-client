import React, { useContext, useEffect, useState } from "react";
import { NewAppContext } from "../../App";
import Loader from "../../components/Loader/Loader";
import Progress from "../../components/Progress/Progress";
import useAuth from "../../hooks/useAuth";
import Payment from "../../Pages/Payment/Payment";

export default function Finance() {
  const { depositInfo, setDepositInfo } = useContext(NewAppContext);

  const [depositInfo2, setDepositInfo2] = useState([]);
  const { userInfo } = useAuth();

  useEffect(() => {
    //https://light-of-islam-server-production-0204.up.railway.app/
    fetch(
      `https://light-of-islam-server-production-0204.up.railway.app/deposit`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log("event data", data[0].email);
        if (userInfo?.payRole === "finance") {
          const latestData = data.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          );
          setDepositInfo(latestData);
          setDepositInfo2(latestData);
        } else {
          const filteredData = data?.filter(
            (d) => d?.email === userInfo?.email
          );
          const latestData = filteredData.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          );
          setDepositInfo(latestData);
          setDepositInfo2(latestData);
        }
      });
  }, []);

  // searching method
  const handleSearch = (event) => {
    const searchText = event.target.value;
    if (searchText) {
      const matchedDetails = depositInfo?.filter(
        (details) =>
          details?.dmfID?.includes(searchText) ||
          details?.transactionID?.includes(searchText)
      );
      setDepositInfo(matchedDetails);
    } else {
      setDepositInfo(depositInfo2);
    }
  };

  return (
    <div>
      {!depositInfo2?.length > 0 ? (
        <Loader />
      ) : (
        <div>
          {userInfo?.payRole === "member" && (
            <Progress depositInfo={depositInfo} />
          )}
          <div class="flex items-center justify-end">
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
                placeholder="search...by dmfID or transactionID"
              />
            </div>
          </div>
          <section class="">
            <div class="flex flex-col justify-center h-full">
              <div class="w-full  mx-auto bg-white  rounded-sm ">
                <header class="px-5 py-4 border-b border-gray-100">
                  <h2 class="font-semibold text-gray-800">
                    DMF Interest Free Loan Scheme (Deposit Dashboard)
                  </h2>
                </header>
                <div class="p-3">
                  <div class="overflow-x-auto">
                    <table class="table-auto w-full">
                      <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                        <tr>
                          <th class="p-2 whitespace-nowrap">
                            <div class="font-semibold text-left">Name</div>
                          </th>
                          <th class="p-2 whitespace-nowrap">
                            <div class="font-semibold text-left">DMF ID</div>
                          </th>
                          <th class="p-2 whitespace-nowrap">
                            <div class="font-semibold text-left">Amount</div>
                          </th>
                          <th class="p-2 whitespace-nowrap">
                            <div class="font-semibold text-left">
                              Transaction ID
                            </div>
                          </th>
                          <th class="p-2 whitespace-nowrap">
                            <div class="font-semibold text-left">Date</div>
                          </th>
                          <th class="p-2 whitespace-nowrap">
                            <div class="font-semibold text-center">
                              Payment Method
                            </div>
                          </th>
                          <th class="p-2 whitespace-nowrap">
                            <div class="font-semibold text-center">Status</div>
                          </th>
                        </tr>
                      </thead>
                      <tbody class="text-sm divide-y divide-gray-100">
                        {depositInfo.slice(0, 10)?.map((data, index) => (
                          <tr>
                            <td key={index} class="p-2 whitespace-nowrap">
                              <div class="flex items-center">
                                <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                  <img
                                    class="rounded-full "
                                    src={data?.image}
                                    width="40"
                                    height="40"
                                    alt="Alex Shatov"
                                  />
                                </div>
                                <div class="font-medium text-gray-800">
                                  {data?.displayName}
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="text-left font-medium text-gray-800">
                                {data?.dmfID}
                              </div>
                            </td>
                            <td class="p-2 whitespace-nowrap">
                              <div class="text-left font-medium text-green-500">
                                ৳ {data?.depositAmount}
                              </div>
                            </td>
                            <td class="p-2 whitespace-nowrap">
                              <div class="text-left font-medium text-indigo-500">
                                {data?.transactionID}
                              </div>
                            </td>
                            <td class="p-2 whitespace-nowrap">
                              <div class="text-left">
                                {data?.date.slice(0, 10)}
                              </div>
                            </td>
                            <td class="p-2 whitespace-nowrap">
                              <div class=" text-center">
                                {data?.paymentType}
                              </div>
                            </td>
                            <td class="p-2 whitespace-nowrap">
                              <div
                                class={`text-center ${
                                  data?.status === "Accepted"
                                    ? "text-green-500"
                                    : "text-yellow-500"
                                }`}
                              >
                                {data?.status}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
