import React from "react";

import imageAnalytics from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="bg-white w-full py-6 px-4">
      <div className="max-w-[1000px] flex flex-col md:flex-row mx-auto">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <img src={imageAnalytics} alt="" className="w-full h-full" />
        </div>
        <div className="w-full md:w-1/2 self-center">
          <h3 className="text-sm font-bold text-green">
            DATA ANALYTICS DASHBOARD
          </h3>
          <h1 className="text-xl md:text-3xl text-black font-bold">
            Manage Data Analytics Centrally
          </h1>
          <p className="text-base font-semibold mt-2 mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
            accusantium quam explicabo quo ex neque, maiores, sequi non debitis
            impedit sunt consequuntur rerum voluptatibus officia dicta
            doloremque dolorem accusamus excepturi!
          </p>
          <a
            href="/"
            className="bg-[#000300] font-semibold text-green text-sm md:text-lg px-6 py-2 rounded-lg hover:opacity-90 duration-200"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
