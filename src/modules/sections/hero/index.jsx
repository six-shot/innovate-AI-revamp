import React from "react";
import { FaChevronRight } from "react-icons/fa6";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center mt-[6.5rem] text-white md:px-0 px-[1rem]">
      <div className="flex gap-3 items-center text-[white] h-[41px] px-[1.25rem]  border border-[#ffffff1f] bg-[#0f0f0f] rounded-[6rem] text-sm">
        <div className="w-[15px] h-[1px] bg-[#90f]" />
        <h4>Unlock Your Creative Potentials</h4>
        <div className="w-[15px] h-[1px] bg-[#90f]" />
      </div>
      <h1 className="md:text-[5rem] text-[3rem] font-medium leading-[1] text-white text-center mt-10">
        The Ultimate AI Toolkit for <br className="md:flex hidden " /> Innovation and Creation
      </h1>
      <p className="text-[#c2c2c2] leading-[1.6] tracking-[-.02rem] text-[#fff9] md:w-[500px] w-full text-center mt-8">
        Get Your Projects Online Fast with the #1 AI Toolkit—No Coding or Design
        Skills Needed
      </p>
      <button className="flex mt-10 items-center gap-2 px-5 h-[47px] text-xs font-medium tracking-[2.4px] uppercase text-white  bg-custom-gradient shadow-[0_-1px_10px_0px_rgba(153,0,255,0.15)] rounded-[6rem]">
        Start 7 free trial
        <span>
          <FaChevronRight />
        </span>
      </button>
    </div>
  );
}
