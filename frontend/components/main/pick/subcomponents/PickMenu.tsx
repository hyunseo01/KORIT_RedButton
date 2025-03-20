import { PickMenuProps } from "@/types/pickMenuType/pickMenuType";

const PickMenu = ({ image, KoName, EnName }: PickMenuProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img className="w-[240px] h-[270px] bg-[#EDECEA]" src={image} alt="" />
      <span className="text-[20px] mt-[20px] font-bold">{KoName}</span>
      <span className="text-[17px]">{EnName}</span>
    </div>
  );
};

export default PickMenu;
