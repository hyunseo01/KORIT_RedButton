"use client";

import Input from "../gamePage/subcomponents/Input";
import Select from "../gamePage/subcomponents/Select";

type MobileGamePageSearchProps = {
  onSearch: (searchTerm: string) => void; // searchTerm을 받아서 처리하는 함수
};
const MobileGamePageSearch = ({ onSearch }: MobileGamePageSearchProps) => {
  const handleInputChange = (searchTerm: string) => {
    onSearch(searchTerm); // 검색어가 바뀔 때마다 onSearch 호출
  };
  return (
    <div className="bg-[#EDECEA]">
      <div className="flex flex-col flex-1 justify-center items-center gap-4 py-[40px] ">
        <div className="flex items-center gap-2">
          <Input
            width={400}
            height={40}
            title="게임"
            placeholder="게임 이름을 입력하세요."
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-2">
            <Select width={400} height={40} title={"지역"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileGamePageSearch;
