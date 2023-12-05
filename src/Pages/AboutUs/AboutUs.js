import React from "react";
import { Link } from "react-router-dom";
import AboutSection from "./AboutSection";
import "./aboutus.css";
import AboutPrayerTime from "./AboutPrayerTime";
import TopSection from "./TopSection";
import OuerEvents from "./OuerEvents";
import Membership from "./Membership";
import { useState } from "react";
import { useEffect } from "react";
import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import { axios } from "axios";

const AboutUs = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://yellow-sparkly-station.glitch.me/users")
      .then((res) => res.json())
      .then((data) => {
        // console.log("event data", data[0].email);
        const dmfMembers = data?.filter((d) => d?.dmfID);
        setUsers(dmfMembers);
        // console.log(event);
      });
  }, []);

  console.log("object", users);

  return (
    <div className=".about-containers">
      {/* <div className="aboutUs bg-[#ecfbf9] flex flex-col justify-center">
        <h2 className="text-4xl font-bold color">About Us</h2>
        <ul className="flex text-center justify-center text-xl ">
          <li>
            <Link to="/home">
              Home <span className="text-black"> /</span>
            </Link>
          </li>
          <li>
            <span className="span-color"> &nbsp; About</span>
          </li>
        </ul>
      </div> */}

      {/* About section */}
      <AboutSection></AboutSection>
      <Membership users={users}></Membership>

      {/* AboutPrayerTime.js */}
      <AboutPrayerTime></AboutPrayerTime>

      {/* Top Section */}
      <TopSection></TopSection>

      {/* Our Events */}
      <OuerEvents></OuerEvents>
      {/* our Membership */}
    </div>
  );
};

export default AboutUs;
