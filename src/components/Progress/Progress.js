import React from "react";

export default function Progress({ depositInfo }) {
  console.log("depositInfo", depositInfo);

  const monthList = [
    { id: 1, name: "January" },
    { id: 2, name: "February" },
    { id: 3, name: "March" },
    { id: 4, name: "April" },
    { id: 5, name: "May" },
    { id: 6, name: "June" },
    { id: 7, name: "July" },
    { id: 8, name: "August" },
    { id: 9, name: "September" },
    { id: 10, name: "October" },
    { id: 11, name: "November" },
    { id: 12, name: "December" },
  ];
  return (
    <div>
      <ul class="w-full sm:w-4/5 text-xs sm:text-sm justify-center  grid grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-2 space-x-1 mt-6  mb-4">
        {monthList?.map((data) => (
          <li key={data?.id}>
            <button
              class={`px-4 py-2 ${
                data?.month?.length > 0
                  ? "bg-green-500 text-white hover:bg-green-700"
                  : "bg-gray-200 text-gray-700 hover:bg-indigo-700 hover:text-gray-200"
              } rounded-full text-sm  `}
            >
              {data?.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
