import { PickMenuArr } from "@/data/pickMenuData/pickMenuData";
import PickMenu from "./subcomponents/PickMenu";

const Pick = () => {
  return (
    <div className="bg-[#F5F4F2]">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col justify-center items-center gap-[10px] pt-[73px] pb-[103px]">
        <strong className="text-[54px] font-bold">BUTTONER'S PICK</strong>
        <span className="text-[18px]">버트너가 선정한 이 달의 메뉴입니다.</span>
        <div className="flex gap-[20px] mt-[50px]">
          {PickMenuArr.map((v) => (
            <PickMenu image={v.image} KoName={v.Koname} EnName={v.EnName} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pick;
