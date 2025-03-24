import { div } from "motion/react-client";
import { IoIosArrowDown } from "react-icons/io";

const HeaderSubResponsive = () => {
  return (
    <div
      style={{
        backgroundColor: "rgb(51, 51, 51)",
        opacity: 0.5,
        width: "200px",
        height: "100px",
        display: "flex",
      }}
    >
      {/* 전체화면 불투명검정색 */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "270px",
          height: "921px",
          marginLeft: "auto",
          padding: "10px",
        }}
      >
        <div>
          <div
            style={{
              backgroundColor: "rgb(51, 51, 51)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              padding: "10px",
            }}
          >
            <div
              style={{
                backgroundColor: "#4c4c4c",
                color: "#999999",
                borderRadius: "4px",
                fontSize: "17px",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                cursor: "pointer",
                width: "81px",
                height: "30.5px",
                justifyContent: "center",
              }}
            >
              KOR
              <IoIosArrowDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSubResponsive;
