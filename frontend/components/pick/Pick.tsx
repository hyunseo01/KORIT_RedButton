import PickMenu, { PickMenuArr } from "./subcomponents/PickMenu";

const Pick = () => {
  return (
    <div style={{ backgroundColor: "#F5F4F2" }}>
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          padding: "73px 0px 103px 0px",
        }}
      >
        <strong style={{ fontSize: "54px", fontWeight: "700" }}>
          BUTTONER'S PICK
        </strong>
        <span style={{ fontSize: "18px" }}>
          버트너가 선정한 이 달의 메뉴입니다.
        </span>
        <div style={{ display: "flex", gap: "20px", marginTop: "50px" }}>
          {PickMenuArr.map((v) => (
            <PickMenu image={v.image} KoName={v.Koname} EnName={v.EnName} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pick;
