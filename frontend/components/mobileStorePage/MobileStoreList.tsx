type MobileStoreListProps = {
  name: string;
  phone: string;
  address: string;
};

const MobileStoreList = ({ name, phone, address }: MobileStoreListProps) => {
  return (
    <div className="flex flex-col px-5 py-5 bg-[#fdfcfa] border-b border-[#e6e6e6]">
      <div className="flex justify-between mb-[13px]">
        <h1 className="text-[#d71414] text-[17px] font-bold">{name}</h1>
        <button className="bg-inherit text-[#979797] border border-solid border-[#d2d2d2] text-[12px] font-medium py-[3px] px-[10px] rounded-[3px]">
          자세히보기
        </button>
      </div>
      <div className="flex flex-col text-[13px]">
        <span>{phone}</span>
        <span>{address}</span>
      </div>
    </div>
  );
};

export default MobileStoreList;
