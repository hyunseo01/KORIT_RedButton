import { SlArrowRight } from "react-icons/sl";
import NoticeList from "./NoticeList";

const Notice = () => {
  const NoticeArr = [
    {
      title: "레드버튼 전남 목포평화광장점(100호점) 오픈",
      category: "매장오픈",
    },
    {
      title: "레드버튼의 두번째 오리지널 게임 [라이헌트:미스터리아티스트] 출시",
      category: "공지",
    },
    {
      title: "멤버십 어플리케이션 이용약관 변경 안내",
      category: "공지",
    },
    {
      title: "문화가 있는 날 특별 프로모션 안내",
      category: "이벤트",
    },
  ];
  return (
    <div
      style={{
        backgroundColor: "#ece4d9",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "29px",
          marginBottom: "30px",
          padding: "0 83px 0 0",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <strong style={{ fontSize: "20px" }}>공지사항</strong>
          {NoticeArr.map((v) => (
            <NoticeList title={v.title} category={v.category} />
          ))}
          <span
            style={{
              position: "absolute",
              bottom: "0",
              right: "50px",
              fontSize: "16px",
            }}
          >
            More
            <SlArrowRight style={{ fontSize: "12px" }} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Notice;
