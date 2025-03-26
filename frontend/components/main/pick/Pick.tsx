"use client";

import { MenuItem } from "@/types/pickMenuType/pickMenuType";
import PickMenu from "./subcomponents/PickMenu";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Swiper 스타일 임포트

const Pick = () => {
  const [mainData, setMainData] = useState<MenuItem[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/menu/findall.do")
      .then((r) => r.json())
      .then((data) => setMainData(data))
      .catch((e) => {
        alert("서버 켜라");
        console.error("Error : ", e);
      });
  }, []);

  const filterCategory = () => {
    return mainData.filter(
      (v) =>
        v.koname == "뽕따 쉐이크" ||
        v.koname == "카라멜 팝콘 쉐이크" ||
        v.koname == "누텔라 쫀득 츄러스" ||
        v.koname == "스노윙 슈프림 순살치킨"
    );
  };
  const filteredMenu = filterCategory();

  return (
    <div className="bg-[#F5F4F2]">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col justify-center items-center gap-[10px] pt-[73px] pb-[103px]">
        <strong className="text-[54px] font-bold">BUTTONER&apos;S PICK</strong>
        <span className="text-[18px]">버트너가 선정한 이 달의 메뉴입니다.</span>
        <div className="flex gap-[20px] mt-[50px] w-full ">
          <div className="md:block hidden w-full">
            <div className="flex justify-center gap-[20px]">
              {filteredMenu.map((v) => (
                <PickMenu
                  key={v.koname}
                  image={v.image}
                  KoName={v.koname}
                  EnName={v.enname}
                />
              ))}
            </div>
          </div>
          <div className=" md:hidden block w-full">
            <Swiper slidesPerView={2} spaceBetween={50}>
              {filteredMenu.map((v) => (
                <SwiperSlide key={v.koname}>
                  <PickMenu
                    image={v.image}
                    KoName={v.koname}
                    EnName={v.enname}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pick;
