"use client";
import Image from "next/image";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
type Props = {};

const Buynow = (props: Props) => {
  useGSAP(() => {
    gsap.to(".mlights", {
      y: 380,
      scrollTrigger: {
        trigger: ".mlights",
        start: "top 10%",
        end: "bottom 100%",
        invalidateOnRefresh: true,
      },
    });
  });
  return (
    <div className="relative text-[#2F302C] max-w-6xl mx-auto bg-[#F6F6F6] mt-24 p-8 lg:p-12 overflow-hidden">
      <div className="flex justify-between items-center">
        <div className="flex flex-col w-[340px] gap-2">
          <h1 className="text-[20px] md:text-[32px] font-extrabold">
            MORDERN BRONZE HANGING LIGHT
          </h1>

          <p> &#9733; &#9733; &#9733; &#9733; &#9733;</p>

          <p>
            <del>$3252.41</del>
          </p>
          <h1 className="text-[20px] md:text-[32px] font-extrabold">
            $2352.41
            <span className="bg-[#CE0000] text-[16px] font-bold rounded text-white p-1 absolute md:mt-2 ml-3">
              -30%
            </span>
          </h1>
        </div>
        <div className="hidden lg:block absolute mb-[800px] ml-[360px] mlights">
          <Image
            width={300}
            height={300}
            src="/images/mlights.png"
            alt="mlights"
          ></Image>
        </div>
        <div className="flex flex-col gap-16">
          <p className="w-[340px]   text-right">
            Stunning lighting fixture that combines contemporary style with
            timeless elegance. Featuring a sleek and minimalist design, this
            hanging light is crafted from high-quality bronze and finished with
            a smooth and lustrous surface.
          </p>
          <button className="bg-[#2F302C] text-white w-52 h-11 ml-32">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Buynow;
