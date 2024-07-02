import React, { useState } from "react";

export default function Hero() {
  const [randString, setRandString] = useState(["B2B", "B2C", "SASS"]);
  function randomStringGenerator() {
    let randomString =
      randString[Math.floor(Math.random() * randString.length)];
    return randomString;
  }

  return (
    <main className="text-white font-bold ">
      <div className=" w-full h-screen mx-auto flex flex-col justify-center  text-center mt-[0px] sm:mt-[-96px] gap-4">
        <p className="text-[#00df9a] text-xl sm:text-2xl">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="  p-0 text-3xl sm:text-4xl md:text-6xl md:p-0">
          Grow with Data.
        </h1>
        <div>
          <p className=" md:text-5xl sm:text-4xl text-xl ">
            Fast , Flexible financing for{" "}
            <span className="text-[#00df9a]">{randomStringGenerator()}</span>
          </p>
        </div>
        <p className="mx-auto max-w-[70%] text-xl text-gray-500 md:text-2xl">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms.
        </p>
        <button className="hero-btn  mx-auto px-5 py-3">Get Started</button>
      </div>
    </main>
  );
}
