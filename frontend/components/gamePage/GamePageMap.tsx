"use client";

import { useEffect, useState } from "react";
import GameInfo from "./subcomponents/GameInfo";
import BoardGame from "./subcomponents/BoardGame";
import clsx from "clsx";
import { Game } from "@/types/gameType/gameType";

const GamePageMap = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [gameData, setGameData] = useState<Game[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/game/findall.do")
      .then((r) => r.json())
      .then((data) => setGameData(data))
      .catch((e) => {
        alert("서버 켜라");
        console.error("Error : ", e);
      });
  }, []);

  const ClickEvent = (index: number) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col py-[84px] pb-[160px] bg-[#F8F7F5]">
      <div className="flex flex-col items-center mb-[20px]">
        <h1 className="text-[48px]">MONTHLY BOARD GAMES BEST 10</h1>
        <span className="text-[18px]">
          이 달에 가장 선택을 많이 받은 게임들을 소개합니다.
        </span>
      </div>
      <div className="gap-5 mt-[50px] cursor-pointer flex flex-wrap w-full max-w-[1050px] mx-auto row-gap-[74px]">
        {gameData.map((v, i) => (
          <div
            className={clsx("flex flex-col w-[240px]", {
              "mb-[360px]": selectedIndex === i,
              "mb-[20px]": selectedIndex !== i,
            })}
          >
            <BoardGame
              Image={v.image}
              KoName={v.koname}
              EnName={v.enname}
              ClickInfo={() => ClickEvent(i)}
            />
            {selectedIndex === i && (
              <div className="w-full py-[20px] mt-[20px]">
                <div className="w-screen">
                  <GameInfo
                    KoName={gameData[i].koname}
                    EnName={gameData[i].enname}
                    Image={gameData[i].image}
                    info1={gameData[i].info1}
                    info2={gameData[i].info2}
                    Level={gameData[i].level}
                    People={gameData[i].player}
                    RunningTime={gameData[i].time}
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
