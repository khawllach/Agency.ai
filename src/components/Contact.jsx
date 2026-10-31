import React from "react";
import person_icon from "../assets/person_icon.svg";
import arrow_icon from "../assets/arrow_icon.svg";
import email_icon from "../assets/email_icon.svg";
const Contact = () => {
  return (
    <section className="max-w-7xl mx-auto mb-20 scroll-smooth" id="contact">
      <div className="flex flex-col justify-center items-center mb-10">
        <h1 className="text-[36px] font-bold p-3">Reach out to us</h1>
        <span className="max-w-[450px] text-center text-[#8A8E9B] text-[16px]">
          Ready to grow your brand? Let’s connect and build something
          exceptional together.
        </span>
      </div>
      <div className="flex justify-center max-w-[500px] mx-auto">
        <div className="flex flex-col justify-center items-start space-y-3 ">
            <div className="flex flex-col md:flex-row space-y-4 md:space-x-7 md:space-y-0 justify-start ">
                
                <div className="flex flex-col space-y-1 justify-center items-start">
                <label htmlFor="">Your name</label>
                <div className="flex flex-row space-x-1 border p-2 rounded-sm">
                    <img src={person_icon} alt="" className="w-[17px] " />
                    <input
                    type="text"
                    placeholder="Enter your name"
                    className="pr-50 md:pr-30"
                    />
                </div>
                </div>
                <div className="flex flex-col space-y-1 justify-center items-start">
                <label htmlFor="">Email id</label>
                <div className="flex flex-row space-x-1 border p-2 rounded-sm">
                    <img src={email_icon} alt="" className="w-[17px] " />
                    <input
                    type="text"
                    placeholder="Enter your email"
                    className="pr-50 md:pr-30"
                    />
                </div>
                </div>

            </div>

          <div className="flex flex-col space-y-1 justify-center items-start">
            <label htmlFor="">Message</label>
            <div className="flex flex-row space-x-1 border p-2 rounded-sm">
              <textarea
                placeholder="Enter your message"
                className="w-full px-4 py-3 pr-55 md:pr-120"
              ></textarea>
            </div>
          </div>

          <div className="flex justify-center items-center text-center rounded-3xl bg-[#5044E5] mt-5 px-5">
            <button className="p-2 text-white">Submit</button>
            <img src={arrow_icon} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
