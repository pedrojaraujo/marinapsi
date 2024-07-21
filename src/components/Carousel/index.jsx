'use client';

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../Card";
import { cardData } from "@/json/cards";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

// Custom Arrow Components
const PrevArrow = (props) => {
  const { className, onClick } = props;
  return <ArrowBack className={className} onClick={onClick} />;
};

const NextArrow = (props) => {
  const { className, onClick } = props;
  return <ArrowForward className={className} onClick={onClick} />;
};

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1920, // 3xl
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1440, // 2xl
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280, // xl
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // sm
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320, // xs
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <PrevArrow />, // Custom prev arrow
    nextArrow: <NextArrow />, // Custom next arrow
  };

  return (
    <Slider {...settings}>
      {cardData.map((card) => (
        <div key={card.id}>
          <Card bg={card.bg} text={card.text} urlImg={card.urlImg} />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
