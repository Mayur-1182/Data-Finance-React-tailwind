import React from "react";
import {
  FaInstagram,
  FaDribbble,
  FaTwitter,
  FaFacebook,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-300 p-16">
      <div className="max-w-[1240px] m-auto  grid grid-cols-1 gap-8  lg:grid-cols-3">
        <div>
          <h1 className="text-3xl font-bold text-[#00df9a]">React.</h1>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia optio
            modi molestiae. Lorem ipsum dolor sit amet.
          </p>
          <div className="text-2xl flex md:w-[50%] justify-between items-center footer_icon ">
            <FaFacebook />
            <FaDribbble />
            <FaGithub />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
        <div className="lg:col-span-2  max-w-[100%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  mt-2 gap-4">
          <div>
            <h6 className="font-bold">Solutions</h6>
            <ul className="flex flex-col gap-2 text-md">
              <li>Analytics</li>
              <li>Marketing</li>
              <li>Commerce</li>
              <li>Insights</li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold">Support</h6>
            <ul className="flex flex-col gap-2 text-md">
              <li>Pricing</li>
              <li>Documentation</li>
              <li>Guide</li>
              <li>API Status</li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold">Company</h6>
            <ul className="flex flex-col gap-2 text-md">
              <li>About</li>
              <li>Blog</li>
              <li>Jobs</li>
              <li>Press</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold">Legal</h6>
            <ul className="flex flex-col gap-2 text-md">
              <li>Claim</li>
              <li>Policy</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
