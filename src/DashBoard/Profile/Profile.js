import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { toast } from "react-toastify";
const Profile = () => {
  const { user, userInfo } = useAuth();
  console.log(user);

  const [imageURL, setImageURL] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true);
  // setEmail(user.email);
  const handleSubmit = (e) => {
    e.preventDefault();
    const userInfo = {
      email: user.email,
      image: imageURL,
    };
    console.log({ userInfo });
    fetch("https://yellow-sparkly-station.glitch.me/users/profile/image", {
      method: "PUT",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(userInfo),
    })
      .then((res) => {
        console.log(res);
        // alert("image uploaded done");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });

    setIsDisabled(true);
  };
  const handleImageUpload = (event) => {
    const imageData = new FormData();
    imageData.set("key", "50c6061b019e138f7a19d01cef5cee8b");
    imageData.append("image", event.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
        //  setIsDisabled(false);
        console.log({ imageURL });
        // console.log(response);
        alert("done");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const updateProfile = async () => {
    const res = await axios.post(``);
    if (res?.status === 200) {
      toast.succes("Successfully Update!");
      window.location.reload();
    }
  };

  return (
    <div class="bg-white px-2 grid grid-cols-1 gap-4 xl:grid-cols-4 lg:grid-cols-4  rounded-sm xl:px-12 py-4 lg:px-12">
      {/* profile card */}
      <div class="bg-white p-2 border-t-4 border-green-400 col-span-1">
        <div class="image overflow-hidden py-2">
          <img
            className="h-auto w-3/4 mx-auto rounded"
            src={user?.photoURL || userInfo?.image}
            alt=""
          />
        </div>
        <h1 class="text-gray-900 font-bold heading-text text-xl leading-8 my-1">
          {user.displayName}
        </h1>

        <ul class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
          <li class="flex items-center py-3">
            <span>Status</span>
            <span class="ml-auto">
              <span class="bg-green-500 py-1 px-2 rounded text-white text-sm">
                Active
              </span>
            </span>
          </li>
          <li class="flex items-center py-3">
            <span>Member since</span>
            <span class="ml-auto">{user?.metadata?.creationTime}</span>
          </li>
        </ul>
      </div>

      {/* profile card end */}

      <div className="col-span-3 px-4 py-4  rounded bg-gray-50">
        <div class="flex  items-center font-semibold text-gray-900 leading-8">
          <span className="text-green-500">
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
        {/* uploading user image */}
        {!user.photoURL && (
          <div class="grid grid-cols-1 mt-5 mx-7">
            {!userInfo?.image ? (
              <label class="uppercase md:text-sm text-xs mb-2 text-gray-900  font-semibold">
                Upload Your Photo
              </label>
            ) : (
              <label class="uppercase md:text-sm text-xs mb-2 text-gray-900  font-semibold">
                Change Your Photo
              </label>
            )}

            <div class="flex items-center justify-center w-full">
              <form className="w-full" onSubmit={handleSubmit}>
                <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div class="space-y-1 text-center">
                    <svg
                      class="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div class="flex text-sm text-gray-600">
                      <label
                        for="file-upload"
                        class="relative cursor-pointer  rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          onChange={handleImageUpload}
                          accept="image/*"
                          type="file"
                          class="hidden"
                          required
                          id="file-upload"
                          name="file-upload"
                        />
                      </label>
                      <p class="pl-1">or drag and drop</p>
                    </div>
                    <p class="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>

                <input
                  type="submit"
                  value="Upload Image"
                  className=" p-4 btn-design mt-4 px-2 rounded-full text-white"
                ></input>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
