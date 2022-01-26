import React from "react";
import Subtitle from "./Subtitle";
// import HireBtn from "../../components/Button/HireBtn";
import DefBtn from "../../components/Button/DefBtn";

const Hero = () => {
  return (
    <div className="py-20 w-10/12 m-auto">
      <Subtitle />

      <div className="my-14 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.375rem]">
        <h2 className="font-inter font-bold">I’m Frontend Developer.</h2>
        <h2 className="font-inter font-bold text-white/80">
          Turning your design to <span className="text-cyan-100">code.</span>
        </h2>
      </div>

      <p className="max-w-2xl font-medium text-sm sm:text-base md:text-lg text-gray-200 mb-20">
        I help companies to design digital products and turn ideas into a
        functional and delightful experience. I'm focusing on working on
        interface and digital design - mainly building products, branding and
        websites.
      </p>

      {/* <HireBtn /> */}
      <DefBtn />
    </div>
  );
};

export default Hero;
