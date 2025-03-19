"use client";

import Select from "@/components/boardGame/Select";
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
        <h1
          style={{
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            fontSize: "56px",
            color: "white",
            fontWeight: "700",
            padding: "69px 0px 69px 0px",
          }}
        >
          SEARCHING BOARD GAMES
        </h1>
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "15px",
            padding: "40px 0",
          }}
        >
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
                backgroundColor: "white",
              }}
            >
              <input type="text" placeholder="게임 이름을 입력하세요 " />
              <SlMagnifier />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Select width={450} height={40} title={"지역 선택"} />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          width: "100%",
          maxWidth: "1050px",
          margin: "0 auto",
          rowGap: "74px",
          padding: "100px 0",
        }}
      >
        {BoardData.map((v) => (
          <BoardGame Image={v.Image} KoName={v.KoName} EnName={v.EnName} />
        ))}
      </div>
    </div>
  );
};

export default page;
