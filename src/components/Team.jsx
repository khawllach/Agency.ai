import React from "react";
import haley from "../assets/team_images/haley.png";
import amber from "../assets/team_images/amber.png";
import ashley from "../assets/team_images/ashley.png";
import emily from "../assets/team_images/emily.png";
import james from "../assets/team_images/james.png";
import jessica from "../assets/team_images/jessica.png";
import megan from "../assets/team_images/megan.png";
import ryan from "../assets/team_images/ryan.png";

const Team = () => {
  return (
    <section className="max-w-7xl mx-auto mb-20 scroll-smooth" id="team">
      <div className="flex flex-col justify-center items-center mb-10">
        <h1 className="text-[36px] font-bold p-3">Meet the team</h1>
        <span className="max-w-[450px] text-center text-[#8A8E9B] text-[16px]">
          A passionate team of digital experts dedicated to your brand’s
          success.
        </span>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-7 mx-10 md:mx-25 ">
        <div className="flex flex-row justify-center items-center space-x-3 bg-white p-5 rounded-[20px]  shadow-[0_1px_10px_rgba(80,68,229,0.3)] justify-start  ">
          <div>
            <img src={haley} alt="" className="rounded-full w-[55px]" />
          </div>
          <div className="flex flex-col ">
            <h2>Haley Carter</h2>
            <span className="text-gray-400">CEO & founder</span>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center space-x-3 bg-white p-5 rounded-[20px]  shadow-[0_1px_10px_rgba(80,68,229,0.3)] justify-start  ">
          <div>
            <img src={james} alt="" className="rounded-full w-[55px]" />
          </div>
          <div className="flex flex-col ">
            <h2>James Walker</h2>
            <span className="text-gray-400">Ads manager</span>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center space-x-3 bg-white p-5 rounded-[20px]  shadow-[0_1px_10px_rgba(80,68,229,0.3)] justify-start ">
          <div>
            <img src={jessica} alt="" className="rounded-full w-[55px]" />
          </div>
          <div className="flex flex-col ">
            <h2>Jessica Morgan</h2>
            <span className="text-gray-400">Vice president</span>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center space-x-3 bg-white p-5 rounded-[20px]  shadow-[0_1px_10px_rgba(80,68,229,0.3)] justify-start ">
          <div>
            <img src={emily} alt="" className="rounded-full w-[55px]" />
          </div>
          <div className="flex flex-col ">
            <h2>Emily Parker</h2>
            <span className="text-gray-400">Content marketer</span>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center space-x-3 bg-white p-5 rounded-[20px]  shadow-[0_1px_10px_rgba(80,68,229,0.3)] justify-start ">
          <div>
            <img src={ryan} alt="" className="rounded-full w-[55px]" />
          </div>
          <div className="flex flex-col ">
            <h2>Ryan Mitchell</h2>
            <span className="text-gray-400">Content writer</span>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center space-x-3 bg-white p-5 rounded-[20px]  shadow-[0_1px_10px_rgba(80,68,229,0.3)] justify-start ">
          <div>
            <img src={megan} alt="" className="rounded-full w-[55px]" />
          </div>
          <div className="flex flex-col ">
            <h2>Megan Brooks</h2>
            <span className="text-gray-400">Performance manager</span>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center space-x-3 bg-white p-5 rounded-[20px]  shadow-[0_1px_10px_rgba(80,68,229,0.3)] justify-start ">
          <div>
            <img src={amber} alt="" className="rounded-full w-[55px]" />
          </div>
          <div className="flex flex-col ">
            <h2>Amber Foster</h2>
            <span className="text-gray-400">Senior writer</span>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center space-x-3 bg-white p-5 rounded-[20px]  shadow-[0_1px_10px_rgba(80,68,229,0.3)] justify-start  ">
          <div>
            <img src={ashley} alt="" className="rounded-full w-[55px]" />
          </div>
          <div className="flex flex-col ">
            <h2>Ashley Bennett</h2>
            <span className="text-gray-400">Marketing & sales</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
