import React from "react";
import useAuth from "../../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div class="bg-white px-8  shadow-sm rounded-sm xl:px-20 py-4 lg:px-12">
      <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
        <span clas="text-green-500">
          <svg
            class="h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </span>
        <span class="tracking-wide">About</span>
      </div>
      <div class="text-gray-700 text-left">
        <div class="grid md:grid-cols-2 text-sm">
          <div class="grid grid-cols-2">
            <div class="px-4 py-2 font-semibold text-left">First Name</div>
            <div class="px-4 py-2 text-left">{user.displayName}</div>
          </div>

          <div class="grid grid-cols-2 ">
            <div class="px-4 py-2 font-semibold">Contact No.</div>
            <div class="px-4 py-2">+11 998001001</div>
          </div>
          <div class="grid grid-cols-2">
            <div class="px-4 py-2 font-semibold">Current Address</div>
            <div class="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
          </div>
          <div class="grid grid-cols-2">
            <div class="px-4 py-2 font-semibold">Permanant Address</div>
            <div class="px-4 py-2">Arlington Heights, IL, Illinois</div>
          </div>
          <div class="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2">
            <div class="px-4 py-2 font-semibold">Email.</div>
            <div class="px-4 py-2">
              <span>{user.email}</span>
            </div>
          </div>
          <div class="grid grid-cols-2">
            <div class="px-4 py-2 font-semibold">Birthday</div>
            <div class="px-4 py-2">Feb 06, 1998</div>
          </div>
        </div>
      </div>
      <button class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
        Show Full Information
      </button>
    </div>
  );
};

export default Profile;
