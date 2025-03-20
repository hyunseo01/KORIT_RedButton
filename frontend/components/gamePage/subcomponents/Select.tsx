import { SelectProps } from "@/types/gameType/gameType";
import React from "react";

const Select = ({ width, height, title }: SelectProps) => {
  return (
    <>
      <span className="text-[#7b5c40] font-bold text-[16px]">{title}</span>
      <select
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
        className="border border-[#D2D2D2] px-[10px] py-[8px] bg-white appearance-none bg-[url('https://redbutton.co.kr/wp-content/uploads/2021/03/select-arrow.png')] bg-no-repeat bg-[right_0.7rem_top_50%] bg-[16px_auto]"
        name=""
        id=""
      >
        <option value="">전국</option>
        <option value="">서울</option>
        <option value="">경기</option>
        <option value="">인천</option>
      </select>
    </>
  );
};

export default Select;
