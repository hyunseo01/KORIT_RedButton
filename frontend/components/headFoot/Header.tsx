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
    <header style={{ backgroundColor: "#272422" }}>
      <div
        style={{
          display: "flex",
          width: "100%",
          maxWidth: "1200px",
          color: "#EDECEA",
          flexDirection: "row",
          margin: "0 auto",
          padding: "25px 0",
          justifyContent: "space-between",
          position: "relative",
          // zIndex: 1,
        }}
      >
        <Link href={"/"}>
          <img
            style={{ width: "90px" }}
            src="https://redbutton.co.kr/wp-content/uploads/2021/03/GNB_logo.png"
            alt="Logo"
          />
        </Link>

        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            padding: "0px 20px 0px 48px",
          }}
          onMouseEnter={onBrandHover}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {[
              { name: "BRAND", href: "/redbutton/brand" },
              { name: "BOARD GAME", href: "/redbutton/game" },
              { name: "MENU", href: "/redbutton/menu" },
              { name: "STORE", href: "/redbutton/store" },
              { name: "CONTACT", href: "/redbutton/contact" },
            ].map((item, index) => (
              <Link
                key={index}
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  padding: "13px 20px",
                  fontSize: "20px",
                  marginLeft: index === 0 ? "0px" : "10px",
                }}
                href={item.href}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            position: "relative",
            margin: 0, // KOR/ENG 버튼 외부 여백 없애기
          }}
          ref={langMenuRef}
        >
          <div
            style={{
              width: "121px",
              height: "32px",
              fontSize: "16px",
              letterSpacing: "-1.2px",
              backgroundColor: "#605549",
              padding: "7px 20px 9px 17px",
              color: "#ffffff",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              whiteSpace: "nowrap", //줄바꿈되지않는머시기
            }}
          >
            가맹사업 안내
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              position: "relative",
              margin: 0, // KOR/ENG 버튼 외부 여백 없애기
            }}
            onClick={toggleLangMenu}
          >
            <div
              style={{
                width: "72px",
                height: "32px",
                backgroundColor: "#4c4c4c",
                padding: "7px 10px 9px 10px",
                borderRadius: "5px",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // gap: "5px", // ENG와 KOR 버튼 간의 빈틈을 없앴습니다.
                margin: 0, // 바깥 여백을 제거
              }}
            >
              KOR
              <IoIosArrowDown
                style={{
                  fontSize: "20px",
                  transition: "transform 0.3s",
                  transform: isLangMenuOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </div>

            {isLangMenuOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "0",
                  width: "100%", // 드롭다운 메뉴의 너비를 100%로 설정하여 버튼과 동일하게 맞춤
                  backgroundColor: "#4c4c4c",
                  color: "#ffffff",
                  borderRadius: "5px",
                  boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                  zIndex: 10,
                }}
              >
                <ul
                  style={{
                    listStyle: "none",

                    margin: 0,
                  }}
                >
                  <li
                    style={{
                      padding: "2px 7.5px 4.5px",
                      cursor: "pointer",
                      textAlign: "center",
                    }}
                  >
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
