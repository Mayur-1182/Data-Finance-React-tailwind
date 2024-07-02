import React from "react";
import singleImg from "../assets/single.png";
import doubleImg from "../assets/double.png";
import tripleImg from "../assets/triple.png";

const trialData = [{ img: singleImg }, { img: doubleImg }, { img: tripleImg }];

export default function Card() {
  return (
    <div className="w-full bg-white py-20 px-8">
      <div className="max-w-[1240px]  mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {trialData.map((item, index) => (
          <div
            key={index}
            className={` card mx-auto max-w-[90%]  py-8 my-4 ${
              index == 1 ? "bg-slate-100" : ""
            }`}
          >
            <img
              src={item.img}
              alt="single image"
              className="mx-auto max-w-[25%] mb-4"
            />
            <h2 className="text-2xl font-bold ">Single Users</h2>
            <p className="font-bold text-3xl my-2">$149</p>
            <div className="font-medium flex flex-col gap-3 mt-4 text-center">
              <p>500 GB Storage</p>
              <p>1 Granted User</p>
              <p>Send Up to 2GB</p>
            </div>
            <button className="hero-btn text-xl py-1 mt-8">Start Trial</button>
          </div>
        ))}
      </div>
    </div>
  );
}
