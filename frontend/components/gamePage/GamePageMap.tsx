"use client";

import { useState } from "react";
import GameInfo from "./subcomponents/GameInfo";
import clsx from "clsx";
import BoardGame from "./subcomponents/BoardGame";
import { BoardData } from "@/data/gameData/GameData";

const GamePageMap = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const ClickEvent = (index: number) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col py-[84px] pb-[160px] bg-[#F8F7F5]">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h1 style={{ fontSize: "48px" }}>MONTHLY BOARD GAMES BEST 10</h1>
        <span style={{ fontSize: "18px" }}>
          이 달에 가장 선택을 많이 받은 게임들을 소개합니다.
        </span>
      </div>
      <div className="gap-5 mt-[50px] cursor-pointer flex flex-wrap w-full max-w-[1050px] mx-auto row-gap-[74px]">
        {BoardData.map((v, i) => (
          <div
            key={i}
            className={clsx("flex flex-col w-[240px]", {
              "mb-[360px]": selectedIndex === i,
              "mb-[20px]": selectedIndex !== i,
            })}
          >
            <BoardGame
              Image={v.Image}
              KoName={v.KoName}
              EnName={v.EnName}
              ClickInfo={() => ClickEvent(i)}
            />
            {selectedIndex === i && (
              <div className="w-full py-[20px] mt-[20px]">
                <div className="w-screen">
                  <GameInfo
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
  );
};

export default GamePageMap;
