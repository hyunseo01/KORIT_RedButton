import Input from "../gamePage/subcomponents/Input";
type MobileStoreProps = {
  onSearch: (inputText: string) => void;
};
const MobileStoreInput = ({ onSearch }: MobileStoreProps) => {
  const handleInputChange = (inputText: string) => {
    onSearch(inputText);
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
