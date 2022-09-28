import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white flex items-center justify-center w-full h-screen mt-[-96px] px-4">
      <div className="text-center">
        <h3 className="text-green text-sm font-bold">
          GROWING WITH DATA ANALYTICS
        </h3>
        <h1 className="text-4xl md:text-5xl font-bold my-5">Grow with data.</h1>
        <h2 className="text-2xl md:text-3xl font-bold">
          Fast, flexible financing for{" "}
          <Typed
            strings={["SaaS", "D2C", "BTB"]}
            typeSpeed={100}
            backSpeed={100}
            loop
            className="text-gray-500"
          />
        </h2>
        <p className="text-ls md:text-xl font-bold text-gray-500 mt-4 mb-6">
          Monitor your data analytics to increase revenue for BTB, BTC, & SaaS
          platforms
        </p>
        <a
          href="/"
          className="bg-green font-bold text-[#000300] text-sm md:text-lg px-6 py-2 rounded-lg hover:opacity-90 duration-200"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Hero;
