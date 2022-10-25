import React from "react";
import "./shop.css";

import { GrDeliver } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";
import { FaMoneyBillAlt} from "react-icons/fa";
import { Ri24HoursLine} from "react-icons/ri";
import { BsFillCreditCard2FrontFill} from "react-icons/bs";

const ShopHeader = () => {
  return (
    <div>
      <div>
        <div
          id="carouselExampleCaptions"
          class="carousel slide relative"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner relative w-full overflow-hidden">
            <div class="carousel-item active relative float-left w-full">
              <img
                src="https://i.ibb.co/kKM1g4G/intro-1.jpg"
                class="block w-full"
                alt="..."
              />
              <div class="carousel-caption hidden md:block absolute text-center img-texts ml-0">
                <div className="">
                  <p class="text-2xl font-bold ml-0">
                    Exclusive Product New Arrival
                  </p>
                  <p className="text-6xl font-bold">Organic coffee</p>
                  <p className="text-3xl font-bold">SPECIAL BLEND</p>
                  <p className="text-xl font-bold">
                    BREAKFAST PRODUCTS ON SALE
                  </p>
                  <p className="text-xl font-bold"></p>
                </div>
              </div>
            </div>
            <div class="carousel-item relative float-left w-full">
              <img
                src="https://i.ibb.co/kKM1g4G/intro-1.jpg"
                class="block w-full"
                alt="..."
              />
              <div class="carousel-caption hidden md:block absolute text-center">
                <h5 class="text-xl">Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div class="carousel-item relative float-left w-full">
              <img
                src="https://i.ibb.co/kKM1g4G/intro-1.jpg"
                class="block w-full"
                alt="..."
              />
              <div class="carousel-caption hidden md:block absolute text-center">
                <h5 class="text-xl">Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <br />
        {/* delevary card */}
        <div className=" container bg-white shadow p-2 rounded-md">
          <div className="grid md:grid-cols-4 ">
            <div className="flex ml-6 shopping-text-color">
              <div className="mt-4">
                <TbTruckDelivery className=" icon1 text-4xl icon-color mr-2 animate-pulse transform hover:scale-125 "></TbTruckDelivery>
              </div>
              <div className=" text-left m-2 phone-screen-main">
                <h5 className=" text-xl font-bold ">
                  Free shipping & return
                </h5>
                <h6>Free shipping on all orders over $99</h6>
              </div>
            </div>
            {/* 2 */}
            <div className="flex ml-6 phone-screen">
              <div className="mt-4">
                <FaMoneyBillAlt className="text-4xl icon-color mr-2 animate-pulse transform hover:scale-125 "></FaMoneyBillAlt>
              </div>
              <div className=" text-left m-2">
                <h5 className=" text-xl font-bold shopping-text-color ">
                  Money Back Guarantee
                </h5>
                <h6>100% money back guarantee</h6>
              </div>
            </div>

            {/* 3 */}

            <div className="flex ml-6 phone-screen">
              <div className="mt-4">
                <Ri24HoursLine className="text-4xl icon-color mr-2 animate-pulse transform hover:scale-125 "></Ri24HoursLine>
              </div>
              <div className=" text-left m-2">
                <h5 className=" text-xl font-bold shopping-text-color">
                  Free shipping & return
                </h5>
                <h6>Free shipping on all orders over $99</h6>
              </div>
            </div>
            {/* 4 */}

            <div className="flex ml-6 phone-screen">
              <div className="mt-4">
                <BsFillCreditCard2FrontFill  className="text-4xl icon-color mr-2 animate-pulse transform hover:scale-125 "></BsFillCreditCard2FrontFill>
              </div>
              <div className=" text-left m-2">
                <h5 className=" text-xl font-bold shopping-text-color">
                  Free shipping & return
                </h5>
                <h6>Free shipping on all orders over $99</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopHeader;
