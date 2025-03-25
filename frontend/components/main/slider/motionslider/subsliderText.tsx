import { subsliderTextProps } from "@/types/sliderType/subsliderTextType";

const SubsliderText = ({
  EnName,
  KoName,
  GameInfo,
  Level,
  Recommend,
  RunningTime,
}: subsliderTextProps) => {
  return (
    <section className="absolute w-[750px]">
      <div className="text-white text-[18px] mt-[56px] mb-[54px]">
        새 영상설명 지원 게임
      </div>
      <div className="font-bold text-[50px] text-[#ddbb95]">{EnName}</div>
      <div className="text-[26px] text-[#ddbb95] mb-[20px]">{KoName}</div>
      <div className="mb-[20px]">
        <span className="border border-[#a9a9b9] text-white font-bold text-[17px] py-[7px] px-[21px]">
          난이도 {Level}
        </span>
        <span className="border border-[#a9a9b9] text-white font-bold text-[17px] py-[7px] px-[21px]">
          추천인원 {Recommend}
        </span>
        <span className="border border-[#a9a9b9] text-white font-bold text-[17px] py-[7px] px-[21px]">
          게임시간 {RunningTime}
        </span>
      </div>
      <p className="w-[480px] text-[17px] leading-[28px] tracking-[-0.51px] text-[#a9a9b9]">
        {GameInfo}
      </p>
    </section>
  );
};

export default SubsliderText;
