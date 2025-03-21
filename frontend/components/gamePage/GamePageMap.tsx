"use client";
import { useState } from "react";
import GameInfo from "./subcomponents/GameInfo";
import clsx from "clsx";
import BoardGame from "./subcomponents/BoardGame";
import { BoardData } from "@/data/gameData/GameData";
import GamePageSearch from "./GamePageSearch";

const GamePageMap = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [filteredData, setFilteredData] = useState(BoardData); // Initial board data

  // Handle the click event for selecting a game
  const ClickEvent = (index: number) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  // Search handler to filter the games
  const handleSearch = (searchTerm: string) => {
    const filtered = BoardData.filter(
      (game) =>
        game.KoName.toLowerCase().includes(searchTerm.toLowerCase()) || // Filter by Korean name
        game.EnName.toLowerCase().includes(searchTerm.toLowerCase()) // Filter by English name
    );
    setFilteredData(filtered); // Update filtered data
  };

  return (
    <div>
      {/* 검색 입력 컴포넌트 */}
      <GamePageSearch onSearch={handleSearch} />
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
          {filteredData.map((v, i) => (
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
    </div>
  );
};

export default GamePageMap;
