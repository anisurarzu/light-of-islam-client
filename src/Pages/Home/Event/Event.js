import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";

import "./Event.css";

const Event = () => {
  const [event, setEvent] = useState();
  const [message, setMessage] = useState("");
  const [currentEvent, setCurrentEvent] = useState();
  const [isBooked, setIsBooked] = useState(false);
  const { user, userInfo } = useAuth();
  // console.log("ce", currentEvent);

  console.log(user);
  const { register, reset, handleSubmit } = useForm();
  const onSubmit = (data) => {
    let currentEventId = currentEvent?._id;

    let userPhotoURL = user?.photoURL || userInfo.image;
    data.eventId = currentEventId;
    data.name = user?.displayName;
    data.email = user?.email;
    data.photoURL = userPhotoURL;
    data.eventName = currentEvent?.title;
    data.eventTime = currentEvent?.time;
    console.log("b-data", data);
    setIsBooked(true);
    fetch("https://limitless-lowlands-32082.herokuapp.com/events/booking", {
      method: "PUT",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        // console.log(res);
        // alert("image uploaded done");
        // reset();

        reset();
        setMessage("Event Booked successfully");

        window.location.reload();
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  useEffect(() => {
    fetch("https://limitless-lowlands-32082.herokuapp.com/events")
      .then((res) => res.json())
      .then((data) => setEvent(data));
  }, []);
  return (
    <div className="event-container pt-12">
      <h6 className="xl:text-xl lg:text-xl text-center btn-text">Our Events</h6>
      <h2 className="text-2xl xl:text-5xl lg:text-5xl pb-4">
        Our Upcomming event
      </h2>
      <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-4   container">
        {/* card 1 */}
        {event?.map((event) => (
          <div
            key={event?._id}
            className="mt-2 relative grid grid-cols-1 xl:flex lg:flex mx-2  my-4 shadow-md"
          >
            <img
              className="w-full xl:w-2/5 lg:w-2/5 object-cover  "
              src="https://i.ibb.co/BCKPvvW/img-1-a762be6c.jpg"
              alt=""
            />
            <div className="thumb-text">
              <span className="text-white text-2xl font-bold">{event.day}</span>
              <br />
              <span className="text-white">{event.Month}</span>
            </div>

            <div className="  pl-4 pr-2   py-4 ">
              <h3 className="text-left text-xl xl:text-2xl lg:text-2xl ">
                {event.title}
              </h3>
              <div className="flex flex py-2">
                <h6>
                  <i class="far fa-clock pr-2"></i>
                  {event.time}
                </h6>
                <h6>
                  <i class="fas fa-map-marker-alt pr-2"></i>
                  {event.location}
                </h6>
              </div>
              <p className="text-left">{event.platform}</p>
              <p className="text-left pt-2 xl:pt-8 lg:pt-8">
                Organized by: {event.name}
              </p>
              <div className="flex justify-start pt-2">
                {!isBooked ? (
                  <button
                    onClick={() => setCurrentEvent(event)}
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    className="btn-design rounded-full text-white px-3"
                  >
                    Booking
                  </button>
                ) : (
                  <button className="btn-design rounded-full text-white px-3">
                    Booked
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
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
                  className="max-w-xl m-4 p-10 bg-white rounded s"
                >
                  <p className="text-gray-800 font-medium">
                    Booking Information
                  </p>

                  <div className="mt-2">
                    <label
                      className=" block text-sm text-left pb-2 text-gray-600"
                      for="cus_email"
                    >
                      Address
                    </label>
                    <input
                      className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                      type="text"
                      placeholder="Area"
                      {...register("area")}
                    />
                  </div>
                  <div className="mt-2">
                    <input
                      className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                      type="text"
                      required=""
                      placeholder="City"
                      {...register("city")}
                    />
                  </div>
                  <div className="flex">
                    <div className=" mr-2 mt-2 w-1/2 pr-1">
                      <input
                        className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                        type="text"
                        required=""
                        placeholder="Upazila"
                        {...register("upazila")}
                      />
                    </div>
                    <div className=" mt-2 pl-1 w-1/2">
                      <input
                        className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                        type="text"
                        required=""
                        placeholder="Post Code"
                        {...register("postCode")}
                      />
                    </div>
                  </div>
                  <input
                    type="submit"
                    className="border bg-white mt-3 border-green-500 text-green-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-yellow-500 hover:bg-green-600 focus:outline-none focus:shadow-outline"
                  />
                </form>
              </div>
              <p className="text-green-400 text-xl">{message}!</p>
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
  );
};

export default Event;
