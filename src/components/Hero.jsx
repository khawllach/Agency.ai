import React from "react";
import { useState, useEffect } from "react";
import groupeprofile from "../assets/group_profile.png";
import rakuten from "../assets/rakuten_logo.png";
import airbnb from "../assets/airbnb_logo.svg";
import google from "../assets/google_logo.svg";
import microsoft from "../assets/microsoft_logo.png";
import coinbase from "../assets/coinbase_logo.png";
import zoom from "../assets/zoom_logo.png";

const Hero = () => {
  const [mouseposition, setmouseposition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handlemousemove = (e) => {
      setmouseposition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handlemousemove);

    return () => {
      window.removeEventListener("mousemove", handlemousemove);
    };
  }, []);

  const companies = [
    {
      image: rakuten,
    },
    {
      image: airbnb,
    },
    {
      image: microsoft,
    },
    {
      image: google,
    },
    {
      image: coinbase,
    },
    {
      image: zoom,
    },
  ];
  return (
    <section className="max-w-7xl relative mx-auto px-6 sm:px-8 min-h-screen cursor-none mb-20 scroll-smooth" id="hero">
      <div className="absolute top-70 right-40  sm:right-50 sm:top-40 w-68 h-68 sm:w-42 sm:h-42 bg-blue-500/50 blur-2xl rounded-full animate-pulse" />
      <div className="absolute top-99 right-1  sm:right-1 sm:top-40 w-48 h-48 sm:w-72 sm:h-72 bg-blue-500/50 blur-2xl rounded-full animate-pulse" />
      <div className="absolute top-150 left-40  w-68 h-68 sm:w-42 sm:h-42 bg-fuchsia-500/20 blur-2xl rounded-full animate-pulse " />
      <div className="absolute top-150 left-4  w-48 h-48 sm:w-72 sm:h-72 bg-fuchsia-500/30 blur-2xl rounded-full animate-pulse " />

      <div
        className="fixed pointer-events-none z-50 h-17 w-17 rounded-full  border border-[#5044E5] -translate-x-1/2 -translate-y-1/2"
        style={{
          left: mouseposition.x,
          top: mouseposition.y,
          transition: "left 0.12s ease-out, top 0.12s ease-out",
        }}
      />

      <div
        className="fixed pointer-events-none z-50 h-3 w-3 rounded-full  bg-[#5044E5] -translate-x-1/2 -translate-y-1/2"
        style={{
          left: mouseposition.x,
          top: mouseposition.y,
        }}
      />

      <div className="flex flex-col text-center items-center">
        <div
          className="inline-flex items-center  space-x-2 mb-4 border border-black/15 rounded-full  px-3 py-1 mt-18
        hover:bg-indigo-600/10"
        >
          <img src={groupeprofile} alt="" className="w-20 " />

          <p className="text-xs">Trusted by 10k+ people</p>
        </div>
        <div>
          <h1 className="mb-3 text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium  max-w-4xl">
            Turning imagination into
            <span className=" px-2 bg-linear-to-b from-indigo-600 via-blue-400 to-blue-700  text-transparent bg-clip-text ">
              digital
            </span>
            impact
          </h1>
          <span className="text-sm sm:text-lg text-gray-600 max-w-10">
            Creating meaningful connections and turning big ideas into <br />
            interactive digital experiences.
          </span>
        </div>
        <div>
          <img
            src="./src/assets/hero_img.png"
            alt=""
            className="px-[30px] py-[30px]"
          />
        </div>
        <div className="flex flex-col space-y-5 py-5">
          <span className="text-sm">Trusted By Leading Companies</span>
          <div className="flex flex-row space-x-6 sm:space-x-8 max-w-3xl mx-auto justify-center items-center">
            {companies.map((companies) => (
              <img src={companies.image} alt="" className="w-[50px] md:w-[95px]" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
