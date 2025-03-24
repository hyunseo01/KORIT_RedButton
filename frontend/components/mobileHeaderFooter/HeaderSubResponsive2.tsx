import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import BlackSheet from "./BlackSheet";
import { div } from "motion/react-client";

const HeaderSubResponsive2 = ({ close }: { close: () => void }) => {
  const [isEnglishVisible, setIsEnglishVisible] = useState(false);
  const [isBrandVisible, setIsBrandVisible] = useState(false);
  const [isBoardgameVisible, setIsBoardgameVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isStoreVisible, setIsStoreVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [isblind, setIsblind] = useState(true);

  const toggleLanguage = () => {
    setIsEnglishVisible((prev) => !prev);
  };

  const toggleSection = (section: string) => {
    switch (section) {
      case "brand":
        setIsBrandVisible((prev) => !prev);
        break;
      case "boardgame":
        setIsBoardgameVisible((prev) => !prev);
        break;
      case "menu":
        setIsMenuVisible((prev) => !prev);
        break;
      case "store":
        setIsStoreVisible((prev) => !prev);
        break;
      case "contact":
        setIsContactVisible((prev) => !prev);
        break;
      default:
        break;
    }
  };
  return (
    <>
      <BlackSheet close={close} />
      <div
        style={{
          position: "fixed",
          top: "0px",
          right: "0px",
          width: "fit-contents",
          height: "100%",
          zIndex: "11",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              // padding: "10px",
              marginTop: "50px",
            }}
          >
            <div
              onClick={toggleLanguage}
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
                zIndex: "3",
              }}
            >
              KOR <IoIosArrowDown />
            </div>
          </div>
          {isEnglishVisible && (
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                // padding: "10px",
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
                  cursor: "pointer",
                  width: "81px",
                  height: "30.5px",
                  justifyContent: "start",
                  zIndex: "3",
                  padding: "1.5px 35px 3.5px 11.5px",
                }}
              >
                ENG
              </div>
            </div>
          )}
        </div>
        <nav
          style={{
            width: "40%",
            height: "100%",
            color: "white",
            backgroundColor: "#272422",
            display: "flex",
            flexDirection: "column",
            fontSize: "17px",
            position: "fixed",
            right: 0,
            top: 0,
            padding: "20px",
          }}
        >
          <ul
            style={{
              padding: 0,
              listStyle: "none",
              textAlign: "right",
              marginTop: "100px",
              paddingLeft: "20px",
              textAlignLast: "left",
              color: "#edecea",
              fontSize: "17px",
              paddingBlock: "18px 20px",
            }}
          >
            <li
              onClick={() => toggleSection("brand")}
              style={{
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                cursor: "pointer",
              }}
            >
              BRAND <IoIosArrowDown />
            </li>
            {isBrandVisible && (
              <div
                style={{
                  backgroundColor: "#332f2d",
                  color: "#edecea",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  marginBottom: "20px",
                  cursor: "pointer",
                }}
              >
                <span>레드버튼 소개</span>
                <span>레드버튼 멤버십 앱</span>
                <span>연혁</span>
                <span>채용안내</span>
              </div>
            )}

            <li
              onClick={() => toggleSection("boardgame")}
              style={{
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                cursor: "pointer",
              }}
            >
              BOARDGAME <IoIosArrowDown />
            </li>
            {isBoardgameVisible && (
              <div
                style={{
                  backgroundColor: "#332f2d",
                  color: "#edecea",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  marginBottom: "20px",
                  cursor: "pointer",
                }}
              >
                <span>레드버튼 전용 앱</span>
                <span>보드게임 찾기</span>
              </div>
            )}

            <li
              onClick={() => toggleSection("menu")}
              style={{
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                cursor: "pointer",
              }}
            >
              MENU <IoIosArrowDown />
            </li>
            {isMenuVisible && (
              <div
                style={{
                  backgroundColor: "#332f2d",
                  color: "#edecea",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  marginBottom: "20px",
                  cursor: "pointer",
                }}
              >
                <span>음료</span>
                <span>스낵/푸드</span>
                <span>세트메뉴</span>
              </div>
            )}

            <li
              onClick={() => toggleSection("store")}
              style={{
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                cursor: "pointer",
              }}
            >
              STORE <IoIosArrowDown />
            </li>
            {isStoreVisible && (
              <div
                style={{
                  backgroundColor: "#332f2d",
                  color: "#edecea",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  marginBottom: "20px",
                  cursor: "pointer",
                }}
              >
                <span>매장찾기</span>
              </div>
            )}

            <li
              onClick={() => toggleSection("contact")}
              style={{
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                cursor: "pointer",
              }}
            >
              CONTACT <IoIosArrowDown />
            </li>
            {isContactVisible && (
              <div
                style={{
                  backgroundColor: "#332f2d",
                  color: "#edecea",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  marginBottom: "20px",
                  cursor: "pointer",
                }}
              >
                <span>공지사항</span>
                <span>제휴/제안</span>
                <span>자주묻는 질문</span>
                <span>고객의견</span>
              </div>
            )}
          </ul>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                backgroundColor: "#605549",
                textAlign: "center",
                color: "#b2b2b2",
                borderRadius: "4px",
                fontSize: "13.5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                cursor: "pointer",
                width: "123px",
                height: "36px",
                zIndex: "3",
              }}
            >
              가맹사업 안내 <IoIosArrowForward />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default HeaderSubResponsive2;
