import React from 'react'
import logo from "../../../assets/Innov-CkOF4qej.png";

export default function Footer() {
  return (
    <div className="max-w-[1440px] mx-auto px-[2rem] text-white">
      <div className="flex justify-between">
        <div className="w-[40%]">
          <div className="flex items-center gap-3">
            <img className="w-[50px]" src={logo} />
            <h4 className="text-[2rem] ">INNOVATE AI</h4>
          </div>
        </div>
        <div className="w-[60%] flex gap-[12rem]">
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
