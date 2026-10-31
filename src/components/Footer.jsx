import React from "react";
import logo from "../assets/logo.svg";
import fac from "../assets/facebook_icon.svg";
import twitter from "../assets/twitter_icon.svg";
import insta from "../assets/instagram_icon.svg";
import linkedin from "../assets/linkedin_icon.svg";

const Footer = () => {
  return (
    <footer className="bg-[#F9FBFF] ">
      <div className="flex justify-center items-center mb-10 ">
        <div className="flex flex-col mt-6 md:max-w-3xl lg:max-w-7xl md:mx-auto">
            <div className="flex flex-col md:flex-row  justify-between gap-10 md:gap-30 lg:gap-80  ">
                <div className="flex flex-col ">
                <img src={logo} alt="" className="w-[150px] py-5" />
                <span className="text-gray-400 text-[15px] ">
                    From strategy to execution, we craft digital solutions that move{" "}
                    <br />
                    your business forward.
                </span>
                <div className="flex flex-row space-x-4 pt-10 font-medium text-sm md:text-[11px]">
                    <span>Home</span>
                    <span>Services</span>
                    <span>Our Work</span>
                    <span>Testimonial</span>
                </div>
                </div>

                <div>
                <h3 className="font-medium">Subscribe to our newsletter</h3>
                <span className="text-gray-400 text-[15px]">
                    The latest news, articles, and resources, sent to your inbox
                    weekly.
                </span>
                <div className="flex flex-row space-x-3 mt-7">
                    <input
                    type="text"
                    placeholder="Enter your email"
                    className="pr-17 border rounded-[5px] pl-3"
                    />
                    <button className="bg-[#5044E5] py-3 px-4 rounded-[5px] text-white">
                    Subscribe
                    </button>
                </div>
                </div>
                <div className="flex flex-row space-x-3 md:hidden  ">
                <img src={fac} alt="" className="w-[25px]" />
                <img src={insta} alt="" className="w-[25px]" />
                <img src={linkedin} alt="" className="w-[25px]" />
                <img src={twitter} alt="" className="w-[25px]" />
                </div>
            </div>
            
            <hr className=" my-5 text-gray-500 " />
            <div className="flex flex-col md:flex-row justify-between  ">
                <span className="text-gray-500 text-sm">
                Copyright 2025 © agency.ai - All Right Reserved.
                </span>
                <div className="md:flex md:flex-row md:space-x-2 hidden md:block">
                <img src={fac} alt="" className="w-[25px]" />
                <img src={insta} alt="" className="w-[25px]" />
                <img src={linkedin} alt="" className="w-[25px]" />
                <img src={twitter} alt="" className="w-[25px]" />
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
