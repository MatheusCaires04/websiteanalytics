import React from "react";

const FormNotification = () => {
  return (
    <div className="text-white w-full py-16 px-4">
      <div className="flex flex-col md:flex-row gap-8 md:gap-0 max-w-[1000px] mx-auto">
        <div className="w-full md:w-[60%] text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-semibold">
            Want tips & tricks to opmitize your flow
          </h3>
          <span className="text-sm md:text-base">
            Sign up to our newsletter and stay up to date.
          </span>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <form className="w-full flex items-center gap-4 flex-col md:flex-row">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-[60%] outline-none rounded md:rounded-lg text-base px-2 py-2 text-black"
            />
            <a
              href="/"
              className="w-[40%] bg-green text-black font-semibold rounded md:rounded-lg px-2 py-2 text-base text-center"
            >
              Notify me
            </a>
          </form>
          <span className="text-base text-center">
            We care bout the protection of your data. Read our
            <a href="/" className="text-green hover:underline ml-1">
              Privacy Policy.
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FormNotification;
