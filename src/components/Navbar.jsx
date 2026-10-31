import React from "react";
import logo from "../assets/logo.svg";
import { GoArrowRight } from "react-icons/go";
import { MdOutlineModeNight } from "react-icons/md";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [mobilemenuopen, setmobilemenuopen] = useState(false);
  return (
    <nav className="w-full bg-indigo-300/5 backdrop-blur-sm mb-6 sm:mb-8 fixed z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 ">
        <div className="flex  items-center justify-between h-16 ">
          <div className="">
            <img src={logo} alt="Logo" className="h-6.5 sm:h-8" />
          </div>
          <div className="hidden md:flex space-x-2 sm:space-x-4 lg:space-x-6">
            <a href="#hero" className="hover:border-b border-black text-sm ">
              Home
            </a>
            <a href="#help" className="hover:border-b border-black text-sm ">
              Services
            </a>
            <a href="#work" className="hover:border-b border-black text-sm ">
              Our Work
            </a>
            <a href="#contact" className="hover:border-b border-black text-sm ">
              Contact Us
            </a>
          </div>
          <div className="flex space-x-2 items-center justify-center ">
            <button className="hover:bg-indigo-600/10 p-1 rounded-full border border-indigo-600">
              <MdOutlineModeNight className="w-5 h-5  sm:w-6 sm:h-6  " />
            </button>
            <button className="group hidden bg-indigo-600 text-white md:flex items-center justify-center gap-1 sm:gap-2  bg-blue-500/10  p-2 px-5 rounded-full hover:bg-indigo-600/80">
              Connect
              <GoArrowRight className="group-hover:scale-110 " />
            </button>
            <button
              className="md:hidden p-2 cursor-pointer"
              onClick={() => setmobilemenuopen(!mobilemenuopen)}
            >
              {mobilemenuopen ? (
                <IoClose className="w-7 h-7 z-10" />
              ) : (
                <IoMenu className="w-7 h-7  " />
              )}
            </button>
          </div>
        </div>
      </div>
      {mobilemenuopen && (
        <div className="md:hidden bg-indigo-600  ml-80 rounded-2xl h-screen  text-white">
          <div className="md:hidden flex flex-col items-start justify-start p-4 gap-2 ">
            <a href="" className="hover:text-white/80">
              Home
            </a>
            <a href="" className="hover:text-white/80">
              Services
            </a>
            <a href="" className="hover:text-white/80">
              Our Work
            </a>
            <a href="" className="hover:text-white/80">
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
