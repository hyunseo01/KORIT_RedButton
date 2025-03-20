const GameSearch = () => {
  return (
    <div
      className="w-full h-full bg-cover"
      style={{
        backgroundImage: `url(https://redbutton.co.kr/wp-content/uploads/2021/04/main_bg_store.jpg)`,
      }}
    >
      <div className="flex flex-col gap-4 pt-[29px] pl-[40px]">
        <strong style={{ fontSize: "20px" }}>매장보유게임 검색</strong>
        <span style={{ fontSize: "16px" }}>
          플레이 할 게임이 방문하실 매장에
          <br /> 보유되어 있는지 확인해 보세요.
        </span>
        <button className="w-[130px] bg-[#AF8967] p-2 text-white text-[16px] border-none">
          게임 검색하기
        </button>
      </div>
    </div>
  );
};

export default GameSearch;
