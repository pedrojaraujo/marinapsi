import React from "react";
import Button from "../Button";

const Banner = ({ title, text }) => {
  return (
    <div className="text-pred">

      <div className="font-trebuchet w-4/5 flex flex-col gap-10">
        <h1 className="2xl:text-[34px] xl:text-2xl lg:text-xl md:text-2xl sm:text-xl py-2">{title}</h1>
        <p className="2xl:text-[20px] xl:text-[18px] sm:text-[14px]">{text}</p>
        <Button text="Converse comigo!" href="https://wa.me/5511987046526" />
      </div>
    </div>
  );
};

export default Banner;