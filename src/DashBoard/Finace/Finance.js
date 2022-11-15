import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Payment from "../../Pages/Payment/Payment";

export default function Finance() {
  const [depositInfo, setDepositInfo] = useState([]);
  const [depositInfo2, setDepositInfo2] = useState([]);
  const { userInfo } = useAuth();

  useEffect(() => {
    //https://dmf-server.vercel.app/
    fetch(`https://dmf-server.vercel.app/deposit`)
      .then((res) => res.json())
      .then((data) => {
        // console.log("event data", data[0].email);
        const filteredData = data?.filter((d) => d?.email === userInfo?.email);
        setDepositInfo(filteredData);
        setDepositInfo2(filteredData);
      });
  }, []);

  // searching method
  const handleSearch = (event) => {
    const searchText = event.target.value;
    if (searchText) {
      const matchedDetails = depositInfo.filter((details) =>
        details.depositAmount.includes(searchText)
      );
      setDepositInfo(matchedDetails);
    } else {
      setDepositInfo(depositInfo2);
    }
  };

  return (
    <div>
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
            placeholder="search...by amount"
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
                        <div class="font-semibold text-left">Amount</div>
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
                    {depositInfo?.map((data, index) => (
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
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-left font-medium text-green-500">
                            ৳ {data?.depositAmount}
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-left">{data?.date.slice(0, 10)}</div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class=" text-center">{data?.paymentType}</div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class=" text-center">{data?.status}</div>
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
  );
}
