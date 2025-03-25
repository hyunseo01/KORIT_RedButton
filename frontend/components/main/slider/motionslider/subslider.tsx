"use client";
import "swiper/swiper-bundle.css";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Motion from "./motion";

const SubImageSlider: React.FC = () => {
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
      <SwiperSlide className="bg-[#2e2d35] !flex !justify-center">
        <div className="flex justify-between w-[1200px] relative">
          <Motion
            KoName="라이헌트"
            EnName="LIE HUNT"
            GameInfo="당신이 겪은, 들은 흥미로운 이야기를 풀어보세요.하지만 과연 진실일까요? 한번 베팅해 보도록 하죠!"
            Level="Easy"
            People="4~6인"
            RunningTime="30분"
          />
          <img
            className="h-[500px] w-[1200px]"
            src="https://redbutton.co.kr/wp-content/uploads/2024/10/1%EB%9D%BC%EC%9D%B4%ED%97%8C%ED%8A%B8.png"
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-[#2e2d35] !flex !justify-center">
        <div className="flex justify-between w-[1200px] relative">
          <Motion
            KoName="토키토플"
            EnName="TIKE TOPLE"
            GameInfo="전략과 블러핑이 어우러진, 간단하면서도 쉽지않은 조각상 레이스.내 말이 아니면 죽여라"
            Level="Normal"
            People="2~4인"
            RunningTime="20분"
          />
          <img
            className="h-[500px] w-[1200px]"
            src="https://redbutton.co.kr/wp-content/uploads/2024/10/2%ED%8B%B0%ED%82%A4%ED%86%A0%ED%94%8C.png"
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-[#2e2d35] !flex !justify-center">
        <div className="flex justify-between w-[1200px] relative">
          <Motion
            KoName="포인트 샐러드 : 이브이에디션"
            EnName="POINT SALAD:EEVEE EDITION"
            GameInfo="사랑스러운 포켓몬 이브이는 다양한 형태로 진화할 수 있는데요.
여러분이 좋아하는 진화체를 골라 원하는 조합대로 모아보세요!"
            Level="Normal"
            People="2~6인"
            RunningTime="30분"
          />
          <img
            className="h-[500px] w-[1200px]"
            src="https://redbutton.co.kr/wp-content/uploads/2024/10/3%ED%8F%AC%EC%9D%B8%ED%8A%B8%EC%83%90%EB%9F%AC%EB%93%9C.png"
            alt=""
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SubImageSlider;
