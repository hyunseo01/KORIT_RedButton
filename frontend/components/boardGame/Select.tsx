import React from "react";

type SelectProps = {
  width: number;
  height: number;
  title: string;
};

const Select = ({ width, height, title }: SelectProps) => {
  return (
    <>
      <span
        style={{
          color: "#7b5c40",
          fontWeight: "700",
          fontSize: "16px",
        }}
      >
        {title}
      </span>
      <select
        style={{
          width: `${width}px`,
          height: `${height}px`,
          border: "1px solid #D2D2D2",
          padding: "8px 10px",
          backgroundColor: "white",
          appearance: "none",
          backgroundImage: `url(https://redbutton.co.kr/wp-content/uploads/2021/03/select-arrow.png)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 0.7rem top 50%",
          backgroundSize: "16px auto",
        }}
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
