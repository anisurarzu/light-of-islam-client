import React from "react";
import "./shop.css";
import IMG from "../../images/snack1.png";

import { AiOutlineStar } from "react-icons/ai";
import { add } from "../../store/cartSlice";
import { useDispatch } from "react-redux";

const ShoppingCard = ({ service }) => {
  const dispatch = useDispatch();
  const { name, img, price } = service;

  // add to cart redux service ata  cart main data fatch er service name change karte hobe
  const handleAdd = (service) => {
    dispatch(add(service));
  };
  return (
    <div>
      {/* card section */}

      <div>
        <div className="mt-3">
          <div className="bg-white shadow-sm card-box ml-auto mr-auto">
            <img className="cord-img" src={img} alt="" />
           
          
            <h1 className="uppercase text-xl font-bold">{name}</h1>
            <p>Lorem ipsum dolor sit.</p>
            <p className="font-bold">$ {price}</p>
            <div class="flex items-center   ml-auto mr-auto text-yellow-400 font-bold text-2xl   star-class">
              <p className="mr-auto ml-auto flex">
                <AiOutlineStar className=""></AiOutlineStar>
                <AiOutlineStar className=""></AiOutlineStar>
                <AiOutlineStar className=""></AiOutlineStar>
                <AiOutlineStar className=""></AiOutlineStar>
                <AiOutlineStar className=""></AiOutlineStar>
              </p>
            </div>
            <button
              onClick={() => handleAdd(service)}
              className="button-color  font-bold p-1.5  "
            >
              Add To Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCard;
