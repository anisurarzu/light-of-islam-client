import React, { useEffect, useState } from "react";
import ShoppingCard from "./ShoppingCard";
import "./shop.css";
import New from "../../images/new.png";
import { BiRightArrow } from "react-icons/bi";
import SliderShow from "./SliderShow";

const Cardmain = () => {
  const [services, setService] = useState([]);
  useEffect(() => {
    fetch("demo.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <div className="grid grid-cols-2  container">
        <div>
          {" "}
          <div className="flex">
            <div className=" w-11">
              <img src={New} alt="" />
            </div>
            <div>
              <h1 className=" text-left catagory-left ml-2 text-2xl font-bold">
                Top Categories
              </h1>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <p className="text-right text-xl">
            View all<span className=" text-gray-500">►</span>{" "}
          </p>
        </div>
      </div>
      <br />
      <SliderShow> </SliderShow>
      <br />
      <br />
      
      <div className="grid grid-cols-2  container">
        <div>
          {" "}
          <div className="flex">
            <div className=" w-11">
              <img src={New} alt="" />
            </div>
            <div>
              <h1 className=" text-left catagory-left ml-2 text-2xl font-bold">
                Top Card
              </h1>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <p className="text-right text-xl">
            View all<span className=" text-gray-500">►</span>{" "}
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-5 sm:grid-cols-3 xl:grid-cols-6  sm:md:grid-cols-2 container mt-4 gap-3">
        {services.map((service) => (
          <ShoppingCard key={service.id} service={service}></ShoppingCard>
        ))}
      </div>
    </div>
  );
};

export default Cardmain;
