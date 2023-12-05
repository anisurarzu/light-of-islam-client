import React, { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";

const CreateEvent = () => {
  const { user } = useAuth();
  const [message, setMessage] = useState("");
  const { register, reset, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    axios
      .post("https://yellow-sparkly-station.glitch.me/events", data)
      .then((res) => {
        if (res.data.insertedId) {
          setMessage("Your event created SuccessFully!");
          reset();
          window.location.replace("/dashboard/allevents");
        }
      });
  };

  return (
    <div className="">
      <div class="container items-center px-5 py-2 lg:px-8"></div>
      <p>{message}</p>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class=" py-2 flex flex-col justify-center sm:py-12">
            <div class="relative py-2 sm:max-w-xl sm:mx-auto">
              <div class="relative px-4 py-4 bg-white mx-8 md:mx-0  rounded-3xl sm:p-10">
                <div class="max-w-md mx-auto">
                  <div class="flex items-center space-x-5">
                    <div class="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">
                      i
                    </div>
                    <div class="block pl-2 font-semibold text-xl self-start text-gray-700">
                      <h2 class="leading-relaxed">Create an Event</h2>
                      <p class="text-sm text-gray-500 font-normal leading-relaxed">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                  <div class="divide-y divide-gray-200">
                    <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                      <div class="flex flex-col ">
                        <label class="leading-loose">Event Title</label>
                        <input
                          {...register("title", {
                            required: true,
                          })}
                          type="text"
                          class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="Enter Your Event title"
                        />
                      </div>
                      <div class="flex flex-col">
                        <label class="leading-loose">Event Subtitle</label>
                        <input
                          {...register("subtitle", {
                            required: true,
                          })}
                          type="text"
                          class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="Enter Your Event Subtitle"
                        />
                      </div>
                      <div class="flex flex-col">
                        <label class="leading-loose">Event Creator Name</label>
                        <input
                          {...register("name")}
                          type="text"
                          class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="Enter Your Account Name"
                        />
                      </div>
                      <div class="flex flex-col">
                        <label class="leading-loose">Event Creator Email</label>
                        <input
                          {...register("email")}
                          type="text"
                          class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="Enter Your Account Email"
                        />
                      </div>
                      <div class="flex items-center space-x-4">
                        <div class="flex flex-col">
                          <label class="leading-loose">Day</label>
                          <div class="relative focus-within:text-gray-600 text-gray-400">
                            <input
                              {...register("day", {
                                required: true,
                              })}
                              type="text"
                              class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                              placeholder="Enter day"
                            />
                            <div class="absolute left-3 top-2">
                              <svg
                                class="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div class="flex flex-col">
                          <label class="leading-loose">Month</label>
                          <div class="relative focus-within:text-gray-600 text-gray-400">
                            <input
                              {...register("Month", {
                                required: true,
                              })}
                              type="text"
                              class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                              placeholder="00/0000"
                            />
                            <div class="absolute left-3 top-2">
                              <svg
                                class="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div class="flex flex-col">
                          <label class="leading-loose">Time</label>
                          <div class="relative focus-within:text-gray-600 text-gray-400">
                            <input
                              {...register("time", {
                                required: true,
                              })}
                              type="text"
                              class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                              placeholder="09/00"
                            />
                            <div class="absolute left-3 top-2">
                              <svg
                                class="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="flex items-center space-x-4">
                        <div class="flex flex-col">
                          <label class="leading-loose">Location</label>
                          <div class="relative focus-within:text-gray-600 text-gray-400">
                            <input
                              {...register("location", {
                                required: true,
                              })}
                              type="text"
                              class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                              placeholder="Enter Location"
                            />
                            <div class="absolute left-3 top-2">
                              <svg
                                class="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div class="flex flex-col">
                          <label class="leading-loose">Platform</label>
                          <div class="relative focus-within:text-gray-600 text-gray-400">
                            <input
                              {...register("platform", {
                                required: true,
                              })}
                              type="text"
                              class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                              placeholder="00/0000"
                            />
                            <div class="absolute left-3 top-2">
                              <svg
                                class="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="flex flex-col">
                        <label class="leading-loose">Event Description</label>
                        <input
                          {...register("description", {
                            required: true,
                          })}
                          type="text"
                          class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="Enter Event Description"
                        />
                      </div>
                    </div>
                    <div class="pt-4 flex items-center space-x-4">
                      <input
                        type="submit"
                        class="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
