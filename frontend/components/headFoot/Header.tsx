"use client";

import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import React, { useState, useRef, useEffect } from "react";

const Header = ({ onBrandHover }: { onBrandHover: () => void }) => {
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
    <header className="bg-[#272422]">
      <div className="flex w-full max-w-[1200px] text-[#EDECEA] mx-auto py-[25px] justify-between relative items-center">
        <Link href={"/"}>
          <img
            className="w-[90px]"
            src="https://redbutton.co.kr/wp-content/uploads/2021/03/GNB_logo.png"
            alt="Logo"
          />
        </Link>

        <div
          className="flex justify-between items-center px-[48px] py-0 w-full"
          onMouseEnter={onBrandHover}
        >
          <div className="flex justify-between w-full">
            {[
              { name: "BRAND", href: "/redbutton/brand" },
              { name: "BOARDGAME", href: "/redbutton/game" },
              { name: "MENU", href: "/redbutton/newMenu/drink" },
              { name: "STORE", href: "/redbutton/store" },
              { name: "CONTACT", href: "/redbutton/contact" },
            ].map((item, index) => (
              <Link
                key={index}
                className=" flex-1 py-[13px] px-[20px] text-[20px]"
                href={item.href}
              >
                <em className="flex justify-center text-center">{item.name}</em>
              </Link>
            ))}
          </div>
        </div>

        <div
          className="flex gap-[10px] items-center relative"
          ref={langMenuRef}
        >
          <div className="w-[121px] h-[32px] text-[16px] tracking-[-1.2px] bg-[#605549] py-[7px] px-[17px] rounded-[4px] flex items-center justify-center text-center whitespace-nowrap">
            가맹사업 안내
          </div>

          <div
            className="flex items-center cursor-pointer relative"
            onClick={toggleLangMenu}
          >
            <div className="w-[72px] h-[32px] bg-[#4c4c4c] py-[7px] px-[10px] rounded-[5px] text-[#ffffff] flex items-center justify-center">
              KOR
              <IoIosArrowDown
                className={`text-[20px] transition-transform duration-300 transform ${
                  isLangMenuOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>

            {isLangMenuOpen && (
              <div className="absolute top-full left-0 w-full bg-[#4c4c4c] text-[#ffffff] rounded-[5px] shadow-md z-10">
                <ul className="list-none m-0">
                  <li className="py-[2px] px-[7.5px] cursor-pointer text-center">
                    ENG
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
