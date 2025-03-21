import { IoIosArrowDown } from "react-icons/io";

const HeaderSubResponsive2 = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        display: "flex",
        position: "relative",
        zIndex: "9999",
        top: "0px",
        left: "0px",
      }}
    >
      {/* 불투명검정화면 */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "auto",
          padding: "10px",
          position: "fixed",
        }}
      >
        {/* 바 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            width: "270px",
            height: "100vh",
            marginLeft: "auto",
            padding: "10px",
            position: "fixed",
          }}
        >
          {/* KOR~가맹사업까지한번더감싸줌 */}
          <div>
            {/* KOR 버튼 */}
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
          <div>
            {/* 브랜드부터 컨택트까지 */}
            <div>BRAND</div>
            <div>BOARDGAME</div>
            <div>MENU</div>
            <div>STORE</div>
            <div>CONTACT</div>
          </div>
          <div>
            {/* 가맹사업안내버튼 */}
            <div>가맹사업 안내</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSubResponsive2;
