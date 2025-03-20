import { InputProps } from "@/types/gameType/gameType";
import React from "react";

const Input = ({ width, height, title, placeholder }: InputProps) => {
  return (
    <>
      <span className="text-[#7b5c40] font-bold text-[16px]">{title}</span>
      <input
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
        className="flex justify-between items-center border border-[#D2D2D2] px-[16px] py-[8px] text-[#979797] bg-white appearance-none bg-no-repeat bg-[right_0.7rem_top_50%] bg-[16px_auto] bg-[url('https://redbutton.co.kr/wp-content/uploads/2021/04/icon-search2.png')]"
        type="text"
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
