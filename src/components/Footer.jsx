import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaGithubSquare,
  FaDribbbleSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-white px-4 py-14">
      <div className="max-w-[1000px] w-full mx-auto flex flex-col md:flex-row gap-8">
        <div className="w-[90%] mx-auto md-w-[35%]">
          <h1 className="text-lg md:text-xl font-bold tracking-widest text-green">
            REACT.
          </h1>
          <p className="text-sm pt-3 pb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            nemo dolore accusantium cumque ex iste, architecto, facere aliquam
            sint odio incidunt repudiandae illo.
          </p>
          <div className="flex gap-6">
            <li className="text-xl md:text-2xl hover:text-green duration-200 cursor-pointer">
              <FaFacebookSquare />
            </li>
            <li className="text-xl md:text-2xl hover:text-green duration-200 cursor-pointer">
              <FaInstagram />
            </li>
            <li className="text-xl md:text-2xl hover:text-green duration-200 cursor-pointer">
              <FaTwitterSquare />
            </li>
            <li className="text-xl md:text-2xl hover:text-green duration-200 cursor-pointer">
              <FaGithubSquare />
            </li>
            <li className="text-xl md:text-2xl hover:text-green duration-200 cursor-pointer">
              <FaDribbbleSquare />
            </li>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 w-[90%] mx-auto md:w-[65%] gap-4 md:gap-0">
          <div className="flex flex-col">
            <span className="text-gray-400 font-semibold text-base mb-2">
              Solution
            </span>
            <a href="#" className="text-base cursor-pointer mb-0 md:mb-1 hover:text-green duration-100">
              Analytics
            </a>
            <a href="#" className="text-base cursor-pointer mb-0 md:mb-1 hover:text-green duration-100">
              Marketing
            </a>
            <a href="#" className="text-base cursor-pointer mb-0 md:mb-1 hover:text-green duration-100">
              Commerce
            </a>
            <a href="#" className="text-base cursor-pointer mb-0 md:mb-1 hover:text-green duration-100">
              Insights
            </a>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-400 font-semibold text-base mb-2">
              Support
            </span>
            <a href="#" className="text-base cursor-pointer mb-0 md:mb-1 hover:text-green duration-100">
              Pricing
            </a>
            <a href="#" className="text-base cursor-pointer mb-0 md:mb-1 hover:text-green duration-100">
              Documentation
            </a>
            <a href="#" className="text-base cursor-pointer mb-0 md:mb-1 hover:text-green duration-100">
              Guides
            </a>
            <a href="#" className="text-base cursor-pointer mb-0 md:mb-1 hover:text-green duration-100">
              API Status
            </a>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-400 font-semibold text-base mb-2">
              Company
            </span>
            <a href="#" className="text-base cursor-pointer mb-0 md:mb-1 hover:text-green duration-100">
              About
            </a>
            <a href="#" className="text-base cursor-pointer mb-0 md:mb-1 hover:text-green duration-100">
              Blog
            </a>
            <a href="#" className="text-base cursor-pointer mb-0 md:mb-1 hover:text-green duration-100">
              Jobs
            </a>
            <a href="#" className="text-base cursor-pointer mb-0 md:mb-1 hover:text-green duration-100">
              Press
            </a>
            <a href="#" className="text-base cursor-pointer mb-0 md:mb-1 hover:text-green duration-100">
              Partners
            </a>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-400 font-semibold text-base mb-2">Legal</span>
            <a href="#" className="text-base cursor-pointer mb-0 md:mb-1 hover:text-green duration-100">
              Claim
            </a>
            <a href="#" className="text-base cursor-pointer mb-0 md:mb-1 hover:text-green duration-100">
              Privacy
            </a>
            <a href="#" className="text-base cursor-pointer mb-0 md:mb-1 hover:text-green duration-100">
              Terms
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
