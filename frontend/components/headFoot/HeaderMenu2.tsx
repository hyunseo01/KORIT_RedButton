import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

const HeaderMenu2 = () => {
  return (
    <div>
      <div className="text-[#b2b2b2] py-[25px] bg-[#332f2d] absolute z-10 w-full">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row gap-[12px]">
          <div className="w-[135px]"></div>

          <div className="w-full flex flex-col gap-[12px]">
            <ul>
              <span>레드버튼 소개</span>
              <span>레드버튼 멤버십 앱</span>
              <span>연혁</span>
              <span>채용안내</span>
            </ul>
          </div>

          <div className="w-full flex flex-col gap-[12px]">
            <span>레드버튼 전용 앱</span>
            <span>보드게임 찾기</span>
          </div>

          <div className="w-full flex flex-col gap-[12px]">
            <span>음료</span>
            <span>스낵/푸드</span>
            <span>세트메뉴</span>
          </div>

          <div className="w-full flex flex-col">
            <span className="pl-1 self-start">매장찾기</span>
          </div>

          <div className="w-full flex flex-col gap-[12px]">
            <span>공지사항</span>
            <span>제휴/제안</span>
            <span>자주묻는 질문</span>
            <span>고객의견</span>
          </div>

          <div className="flex flex-row gap-[10px] justify-start">
            <img
              className="w-[32px] h-[32px]"
              src="https://redbutton.co.kr/wp-content/uploads/2023/08/GNB_facebook.png"
              alt="Facebook"
            />
            <img
              className="w-[32px] h-[32px]"
              src="https://redbutton.co.kr/wp-content/uploads/2023/08/GNB_insta.png"
              alt="Instagram"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu2;
