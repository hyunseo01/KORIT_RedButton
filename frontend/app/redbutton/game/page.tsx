import BoardGame, { BoardData } from "@/data/GameData";
import { SlArrowRight, SlMagnifier } from "react-icons/sl";

const page = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(https://redbutton.co.kr/wp-content/uploads/2023/12/board-game-cafe-app.jpg)`,
        }}
      >
        <h1>SEARCHING BOARD GAMES</h1>
      </div>
      <div style={{ backgroundColor: "#DCBA94" }}>
        <span
          style={{
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: "7px 0",
          }}
        >
          홈 <SlArrowRight /> BOARDGAME <SlArrowRight /> 보드게임 찾기
        </span>
      </div>
      <div style={{ backgroundColor: "#EDECEA" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span
              style={{ color: "#7b5c40", fontWeight: "700", fontSize: "16px" }}
            >
              게임 이름
            </span>
            <div
              style={{
                width: "450px",
                height: "40px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid #D2D2D2",
                padding: "8px 16px",
                color: "#979797",
              }}
            >
              <input type="text" placeholder="게임 이름을 입력하세요 " />
              <SlMagnifier />
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", gap: "20px", marginTop: "50px" }}>
        {BoardData.map((v) => (
          <BoardGame Image={v.Image} KoName={v.KoName} EnName={v.EnName} />
        ))}
      </div>
    </div>
  );
};

export default page;
