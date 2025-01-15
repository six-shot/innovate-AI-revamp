import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import ProductTab from "../../components/tab/ProductTab";

export default function Products() {
  return (
    <div className="max-w-[1440px] mx-auto px-[2rem]">
      <div className="flex flex-col items-start">
        <div className="flex gap-3 items-center text-[white] h-[41px] px-[1.25rem]  border border-[#ffffff1f] bg-[#0f0f0f] rounded-[6rem] text-sm">
          <div className="w-[15px] h-[1px] bg-[#90f]" />
          <h4>Products</h4>
          <div className="w-[15px] h-[1px] bg-[#90f]" />
        </div>
      </div>
      <h2 className="md:text-[3.5rem] text-[3rem] font-medium leading-[1] text-white  mt-6">
        Your go-to tool for crafting
        <br className="" /> websites using Page AI
      </h2>
      <p className="text-[#c2c2c2] leading-[1.6] tracking-[-.02rem] text-[#fff9] w-[500px]  my-6">
        Get Your Business Online Fast with the #1 AI Website Builder—No Design
        Skills Needed
      </p>
      <button className="flex items-center gap-2 px-5 h-[47px] text-xs font-medium tracking-[2.4px] uppercase text-white  bg-custom-gradient shadow-[0_-1px_10px_0px_rgba(153,0,255,0.15)] rounded-[6rem]">
        Learn More
        <span>
          <FaChevronRight />
        </span>
      </button>
      <div className="grid grid-cols-8 gap-6 mt-20 text-white">
        <div className="col-span-2 bg-white/5 h-[350px] rounded-[1.5rem] border border-[#ffffff14] p-5 text-center flex flex-col justify-center items-center">
          <div className="w-[200px] h-[200px] mb-4"></div>
          <h4 className="text-[1.2rem]">Debug AI</h4>
          <p className="mt-2">
            Automated Code for Troubleshooting with Debug AI
          </p>
        </div>
        <div className="col-span-4 bg-white/5 h-[350px] rounded-[1.5rem] border border-[#ffffff14] p-5 text-center flex flex-col justify-center items-center ">
          <div className="w-[200px] h-[200px] mb-4"></div>
          <h4 className="text-[1.2rem]">SmartCode AI</h4>
          <p className="mt-2">Smart Coding Assistance with SmartCode AI</p>
        </div>
        <div className="col-span-2 bg-white/5 h-[350px] rounded-[1.5rem] border border-[#ffffff14] p-5 text-center flex flex-col justify-center items-center">
          <div className="w-[200px] h-[200px] mb-4"></div>
          <h4 className="text-[1.2rem]">BuildSite AI</h4>
          <p className="mt-2">Instant Website Generation with BuildSite AI</p>
        </div>
        <div className="col-span-2 bg-white/5 h-[350px] rounded-[1.5rem] border border-[#ffffff14] p-5 text-center flex flex-col justify-center items-center">
          <div className="w-[200px] h-[200px] mb-4"></div>
          <h4 className="text-[1.2rem]">DataFix AI</h4>
          <p className="mt-2">Reliable Input Validation with DataFix AI</p>
        </div>
        <div className="col-span-2 bg-white/5 h-[350px] rounded-[1.5rem] border border-[#ffffff14] p-5 text-center flex flex-col justify-center items-center">
          <div className="w-[200px] h-[200px] mb-4"></div>
          <h4 className="text-[1.2rem]">HostEase AI</h4>
          <p className="mt-2">Simple Static Site Deployment with HostEase AI</p>
        </div>
        <div className="col-span-2 bg-white/5 h-[350px] rounded-[1.5rem] border border-[#ffffff14] p-5 text-center flex flex-col justify-center items-center">
          <div className="w-[200px] h-[200px] mb-4"></div>
          <h4 className="text-[1.2rem]">CodeEdge AI</h4>
          <p className="mt-2">Efficient Code Translation and Enhancement</p>
        </div>
        <div className="col-span-2 bg-white/5 h-[350px] rounded-[1.5rem] border border-[#ffffff14] p-5 text-center flex flex-col justify-center items-center">
          <div className="w-[200px] h-[200px] mb-4"></div>
          <h4 className="text-[1.2rem]">Learn AI</h4>
          <p className="mt-2">
            Interactive Coding Education with Learn AI
          </p>
        </div>
      </div>
      <div>
        <ProductTab/>
      </div>
    </div>
  );
}
