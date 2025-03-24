type StoreListProps = {
  storeName: string;
  address: string;
  phone: string;
};

const StoreList = ({ storeName, address, phone }: StoreListProps) => {
  return (
    <div className="flex h-[150px] justify-between">
      <h1 className="flex items-center justify-center w-[200px] text-[#d71414] text-[22px] font-bold p-[15px]">
        {storeName}
      </h1>

      <div className="flex flex-col justify-center w-[627px] p-[15px] pl-[76px]">
        <span>{address}</span>
        <span className="font-semibold">{phone}</span>
      </div>

      <div className="flex items-center w-[366px] h-[150px] p-[15px]">
        <button className="bg-[#edecea] text-[#979797] text-[16px] font-bold border border-[#d2d2d2] py-[10px] px-[20px]">
          매장 보유게임 검색
        </button>
        <button className="ml-[17px] bg-[#af8967] text-[#f5f4f2] text-[16px] font-bold border border-[#af8967] py-[10px] px-[20px]">
          자세히 보기
        </button>
      </div>
    </div>
  );
};

export default StoreList;
