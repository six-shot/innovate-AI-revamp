import React from 'react'
import quill from "../../../assets/Logo1.png";

export default function Footer() {
  return (
    <div className="max-w-[1440px] mx-auto md:px-[2rem] px-[1rem] text-white">
      <div className="flex md:flex-row flex-col justify-between">
        <div className="md:w-[40%] md:mb-0 mb-8">
          <div className="flex items-center gap-3">
            <img className="w-[50px]" src={quill} />
            <h4 className="text-[2rem] ">QUILL AI</h4>
          </div>
        </div>
        <div className="md:w-[60%] flex flex-wrap gap-[5rem]  md:gap-[12rem]">
          <div className="flex flex-col">
            <h5 className="">Links</h5>
            <ul className="flex flex-col gap-3 mt-5">
              <li>Home</li>
              <li>About Us</li>
              <li>Features</li>
              <li>Team</li>
              <li>Templates</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h5 className="">Links</h5>
            <ul className="flex flex-col gap-3 mt-5">
              <li>Home</li>
              <li>About Us</li>
              <li>Features</li>
              <li>Team</li>
       
            </ul>
          </div>
          <div className="flex flex-col">
            <h5 className="">Links</h5>
            <ul className="flex flex-col gap-3 mt-5">
              <li>Home</li>
              <li>About Us</li>
              <li>Features</li>
           
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
