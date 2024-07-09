import React from "react";
import Button from "../Button";
import Link from "next/link";

const Banner = ({ title, text }) => {
  return (
    <div className="text-pred flex w-full justify-center">
      <div className="font-trebuchet w-4/5 flex flex-col sm:gap-10 lsm:gap-4">
        <h1 className=" 2xl:text-[34px] xl:text-2xl lg:text-xl md:text-2xl sm:text-xl lsm:text-[16px] lsm:font-bold lsm:text-justify py-2">
          {title}
        </h1>
        <p className="text-justify hyphens-auto lsm:text-[14px]  sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px]">
          {text}
        </p>

        <Link
          className="flex justify-center items-center 2xl:w-[250px] xl:w-[200px] lg:w-[180px] md:w-[135px] sm:w-[135px] h-[46px] lg:text-[18px] sm:text-[14px] font-trebuchet text-pcream bg-pred rounded-[8px] lsm:mt-4"
          href="https://wa.me/5511987046526"
        >
          Converse comigo!
        </Link>
      </div>
    </div>
  );
};

export default Banner;
