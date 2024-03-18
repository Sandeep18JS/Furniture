import { links } from ".";
import React from "react";
import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <div className="space-y-16 mt-24 mb-16 text-[#2F302C]">
      <div className=" lg:mx-56 border-b border-[#D4D4D4] w-[600px] lg:w-[1100px]"></div>
      <div className="flex justify-center items-center gap-4  lg:gap-32">
        {links.map((link, index) => (
          <div key={index} className="space-y-6">
            <h1 className="text-[13px] lg:text-[18px] font-extrabold">
              {link.heading}
            </h1>
            <ul className="text-[12px] lg:text-[15px] font-medium text-[#7E7F7C] space-y-6">
              <li>{link.link1}</li>
              <li> {link.link2}</li>
              <li>{link.link3}</li>
              <li> {link.link4}</li>
              <li>{link.link5}</li>
            </ul>
          </div>
        ))}
      </div>
      <div className=" lg:mx-56 border-b border-[#D4D4D4] w-[600px] lg:w-[1100px]"></div>
      <div className="flex justify-between items-center mx-4 gap-12 lg:gap-0 lg:ml-56 lg:mr-48 ">
        <p className="text-[12px] lg:text-[15px] font-medium text-[#7E7F7C]">
          Furniture © Copyright 2024, Inc. All rights reserved
        </p>
        <div className="flex gap-6">
          <Linkedin />
          <Linkedin />
          <Linkedin />
          <Linkedin />
        </div>
      </div>
    </div>
  );
};

export default Footer;
