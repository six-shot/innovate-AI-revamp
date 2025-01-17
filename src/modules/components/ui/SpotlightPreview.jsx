import React from "react";
import { Spotlight } from "./Spotlight";
import Navbar from "../global/navbar";
import { FaChevronRight } from "react-icons/fa6";

export function SpotlightPreview() {
  return (
    <div className="relative">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <Navbar />
      <div className="md:mt-[6.5rem] mt-[3rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <div className=" md:px-0 px-[1rem] max-w-[1440px]  mx-auto relative z-10  w-full pt-20 md:pt-0 flex flex-col justify-center items-center">
          <div className="flex gap-3 items-center text-[white] h-[41px] px-[1.25rem]  border border-[#ffffff1f] bg-[#0f0f0f] rounded-[6rem] text-sm">
            <div className="w-[15px] h-[1px] bg-[#90f]" />
            <h4>Unlock Your Creative Potentials</h4>
            <div className="w-[15px] h-[1px] bg-[#90f]" />
          </div>
          <h1 className="mt-10 md:text-[5rem] text-[3rem] font-medium leading-[1] text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            The Ultimate AI Toolkit for <br className="md:flex hidden " />{" "}
            Innovation and Creation
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            Get Your Projects Online Fast with the #1 AI Toolkit—No Coding or
            Design Skills Needed
          </p>
          <button className="flex mt-10 items-center gap-2 px-5 h-[47px] text-xs font-medium tracking-[2.4px] uppercase text-white  bg-custom-gradient shadow-[0_-1px_10px_0px_rgba(153,0,255,0.15)] rounded-[6rem]">
            Start 7 free trial
            <span>
              <FaChevronRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
