import React from "react";

export default function NewsLetter() {
  return (
    <div className="w-full bg-black text-white py-12 px-8 sm:py-16 sm:px-12">
      <div className="  p-2 max-w-[1240px] bg-black mx-auto grid md:grid-cols-3 gap-12 sm:gap-0">
        <div className=" md:col-span-2 text-center sm:text-left">
          <h1 className=" py-4 font-bold text-xl sm:text-2xl md:3xl text-[#00df9a]">
            Want tips & tricks to optimize your flow ?
          </h1>
          <p className="max-w-[90%] mx-auto">
            Sign up our NewsLetter and stay up to date
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="w-full   flex items-center gap-8 flex-col sm:flex-row py-2 ">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="text-sx text-black rounded-md p-2 outline-none"
            />
            <button className="hero-btn  py-1">Notify Me</button>
          </div>
          <p className="text-center">
            We Care about the protection of your data . Read the{" "}
            <span className="text-[#00df9a]">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
}
