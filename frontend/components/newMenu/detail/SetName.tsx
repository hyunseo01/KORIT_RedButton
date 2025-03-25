import { SetNameProps } from "@/types/menuType/menuType";

const SetName = ({ title, subTitle }: SetNameProps) => {
  return (
    <div className="text-center flex flex-col">
      <strong className="text-[54px] font-bold italic tracking-tighter">
        {title}
      </strong>
      <span className="text-[19px] tracking-tighter">{subTitle}</span>
    </div>
  );
};

export default SetName;
