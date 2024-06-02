import React from "react";

const Banner = ({ title, text }) => {
  return (
    <div className=" bg-pred w-[775px] h-[368px] rounded-[16px] opacity-75 backdrop-blur-sm ">
      <div className="">
        {title}
        {text}
      </div>
    </div>
  );
};

export default Banner;
