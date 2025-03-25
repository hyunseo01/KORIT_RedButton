const StoreSearch = () => {
  return (
    <div
      className="bg-cover"
      style={{
        backgroundImage:
          "url('https://redbutton.co.kr/wp-content/uploads/2023/12/main-bg4-1.jpg')",
      }}
    >
      <div className="w-full mx-auto flex flex-col py-[152px] pb-[169px] gap-[px] md:justify-center md:flex-row items-center">
        <div className="flex flex-col order-1  md:order-2">
          <strong className="md:text-[54px] tracking-[-3px] hidden  md:block">
            FEEL REDBUTTON CLOSELY
          </strong>
          <span className="text-[18px] font-bold hidden  md:block">
            매장을 쉽고 빠르게 찾아보세요.
          </span>
          <span className="text-[18px] font-bold block md:hidden text-center">
            매장검색하기
          </span>
          <span className="text-[14px] mt-[10px] mb-[20px] md:text-[17px] md:mt-[20px] md:mb-[40px] md:block hidden ">
            즐거움 가득한 레드버튼 매장을 미리 만나보세요!
          </span>
          <span className="text-[14px] mt-[10px] mb-[20px] md:text-[17px] md:mt-[20px] md:mb-[40px] md:hidden block text-center">
            즐거움 가득한 레드버튼 매장을
            <br />
            미리 만나보세요!
          </span>
          <button className="bg-[#D61414] border-none text-[#F5F4F2] text-[16px] py-[10px] w-[130px] md:block hidden">
            <span>매장 검색하기</span>
          </button>
          <button className="w-[200px] border border-black text-[#7B5C40] font-bold rounded px-18 py-1 text-[16px] md:hidden block">
            <span>자세히 보기</span>
          </button>
        </div>
        <div className="w-[200px] md:w-[690px] md:items-center flex md:justify-center order-2 md:order-1">
          <img
            className="w-[456px]"
            src="https://redbutton.co.kr/wp-content/uploads/2023/12/bg3-1.png"
            alt="Image"
          />
        </div>
      </div>
    </div>
  );
};

export default StoreSearch;
