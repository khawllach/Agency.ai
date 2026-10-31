import React from "react";
import ads from "../assets/ads_icon.svg";
import content_icon from "../assets/content_icon.svg";
import marketing_icon from "../assets/marketing_icon.svg";
import social_icon from "../assets/social_icon.svg";

const Help = () => {
  return (
    <section className="max-w-7xl mx-auto mb-20 scroll-smooth" id="help">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[36px] font-bold p-3">How can we help?</h1>
        <span className="max-w-[450px] text-center text-[#8A8E9B] text-[16px]">
          From strategy to execution, we craft digital solutions that move your
          business forward.
        </span>
      </div>
      <div className="grid grid-cols-1 max-w-sm sm:max-w-xl md:grid-cols-2 md:mx-10 grid-rows-2 gap-10 my-10 md:max-w-6xl mx-auto">
        <div className="flex flex-row justify-center items-center rounded-xl px-[7px]  shadow-[0_1px_10px_rgba(80,68,229,0.3)]  ">
          <div className="rounded-full p-2 m-5  bg-gray-50">
            <div className=" rounded-full bg-white">
              <img
                src={ads}
                alt=""
                className="w-[150px]  md:w-[150px] md:h-[70px] lg:w-[100px] lg:h-[85px]"
              />
            </div>
          </div>
          <div className=" ">
            <h3 className="font-bold text-[20px] md:text-[18px]">
              Advertising
            </h3>
            <p className="text-gray-500 text-[18px] md:text-[14px] lg:text-[15px]">
              We turn bold ideas into powerful digital solutions that connect,
              engage...
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center rounded-xl p-[1.5px]  bg-linear-to-br from-purple-500 to-blue-500">
          <div className=" flex flex-row justify-center items-center px-[4px] bg-white py-3 rounded-xl">
            <div className=" rounded-full p-2 m-5 bg-gray-50">
              <div className=" rounded-full bg-white ">
                <img
                  src={marketing_icon}
                  alt=""
                  className="w-[150px] md:w-[150px] md:h-[70px] lg:w-[100px] lg:h-[85px]"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center  ">
              <h3 className="font-bold text-[20px] md:text-[18px]">
                Content Marketing
              </h3>
              <p className="text-gray-500 text-[18px] pr-2 md:text-[14px] lg:text-[15px]">
                We turn bold ideas into powerful digital solutions that connect,
                engage...
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center rounded-xl px-[7px]  shadow-[0_1px_10px_rgba(80,68,229,0.3)] ">
          <div className="rounded-full p-2 m-5 bg-gray-50">
            <div className=" rounded-full bg-white">
              <img
                src={content_icon}
                alt=""
                className="w-[150px]  md:w-[150px] md:h-[70px] lg:w-[100px] lg:h-[85px]"
              />
            </div>
          </div>
          <div className=" ">
            <h3 className="font-bold text-[20px] md:text-[18px]">
              Content Writing
            </h3>
            <p className="text-gray-500 text-[18px] md:text-[14px] lg:text-[15px]">
              We turn bold ideas into powerful digital solutions that connect,
              engage...
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center rounded-xl px-[7px]  shadow-[0_1px_10px_rgba(80,68,229,0.3)] ">
          <div className="rounded-full p-2 m-5 bg-gray-50">
            <div className=" rounded-full bg-white">
              <img
                src={social_icon}
                alt=""
                className="w-[150px]  md:w-[150px] md:h-[70px] lg:w-[100px] lg:h-[85px]"
              />
            </div>
          </div>
          <div className=" ">
            <h3 className="font-bold text-[20px] md:text-[18px]">
              Social Media
            </h3>
            <p className="text-gray-500 text-[18px] md:text-[14px] lg:text-[15px]">
              We turn bold ideas into powerful digital solutions that connect,
              engage...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help;
