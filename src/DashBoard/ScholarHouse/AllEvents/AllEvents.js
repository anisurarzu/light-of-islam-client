import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./AllEvent.css";
import { Spin } from "antd";
const AllEvents = () => {
  const [events, setEvents] = useState();
  const [message, setMessage] = useState("");

  const { user } = useAuth();

  let email = user?.email;
  useEffect(() => {
    fetch("https://limitless-lowlands-32082.herokuapp.com/events")
      .then((res) => res.json())
      .then((data) => {
        console.log("event data", data[0].email);
        const event = data.filter((data) => data?.email === email);
        setEvents(event);
        // console.log(event);
      });
  }, []);

  // delete an event
  const handleDeleteEvent = (id) => {
    const check = window.confirm("Are you sure,you want to delete this event?");

    if (check) {
      const url = `https://limitless-lowlands-32082.herokuapp.com/event/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount > 0) {
            const restEvent = events.filter((event) => event._id !== id);
            setEvents(restEvent);
            setMessage("Your question deleted Successfully!");
          }
        });
    }
  };
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
                <Link to={`/eventDetails/${event._id}`}>
                  <button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    className=" "
                  >
                    <i class="fas fa-info-circle "></i>
                  </button>
                </Link>
                <button onClick={() => handleDeleteEvent(event._id)}>
                  <i class="fas fa-trash-alt text-red-600"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllEvents;
