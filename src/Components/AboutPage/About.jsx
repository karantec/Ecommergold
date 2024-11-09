import React from "react";
import HeroSection from "./Hero1";
import HeroSection1 from "./Hero2";
import TeamSection from "./Hero3";
import FeatureSection from "./Hero4";

const About = () => {
  return (
    <>
      <div className="hero-section"></div>

      <HeroSection />
      <HeroSection1 />
      <TeamSection />
      <div className="flex justify-center mt-8 px-4 sm:px-6 md:px-10">
        <img
          src="jewellery.png"
          alt="About3"
          className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-auto"
        />
      </div>

      <FeatureSection />
    </>
  );
};

export default About;
