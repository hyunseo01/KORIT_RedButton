import { BoardGameInfoProps } from "@/types/gameType/gameType";

const BoardGameInfo = ({
  KoName,
  EnName,
  Image,
  info,
  Level,
  People,
  RunningTime,
}: BoardGameInfoProps) => {
  return (
    <section className="bg-[#F0EFED] w-full">
      <div className="max-w-[1050px] flex">
        <div className="bg-transparent m-[40px]">
          <img className="w-[280px] h-auto" src={Image} alt="" />
        </div>
        <div className="w-[582px] max-w-[582px] flex flex-col justify-center">
          <div className="pb-[20px] border-b border-[#D2D2D2] flex justify-between">
            <div>
              <span className="text-[34px] font-bold mr-[5px]">{KoName}</span>
              <span className="text-[20px]">{EnName}</span>
            </div>
            <span>
              <img
                className="w-[22px] h-[22px]"
                src="https://redbutton.co.kr/wp-content/uploads/2021/03/close-btn.png"
                alt=""
              />
            </span>
          </div>
          <div className="border-b border-[#D2D2D2] pb-[20px] mt-[20px]">
            <span>{info}</span>
          </div>
          <div className="border-b border-[#D2D2D2] pb-[20px] mt-[20px]">
            <span className="text-[20px] mr-[20px] font-bold">
              난이도 : {Level}
            </span>
            <span className="text-[20px] mr-[20px] font-bold">
              인원 : {People}
            </span>
            <span className="text-[20px] mr-[20px] font-bold">
              게임시간 : {RunningTime}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoardGameInfo;
