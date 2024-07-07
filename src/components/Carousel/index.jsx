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
            spaceBetween={50} // Ajuste o espaço entre slides conforme necessário
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
                // Quando a largura da janela é >= 320px
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                // Quando a largura da janela é >= 640px
                640: {
                    slidesPerView: 3,
                    spaceBetween: 180
                },
                // Quando a largura da janela é >= 768px
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                // Quando a largura da janela é >= 1024px
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 50
                },
                1280: {
                    slidesPerView: 4,
                    spaceBetween: 50
                },
                1585: {
                    slidesPerView: 5,
                    spaceBetween: 50
                }
            }}
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

