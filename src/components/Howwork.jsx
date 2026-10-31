import React from "react";
import work_mobile_app from "../assets/work_mobile_app.png";
import work_dashboard_managment from "../assets/work_dashboard_management.png";
import work_fitness_app from "../assets/work_fitness_app.png";

const Howwork = () => {
  return (
    <section className="max-w-7xl mx-auto mb-20 scroll-smooth" id="work">
      <div className="flex flex-col justify-center items-center mb-7">
        <h1 className="text-[36px] font-bold p-3">Our latest work</h1>
        <span className="max-w-[450px] text-center text-[#8A8E9B] text-[16px]">
          Browse our portfolio of innovative digital projects that showcase
          creativity, performance, and results.
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-10 lg:space-y-0 md:mx-8 lg:mx-12 ">
        <div className="flex flex-col justify-center items-center max-w-sm  mx-auto lg:max-w-lg ">
          <div className="p-1">
            <img src={work_mobile_app} alt="" className="w-sm lg:w-[300px]" />
          </div>
          <div className="flex flex-col space-y-1 mt-2 lg:max-w-[300px] justify-center">
            <h3 className="font-bold">Mobile App Marketing</h3>
            <span>
              We turn bold ideas into powerful digital solutions that connect...
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center max-w-sm  mx-auto lg:max-w-lg ">
          <div className="p-1">
            <img src={work_fitness_app} alt="" className="w-sm lg:w-[300px]" />
          </div>
          <div className="flex flex-col space-y-1 mt-2 lg:max-w-[300px] justify-center">
            <h3 className="font-bold">Fitness app promotion</h3>
            <span>
              We turn bold ideas into powerful digital solutions that connect...
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center max-w-sm  mx-auto lg:max-w-lg ">
          <div className="p-1">
            <img
              src={work_dashboard_managment}
              alt=""
              className="w-sm lg:w-[300px]"
            />
          </div>
          <div className="flex flex-col space-y-1 mt-2 lg:max-w-[300px] justify-center">
            <h3 className="font-bold">Dashboard management</h3>
            <span>
              We turn bold ideas into powerful digital solutions that connect...
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Howwork;
