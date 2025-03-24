import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

const HeaderMenu2 = () => {
  return (
    <div>
      <div
        style={{
          color: "#b2b2b2",
          padding: "25px 0",
          backgroundColor: "#332f2d",
          position: "absolute",
          zIndex: 10,
          width: "100%",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ flex: "0.55" }}></div>
          <div></div>
          <div
            style={{
              flex: "0.71",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              //   padding: "5px 0px 0px 6px",
            }}
          >
            <span>레드버튼 소개</span>
            <span>레드버튼 멤버십 앱</span>
            <span>연혁</span>
            <span>채용안내</span>
          </div>
          <div
            style={{
              flex: "0.95",
              display: "flex",
              flexDirection: "column",
              //   padding: "5px 0px 0px 32px",
              gap: "12px",
            }}
          >
            <span>레드버튼 전용 앱</span>
            <Link href={"/redbutton/mobileGameSearch"}>보드게임 찾기</Link>
          </div>
          <div
            style={{
              flex: "0.7",
              display: "flex",
              flexDirection: "column",
              //   padding: "5px 0px 0px 52px",
              gap: "12px",
            }}
          >
            <span>음료</span>
            <span>스낵/푸드</span>
            <span>세트메뉴</span>
          </div>
          <div
            style={{
              flex: "0.7",
              display: "flex",
              flexDirection: "column",
              //   padding: "5px 0px 0px 62px",
            }}
          >
            <span>매장찾기</span>
          </div>
          <div
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              //   padding: "5px 0px 0px 75px",
              gap: "12px",
            }}
          >
            <span>공지사항</span>
            <span>제휴/제안</span>
            <span>자주묻는 질문</span>
            <span>고객의견</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
            }}
          >
            <img
              style={{ width: "32px", height: "32px" }}
              src="https://redbutton.co.kr/wp-content/uploads/2023/08/GNB_facebook.png"
              alt=""
            />

            <img
              style={{ width: "32px", height: "32px" }}
              src="	https://redbutton.co.kr/wp-content/uploads/2023/08/GNB_insta.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu2;
