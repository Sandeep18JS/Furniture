"use client";
import Image from "next/image";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
type Props = {};

function Banner({}: Props) {
  useGSAP(() => {
    gsap.to(".light", {
      y: 150,
      scrollTrigger: {
        trigger: ".light",
        start: "top 20%",
        invalidateOnRefresh: true,
      },
    });
    gsap.to(".light1", {
      y: 160,
      scrollTrigger: {
        trigger: ".light1",
        start: "top 10%",
        invalidateOnRefresh: true,
      },
    });
    gsap.to(".sofa", {
      y: -160,
      scrollTrigger: {
        trigger: ".sofa",
        start: "top 80%",
        invalidateOnRefresh: true,
      },
    });
    gsap.to(".chair", {
      x: -160,
      scrollTrigger: {
        trigger: ".chair",
        start: "top 20%",
        invalidateOnRefresh: true,
      },
    });
  });
  return (
    <div className="flex lg:flex-row flex-col gap-10 justify-center items-center mt-24 text-[#2F302C]">
      <div className="bg-[#F6F6F6] w-[280px] h-[500px] flex flex-col overflow-hidden  px-6">
        <div className="relative flex bottom-40 ">
          <Image
            src="/images/light1.png"
            width={500}
            height={500}
            alt="light1"
            className="light"
            priority={true}
          ></Image>
          <Image
            src="/images/light2.png"
            width={500}
            height={500}
            alt="light1"
            className="light1 absolute left-12"
            priority={true}
          ></Image>
        </div>
        <div className="flex flex-col gap-6 mt-32  items-start">
          <h1 className="text-[16px] tracking-wide font-extrabold">
            HANGING LIGHT
          </h1>
          <p className=" text-[15px] tracking-wider font-medium text-[#7E7F7C]">
            Upgrade your space with our modern hanging light, featuring sleek
            lines, efficient LED lighting, and adjustable height.
          </p>
          <button className="text-[15px] font-medium text-[#7E7F7C]">
            View More<span className="ml-2">&#8594;</span>
          </button>
        </div>
      </div>

      <div className="relative bg-[#E6EFEA] w-[450px] h-[500px] flex flex-col  ">
        <div className="flex flex-col gap-6 mt-10 items-center px-6">
          <h1 className="text-[16px] tracking-wide font-extrabold">
            DESIGNED SOFA
          </h1>
          <p className=" text-[15px] tracking-wider font-medium text-[#7E7F7C] text-center">
            Introducing our newest sofa, the perfect combination of style and
            comfort, designed to elevate your living space and provide ultimate
            relaxation.
          </p>
          <button className="text-[15px] font-medium text-[#7E7F7C]">
            View More<span className="ml-2">&#8594;</span>
          </button>
        </div>
        <div className=" absolute mt-96 sofa">
          <Image
            src="/images/sofa.png"
            width={500}
            height={500}
            alt="sofa"
            priority={true}
          ></Image>
        </div>
      </div>

      <div className="relative bg-[#F6F6F6] w-[280px] h-[500px] flex flex-col   px-6 overflow-hidden">
        <div className="flex flex-col gap-6 mt-12  items-start">
          <h1 className="text-[16px] tracking-wide font-extrabold">
            NOVA CHAIR
          </h1>
          <p className=" text-[15px] tracking-wider font-medium text-[#7E7F7C]">
            A stylish and comfortable addition to any room,its sleek design and
            plush cushions the ultimate seating experience.
          </p>
          <button className="text-[15px]  font-medium text-[#7E7F7C]">
            View More<span className="ml-2">&#8594;</span>
          </button>
        </div>
        <div className="w-[300px] absolute ml-40 mt-24 chair">
          <Image
            src="/images/chair.png"
            width={500}
            height={500}
            alt="chair"
            priority={true}
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default Banner;
