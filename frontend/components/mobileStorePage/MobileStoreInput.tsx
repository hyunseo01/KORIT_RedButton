import Input from "../gamePage/subcomponents/Input";
type MobileStoreProps = {
  onSearch: (inputText: string) => void; // searchTerm을 받아서 처리하는 함수
};
const MobileStoreInput = ({ onSearch }: MobileStoreProps) => {
  const handleInputChange = (inputText: string) => {
    onSearch(inputText); // 검색어가 바뀔 때마다 onSearch 호출
  };

  return (
    <div>
      <Input
        width={400}
        height={38}
        fontSize={13}
        onChange={handleInputChange}
        placeholder="매장명을 입력하세요"
        title=""
      />
    </div>
  );
};

export default MobileStoreInput;
