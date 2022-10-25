import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../../store/cartSlice";

const TotallPrice = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart);
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };
  return (
    <div className=" h-80 overflow-auto  ">
      <div className="grit md:grid-cols-2  ml-auto mt-5">
        {items.map((product) => (
          <div className="grid col-span-2 container">
            <div className="flex grid col-span-2 container mt-2 ">
              <div className="grid grid-cols-3 ">
                <img className="w-16" src={product.img} alt="" />

                <div className="text-left mt-1 font-bold">
                  <p className="ml-auto mr-auto mt-4">
                    {" "}
                    PRICE :{product.price}
                  </p>
                </div>
                <div className="mt-3 ml-10">
                  <button
                    onClick={() => handleRemove(product.id)}
                    className="p-1 bg-red-600 text-white rounded"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TotallPrice;
