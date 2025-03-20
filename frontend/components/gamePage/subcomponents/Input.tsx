import React from "react";

type InputProps = {
  width: number;
  height: number;
  title: string;
  placeholder: string;
};

const Input = ({ width, height, title, placeholder }: InputProps) => {
  return (
    <>
      <span style={{ color: "#7b5c40", fontWeight: "700", fontSize: "16px" }}>
        {title}
      </span>
      <input
        style={{
          width: `${width}px`,
          height: `${height}px`,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          border: "1px solid #D2D2D2",
          padding: "8px 16px",
          color: "#979797",
          backgroundColor: "white",
          appearance: "none",
          backgroundImage: `url(https://redbutton.co.kr/wp-content/uploads/2021/04/icon-search2.png)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 0.7rem top 50%",
          backgroundSize: "16px auto",
        }}
        type="text"
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
