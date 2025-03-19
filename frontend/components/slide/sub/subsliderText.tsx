type subsliderTextProps = {
  EnName: string;
  KoName: string;
  GameInfo: string;
  Level: string;
  Recommend: string;
  RunningTime: string;
};
const SubsliderText = ({
  EnName,
  KoName,
  GameInfo,
  Level,
  Recommend,
  RunningTime,
}: subsliderTextProps) => {
  return (
    <section style={{ position: "absolute", width: "500px" }}>
      <div
        style={{
          color: "white",
          fontSize: "18px",
          marginTop: "56px",
          marginBottom: "54px",
        }}
      >
        새 영상설명 지원 게임
      </div>
      <div style={{ fontWeight: "bold", fontSize: "68px", color: "#ddbb95" }}>
        {EnName}
      </div>
      <div style={{ fontSize: "26px", color: "#ddbb95", marginBottom: "20px" }}>
        {KoName}
      </div>
      <div style={{ marginBottom: "20px" }}>
        <span
          style={{
            border: "1px solid #a9a9b9",
            color: "white",
            fontWeight: "bold",
            fontSize: "17px",
            padding: "7px 21px 8px 21px",
          }}
        >
          {Level}
        </span>
        <span
          style={{
            border: "1px solid #a9a9b9",
            color: "white",
            fontWeight: "bold",
            fontSize: "17px",
            padding: "7px 21px 8px 21px",
          }}
        >
          {Recommend}
        </span>
        <span
          style={{
            border: "1px solid #a9a9b9",
            color: "white",
            fontWeight: "bold",
            fontSize: "17px",
            padding: "7px 21px 8px 21px",
          }}
        >
          {RunningTime}
        </span>
      </div>
      <p
        style={{
          fontSize: "17px",
          lineHeight: "28px ",
          letterSpacing: "-0.51px",
          color: "#a9a9b9",
        }}
      >
        {GameInfo}
      </p>
    </section>
  );
};

export default SubsliderText;
