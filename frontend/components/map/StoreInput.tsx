import Input from "../gamePage/subcomponents/Input";
type MobileStoreProps = {
  onSearch: (inputText: string) => void; // searchTerm을 받아서 처리하는 함수
};
const StoreInput = ({ onSearch }: MobileStoreProps) => {
  const handleInputChange = (inputText: string) => {
    onSearch(inputText); // 검색어가 바뀔 때마다 onSearch 호출
  };

  return (
    <>
      <Input
        width={233}
        height={44}
        fontSize={15}
        onChange={handleInputChange}
        placeholder="매장명을 입력하세요"
        title="매장명으로 검색하기"
      />
    </>
  );
};

export default StoreInput;
