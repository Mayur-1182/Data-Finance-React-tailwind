import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Navbar(props) {
  const [toggleMenu, setToggleMenu] = useState(false);
  function handleToggle() {
    setToggleMenu(!toggleMenu);
  }
  return (
    <div className=" navbar mx-auto px-4 text-white  items-center justify-between max-w-[1240px] h-16 sm:h-24 flex ">
      <h1 className="w-full text-3xl font-bold text-[#00df9a] relative z-99">
        React.
      </h1>
      <ul className="hidden sm:flex">
        <li className="p-4">
          <a href="/">Home</a>
        </li>
        <li className="p-4">
          <a href="/">Company</a>
        </li>
        <li className="p-4">
          <a href="/">Resources</a>
        </li>
        <li className="p-4">
          <a href="/">About</a>
        </li>
        <li className="p-4">
          <a href="/">Contact</a>
        </li>
      </ul>
      <div onClick={handleToggle} className="block sm:hidden">
        {toggleMenu ? (
          <AiOutlineClose size={30} />
        ) : (
          <AiOutlineMenu size={30} />
        )}
      </div>
      <div
        className={` mobile_nav ${
          toggleMenu ? " left-0" : " left-[-100%] "
        } block sm:hidden`}
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] px-4 mt-8">
          React.
        </h1>
        <ul className="pt-4 pl-4 uppercase ">
          <li className="p-2 border-b border-[#00df9889]">
            <a href="/">Home</a>
          </li>
          <li className="p-2 border-b border-[#00df9889]">
            <a href="/">Company</a>
          </li>
          <li className="p-2 border-b border-[#00df9889]">
            {" "}
            <a href="/">Resources</a>
          </li>
          <li className="p-2 border-b border-[#00df9889]">
            <a href="/">About</a>
          </li>
          <li className="p-2 border-b border-[#00df9889]">
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
