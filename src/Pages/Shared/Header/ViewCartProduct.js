import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove } from "../../../store/cartSlice";
import TotallPrice from "./TotallPrice";
import './Modal.css'
import { Link } from 'react-router-dom';

const ViewCartProduct = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart);
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };
  return (
    <div className="">
      <div className="flex grid md:grid-cols-3">
        <div className="col-span-2">
          <h1 className="text-xl uppercase mt-5">Your Shopping Cart</h1>
        </div>
        <div className=" bg-white  shadow  rounded md:mr-2 md:right-2 total-price mt-28 mr-auto ml-auto  ">
            
            <TotallPrice></TotallPrice>


            <h1 className="text-left ml-2 mt-1">YOUR SHOPPING TOTAL PRICE</h1>
        <div className="mb-2">
           < Link to='/shop'> <button className="text-white bg-green-400 p-2  mr-1 font-bold w-40 hover:bg-blue-700">BACK</button></Link> 

          <Link to='/donation'>  <button className="text-white font-bold bg-green-300 ml-1 p-2 w-40">CHECK OUT</button></Link>
            
        </div>
            
           

        </div>
      </div>

      <div className="">
      <div className="grid md:grid-cols-3 container card-show-class  ">
        <div className="  col-span-2 mt-5  overflow-auto">
        {items.map((product) => (
          <div className="grid col-span-2 container  ">
            <div className=" flex grid col-span-2 container mt-2 bg-white rounded-sm shadow">
              <div className="grid grid-cols-4 ">
                <img className="w-32" src={product.img} alt="" />

                <div className="text-left mt-4 font-bold">
                  <p>{product.price}</p>
                  <p>{product.description}</p>
                </div>
                <div className="mt-5">
                  <button
                    onClick={() => handleRemove(product.id)}
                    className="p-1 bg-red-600 text-white rounded"
                  >
                    Remove
                  </button>
                </div>
                <div className="mt-5">
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
      </div>
    </div>
  );
};

export default ViewCartProduct;
