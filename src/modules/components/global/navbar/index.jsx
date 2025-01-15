import React from "react";
 import { FaAngleRight, FaChevronRight } from "react-icons/fa6";
 import innovate from "../../../../assets/Innov-CkOF4qej.png"

export default function Navbar() {
  return (
    <div className="relative">
      <div className="max-w-[1440px] mx-auto  ">
        <div className="flex justify-between items-center px-[2rem] h-[86px] relative z-[10] ">
          <div className="flex gap-[1.5rem] items-center bg-[#ffffff1d] backdrop-blur-[10px] pl-1 pr-2 py-1 rounded-full">
            <div>
              <img
                className="w-[48px] h-[48px]  rounded-full"
                src={innovate}
                alt="innovate"
              />
            </div>
            <nav>
              <ul className="flex items-center gap-3 text-white text-sm">
                <li className="py-2.5 px-6 border border-[#ffffff17] backdrop-blur-[5px] rounded-full shadow-[0_-1px_10px_0px_#ffffff0e)] bg-[#ffffff06] ">
                  Home
                </li>

                <li className="py-2.5 px-6 border border-[#ffffff17] backdrop-blur-[5px] rounded-full shadow-[0_-1px_10px_0px_#ffffff0e)] bg-[#ffffff06] ">
                  Product
                </li>

                <li className="py-2.5 px-6 border border-[#ffffff17] backdrop-blur-[5px] rounded-full shadow-[0_-1px_10px_0px_#ffffff0e)] bg-[#ffffff06] ">
                  Features
                </li>

                <li className="py-2.5 px-6 border border-[#ffffff17] backdrop-blur-[5px] rounded-full shadow-[0_-1px_10px_0px_#ffffff0e)] bg-[#ffffff06]  ">
                  Buy
                </li>
              </ul>
            </nav>
          </div>
          <div className="">
            <button className="flex items-center gap-2 px-5 h-[47px] text-xs font-medium tracking-[2.4px] uppercase text-white  bg-custom-gradient shadow-[0_-1px_10px_0px_rgba(153,0,255,0.15)] rounded-[6rem]">
              Learn More
              <span>
                <FaChevronRight />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-purple-gradient w-[500px] h-[400px] rounded-full blur-[300px] absolute top-0 left-0 z-[5]"></div>
    </div>
  );
}
