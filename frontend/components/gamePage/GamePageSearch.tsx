"use client";
import { GamePageSearchProps } from "@/types/gameType/gameType";
import Input from "./subcomponents/Input";
import Select from "./subcomponents/Select";

const GamePageSearch = ({ onSearch }: GamePageSearchProps) => {
  const handleInputChange = (searchTerm: string) => {
    onSearch(searchTerm);
  };
  return (
    <div className="bg-[#EDECEA]">
      <div className="flex flex-col justify-center items-center gap-4 py-[40px]">
        <div className="flex items-center gap-2">
          <Input
            fontSize={16}
            width={450}
            height={40}
            title="게임이름"
            placeholder="게임 이름을 입력하세요."
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-2">
            <Select
              fontSize={16}
              color={"black"}
              width={450}
              height={40}
              title={"지역선택"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePageSearch;
