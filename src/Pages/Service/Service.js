import React from "react";
import "./Service.css";

/* 



*/

const Service = () => {
  return (
    <div className="service-container">
      <h1 className="text-4xl py-4">Services</h1>
      {/* card section */}
      <section>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 xl:mx-40 lg:mx-40 gap-4">
          {/* card-1 */}
          <div className="service-card">
            <div className="flex justify-center pt-4">
              <img src="https://i.ibb.co/x61QyqT/quran.png" alt="" />
            </div>

            <h3 className="text-3xl py-4">Quran Memorization</h3>
            <p className="text-lg">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered
            </p>
            <div>
              <button className="service-btn px-4">Read More</button>
            </div>
          </div>
          {/* card-2 */}
          <div className="service-card">
            <div className="flex justify-center pt-0">
              <img src="https://i.ibb.co/hLxCm3f/icon5.png" alt="" />
            </div>

            <h3 className="text-3xl py-4">Special Child Care</h3>
            <p className="text-lg">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered
            </p>
            <div>
              <button className="service-btn-2 px-4">Read More</button>
            </div>
          </div>
          {/* card-3 */}
          <div className="service-card">
            <div className="flex justify-center pt-2">
              <img src="https://i.ibb.co/bPXGk1Y/mosque.png" alt="" />
            </div>

            <h3 className="text-3xl py-4">Mosque Development</h3>
            <p className="text-lg">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered
            </p>
            <div>
              <button className="service-btn-3 px-4">Read More</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
