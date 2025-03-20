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
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img style={{ width: "240px", height: "270px" }} src={Image} alt="" />
      <span
        style={{ fontSize: "20px", marginTop: "20px", fontWeight: "700  " }}
      >
        {KoName}
      </span>
      <span style={{ fontSize: "17px" }}>{EnName}</span>
    </div>
  );
};

export default BoardGame;
