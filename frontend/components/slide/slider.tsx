"use client";
import "swiper/swiper-bundle.css";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const ImageSlider: React.FC = () => {
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      spaceBetween={0}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Navigation]}
    >
      <SwiperSlide>
        <img
          style={{ objectFit: "cover", height: "500px", width: "100%" }}
          src="https://redbutton.co.kr/wp-content/uploads/2024/09/%EB%A9%A4%EB%B2%84%EC%8B%AD%EC%95%B1-%EB%B0%B0%EB%84%88PC-4.png"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          style={{ objectFit: "cover", height: "500px", width: "100%" }}
          src="https://redbutton.co.kr/wp-content/uploads/2023/12/%EB%A9%94%EC%9D%B8-%EB%B0%B0%EB%84%882580739-scaled.jpg"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default ImageSlider;
