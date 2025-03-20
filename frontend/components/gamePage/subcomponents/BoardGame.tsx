type BoardGameProps = {
  KoName: string;
  EnName: string;
  Image: string;
  ClickInfo: () => void;
};

const BoardGame = ({ KoName, EnName, Image, ClickInfo }: BoardGameProps) => {
  return (
    <div
      onClick={ClickInfo}
      className="flex flex-col justify-center items-center cursor-pointer"
    >
      <img className="w-[240px] h-[270px]" src={Image} alt="" />
      <span className="text-xl font-bold mt-5">{KoName}</span>
      <span className="text-lg">{EnName}</span>
    </div>
  );
};

export default BoardGame;
