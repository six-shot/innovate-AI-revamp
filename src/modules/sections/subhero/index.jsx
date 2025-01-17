import React from "react";
import { VscDebug } from "react-icons/vsc";
import { MdFiberSmartRecord } from "react-icons/md";
import { SiBuildkite, SiDatabricks, SiSololearn } from "react-icons/si";
import { GrHost } from "react-icons/gr";
import { IoCodeSlash } from "react-icons/io5";
import sound from "../../../assets/sound.png";
export default function SubHero() {
  return (
    <div className="my-20 ">
      {" "}
      <div className=" max-w-[1440px] mx-auto md:px-[2rem] px-[1rem] text-white">
        <div className="flex  md:gap-6 gap-4">
          <div className="grid md:grid-cols-6  grid-cols-1 md:gap-5 w-full">
            <div className="md:col-span-2 flex flex-col justify-between bg-white/5 h-[500px] w-full rounded-[1.5rem] border border-[#ffffff14] py-5 px-5">
              <div>
                <h4 className="text-[1.7rem]"> Debug AI </h4>
                <div className="flex flex-col  gap-1">
                  <div className="mt-2">
                    <p className="text-xs mb-2">Enter Challenges</p>
                    <div className="w-full h-[50px] border border-[#ffffffb6] rounded-[0.5rem]">
                      <input
                        type="text"
                        className="w-full h-full bg-transparent outline-none px-3 placeholder:text-sm"
                        placeholder="Enter your code"
                      />
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-xs mb-2">Enter Language</p>
                    <div className="w-full h-[50px] border border-[#ffffffb6] rounded-[0.5rem]">
                      <input
                        type="text"
                        className="w-full h-full bg-transparent outline-none px-3 placeholder:text-sm"
                        placeholder="Enter your code"
                      />
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-xs mb-2">Enter your purpose prompt </p>
                    <div className="w-full h-[120px] border border-[#ffffffb6] rounded-[0.5rem]">
                      <input
                        type="text"
                        className="w-full h-full bg-transparent outline-none px-3 placeholder:text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button className="flex justify-center items-center px-5 h-[47px] text-xs font-medium tracking-[2.4px] uppercase text-white  bg-custom-gradient shadow-[0_-1px_10px_0px_rgba(153,0,255,0.15)] rounded-[6rem]">
                Generate
              </button>
            </div>
            <div className="md:flex hidden md:col-span-4  h-[500px] w-full ">
              <div className="flex flex-col gap-5 h-full">
                <div className="bg-white/5 h-[60%] rounded-[1.5rem] border border-[#ffffff14] py-5 px-5">
                  <h4 className="text-[1.7rem] mb-5"> Output Code</h4>
                  <h5>
                    Hey, welcome to Quill AI! Quill is an AI toolkit that
                    revolutionizes innovation with its no-code products. With
                    Quill, you can write code without any development knowledge,
                    validate and debug your existing code, and create no-code,
                    drag-and-drop websites effortlessly. Hosting? We've got you
                    covered—all through our comprehensive set of toolkits.
                    Whether you're a beginner or a seasoned developer, Quill
                    empowers you to bring your ideas to life faster than ever.
                    Say goodbye to complexity and hello to seamless creativity
                    with Quill AI, where innovation meets simplicity. Let's
                    build the future together!
                  </h5>
                </div>

                <div className="bg-white/5 h-[40%] rounded-[1.5rem] border border-[#ffffff14] flex items-center justify-center">
                  <img src={sound} className="w-full h-full" alt="sound" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[80px] h-full bg-white/5 rounded-full border border-[#ffffff14] flex flex-col gap-5 items-center py-3">
            <div className="relative group">
              <div className="cursor-pointer bg-[#0f1118] w-[50px] h-[50px] rounded-full flex items-center justify-center text-white">
                <VscDebug className="text-[20px]" />
              </div>
              <div className="absolute bottom-full mb-2 w-max px-2 py-1 text-sm text-white bg-black rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Debug AI
              </div>
            </div>
            <div className="relative group">
              <div className="cursor-pointer bg-[#0f1118] w-[50px] h-[50px] rounded-full flex items-center justify-center text-white">
                <MdFiberSmartRecord className="text-[20px]" />
              </div>
              <div className="absolute bottom-full mb-2 w-max px-2 py-1 text-sm text-white bg-black rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                SmartCode AI
              </div>
            </div>
            <div className="relative group">
              <div className=" cursor-pointer bg-[#0f1118] w-[50px] h-[50px] rounded-full flex items-center justify-center text-white">
                <SiBuildkite className="text-[20px]" />
              </div>
              <div className="absolute bottom-full mb-2 w-max px-2 py-1 text-sm text-white bg-black rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                BuildSite AI
              </div>
            </div>
            <div className="relative group">
              <div className="cursor-pointer bg-[#0f1118] w-[50px] h-[50px] rounded-full flex items-center justify-center text-white">
                <SiDatabricks className="text-[20px]" />
              </div>
              <div className="absolute bottom-full mb-2 w-max px-2 py-1 text-sm text-white bg-black rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                DataFix AI
              </div>
            </div>
            <div className="relative group">
              <div className="cursor-pointer bg-[#0f1118] w-[50px] h-[50px] rounded-full flex items-center justify-center text-white">
                <GrHost className="text-[20px]" />
              </div>
              <div className="absolute bottom-full mb-2 w-max px-2 py-1 text-sm text-white bg-black rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                HostEase AI
              </div>
            </div>
            <div className="relative group">
              <div className="cursor-pointer bg-[#0f1118] w-[50px] h-[50px] rounded-full flex items-center justify-center text-white">
                <IoCodeSlash className="text-[20px]" />
              </div>
              <div className="absolute bottom-full mb-2 w-max px-2 py-1 text-sm text-white bg-black rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                CodeEdge AI
              </div>
            </div>
            <div className="relative group">
              <div className="cursor-pointer bg-[#0f1118] w-[50px] h-[50px] rounded-full flex items-center justify-center text-white">
                <SiSololearn className="text-[20px]" />
              </div>
              <div className="absolute bottom-full mb-2 w-max px-2 py-1 text-sm text-white bg-black rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn AI
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden flex md:col-span-4   w-full px-[1rem] mt-5 text-white ">
        <div className="flex flex-col gap-5 h-full">
          <div className="bg-white/5 h-[60%] rounded-[1.5rem] border border-[#ffffff14] py-5 px-5">
            <h4 className="text-[1.7rem] mb-5"> Output Code</h4>
            <h5>
              Hey, welcome to Quill AI! Quill is an AI toolkit that
              revolutionizes innovation with its no-code products. With Quill,
              you can write code without any development knowledge, validate and
              debug your existing code, and create no-code, drag-and-drop
              websites effortlessly. Hosting? We've got you covered—all through
              our comprehensive set of toolkits. Whether you're a beginner or a
              seasoned developer, Quill empowers you to bring your ideas to life
              faster than ever. Say goodbye to complexity and hello to seamless
              creativity with Quill AI, where innovation meets simplicity. Let's
              build the future together!
            </h5>
          </div>

          <div className="bg-white/5 h-[40%] rounded-[1.5rem] border border-[#ffffff14] flex items-center justify-center">
            <img src={sound} className="w-full h-full" alt="sound" />
          </div>
        </div>
      </div>
      <div className="flex justify-center my-10 ">
        <div className="border border-[#ffffff1f] bg-[#0f0f0f] rounded-full">
          <div className="flex flex-wrap justify-center gap-10 items-center  w-auto md:h-[41px] h-full px-[1.25rem] text-white    ">
            <div className="flex items-center gap-2">
              <VscDebug className="text-[20px]" />
              <h4>Debug AI</h4>
            </div>
            <div className="flex items-center gap-2">
              <MdFiberSmartRecord className="text-[20px]" />
              <h4>SmartCode AI</h4>
            </div>
            <div className="flex items-center gap-2">
              <SiBuildkite className="text-[20px]" />
              <h4>BuildSite AI</h4>
            </div>
            <div className="flex items-center gap-2">
              <SiDatabricks className="text-[20px]" />
              <h4>DataFix AI</h4>
            </div>
            <div className="flex items-center gap-2">
              <GrHost className="text-[20px]" />
              <h4>HostEase AI</h4>
            </div>
            <div className="flex items-center gap-2">
              <IoCodeSlash className="text-[20px]" />
              <h4>CodeEdge AI</h4>
            </div>
            <div className="flex items-center gap-2">
              <SiSololearn className="text-[20px]" />
              <h4>Learn AI</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="prime-line-divider relative z-[1]"></div>
      </div>
    </div>
  );
}
