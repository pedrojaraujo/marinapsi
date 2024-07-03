import React from "react";
import Button from "../Button";

const Banner = ({ title, text }) => {
  return (
    <div className="
    relative 
    2xl:w-[825px] 
    xl:w-[675px] 
    lg:w-[575px] 
    md:w-[575px] 
    sm:w-[475px]
    2xl:h-[380px] 
    xl:h-[280px] 
    lg:h-[268px] 
    md:h-[268px] 
    rounded-[16px] 
    backdrop-blur-sm 
    flex 
    items-center
    p-4 
    md:p-10 
    text-pcream">
      <div className="absolute inset-0 bg-pred opacity-75 rounded-[16px]"></div>
      <div className="relative font-trebuchet 2xl:w-[685px] xl:w-[585px] lg:w-[485px] md:w-4/5 sm:w-[485px]">
        <h1 className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-2xl sm:text-xl py-2">{title}</h1>
        <p className="py-2 md:py-5 xl:text-[18px] sm:text-[14px] ">{text}</p>
        <Button text="Converse comigo!" href="#contato" />
      </div>
    </div>
  );
};

export default Banner;