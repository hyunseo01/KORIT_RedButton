import { MenuInfoProps } from "@/types/menuType/menuType";

export default function MenuInfo({
  koname,
  enname,
  image,
  info,
  allergy,
  onClose,
}: MenuInfoProps) {
  return (
    <section className="flex h-full py-4">
      <img
        src={image}
        alt={koname}
        className="w-[350px] h-[400px] object-cover rounded -mt-4"
      />
      <div className="flex-1 flex flex-col justify-between ml-8 px-8 py-4">
        <div>
          <div className="flex justify-between border-b border-[#D2D2D2] pb-2">
            <div>
              <h2 className="text-[34px] font-bold">{koname}</h2>
              <span className="text-[20px] ml-2">{enname}</span>
            </div>
            <button onClick={onClose} className="-mt-15">
              <img
                src="https://redbutton.co.kr/wp-content/uploads/2021/03/close-btn.png"
                alt="close"
                className="w-6 h-6"
              />
            </button>
          </div>
          <p className="mt-4 text-[16px] leading-relaxed whitespace-pre-wrap">
            {info}
          </p>
        </div>
        <div className="text-[14px] italic text-gray-600">
          <p>** 제품의 취급 여부는 매장 별로 상이할 수 있습니다.</p>
          <p>** 알레르기 유발 식품 : {allergy || "없음"}</p>
        </div>
      </div>
    </section>
  );
}
