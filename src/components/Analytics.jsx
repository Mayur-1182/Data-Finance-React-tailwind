import React from "react";
import laptopImg from "../assets/laptop.jpg";
export default function Analytics() {
  return (
    <div className="w-full bg-white py-8 px-8 sm:py-16 sm:px-16  ">
      <div className="max-w-[1240px] mx-auto grid  grid-cols-1 md:grid-cols-2  text-center  gap-6">
        <img
          src={laptopImg}
          alt="laptop image"
          className="mx-auto max-w-[90%] min-w-[18rem]  "
        />
        <div className=" sm:px-6 md:px-10 my-auto">
          <h2 className="font-bold text-xl sm:text-2xl md:3xl my-4 sm:my-8">
            DATA ANALYTICS DASHBOARD
          </h2>
          <p className="my-8 max-w-[75%] mx-auto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
            magni quas delectus eaque ipsa optio hic atque distinctio maxime,
            veniam suscipit, unde, provident sapiente. Ea quod aliquid soluta
            illo odit?
          </p>
          <button className="hero-btn  px-4 py-2 mb-8 ">Get Started</button>
        </div>
      </div>
    </div>
  );
}
