import React, { useEffect, useState } from "react";
import "./Event.css";

const Event = () => {
  const [event, setEvent] = useState();
  console.log(event);
  useEffect(() => {
    fetch("./useEvent.JSON")
      .then((res) => res.json())
      .then((data) => setEvent(data));
  }, []);
  return (
    <div className="event-container pt-12">
      <h6 className="xl:text-xl lg:text-xl text-center btn-text">Our Events</h6>
      <h2 className="text-2xl xl:text-5xl lg:text-5xl ">Our Upcomming event</h2>
      <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-4   container">
        {/* card 1 */}
        {event?.map((event) => (
          <div
            key={event?.id}
            className="mt-8 relative grid grid-cols-1 xl:flex lg:flex mx-2  xl:my-20 lg:my-20 shadow-md"
          >
            <img
              className="w-full xl:w-2/5 lg:w-2/5 object-cover  "
              src={event.img}
              alt=""
            />
            <div className="thumb-text">
              <span className="text-white text-2xl font-bold">{event.day}</span>
              <br />
              <span className="text-white">{event.month}</span>
            </div>

            <div className="  pl-4 pr-2   py-4 ">
              <h3 className="text-left text-xl xl:text-2xl lg:text-2xl ">
                {event.name}
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit...
              </p>
              <div className="flex justify-start pt-2">
                <button className="btn-design rounded-full text-white px-2">
                  Booking
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;
