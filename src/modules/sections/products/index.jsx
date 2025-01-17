import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import ProductTab from "../../components/tab/ProductTab";
import DebugAi from "../../../assets/DebugAI.png"
import SmartCodeAi from "../../../assets/SmartCodeAI.png"
import BuildSiteAi from "../../../assets/BuildSiteAI.png"
import DataFixAi from "../../../assets/DatFixAI.png"
import HostEaseAi from "../../../assets/HostEaseAI.png"
import CodeEdgeAi from "../../../assets/CodeEdgeAI.png"
import LearnAi from "../../../assets/LearnAI.png"

export default function Products() {
  const aiTools = [
    {
      title: "Debug AI",
      description: "Automated Code for Troubleshooting with Debug AI",
      imgSrc: DebugAi,
    },
    {
      title: "SmartCode AI",
      description: "Smart Coding Assistance with SmartCode AI",
      colSpan: 4,
      imgSrc: SmartCodeAi,
    },
    {
      title: "BuildSite AI",
      description: "Instant Website Generation with BuildSite AI",
      imgSrc: BuildSiteAi,
    },
    {
      title: "DataFix AI",
      description: "Reliable Input Validation with DataFix AI",
      imgSrc: DataFixAi,
    },
    {
      title: "HostEase AI",
      description: "Simple Static Site Deployment with HostEase AI",
      imgSrc: HostEaseAi,
    },
    {
      title: "CodeEdge AI",
      description: "Efficient Code Translation and Enhancement",
      imgSrc: CodeEdgeAi,
    },
    {
      title: "Learn AI",
      description: "Interactive Coding Education with Learn AI",
      imgSrc: LearnAi,
    },
  ];
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
        Your Go-To AI Toolkit for
        <br className="" /> Building and Creating using Quill AI
      </h2>
      <p className="text-[#c2c2c2] leading-[1.6] tracking-[-.02rem] text-[#fff9] w-[500px]  my-6">
        Build websites, enhance code, host projects, and more—empowered by the
        leading AI innovation platform, no technical skills needed.
      </p>
      <button className="flex items-center gap-2 px-5 h-[47px] text-xs font-medium tracking-[2.4px] uppercase text-white  bg-custom-gradient shadow-[0_-1px_10px_0px_rgba(153,0,255,0.15)] rounded-[6rem]">
        Learn More
        <span>
          <FaChevronRight />
        </span>
      </button>
      <div className="grid grid-cols-8 gap-6 mt-20 text-white">
        {aiTools.map((tool, index) => (
          <div
            key={index}
            className={`relative col-span-${
              tool.colSpan || 2
            } bg-white/5 h-[350px] rounded-[1.5rem] border border-[#ffffff14] p-5 text-center flex flex-col justify-end items-center cursor-pointer`}
            style={{
              backgroundImage: `url(${tool.imgSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 rounded-[1.5rem]"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center">
              <h4 className="text-[1.2rem] font-semibold">{tool.title}</h4>
              <p className="mt-2 text-sm">{tool.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <ProductTab />
      </div>
    </div>
  );
}
