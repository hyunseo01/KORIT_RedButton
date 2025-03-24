import { SelectProps } from "@/types/gameType/gameType";
import React from "react";

const Select = ({ width, height, title, fontSize, color }: SelectProps) => {
  const regionArr = ["시/도", "서울", "경기", "인천"];
  return (
    <>
      <span className="text-[#7b5c40] font-bold text-[16px]">{title}</span>
      <select
        style={{
          width: `${width}px`,
          height: `${height}px`,
          fontSize: `${fontSize}px`,
          color: `${color}`,
        }}
        className="flex justify-between items-center border border-[#D2D2D2] px-[16px] py-[8px] bg-white appearance-none bg-[url('https://redbutton.co.kr/wp-content/uploads/2021/03/select-arrow.png')] bg-no-repeat bg-[right_0.7rem_top_50%] bg-[16px_auto]"
        name=""
        id=""
      >
        {regionArr.map((v, index) => (
          <option key={index} value={v}>
            {v}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
