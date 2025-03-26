"use client";
import { GamePageSearchProps } from "@/types/gameType/gameType";
import Input from "./subcomponents/Input";

const GamePageSearch = ({ onSearch }: GamePageSearchProps) => {
  const handleInputChange = (searchTerm: string) => {
    onSearch(searchTerm);
  };

  return (
    <div className="bg-[#EDECEA]">
      <div className="flex flex-col justify-center items-center gap-4 py-[40px]">
        <div className="flex items-center gap-2">
          <Input
            fontSize={15}
            width={450}
            height={40}
            title="게임이름"
            placeholder="게임 이름을 입력하세요."
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
};

export default GamePageSearch;
