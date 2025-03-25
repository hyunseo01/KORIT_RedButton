import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const HedaerSubResponsiveKOR = ({ close }: { close: () => void }) => {
  const [isEnglishVisible, setIsEnglishVisible] = useState(false);
  const toggleLanguage = () => {
    setIsEnglishVisible((prev) => !prev);
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-end mt-[50px]">
        <div
          onClick={toggleLanguage}
          className="bg-[#4c4c4c] text-[#999999] rounded-[4px] text-[17px] flex items-center gap-[4px] cursor-pointer w-[81px] h-[30.5px] justify-center z-[3]"
        >
          KOR <IoIosArrowDown />
        </div>
      </div>
      {isEnglishVisible && (
        <div className="flex justify-end">
          <div className="bg-[#4c4c4c] text-[#999999] rounded-[4px] text-[17px] flex items-center cursor-pointer w-[81px] h-[30.5px] justify-start z-[3] px-[11.5px] py-[1.5px] pr-[35px]">
            ENG
          </div>
        </div>
      )}
    </div>
  );
};

export default HedaerSubResponsiveKOR;
