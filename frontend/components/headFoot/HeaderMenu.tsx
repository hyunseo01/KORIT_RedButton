const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "#332f2d",

        padding: "24px 0px 35px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
        }}
      >
        <div style={{ width: "78px", height: "161px" }}></div>
        <div
          style={{
            display: "flex",
            color: "#b2b2b2",
            padding: "0px 0px 0px 100px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              padding: "5px 0px 0px 6px",
            }}
          >
            <span>레드버튼 소개</span>
            <span>레드버튼 멤버십 앱</span>
            <span>연혁</span>
            <span>채용안내</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "5px 0px 0px 32px",
              gap: "12px",
            }}
          >
            <span>레드버튼 전용 앱</span>
            <span>보드게임 찾기</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "5px 0px 0px 52px",
              gap: "12px",
            }}
          >
            <span>음료</span>
            <span>스낵/푸드</span>
            <span>세트메뉴</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "5px 0px 0px 62px",
            }}
          >
            <span>매장찾기</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "5px 0px 0px 75px",
              gap: "12px",
            }}
          >
            <span>공지사항</span>
            <span>제휴/제안</span>
            <span>자주묻는 질문</span>
            <span>고객의견</span>
          </div>
          <div style={{ width: "155px", height: "161px" }}></div>
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
    </header>
  );
};

export default Header;
