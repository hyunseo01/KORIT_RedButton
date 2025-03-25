const GameSearch = () => {
  return (
    <div
      className="w-full h-full bg-cover"
      style={{
        backgroundImage: `url(https://redbutton.co.kr/wp-content/uploads/2021/04/main_bg_store.jpg)`,
      }}
    >
      <div className="flex flex-col gap-4 pt-[29px] pl-[40px] justify-center">
        <strong className="text-[20px] md:block hidden">
          매장보유게임 검색
        </strong>
        <strong className="text-[20px] md:hidden block">
          매장보유게임 검색
        </strong>
        <span className="text-[16px] md:block hidden">
          플레이 할 게임이 방문하실 매장에
          <br /> 보유되어 있는지 확인해 보세요.
        </span>
        <span className="text-[16px] md:hidden block">
          방문하시려는 매장의
          <br /> 게임 보유여부를 확인하세요!
        </span>
        <button className="md:block hidden w-[130px] bg-[#AF8967] p-2 text-white text-[16px] border-none">
          게임 검색하기
        </button>
        <button className="md:hidden block w-[130px] p-2  text-[16px] border rounded mb-2.5 font-bold">
          자세히 보기
        </button>
      </div>
    </div>
  );
};

export default GameSearch;
