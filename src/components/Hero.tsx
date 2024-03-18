"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import gsap from "gsap";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(TextPlugin);
type Props = {};

const Hero = (props: Props) => {
  const tl = gsap.timeline();
  useGSAP(() => {
    tl.to(".text", { duration: 1, text: "WELCOME TO OUR", ease: "none" });
    tl.to(".text1", { duration: 1, text: "FURNITURE", ease: "none" });
    tl.to(".text2", { duration: 1, text: "GALLERY", ease: "none" });
    tl.to(".text3", {
      duration: 0.5,
      text: "BROWSE OUR SELECTIONS",
      ease: "none",
    });
    tl.to(".text4", {
      duration: 1,
      text: {
        value:
          "  Featuring sleek designs and innovative materials that seamlessly blend form and function.",
        rtl: true,
      },
      ease: "none",
    });
  });

  return (
    <div className=" w-full  text-[#2F302C]">
      <div
        className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] xl:h-[620px] inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/herobanner1.jpg')",
        }}
      >
        <div className="w-1/2  text-[#2F302C] leading-tight absolute right-0 top-[50px] md:top-[90px] xl:top-[150px]">
          <p className="text-[14px] lg:text-[16px] xl:text-[20px] font-semibold mb-2 text "></p>
          <p className="text-[30px] lg:text-[50px] xl:text-[80px]  font-extrabold text1">
            {" "}
          </p>
          <p className="text-[30px] lg:text-[50px] xl:text-[80px]  font-bold text2"></p>
          <div className="space-y-4">
            <div className="border border-[#2F302C] w-64 mt-4 mb-8"></div>
            <p className="text-[14px] lg:text-[20px] font-semibold text3"></p>
            <p className="w-[380px] text-[10px] lg:text-[16px] text-[#6A6A6A] font-medium tracking-wider text4"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
