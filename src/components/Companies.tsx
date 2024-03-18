import Image, { StaticImageData } from "next/image";
import React from "react";
import one from "../../public/companies/1.png";
import two from "../../public/companies/2.png";
import three from "../../public/companies/3.png";
import four from "../../public/companies/4.png";
import five from "../../public/companies/5.png";
import six from "../../public/companies/6.png";

type Props = {
  logo: StaticImageData;
};
const logos: Props[] = [
  {
    logo: one,
  },
  {
    logo: two,
  },
  {
    logo: three,
  },
  {
    logo: four,
  },
  {
    logo: five,
  },
  {
    logo: six,
  },
  {
    logo: five,
  },
  {
    logo: three,
  },
  {
    logo: two,
  },
  {
    logo: six,
  },
  {
    logo: one,
  },
  {
    logo: four,
  },
];

const Companies = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-24 gap-10 text-[#2F302C]">
      <h1 className="text-[28px] font-extrabold">TRUSTED BY</h1>
      <div className="w-[1100px] flex flex-wrap justify-center gap-24">
        {logos.map((logo, index) => (
          <div key={index} className="flex">
            <Image width={100} height={100} src={logo.logo} alt="logo"></Image>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
