const FooterResponsive = () => {
  return (
    <footer className="bg-[#272422] h-[350px] flex flex-col justify-center">
      <div>
        <div className="flex py-6 px-4">
          <div>
            <em className="text-[#8c8c8c] text-2xl font-normal flex justify-start translate-x-5 -translate-y-2 -mr-10">
              1644-0641
            </em>
            <h2 className="text-[#8c8c8c] text-sm flex justify-start translate-x-5 -translate-y-2 -mr-10">
              오전 9시~12시 / 오후 1시~6시
            </h2>
            <h2 className="text-[#8c8c8c] text-sm flex justify-start translate-x-5 -translate-y-2 -mr-10">
              (주말, 공휴일 휴무)
            </h2>
          </div>
          <div className="flex items-end gap-2 ml-auto">
            <img
              className="w-[34px] h-[34px]"
              src="https://redbutton.co.kr/wp-content/uploads/2021/03/%ED%8E%98%EC%9D%B4%EC%8A%A4%EB%B6%81-%EC%95%84%EC%9D%B4%EC%BD%98.svg"
              alt="Facebook"
            />
            <img
              className="w-[34px] h-[34px]"
              src="https://redbutton.co.kr/wp-content/uploads/2021/03/%EC%9D%B8%EC%8A%A4%ED%83%80-%EC%95%84%EC%9D%B4%EC%BD%98.svg"
              alt="Instagram"
            />
          </div>
        </div>

        <div className="text-[#8c8c8c] text-sm flex flex-col items-center translate-y-12 space-y-1">
          <span>
            <strong>주소</strong> : 경기도 안양시 동안구 동편로 13번길 65,
          </span>
          <span>넥스트아이빌딩 3층</span>
          <span>
            <strong>사업자번호</strong> : 224-86-00895 · <strong>대표자</strong>
            : 김동혁
          </span>
          <span>e-mail : info@redbutton.co.kr</span>
          <span className="mt-5">
            COPYRIGHT ⓒ Redbutton co.,Ltd. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default FooterResponsive;
