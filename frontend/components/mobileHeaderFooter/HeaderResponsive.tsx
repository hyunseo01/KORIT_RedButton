import { useState } from "react";
import HeaderSubResponsive2 from "./HeaderSubResponsive2";

const HeaderResponsive = () => {
  const [isOpenSide, setIsOpenSide] = useState(false);

  const close = () => setIsOpenSide(false);

  return (
    <>
      <header className="bg-[#272422]">
        <div className="w-full max-w-[767px] h-[81px] px-5 py-3 flex items-center justify-between">
          <img
            className="w-[50px] h-[50px] translate-y-[5px]"
            src="https://redbutton.co.kr/wp-content/uploads/2021/03/GNB_logo.png"
            alt="Logo"
          />
          <img
            onClick={() => setIsOpenSide((prev) => !prev)}
            className="w-[26px] h-[22px] cursor-pointer -translate-y-[1px]"
            src="https://redbutton.co.kr/wp-content/uploads/2023/02/mobile_menu.png"
            alt="Menu"
          />
        </div>
      </header>
      {isOpenSide && <HeaderSubResponsive2 close={close} />}
    </>
  );
};

export default HeaderResponsive;
