import React from "react";
import Button from "../Button";

const Banner = ({ title, text }) => {
  return (
    <div className="relative w-[775px] h-[368px] rounded-[16px] backdrop-blur-sm flex items-center p-10 text-pcream">
      <div className="absolute inset-0 bg-pred opacity-75 rounded-[16px]"></div>
      <div className="relative font-trebuchet w-4/5">
        <h1 className="text-2xl py-2">{title}</h1>
        <p className="py-5">{text}</p>
        <Button text="Converse comigo!" href="#contato"
          width="194px" height="36px" />
      </div>
    </div>
  );
};

export default Banner;
