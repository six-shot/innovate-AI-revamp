import React from "react";
import { FaChevronRight } from "react-icons/fa6";

export default function CTA() {
  return (
    <div className="max-w-[1440px] mx-auto  md:px-[2.5rem] px-[1rem]">
      <div className="border relative border-[rgba(255,255,255,0.12)] bg-[#ffffff0d] rounded-[1.25rem] md:p-[2.5rem] p-[3.75rem] flex justify-center items-center flex-col overflow-hidden">
        <div className="flex flex-col items-center gap-[1rem] text-center">
          <h2 className="text-[3.25rem] leading-[1.2] text-white">
            Experience the Magic
          </h2>
          <p className="max-w-[28.75rem] text-center text-[#c2c2c2]">
            Be the first to hear about the latest news, updates and important
            events in the RetoSwap ecosystem!
          </p>
          <button className=" mt-7 flex items-center gap-2 px-5 h-[47px] text-xs font-medium tracking-[2.4px] uppercase text-white  bg-custom-gradient shadow-[0_-1px_10px_0px_rgba(153,0,255,0.15)] rounded-[6rem]">
            Try Now
            <span>
              <FaChevronRight />
            </span>
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <div className="prime-line-divider relative z-[1]"></div>
      </div>
    </div>
  );
}
