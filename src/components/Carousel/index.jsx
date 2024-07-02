// src/components/Carousel.js
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Card from "../Card";
import { cardData } from "@/json/cards";

const Carousel = () => {
    return (
        <Swiper
            spaceBetween={1}
            slidesPerView={4}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {cardData.map((card) => (
                <SwiperSlide key={card.id}>
                    <Card bg={card.bg} text={card.text} urlImg={card.urlImg} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carousel;

