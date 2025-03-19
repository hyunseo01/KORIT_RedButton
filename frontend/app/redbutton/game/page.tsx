"use client";

import Input from "@/components/boardGame/Input";
import Select from "@/components/boardGame/Select";
import BoardGameInfo from "@/components/gameInfo/gameInfo";
import BoardGame, { BoardData } from "@/data/GameData";
import { useState } from "react";
import { SlArrowRight, SlMagnifier } from "react-icons/sl";

const page = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const ClickEvent = (index: number) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };

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
            <Input
              width={450}
              height={40}
              title="게임이름"
              placeholder="게임 이름을 입력하세요."
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Select width={450} height={40} title={"지역선택"} />
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            gap: "20px",
            marginTop: "50px",
            cursor: "pointer",
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            maxWidth: "1050px",
            margin: "0 auto",
            rowGap: "74px",
          }}
        >
          {BoardData.map((v, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                width: "240px",
                marginBottom: selectedIndex === i ? "360px" : "20px",
              }}
            >
              <BoardGame
                Image={v.Image}
                KoName={v.KoName}
                EnName={v.EnName}
                ClickInfo={() => ClickEvent(i)}
              />
              {selectedIndex === i && (
                <div
                  style={{
                    width: "100%",
                    padding: "20px 0",
                    marginTop: "20px",
                  }}
                >
                  <div
                    style={{
                      width: "100vw",
                    }}
                  >
                    <BoardGameInfo
                      KoName={BoardData[i].KoName}
                      EnName={BoardData[i].EnName}
                      Image={BoardData[i].Image}
                      info={BoardData[i].info}
                      Level={BoardData[i].Level}
                      People={BoardData[i].People}
                      RunningTime={BoardData[i].RunningTime}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
