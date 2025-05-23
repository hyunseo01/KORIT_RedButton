import { GameInfoProps } from "@/types/gameType/gameType";

const GameInfo = ({
  KoName,
  EnName,
  Image,
  info1,
  info2,
  Level,
  People,
  RunningTime,
}: GameInfoProps) => {
  return (
    <>
      <section className=" w-screen flex justify-center bg-[#F0EFED] absolute left-0">
        <div className="max-w-[1050px] flex bg-transparent ">
          <div className="m-[40px]">
            <img
              className="w-[280px] h-[280px] md:block hidden"
              src={Image}
              alt=""
            />
          </div>
          <div className="w-[582px] max-w-[582px] flex flex-col justify-center">
            <div className="flex flex-row justify-between border:none md:border-b md:border-b-[#d2d2d2] pb-[20px]">
              <div>
                <span className="text-4xl md:block hidden mr-5px font-bold">
                  {KoName}
                </span>
                <span className="text-xl md:block hidden">{EnName}</span>
              </div>
              <span>
                <img
                  className="w-[22px] h-[22px] md:block hidden"
                  src="https://redbutton.co.kr/wp-content/uploads/2021/03/close-btn.png"
                  alt=""
                />
              </span>
            </div>
            <div className="mt-[20px] pb-[20px] border-b border-b-[#d2d2d2]">
              <span>{info1}</span>
              <br />
              <span>{info2}</span>
            </div>
            <div className="mt-[20px] pb-[20px] border-b border-b-[#d2d2d2] ">
              <span className="md:text-xl text-[14px] mr-[20px] font-bold">
                난이도 :{Level}
              </span>
              <span className="md:text-xl text-[14px] mr-[20px] font-bold">
                인원 :{People}
              </span>
              <span className="md:text-xl text-[14px] mr-[20px] font-bold">
                게임시간 :{RunningTime}
              </span>
            </div>
            <span className="flex md:justify-end mt-7 mb-7 md:mb-0">
              <button className="font-bold text-[16px] border border-[#d2d2d2] text-[#979797] pt-[3px] pr-[14px] pb-[5px] pl-[14px]">
                보유매장 모두보기
              </button>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};
export default GameInfo;
