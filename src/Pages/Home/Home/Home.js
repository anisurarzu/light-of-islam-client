import React from "react";
import About from "../About/About";
import Donation from "../Donation/Donation";
import HeroSection from "../HeroSection/HeroSection";
import Pillers from "../Pillers/Pillers";

import PrayerTime from "../PrayerTime/PrayerTime";
import Learn from "./Learn/Learn";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <About></About>
      {/* <PrayerTime></PrayerTime> */}
      <Learn></Learn>
      <Pillers></Pillers>
      <Donation></Donation>
    </div>
  );
};

export default Home;
