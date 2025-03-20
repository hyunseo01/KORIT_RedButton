export const BoardData = [
  {
    KoName: "라이헌트",
    EnName: "Lie Hunt",
    Image:
      "https://redbutton.co.kr/wp-content/uploads/2024/09/%EB%9D%BC%EC%9D%B4%ED%97%8C%ED%8A%B8-%EC%8B%9C%ED%81%AC%EB%A6%BF%ED%85%94%EB%9F%AC.png",
    info: "당신이 겪은, 들은 흥미로운 이야기를 풀어보세요.하지만 과연 진실일까요? 한번 베팅해 보도록 하죠!",
    Level: "Easy",
    People: "4-6인",
    RunningTime: "30분",
  },
  {
    KoName: "다빈치코드",
    EnName: "DaVinci Code",
    Image:
      "https://redbutton.co.kr/wp-content/uploads/2024/09/%EB%8B%A4%EB%B9%88%EC%B9%98-%EC%BD%94%EB%93%9C.png",
    info: "더지니어스 ‘흑과백’! 숫자 추리게임의 대명사!보드게임 입문자들의 필수코스!",
    Level: "Easy",
    People: "2-4인",
    RunningTime: "20분",
  },
  {
    KoName: "금지어 게임",
    EnName: "You Can't Say Umm",
    Image:
      "https://redbutton.co.kr/wp-content/uploads/2024/09/%EA%B8%88%EC%A7%80%EC%96%B4%EA%B2%8C%EC%9E%84-removebg-preview.png",
    info: "머뭇머뭇.. 망설이면 큰일 나는 독특한 단어 퀴즈 게임!뇌야 말좀 들어..!!",
    Level: "Easy",
    People: "4,6,8인",
    RunningTime: "15분",
  },
  {
    KoName: "루미큐브",
    EnName: "Rummikub",
    Image:
      "https://redbutton.co.kr/wp-content/uploads/2024/09/%EB%A3%A8%EB%AF%B8%ED%81%90%EB%B8%8C.png",
    info: "숫자 맞추깅~쀼",
    Level: "Normal",
    People: "2-6인",
    RunningTime: "30분",
  },
  {
    KoName: "라쿠카라차",
    EnName: "Bugs in the Kitchen",
    Image:
      "https://redbutton.co.kr/wp-content/uploads/2024/09/%EB%9D%BC%EC%BF%A0%EC%B9%B4%EB%9D%BC%EC%B0%A8.png",
    info: "주방을 제집처럼 활보하는 벌레를 피해라!차마 벌레를 만질 순 없지만 길을 막아서 옆사람한테 보내면?",
    Level: "Very Easy",
    People: "2~4인",
    RunningTime: "5분",
  },
  {
    KoName: "클루",
    EnName: "Clue",
    Image:
      "https://redbutton.co.kr/wp-content/uploads/2024/09/%ED%81%B4%EB%A3%A8.png",
    info: "범인, 도구, 장소 이 3가지를 추리하라!추리게임의 베이직, 클루!",
    Level: "Hard",
    People: "2-6인",
    RunningTime: "35분",
  },
  {
    KoName: "스플렌더",
    EnName: "Splendor",
    Image:
      "https://redbutton.co.kr/wp-content/uploads/2024/09/%EC%8A%A4%ED%94%8C%EB%A0%8C%EB%8D%94.png",
    info: "2015년 판매량 1위에 빛나는보석칩으로 카드를 사서 모으는 극강의 두뇌꿀잼게임.",
    Level: "Hard",
    People: "2-4인",
    RunningTime: "45분",
  },
  {
    KoName: "선물입니다",
    EnName: "Present",
    Image:
      "https://redbutton.co.kr/wp-content/uploads/2024/09/%EC%84%A0%EB%AC%BC%EC%9E%85%EB%8B%88%EB%8B%A4.png",
    info: "간단하게 즐기는 맛보기 심리게임!원치 않는 선물 또한 선물입니다~!",
    Level: "Easy",
    People: "2-6인",
    RunningTime: "15분",
  },
  {
    KoName: "인디언포커",
    EnName: "Indian Poker",
    Image:
      "https://redbutton.co.kr/wp-content/uploads/2024/09/%EC%9D%B8%EB%94%94%EC%96%B8-%ED%8F%AC%EC%BB%A4.png",
    info: "오직 카드로만 승부본다!간단하지만 심장 쫄리는 추리 심리 베팅 게임~!",
    Level: "Easy",
    People: "2-6인",
    RunningTime: "30분",
  },
  {
    KoName: "꼬치의 달인",
    EnName: "Kushi Express",
    Image:
      "https://redbutton.co.kr/wp-content/uploads/2024/09/%EA%BC%AC%EC%B9%98%EC%9D%98_%EB%8B%AC%EC%9D%B8-removebg-preview.png",
    info: "꼬치 꼽깅~쀼",
    Level: "Very Easy",
    People: "2-4인",
    RunningTime: "15분",
  },
];
type BoardGameProps = {
  KoName: string;
  EnName: string;
  Image: string;
  ClickInfo: () => void;
};
const BoardGame = ({ KoName, EnName, Image, ClickInfo }: BoardGameProps) => {
  return (
    <div
      onClick={ClickInfo}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img style={{ width: "240px", height: "270px" }} src={Image} alt="" />
      <span
        style={{ fontSize: "20px", marginTop: "20px", fontWeight: "700  " }}
      >
        {KoName}
      </span>
      <span style={{ fontSize: "17px" }}>{EnName}</span>
    </div>
  );
};

export default BoardGame;
