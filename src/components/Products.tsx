"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { Items } from ".";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Products = () => {
  const [state, setState] = useState(true);
  const containerRef = useRef(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setState(window.innerWidth < 1024);
      };
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
  useGSAP(() => {
    gsap.to(containerRef.current, {
      xPercent: -60,
      x: 100,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => innerWidth * 3,
        scrub: true,
        pin: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });
  });

  return (
    <>
      <h1 className="text-[28px] font-extrabold text-center mt-24">
        FEATURED PRODUCTS
      </h1>

      {!state ? (
        <div
          ref={containerRef}
          className=" relative  ml-[450px]  flex flex-col justify-center items-center "
        >
          <div className=" flex gap-6 mt-32">
            {Items.map((item, index) => (
              <div key={index} className="w-[320px] h-[500px]  space-y-4  ">
                <Image
                  src={item.img}
                  width={300}
                  height={100}
                  alt="img"
                ></Image>
                <div className="flex flex-col justify-center items-center gap-1">
                  <h1 className="text-[15px] font-medium">{item.name}</h1>
                  <p> &#9733; &#9733; &#9733; &#9733; &#9733; </p>
                  <h1>{item.price}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className=" mt-12 ml-8">
          <div className="flex flex-wrap gap-4">
            {Items.map((item, index) => (
              <div key={index} className=" space-y-4">
                <Image
                  src={item.img}
                  width={200}
                  height={100}
                  alt="img"
                ></Image>
                <div className="flex flex-col text-center justify-center items-center gap-1">
                  <h1 className="text-[13px] font-medium ">{item.name}</h1>
                  <p> &#9733; &#9733; &#9733; &#9733; &#9733; </p>
                  <h1>{item.price}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
