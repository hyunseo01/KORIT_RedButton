"use client";
import { useState } from "react";

const MenuHeader = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>("전체메뉴");

  const handleClick = (menu: string) => {
    setSelectedMenu(menu);
  };

  return (
    <div>
      <div
        className="w-full h-[212px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://redbutton.co.kr/wp-content/uploads/2023/12/MENU.jpg')",
        }}
      >
        <em className="text-[#EDECEA] text-[56px] leading-[74px] w-[1194px] h-[74px] flex justify-center transform -translate-x-[100px] translate-y-[60px]">
          BEVERAGE
        </em>
      </div>

      <div className="bg-[#EDECEA] h-[90px] py-[28px]">
        <div className="flex gap-[20px] justify-center items-center pt-[5px] text-[18px]">
          {[
            "전체메뉴",
            "커피",
            "라떼",
            "티",
            "에이드",
            "쉐이크,스무디",
            "소다",
          ].map((menu) => (
            <span
              key={menu}
              onClick={() => handleClick(menu)}
              className={`cursor-pointer ${
                selectedMenu === menu ? "text-[#7b5c40]" : "text-[#979797]"
              } ${menu === "전체메뉴" ? "underline" : ""}`}
            >
              {menu}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuHeader;
