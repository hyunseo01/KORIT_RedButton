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
      <div className=" flex w-full h-full text-[#EDECEA] py-[25px] justify-between items-center max-w-[1200px] mx-auto">
        <div
          className="flex items-center px-[48px] py-0 w-full h-full"
          //   onMouseEnter={onBrandHover}
        >
          <table className="flex w-full h-full">
            {HeaderSubData.map((v, i) => (
              <Link className=" " key={i} href={v.href}>
                <tr
                  className="flex flex-col ml-24 w-full h-full"
                  style={{ border: "1px solid red" }}
                >
                  {v.list?.map((v) => (
                    <td className=" text-[14px] text-start">{v}</td>
                  ))}
                </tr>
              </Link>
            ))}
          </table>
        </div>

        <div
          className="w-[255px] h-[168px] flex gap-[10px] relative justify-end items-start "
          ref={langMenuRef}
        >
          <div
            className="flex items-center cursor-pointer relative justify-end"
            onClick={toggleLangMenu}
          >
            <div className=" flex flex-row gap-[10px] ">
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
        </div>
      </div>
    </header>
  );
};

export default HeaderSub;
