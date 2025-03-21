import { InputProps } from "@/types/gameType/gameType";
import React from "react";

const Input = ({ width, height, title, placeholder, onChange }: InputProps) => {
  return (
    <>
      <span style={{ color: "#7b5c40", fontWeight: "700", fontSize: "16px" }}>
        {title}
      </span>
      <input
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
        className="flex justify-between items-center border border-[#D2D2D2] p-2 px-4 text-[#979797] bg-white appearance-none bg-[url('https://redbutton.co.kr/wp-content/uploads/2021/04/icon-search2.png')] bg-no-repeat bg-[right_0.7rem_top_50%] bg-[16px_auto]"
        type="text"
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
};

export default Input;
