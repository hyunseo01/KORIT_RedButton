import Input from "./subcomponents/Input";
import Select from "./subcomponents/Select";

const GamePageSearch = () => {
  return (
    <div className="bg-[#EDECEA]">
      <div className="flex flex-col justify-center items-center gap-4 py-[40px]">
        <div className="flex items-center gap-2">
          <Input
            width={450}
            height={40}
            title="게임이름"
            placeholder="게임 이름을 입력하세요."
          />
        </div>
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-2">
            <Select width={450} height={40} title={"지역선택"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePageSearch;
