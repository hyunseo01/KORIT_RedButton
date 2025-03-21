import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import BlackSheet from "./BlackSheet";

const HeaderSubResponsive2 = () => {
  return (
    <>
      <BlackSheet />
      <div
        style={{
          position: "fixed",
          top: "0px",
          right: "0px",
          width: "100vw",
          height: "100%",
          zIndex: "11",
        }}
      >
        <div>
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
            KOR <IoIosArrowDown />
          </div>
        </div>
        <nav
          style={{
            width: "300px",
            height: "100%",
            color: "white",
            backgroundColor: "#272422",
            display: "flex",
            fontSize: "17px",
          }}
        >
          <ul>
            <li>BRAND</li>
            <li>BOARDGAME</li>
            <li>MENU</li>
            <li>STORE</li>
            <li>CONTACT</li>
          </ul>
        </nav>
        <div>
          <div
            style={{
              fontSize: "13.5px",
              backgroundColor: "#605549",
              color: "#b2b2b2",
              padding: "7px 17px 9px 17px",
              borderRadius: "3px",
              display: "inline-block",
              border: "1px solid yellow",
            }}
          >
            가맹사업 안내
            <IoIosArrowForward />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderSubResponsive2;
