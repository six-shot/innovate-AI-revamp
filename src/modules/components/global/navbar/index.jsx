import React from "react";
import { FaAngleRight, FaChevronRight } from "react-icons/fa6";
import quill from "../../../../assets/Logo1.png";
import { TbMenu } from "react-icons/tb";

export default function Navbar() {
  return (
    <div className="relative">
      <div className="max-w-[1440px] mx-auto  ">
        <div className="flex justify-between items-center md:px-[2rem] px-[1rem] h-[86px] relative z-[10] ">
          <div className="flex gap-[1.5rem] items-center  pl-1 pr-2 py-1 rounded-full">
            <div className="flex items-center gap-2">
              <img
                className="w-[48px] h-[48px]  rounded-full"
                src={quill}
                alt="quill"
              />
              <h4 className="uppercase text-[20px] text-white">QUill Ai</h4>
            </div>
            <nav className="md:flex hidden">
              <ul className="flex items-center gap-3 text-white text-sm">
                <li className="py-2.5 px-4  ">Home</li>
                <li className="py-2.5 px-4  ">Product</li>
                <li className="py-2.5 px-4  ">Features</li>
                <li className="py-2.5 px-4   ">Buy</li>
              </ul>
            </nav>
          </div>
          <div className="text-white text-[25px] md:hidden flex">
            <TbMenu />
          </div>
          <div className="md:flex hidden ">
            <button className="flex items-center gap-2 px-5 h-[47px] text-xs font-medium tracking-[2.4px] uppercase text-white  bg-custom-gradient shadow-[0_-1px_10px_0px_rgba(153,0,255,0.15)] rounded-[6rem]">
              Whitepaper
              <span>
                <FaChevronRight />
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* <div className="bg-purple-gradient w-[500px] h-[400px] rounded-full blur-[300px] absolute top-0 left-0 z-[5]"></div> */}
    </div>
  );
}
