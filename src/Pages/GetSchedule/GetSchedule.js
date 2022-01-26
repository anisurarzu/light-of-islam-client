import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Spin } from "antd";
import NewForm from "./Form/NewForm";
import dayjs from "dayjs";

const GetSchedule = () => {
  const { user, userInfo } = useAuth();
  const [date, setDate] = useState(new Date());
  const [isFree, setIsFree] = useState(false);
  const [message, setMessage] = useState("");
  const { register, reset, handleSubmit } = useForm();
  const [scholar, setScholar] = useState();
  const { scholarId } = useParams();

  console.log(scholar);

  const onChange = (date) => {
    const sDate = dayjs(date).format("DD-MM-YYYY");
    setDate(date);

    console.log("new-dates", sDate);

    if (scholar?.bookedDates?.includes(sDate)) {
      setIsFree(false);
    } else {
      setIsFree(true);
    }
  };

  // get scholar information

  useEffect(() => {
    fetch(
      `https://limitless-lowlands-32082.herokuapp.com/users/scholar/${scholarId}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "single");
        setScholar(data);
      });
  }, []);

  //  sending schedule information

  const onSubmit = (data) => {
    let orderStatus = "pending";
    data.status = orderStatus;
    data.scholarName = scholar?.displayName;
    data.scholarId = scholar?._id;
    data.scholarEmail = scholar?.email;
    data.scholarImage = scholar?.image;
    data.userName = user?.displayName;
    data.userEmail = user?.email;
    data.userImage = user?.photoURL || userInfo?.image;
    data.bookingDate = dayjs(date).format("DD-MM-YYYY");

    console.log("schedule", data);
    fetch("https://limitless-lowlands-32082.herokuapp.com/schedule", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          reset();
          window.location.replace("/dashboard/schedulelist");
        }
      });
  };
  return (
    <div className="container">
      <span>{message}</span>
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-12 mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-4">
            <div className="xl:ml-24 lg:mr-24">
              <Calendar
                className=" rounded border border-gray-200 "
                onChange={onChange}
                value={date}
              />
            </div>
            <div>
              {!scholar ? (
                <Spin></Spin>
              ) : (
                <div className=" ">
                  <div className="flex justify-center pb-2 gap-4">
                    <img
                      className="w-24 h-24 xl:h-full xl:w-1/5 lg:w-1/5 rounded-full"
                      src={scholar?.image}
                      alt=""
                    />
                    <h1 className="text-gray-900 pt-8 text-3xl heading-text font-medium mb-1">
                      {scholar?.displayName}
                    </h1>
                  </div>

                  <div className="flex mb-4">
                    <span className="flex items-center">
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 text-red-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 text-red-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 text-red-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 text-red-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 text-red-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <span className="text-gray-600 ml-3">4 Reviews</span>
                    </span>
                    <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                      <a className="text-gray-500">
                        <svg
                          fill="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                  <p className="leading-relaxed">
                    Fam locavore kickstarter distillery. Mixtape chillwave
                    tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam
                    indxgo juiceramps cornhole raw denim forage brooklyn.
                    Everyday carry +1 seitan poutine tumeric. Gastropub blue
                    bottle austin listicle pour-over, neutra jean shorts keytar
                    banjo tattooed umami cardigan.
                  </p>
                  <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                    <div className="flex ml-6 items-center">
                      <div className="relative"></div>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="title-font font-medium text-2xl text-gray-900">
                      $58.00
                    </span>
                    <button
                      disabled={!isFree}
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                      className={`flex ml-auto text-white ${
                        isFree
                          ? "bg-red-500 hover:bg-red-600"
                          : "bg-red-300 cursor-default"
                      } border-0 py-2 px-6 focus:outline-none rounded`}
                    >
                      Apply
                    </button>
                    <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* modal start */}
          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                {/* <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Modal title
                  </h5>
                </div> */}
                <div className="modal-body">
                  <div className="leading-loose">
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="xl:max-w-xl lg:max-w-xl m-4 p-10 bg-white rounded s"
                    >
                      <p className="text-gray-800 font-medium">
                        Customer information
                      </p>

                      <div className="mt-2">
                        <label
                          className="block text-sm text-gray-600 text-left pb-2"
                          for="cus_email"
                        >
                          Phone
                        </label>
                        <input
                          {...register("phone", {
                            required: true,
                            maxLength: 20,
                          })}
                          className="w-1/3 xl:w-full px-2  py-2 text-gray-700 bg-gray-200 rounded"
                          type="number"
                          required=""
                          placeholder="Your Number"
                          aria-label="Email"
                        />
                      </div>
                      {/* <div className="mt-2">
                        <label
                          className="block text-sm text-gray-600 text-left pb-2"
                          for="cus_email"
                        >
                          NID
                        </label>
                        <input
                          {...register("nid", {
                            required: true,
                          })}
                          className="w-full px-2  py-2 text-gray-700 bg-gray-200 rounded"
                          type="text"
                          required
                          placeholder="Your NID Number"
                          aria-label="Email"
                        />
                      </div> */}
                      <div className="mt-2">
                        <label
                          className=" block text-sm text-left pb-2 text-gray-600"
                          for="cus_email"
                        >
                          Address
                        </label>
                        <input
                          {...register("area", {
                            required: true,
                          })}
                          className="w-1/3 xl:w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                          type="text"
                          placeholder="Area"
                        />
                      </div>
                      <div className="mt-2">
                        <input
                          {...register("city", {
                            required: true,
                          })}
                          className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                          type="text"
                          required=""
                          placeholder="City"
                        />
                      </div>
                      <div className="flex">
                        <div className=" mr-2 mt-2 w-1/2 pr-1">
                          <input
                            {...register("upazila", {})}
                            className="w-1/3 xl:w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                            type="text"
                            required=""
                            placeholder="Upazila"
                          />
                        </div>
                        <div className=" mt-2 pl-1 w-1/2">
                          <input
                            {...register("postCode", {})}
                            className="w-1/3 xl:w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                            type="text"
                            required=""
                            placeholder="Post Code"
                          />
                        </div>
                      </div>
                      <input
                        type="submit"
                        className="border service-btn mt-4 text-green-500 rounded-md px-4 py-1 m-2 transition duration-500 ease select-none hover:text-white hover:bg-green-600 focus:outline-none focus:shadow-outline"
                      />
                    </form>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="border border-red-500 text-red-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-red-600 focus:outline-none focus:shadow-outline"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* modal end */}
        </div>
      </section>
    </div>
  );
};

export default GetSchedule;
