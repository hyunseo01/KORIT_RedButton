const Footer = () => {
  return (
    <footer className="bg-[#272422] flex justify-center h-[216px]">
      <div className="border border-[#272422] max-w-[1200px] flex justify-center items-center gap-[50px]">
        <div className="flex justify-center items-center">
          <img
            className="w-[140px] h-[106px]"
            src="https://redbutton.co.kr/wp-content/uploads/2021/03/%ED%91%B8%ED%84%B0_%EB%A1%9C%EA%B3%A0.png"
            alt=""
          />
        </div>

        <div className="text-[#8c8c8c] flex flex-col gap-[10px]">
          <div className="text-[16px]">
            <strong>주소</strong> : 경기도 안양시 동안구 동편로 13번길 65,
            넥스트아이빌딩 3층
          </div>
          <div className="text-[16px]">
            <strong>사업자번호</strong> : 224-86-00895 · <strong>대표자</strong>{" "}
            : 김동혁 · e-mail : info@redbutton.co.kr
          </div>
          <div className="text-[16px]">
            COPYRIGHT ⓒ Redbutton co.,Ltd. All rights reserved.
          </div>
        </div>

        <div className="text-[#8c8c8c] flex flex-col gap-[10px] justify-center items-center">
          <span className="text-[30px] mr-[80px]">1644-0641</span>
          <div className="flex flex-col text-[16px] text-left">
            <span className="text-left">오전 9시~12시 / 오후 1시~6시</span>
            <span className="text-left">(주말, 공휴일 휴무)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
