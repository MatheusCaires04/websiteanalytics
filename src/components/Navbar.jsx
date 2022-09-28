import React, { useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="w-full bg-transparent h-24 flex items-center">
      <div className="w-full max-w-[1000px] mx-auto px-4 md:px-0 text-white flex justify-between items-center">
        <h1 className="font-bold text-2xl md:text-3xl tracking-wider text-green z-[1000]">
          REACT.
        </h1>
        <ul className="hidden md:flex gap-6">
          <li>
            <a href="#home" className="text-lg hover:text-green duration-200">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="text-lg hover:text-green duration-200">
              Account
            </a>
          </li>
          <li>
            <a href="/" className="text-lg hover:text-green duration-200">
              Sign In
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-lg bg-white text-bg px-4 font-semibold rounded-xl py-2 border border-white hover:text-green hover:bg-bg hover:border-green duration-200"
            >
              Get Started
            </a>
          </li>
        </ul>
        <div
          className="flex md:hidden z-[1000] text-4xl cursor-pointer"
          onClick={handleMenu}
        >
          {!menu ? <BiMenuAltRight /> : <MdClose />}
        </div>
        <ul
          className={
            !menu
              ? "hidden fixed top-0 left-0 bottom-0 right-0 flex-col items-center justify-center bg-bg gap-6 duration-400"
              : "flex md:hidden fixed top-0 left-0 bottom-0 right-0 flex-col items-center justify-center bg-bg gap-6 duration-400"
          }
        >
          <li>
            <a href="#home" className="text-4xl hover:text-green duration-200">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="text-4xl hover:text-green duration-200">
              Account
            </a>
          </li>
          <li>
            <a href="/" className="text-4xl hover:text-green duration-200">
              Sign In
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-2xl bg-white text-bg px-4 font-semibold rounded-xl py-2 border border-white hover:text-green hover:bg-bg hover:border-green duration-200"
            >
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
