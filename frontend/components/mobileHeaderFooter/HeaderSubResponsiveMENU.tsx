import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const HeaderSubResponsiveMENU = ({ close }: { close: () => void }) => {
  const [isBrandVisible, setIsBrandVisible] = useState(false);
  const [isBoardgameVisible, setIsBoardgameVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isStoreVisible, setIsStoreVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);

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
    <ul className="p-0 text-left mt-[100px] pl-[20px] text-[#edecea] text-[17px] py-[18px] ">
      <li
        onClick={() => toggleSection("brand")}
        className="mb-[20px] flex items-center justify-between w-full cursor-pointer"
      >
        BRAND <IoIosArrowDown className="cursor-pointer" />
      </li>
      {isBrandVisible && (
        <div className="bg-[#332f2d] text-[#edecea] flex flex-col gap-[20px] mb-[20px] cursor-pointer">
          <span>레드버튼 소개</span>
          <span>레드버튼 멤버십 앱</span>
          <span>연혁</span>
          <span>채용안내</span>
        </div>
      )}

      <li
        onClick={() => toggleSection("boardgame")}
        className="mb-[20px] flex items-center justify-between w-full cursor-pointer"
      >
        BOARDGAME <IoIosArrowDown className="cursor-pointer" />
      </li>
      {isBoardgameVisible && (
        <div className="bg-[#332f2d] text-[#edecea] flex flex-col gap-[20px] mb-[20px] cursor-pointer">
          <span>레드버튼 전용 앱</span>
          <span>보드게임 찾기</span>
        </div>
      )}

      <li
        onClick={() => toggleSection("menu")}
        className="mb-[20px] flex items-center justify-between w-full cursor-pointer"
      >
        MENU <IoIosArrowDown className="cursor-pointer" />
      </li>
      {isMenuVisible && (
        <div className="bg-[#332f2d] text-[#edecea] flex flex-col gap-[20px] mb-[20px] cursor-pointer">
          <span>음료</span>
          <span>스낵/푸드</span>
          <span>세트메뉴</span>
        </div>
      )}

      <li
        onClick={() => toggleSection("store")}
        className="mb-[20px] flex items-center justify-between w-full cursor-pointer"
      >
        STORE <IoIosArrowDown className="cursor-pointer" />
      </li>
      {isStoreVisible && (
        <div className="bg-[#332f2d] text-[#edecea] flex flex-col gap-[20px] mb-[20px] cursor-pointer">
          <span>매장찾기</span>
        </div>
      )}

      <li
        onClick={() => toggleSection("contact")}
        className="mb-[20px] flex items-center justify-between w-full cursor-pointer"
      >
        CONTACT <IoIosArrowDown className="cursor-pointer" />
      </li>
      {isContactVisible && (
        <div className="bg-[#332f2d] text-[#edecea] flex flex-col gap-[20px] mb-[20px] cursor-pointer">
          <span>공지사항</span>
          <span>제휴/제안</span>
          <span>자주묻는 질문</span>
          <span>고객의견</span>
        </div>
      )}
    </ul>
  );
};

export default HeaderSubResponsiveMENU;
