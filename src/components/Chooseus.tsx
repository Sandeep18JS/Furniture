import React from "react";
import { whys } from ".";

const Chooseus = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-24 gap-10 text-[#2F302C]">
      <h1 className="text-[28px] font-extrabold">WHY CHOOSE US ?</h1>
      <div className=" flex flex-wrap justify-center gap-12">
        {whys.map((why, index) => (
          <div
            key={index}
            className="w-[350px] flex flex-col text-center gap-4"
          >
            <div className="flex justify-center">
              <why.icon size={50} strokeWidth={1} />
            </div>
            <h1 className="text-[16px] font-bold">{why.title}</h1>
            <p className="text-[15px] text-[#7E7F7C] font-medium ">
              {why.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chooseus;
