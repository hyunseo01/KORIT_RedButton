type BoardGameInfoProps = {
  KoName: string;
  EnName: string;
  Image: string;
  info1: string;
  info2: string;
  Level: string;
  People: string;
  RunningTime: string;
};

const GameInfo = ({
  KoName,
  EnName,
  Image,
  info1,
  info2,
  Level,
  People,
  RunningTime,
}: BoardGameInfoProps) => {
  return (
    <>
      <section className=" w-screen flex justify-center bg-[#F0EFED] absolute left-0">
        <div className="max-w-[1050px] flex bg-transparent ">
          <div className="m-[40px]">
            <img className="w-[280px] h-[280px]" src={Image} alt="" />
          </div>
          <div className="w-[582px] max-w-[582px] flex flex-col justify-center">
            <div className="flex flex-row justify-between border-b border-b-[#d2d2d2] pb-[20px]">
              <div>
                <span className="text-4xl mr-5px font-bold">{KoName}</span>
                <span className="text-xl">{EnName}</span>
              </div>
              <span>
                <img
                  className="w-[22px] h-[22px]"
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
            <div className="mt-[20px] pb-[20px] border-b border-b-[#d2d2d2]">
              <span className="text-xl mr-[20px] font-bold">
                난이도 :{Level}
              </span>
              <span className="text-xl mr-[20px] font-bold">
                인원 :{People}
              </span>
              <span className="text-xl mr-[20px] font-bold">
                게임시간 :{RunningTime}
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default GameInfo;
