import React from "react";
import Link from "next/link";
import Paragraph from "../Paragraph";
import { Title } from "../Titles";

const Banner = ({ title, text }) => {
  return (
    <div className="text-pred flex w-full justify-center">
      <div className="
      flex 
      flex-col
      3xl:w-4/5 
      2xl:w-4/5
      xl:w-4/5
      lg:w-4/5
      md:w-4/5
      sm:w-4/5
      sm:gap-10 
      lsm:gap-4">
        <Title>
          {title}
        </Title>
        <Paragraph>
          {text}
        </Paragraph>

        <Link
          className="
          flex 
          justify-center 
          items-center 
          3xl:w-[210px] 
          2xl:w-[200px] 
          xl:w-[200px] 
          lg:w-[180px] 
          md:w-[150px] 
          sm:w-[150px] 
          h-[46px] 
          3xl:text-[16px] 
          2xl:text-[14px] 
          lg:text-[14px] 
          sm:text-[14px] 
          font-trebuchet 
          text-pcream 
          bg-pred 
          rounded-[8px] 
          lsm:mt-4"
          href="https://wa.me/5511987046526"
          target="_blank"
        >
          Converse comigo!
        </Link>
      </div>
    </div>
  );
};

export default Banner;
