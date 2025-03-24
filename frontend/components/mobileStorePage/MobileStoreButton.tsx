export type ButtonType = "store" | "area";

type MobileStoreButtonProps = {
  active: ButtonType;
  setActive: (value: ButtonType) => void;
};

const MobileStoreButton = ({ active, setActive }: MobileStoreButtonProps) => {
  return (
    <div className="w-full flex border-b-2 border-[#dcba94]">
      <div
        className={`flex-1 text-center py-[16px] text-[15px] ${
          active == "store" ? "bg-[#dcba94] text-[#7b5c40]" : "text-gray-400"
        }`}
        onClick={() => {
          setActive("store");
        }}
      >
        매장명검색
      </div>
      <div
        className={`flex-1 text-center py-[16px] text-[15px] ${
          active == "area" ? "bg-[#dcba94] text-[#7b5c40]" : "text-gray-400"
        }`}
        onClick={() => {
          setActive("area");
        }}
      >
        지역검색
      </div>
    </div>
  );
};

export default MobileStoreButton;
