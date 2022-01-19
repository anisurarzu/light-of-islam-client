import React, { useEffect, useState } from "react";
import "./PrayerTime.css";
import { useForm } from "react-hook-form";

const PrayerTime = () => {
  const [time, setTime] = useState();
  const [location, setLocation] = useState();
  const [message, setMessage] = useState("");
  console.log(time?.results);
  console.log(location);

  useEffect(() => {
    if (location) {
      const uri = `https://api.pray.zone/v2/times/today.json?city=${location}`;
      fetch(uri)
        .then((res) => res.json())
        .then((data) => {
          setTime(data);
          setMessage("");
        })
        .catch(() => {
          setMessage("Please enter a valid name");
        });
    }
  }, [location]);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    setLocation(data.location);
  };
  return (
    <div className="px-2 pt-12 xl:pt-48 lg:pt-48 prayer-container">
      <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2">
        <div>
          <img
            className="px-12  xl:px-32 lg:px-32 py-4"
            src="https://i.ibb.co/TDyN3Sb/prayer-logo.png"
            alt=""
          />
          <h2 className="section-title text-left pl-6 text-2xl xl:text-5xl lg:text-5xl font-bold xl:pl-32 lg:pl-12">
            Today’s Prayer Times
          </h2>

          <h4 className="pl-4 bangla-text text-2xl text-left xl:pl-32 lg:pl-32 pt-4 text-gray-500">
            “হে ঈমানদারগণ, ধৈর্য ও সালাতের মাধ্যমে সাহায্য প্রার্থনা কর।
            নিশ্চয়ই আল্লাহ ধৈর্যশীলদের সাথে আছেন।" (2:153)
          </h4>
          <form className="px-2 pt-12" onSubmit={handleSubmit(onSubmit)}>
            <input
              className="p-2 my-2 xl:px-4 lg:px-4 time-input rounded-full mr-2"
              {...register("location", { required: true, maxLength: 20 })}
              placeholder="enter your city"
            />

            <input
              className="btn-design text-white rounded-full px-4 p-2"
              type="submit"
            />
          </form>

          <div className="py-4">
            <span className="text-red-600 py-2">{message}</span>
            <h5>
              Location: {time?.results?.location?.city},
              <span>{time?.results?.location?.country}</span>
            </h5>

            <div className="pt-2">
              <h6>Islamic: {time?.results?.datetime[0]?.date.hijri}</h6>
              <h6>English: {time?.results?.datetime[0]?.date.gregorian}</h6>
            </div>
          </div>
        </div>
        <div className="second-half  ">
          <div className="pl-16  pr-24 pt-8 xl:pt-0 lg:pt-0 xl:pr-56 ">
            <div className="flex pt-2  top-div shadow-md">
              <div className="text-2xl pr-20 xl:pr-28 ">Salat</div>
              <div className="text-2xl pl-4 xl:pl-24">Start</div>
            </div>
            <div className="flex pt-2  next-div shadow-md">
              <div className="text-2xl pr-16 xl:pr-28 ">Fajar</div>
              <div className="text-2xl pl-0 xl:pl-20 lg:pl-20">
                {time?.results?.datetime[0]?.times.Fajr}
              </div>
            </div>
            <div className="flex pt-2  next-div shadow-md">
              <div className="text-2xl pr-12 xl:pr-28 ">Sunrise</div>
              <div className="text-2xl pl-0 xl:pl-16 lg:pl-16">
                {time?.results?.datetime[0]?.times.Sunrise}
              </div>
            </div>
            <div className="flex pt-2  next-div shadow-md">
              <div className="text-2xl pr-12 ">Dhuhr</div>
              <div className="text-2xl pl-4 xl:pl-32 lg:pl-32">
                {time?.results?.datetime[0]?.times.Dhuhr}
              </div>
            </div>
            <div className="flex pt-2  next-div shadow-md">
              <div className="text-2xl pr-20 xl:pr-28 ">Asr</div>
              <div className="text-2xl pl-4 xl:pl-24">
                {time?.results?.datetime[0]?.times.Asr}
              </div>
            </div>
            <div className="flex pt-2  next-div shadow-md">
              <div className="text-2xl pr-12 xl:pr-20 ">Magrib</div>
              <div className="text-2xl pl-4 xl:pl-24">
                {time?.results?.datetime[0]?.times.Maghrib}
              </div>
            </div>
            <div className="flex pt-2  next-div shadow-md">
              <div className="text-2xl pr-20 xl:pr-28 ">Isha</div>
              <div className="text-2xl pl-4 xl:pl-24">
                {time?.results?.datetime[0]?.times.Isha}
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#F1FDFA"
          fill-opacity="1"
          d="M0,192L48,165.3C96,139,192,85,288,64C384,43,480,53,576,74.7C672,96,768,128,864,149.3C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default PrayerTime;
