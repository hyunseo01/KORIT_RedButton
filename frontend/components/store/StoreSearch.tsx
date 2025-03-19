import { url } from "inspector";

const StoreSearch = () => {
  return (
    <div
      style={{
        background: `url(
          https://redbutton.co.kr/wp-content/uploads/2023/12/main-bg4-1.jpg)`,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "152px 0px 169px 0px",
        }}
      >
        <img
          src="https://redbutton.co.kr/wp-content/uploads/2023/12/bg3-1.png"
          alt=""
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <strong style={{ fontSize: "54px" }}>FEEL REDBUTTON CLOSELY</strong>
          <span style={{ fontSize: "22px", fontWeight: "700" }}>
            매장을 쉽고 빠르게 찾아보세요.
          </span>
          <span
            style={{
              fontSize: "17px",
              marginTop: "20px",
              marginBottom: "40px",
            }}
          >
            즐거움 가득한 레드버튼 매장을 미리 만나보세요!
          </span>
          <button
            style={{
              backgroundColor: "#D61414",
              border: "none",
              color: "#F5F4F2",
              fontSize: "16px",
              padding: "10px",
              width: "130px",
            }}
          >
            매장 검색하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoreSearch;
