import React from "react";

import single from "../assets/single.png";
import double from "../assets/double.png";
import triple from "../assets/triple.png";

const Plans = () => {
  return (
    <div className="w-full pt-24 pb-16 px-8 md:px-4 bg-white">
      <div className="max-w-[1000px] grid md:grid-cols-3 mx-auto gap-12 md:gap-6 px-20 md:px-0">
        <div className="mt-4 mb-4 shadow-xl text-center flex flex-col items-center py-2 px-4 border hover:scale-105 duration-200">
          <img src={single} alt="" className="mt-[-2.5rem] w-[80px] bg-white" />
          <h1 className="text-lg md:text-xl font-bold text-black mt-4">
            Single User
          </h1>
          <strong className="py-4 font-bold text-3xl">$149</strong>
          <li className="w-full border-b py-2 font-semibold text-base">
            500 GB Storage
          </li>
          <li className="w-full border-b py-2 font-semibold text-base">
            1 User Allowed
          </li>
          <li className="w-full border-b py-2 font-semibold text-base">
            Send up to 2GB
          </li>
          <button className="bg-green text-white py-2 px-8 text-base font-semibold rounded-lg cursor-pointer mt-4">
            Start Trial
          </button>
        </div>
        <div className="shadow-xl text-center flex flex-col items-center py-2 px-4 border hover:scale-105 duration-200 bg-gray-100">
          <img src={double} alt="" className="mt-[-2.5rem] w-[80px]" />
          <h1 className="text-lg md:text-xl font-bold text-black mt-4">
            Partnership
          </h1>
          <strong className="py-4 font-bold text-3xl">$149</strong>
          <li className="w-full border-b py-2 font-semibold text-base">
            500 GB Storage
          </li>
          <li className="w-full border-b py-2 font-semibold text-base">
            1 User Allowed
          </li>
          <li className="w-full border-b py-2 font-semibold text-base">
            Send up to 2GB
          </li>
          <button className="bg-black text-green py-2 px-8 text-base font-semibold rounded-lg cursor-pointer mt-4">
            Start Trial
          </button>
        </div>
        <div className="shadow-xl text-center flex flex-col items-center py-2 px-4 border hover:scale-105 duration-200 mt-4 mb-4">
          <img src={triple} alt="" className="mt-[-2.5rem] w-[80px] bg-white" />
          <h1 className="text-lg md:text-xl font-bold text-black mt-4">
            Group Account
          </h1>
          <strong className="py-4 font-bold text-3xl">$149</strong>
          <li className="w-full border-b py-2 font-semibold text-base">
            500 GB Storage
          </li>
          <li className="w-full border-b py-2 font-semibold text-base">
            1 User Allowed
          </li>
          <li className="w-full border-b py-2 font-semibold text-base">
            Send up to 2GB
          </li>
          <button className="bg-green text-white py-2 px-8 text-base font-semibold rounded-lg cursor-pointer mt-4">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plans;
