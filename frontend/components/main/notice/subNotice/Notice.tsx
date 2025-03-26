import { SlArrowRight } from "react-icons/sl";
import NoticeList from "./NoticeList";
import { NoticeArr } from "../../../../data/noticeData/noticeData";

const Notice = () => {
  return (
    <div className="bg-[#ece4d9] flex flex-col ">
      <div className="flex justify-end mt-[29px] mb-[30px] px-[83px] relative">
        <div className="flex flex-col gap-2 ">
          <strong className="text-[20px]">공지사항</strong>
          {NoticeArr.map((v, i) => (
            <NoticeList key={i} title={v.title} category={v.category} />
          ))}
          <span className="flex items-center absolute bottom-0 right-[50px] text-[16px]">
            More
            <SlArrowRight className="text-[12px]" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Notice;
