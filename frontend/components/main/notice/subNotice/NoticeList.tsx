import { NoticeListProps } from "@/types/noticeType/noticeType";

const NoticeList = ({ title, category }: NoticeListProps) => {
  return (
    <div className="flex gap-[5px] items-center">
      <span className="text-[16px]">{title}</span>
      <span className="text-[14px] text-[#949494]">{category}</span>
    </div>
  );
};

export default NoticeList;
