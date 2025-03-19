const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#272422",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          border: "1px solid #272422",
          maxWidth: "1200px",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          gap: "50px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{
              width: "140px",
              height: "106px",
            }}
            src="https://redbutton.co.kr/wp-content/uploads/2021/03/%ED%91%B8%ED%84%B0_%EB%A1%9C%EA%B3%A0.png"
            alt=""
          />
        </div>
        <div
          style={{
            color: "#8c8c8c",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <div style={{ fontSize: "16px" }}>
            <strong>주소</strong> : 경기도 안양시 동안구 동편로 13번길 65,
            넥스트아이빌딩 3층
          </div>
          <div style={{ fontSize: "16px" }}>
            <strong>사업자번호</strong> : 224-86-00895 · <strong>대표자</strong>
            : 김동혁 · e-mail : info@redbutton.co.kr
          </div>
          <div style={{ fontSize: "16px" }}>
            COPYRIGHT ⓒ Redbutton co.,Ltd. All rights reserved.
          </div>
        </div>
        <div
          style={{
            color: "#8c8c8c",
            display: "flex",
            flexDirection: "column",
            gap: "10px",

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "30px", marginRight: "80px" }}>
            1644-0641
          </span>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "16px",
              textAlign: "left",
            }}
          >
            <span style={{ textAlign: "left" }}>
              오전 9시~12시 / 오후 1시~6시
            </span>
            <span style={{ textAlign: "left" }}>(주말, 공휴일 휴무)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
