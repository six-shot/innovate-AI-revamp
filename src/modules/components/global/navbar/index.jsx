import React, { useState } from "react";
import { FaAngleRight, FaChevronRight } from "react-icons/fa6";
import quill from "../../../../assets/Logo1.png";
import { TbMenu } from "react-icons/tb";

export default function Navbar() {

    const [navbar, setNavbar] = useState(false);
      const showSidebar = () => setNavbar(!navbar);
      const closeSidebar = () => setNavbar(false);


  return (
    <div className="relative bg-transparent">
      <div className="max-w-[1440px] mx-auto  ">
        <div className="flex justify-between items-center md:px-[2rem] px-[1rem] h-[86px] relative ">
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

          <div className="md:hidden block fixed z-[999] right-6">
            <div onClick={showSidebar} className="cursor-pointer group ">
              <div className="space-y-[4px]">
                <span
                  className={`block h-[3px] w-[25px] origin-center rounded-full bg-[white] transition-transform ease-in-out ${
                    navbar ? "translate-y-1.5 rotate-45" : ""
                  }`}
                ></span>
                <span
                  className={`block h-[3px] w-[25px] origin-center rounded-full bg-[white] transition-all duration-500 ease-in-out ${
                    navbar ? "-translate-x-6 opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block h-[3px] w-[25px] origin-center rounded-full bg-[white] transition-transform ease-in-out ${
                    navbar ? "-translate-y-2 -rotate-45" : ""
                  }`}
                ></span>
              </div>
            </div>
          </div>
          <div className="sm:flex">
            <nav
              className={`fixed top-0 right-0 w-full h-screen bg-[#0E0E0E] z-[99] transition-[right] duration-[250ms] ease-in ${
                navbar ? "right-0 duration-[200ms]" : "right-[-120%]"
              }`}
            >
              <div className="h-[86px] px-[1rem] flex items-center">
                <div className="flex items-center gap-2 ">
                  <img
                    className="w-[48px] h-[48px]  rounded-full"
                    src={quill}
                    alt="quill"
                  />
                  <h4 className="uppercase text-[20px] text-white">QUill Ai</h4>
                </div>
              </div>
              <div className="h-full mt-[15%]">
                <nav className="flex justify-center items-center flex-col gap-[15px] pt-[50px] px-6">
                  <ul className="flex flex-col items-center gap-3 text-white text-sm">
                    <li className="py-2.5 px-4  ">Home</li>
                    <li className="py-2.5 px-4  ">Product</li>
                    <li className="py-2.5 px-4  ">Features</li>
                    <li className="py-2.5 px-4   ">Buy</li>
                  </ul>
                  <button className=" mt-2.5 flex items-center gap-2 px-5 h-[47px] text-xs font-medium tracking-[2.4px] uppercase text-white  bg-custom-gradient hover:bg-custom-gradientt shadow-[0_-1px_10px_0px_rgba(153,0,255,0.15)] rounded-[6rem] transition-all ease-linear duration-[250ms]">
                    Whitepaper
                    <span>
                      <FaChevronRight />
                    </span>
                  </button>
                </nav>
              </div>
            </nav>
          </div>
          <div className="md:flex hidden ">
            <button className="flex items-center gap-2 px-5 h-[47px] text-xs font-medium tracking-[2.4px] uppercase text-white  bg-custom-gradient hover:bg-custom-gradientt shadow-[0_-1px_10px_0px_rgba(153,0,255,0.15)] rounded-[6rem] transition-all ease-linear duration-[250ms]">
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
