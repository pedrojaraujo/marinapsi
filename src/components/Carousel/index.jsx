'use client';

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../Card";
import { cardData } from "@/json/cards";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <ArrowBack className="slick-prev" />, // Ícone de seta para voltar
    nextArrow: <ArrowForward className="slick-next" />, // Ícone de seta para avançar
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
