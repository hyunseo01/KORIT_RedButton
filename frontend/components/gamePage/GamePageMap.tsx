"use client";

import { useEffect, useState } from "react";
import GameInfo from "./subcomponents/GameInfo";
import BoardGame from "./subcomponents/BoardGame";
import clsx from "clsx";
import { Game } from "@/types/gameType/gameType";
import GamePageSearch from "./GamePageSearch";

const GamePageMap = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [gameData, setGameData] = useState<Game[]>([]);
  const [filteredData, setFilteredData] = useState<Game[]>([]);

  useEffect(() => {
    fetch("https://render-0ggi.onrender.com/game/findall.do")
      .then((r) => r.json())
      .then((data) => {
        setGameData(data);
        setFilteredData(data);
      })
      .catch((e) => {
        console.error("Error: ", e);
      });
  }, []);

  const handleSearch = (searchTerm: string) => {
    const filtered = gameData.filter(
      (game) =>
        game.koname.includes(searchTerm) ||
        game.enname.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const ClickEvent = (index: number) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  return (
    <div>
      <GamePageSearch onSearch={handleSearch} />
      <div className="flex flex-col py-[84px] pb-[160px] bg-[#F8F7F5]">
        <div className="flex flex-col items-center mb-[20px]">
          <h1 className="text-[48px]">MONTHLY BOARD GAMES BEST 10</h1>
          <span className="text-[18px]">
            이 달에 가장 선택을 많이 받은 게임들을 소개합니다.
          </span>
        </div>
        <div className="gap-5 mt-[50px] cursor-pointer flex flex-wrap w-full max-w-[1050px] mx-auto row-gap-[74px]">
          {filteredData.map((v, i) => (
            <div
              key={i}
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
                      KoName={v.koname}
                      EnName={v.enname}
                      Image={v.image}
                      info1={v.info1}
                      info2={v.info2}
                      Level={v.level}
                      People={v.player}
                      RunningTime={v.time}
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

export default GamePageMap;
