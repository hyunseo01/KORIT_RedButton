const FooterResponsive = () => {
  return (
    <footer style={{ backgroundColor: "#272422", height: "350px" }}>
      <div>
        <div style={{ display: "flex", padding: "24px 0px 30px" }}>
          <div>
            <em
              style={{
                color: "#8c8c8c",
                fontSize: "28px",
                fontWeight: "normal",
                display: "flex",
                justifyContent: "flex-start",
                transform: "translate(20px, -10px)",
                marginRight: "-40px",
              }}
            >
              1644-0641
            </em>
            <h2
              style={{
                color: "#8c8c8c",
                fontSize: "13px",
                display: "flex",
                justifyContent: "flex-start",
                transform: "translate(20px, -10px)",
                marginRight: "-40px",
              }}
            >
              오전 9시~12시 / 오후 1시~6시
            </h2>
            <h2
              style={{
                color: "#8c8c8c",
                fontSize: "13px",
                display: "flex",
                justifyContent: "flex-start",
                transform: "translate(20px, -10px)",
                marginRight: "-40px",
              }}
            >
              (주말, 공휴일 휴무)
            </h2>
          </div>
          <div
            style={{
              margin: "0px 20px 0px 0px",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "end",
              gap: "10px",
              marginLeft: "auto",
            }}
          >
            <img
              style={{ width: "34px", height: "34px" }}
              src="https://redbutton.co.kr/wp-content/uploads/2021/03/%ED%8E%98%EC%9D%B4%EC%8A%A4%EB%B6%81-%EC%95%84%EC%9D%B4%EC%BD%98.svg"
              alt=""
            />
            <img
              style={{ width: "34px", height: "34px" }}
              src="https://redbutton.co.kr/wp-content/uploads/2021/03/%EC%9D%B8%EC%8A%A4%ED%83%80-%EC%95%84%EC%9D%B4%EC%BD%98.svg"
              alt=""
            />
          </div>
        </div>
        <div>
          <div
            style={{
              fontSize: "13px",
              margin: "0px 0px 14.4px",
              display: "flex",
              flexDirection: "column",
              color: "#8c8c8c",
              justifyContent: "center",
              alignItems: "center",
              transform: "translateY(50px)",
            }}
          >
            <span>
              <strong>주소</strong> : 경기도 안양시 동안구 동편로 13번길 65,
            </span>
            <span>넥스트아이빌딩 3층</span>
            <span>
              <strong>사업자번호</strong> : 224-86-00895 ·
              <strong>대표자</strong>: 김동혁
            </span>
            <span>e-mail : info@redbutton.co.kr</span>
            <span style={{ marginTop: "20px" }}>
              COPYRIGHT ⓒ Redbutton co.,Ltd. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterResponsive;
