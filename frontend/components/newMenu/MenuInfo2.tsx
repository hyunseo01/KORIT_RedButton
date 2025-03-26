"use client";

import { MenuInfo2Props } from "@/types/menuType/menuType";

const MenuInfo2 = ({
  image,
  KoName,
  EnName,
  info,
  allergy,
  onClose,
}: MenuInfo2Props) => {
  return (
    <section className="w-screen absolute left-0 flex justify-center bg-[#F0EFED] py-[40px]">
      <div className="max-w-[1050px] flex bg-transparent">
        <div className="mr-[40px]">
          <img
            src={image}
            alt={KoName}
            className="w-[350px] h-[400px] object-cover rounded md:block hidden"
          />
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="flex justify-between md:border-b md:border-[#D2D2D2] border:none pb-[20px]">
              <div>
                <h2 className="text-[34px] font-bold md:block hidden">
                  {KoName}
                </h2>
                <span className="text-[20px] ml-2 md:block hidden">
                  {EnName}
                </span>
              </div>
              <button onClick={onClose}>
                <img
                  src="https://redbutton.co.kr/wp-content/uploads/2021/03/close-btn.png"
                  alt="close"
                  className="w-6 h-6 md:block hidden"
                />
              </button>
            </div>
            <p className="mt-[20px] text-[14px] md:text-[16px] leading-relaxed whitespace-pre-wrap md:pb-0 pb-5 md:border-none border-b border-b-[#D2D2D2]">
              {info}
            </p>
          </div>
          <div className="mt-[20px] text-[13px] md:text-[14px] italic text-gray-600 ">
            <p>** 제품의 취급 여부는 매장 별로 상이할 수 있습니다.</p>
            <p>** 알레르기 유발 식품 : {allergy || "없음"}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuInfo2;
