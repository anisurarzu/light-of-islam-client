import React from "react";
import About from "../About/About";
import HeroSection from "../HeroSection/HeroSection";
import PrayerTime from "../PrayerTime/PrayerTime";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <About></About>
      <PrayerTime></PrayerTime>
    </div>
  );
};

export default Home;
