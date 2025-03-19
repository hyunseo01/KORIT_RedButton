const GameSearch = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundImage: `url(https://redbutton.co.kr/wp-content/uploads/2021/04/main_bg_store.jpg)`,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          padding: "29px 0px 0px 40px",
        }}
      >
        <strong style={{ fontSize: "20px" }}>매장보유게임 검색</strong>
        <span style={{ fontSize: "16px" }}>
          플레이 할 게임이 방문하실 매장에
          <br /> 보유되어 있는지 확인해 보세요.
        </span>
        <button
          style={{
            width: "130px",
            backgroundColor: "#AF8967",
            padding: "10px",
            color: "white",
            fontSize: "16px",
            border: "none",
          }}
        >
          게임 검색하기
        </button>
      </div>
    </div>
  );
};

export default GameSearch;
