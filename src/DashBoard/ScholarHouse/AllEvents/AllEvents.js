import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import "./AllEvent.css";
import { Spin } from "antd";
const AllEvents = () => {
  const [events, setEvents] = useState();
  const [currentEvent, setCurrentEvent] = useState();
  const { user } = useAuth();
  console.log("created events", events);
  let email = user?.email;
  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then((res) => res.json())
      .then((data) => {
        console.log("event data", data[0].email);
        const event = data.filter((data) => data?.email === email);
        setEvents(event);
        // console.log(event);
      });
  }, []);
  return (
    <div className="event-container pt-12">
      <h2 className="text-xl xl:text-2xl lg:text-2xl ">My Events</h2>
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-4 ">
        {/* card 1 */}
        {events?.map((event) => (
          <div
            key={event?.id}
            className="mt-8 relative grid grid-cols-1 xl:flex lg:flex mx-2  shadow-md rounded"
          >
            {/* <img
              className="w-full xl:w-2/5 lg:w-2/5 object-cover  "
              src=""
              alt=""
            /> */}
            <div className="thumb-text">
              <span className="text-white text-lg font-bold">{event.day}</span>
              <br />
              <span className="text-white">{event.Month}</span>
            </div>

            <div className="  pl-4 pr-2   py-2 ">
              <h3 className="text-center text-lg xl:text-lg lg:text-lg ">
                {event.title}
              </h3>
              <div className="flex  pl-8 text-center py-1">
                <h6>
                  <i class="far fa-clock pr-2"></i>
                  {event.time}
                </h6>
                <h6>
                  <i class="fas fa-map-marker-alt pr-2"></i>
                  {event.location}
                </h6>
              </div>
              <p className="text-center">{event.platform}</p>
              <p className="text-left  ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit...
              </p>
              <div className="flex justify-between pt-2 px-2 text-xl">
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  className=" "
                >
                  <i class="fas fa-info-circle text-blue-500"></i>
                </button>
                <button
                // onClick={() => setCurrentEvent(event)}
                >
                  <i class="fas fa-trash-alt text-red-600"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* modal start */}

      {/* modal end */}
    </div>
  );
};

export default AllEvents;
