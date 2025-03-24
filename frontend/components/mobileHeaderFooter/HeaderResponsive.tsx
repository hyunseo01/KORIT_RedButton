import { useState } from "react";
import HeaderSubResponsive from "./HeaderSubResponsive";
import HeaderSubResponsive2 from "./HeaderSubResponsive2";

const HeaderResponsive = () => {
  const [isOpenSide, setIsOpenSide] = useState(false);

  return (
    <>
      <header style={{ backgroundColor: "#272422" }}>
        <div
          style={{
            width: "100%",
            maxWidth: "767px",
            height: "81px",
            padding: "14px 20px",
          }}
        >
          <div>
            <img
              style={{ width: "50px", height: "50px" }}
              src="https://redbutton.co.kr/wp-content/uploads/2021/03/GNB_logo.png"
              alt="Logo"
            />
          </div>
          <div
            onClick={() => {
              setIsOpenSide((prev) => !prev);
            }}
            style={{
              display: "flex",
              justifyContent: "end",
              transform: "translateY(-35px)",
              verticalAlign: "middle",
            }}
          >
            <img
              style={{ width: "26px", height: "22px" }}
              src="https://redbutton.co.kr/wp-content/uploads/2023/02/mobile_menu.png"
              alt="Logo"
            />
          </div>
        </div>
      </header>
      {isOpenSide && <HeaderSubResponsive2 />}
    </>
  );
};

export default HeaderResponsive;
