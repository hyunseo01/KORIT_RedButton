"use client";

import { HeaderSubData } from "@/data/HeaderData/HeaderData";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const HeaderSub = () => {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  const toggleLangMenu = () => {
    setIsLangMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        langMenuRef.current &&
        !langMenuRef.current.contains(event.target as Node)
      ) {
        setIsLangMenuOpen(false);
      }
    };

    if (isLangMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLangMenuOpen]);

  return (
    <header className="absolute w-full h-[200px] bg-[#332f2d] z-30">
      <div className="flex w-full h-full text-[#EDECEA] py-[25px] justify-between items-center max-w-[1120px] mx-auto relative left-[-20px]">
        <div className="flex items-center px-[48px] py-0 w-full h-full">
          <div className="flex w-full h-full">
            {HeaderSubData.map((menu, index) => (
              <div
                key={index}
                className={`flex flex-col whitespace-nowrap ${
                  index == 0
                    ? "ml-23"
                    : index === 1
                    ? "ml-7"
                    : index === 2
                    ? "ml-24"
                    : index === 3
                    ? "ml-25"
                    : index === 4
                    ? "ml-24"
                    : "ml-30"
                }`}
              >
                <div className="flex flex-col gap-[10px]">
                  {menu.list?.map((item, subIndex) => {
                    let itemHref = menu.href;

                    if (menu.name === "MENU") {
                      if (item === "음료")
                        itemHref = "/redbutton/newMenu/drink";
                      if (item === "스낵/푸드")
                        itemHref = "/redbutton/newMenu/snack";
                      if (item === "세트메뉴")
                        itemHref = "/redbutton/newMenu/set";
                    }

                    return (
                      <Link
                        key={subIndex}
                        href={itemHref}
                        className="text-[14px] text-[#EDECEA] hover:underline"
                      >
                        {item}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="w-[255px] h-[168px] flex gap-[10px] relative justify-end items-start"
          ref={langMenuRef}
        >
          <div
            className="flex items-center cursor-pointer relative justify-end"
            onClick={toggleLangMenu}
          >
            <div className="flex flex-row gap-[10px] ml-[50px]">
              <img
                className="w-[32px] h-[32px]"
                src="https://redbutton.co.kr/wp-content/uploads/2023/08/GNB_facebook.png"
                alt="Facebook"
              />
              <img
                className="w-[32px] h-[32px]"
                src="https://redbutton.co.kr/wp-content/uploads/2023/08/GNB_insta.png"
                alt="Instagram"
              />
            </div>
          </div>
          <div style={{ width: "200px" }}></div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSub;
