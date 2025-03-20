const StoreSearch = () => {
  return (
    <div
      className="bg-cover"
      style={{
        backgroundImage:
          "url('https://redbutton.co.kr/wp-content/uploads/2023/12/main-bg4-1.jpg')",
      }}
    >
      <div className="w-full max-w-[1200px] mx-auto flex justify-between items-center py-[152px] pb-[169px]">
        <img
          className="px-[120px]"
          src="https://redbutton.co.kr/wp-content/uploads/2023/12/bg3-1.png"
          alt=""
        />
        <div className="flex flex-col">
          <strong className="text-[54px]">FEEL REDBUTTON CLOSELY</strong>
          <span className="text-[22px] font-bold">
            매장을 쉽고 빠르게 찾아보세요.
          </span>
          <span className="text-[17px] mt-[20px] mb-[40px]">
            즐거움 가득한 레드버튼 매장을 미리 만나보세요!
          </span>
          <button className="bg-[#D61414] border-none text-[#F5F4F2] text-[16px] py-[10px] w-[130px]">
            매장 검색하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoreSearch;
