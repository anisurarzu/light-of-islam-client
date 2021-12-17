import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
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
    fetch("http://localhost:5000/users/profile/image", {
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

  return (
    <div class="bg-white px-8  shadow-sm rounded-sm xl:px-20 py-4 lg:px-12">
      <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
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
              <label class="flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-purple-300 group">
                <div class="flex flex-col items-center justify-center pt-7">
                  <svg
                    class="w-10 h-10 text-purple-400 group-hover:text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <p class="lowercase text-sm text-gray-400 group-hover:text-purple-600 pt-1 tracking-wider">
                    Select a photo
                  </p>
                </div>
                <input
                  onChange={handleImageUpload}
                  accept="image/*"
                  type="file"
                  class="hidden"
                  required
                />
              </label>

              <input
                className="p-4"
                type="submit"
                value="Upload Image"
                className="btn-design mt-4 px-2 rounded-full text-white"
              ></input>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
