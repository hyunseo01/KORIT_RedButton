import { BoardGameInfoProps } from "@/types/gameType/gameType";

const BoardGameInfo = ({
  KoName,
  EnName,
  Image,
  info,
  Level,
  People,
  RunningTime,
}: BoardGameInfoProps) => {
  return (
    <section style={{ backgroundColor: "#F0EFED", width: "100vw" }}>
      <div style={{ maxWidth: "1050px", display: "flex" }}>
        <div
          style={{
            backgroundColor: "transparent",
            margin: "40px",
          }}
        >
          <img
            style={{ width: "280px", height: "auto" }}
            src="https://redbutton.co.kr/wp-content/uploads/2024/09/%EB%8B%A4%EB%B9%88%EC%B9%98-%EC%BD%94%EB%93%9C.png"
            alt=""
          />
        </div>
        <div
          style={{
            width: "582px",
            maxWidth: "582px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              paddingBottom: "20px",
              borderBottom: "1px solid #d2d2d2",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div>
              <span
                style={{
                  fontSize: "34px",
                  fontWeight: "bold",
                  marginRight: "5px",
                }}
              >
                다빈치코드
              </span>
              <span style={{ fontSize: "20px" }}>DaVinci Code</span>
            </div>
            <span>
              <img
                style={{ width: "22px", height: "22px" }}
                src="https://redbutton.co.kr/wp-content/uploads/2021/03/close-btn.png"
                alt=""
              />
            </span>
          </div>
          <div
            style={{
              borderBottom: "1px solid #d2d2d2",
              paddingBottom: "20px",
              marginTop: "20px",
            }}
          >
            <span>
              더지니어스 ‘흑과백’! 숫자 추리게임의 대명사! 보드게임
              입문자들의필수코스!
            </span>
          </div>
          <div
            style={{
              borderBottom: "1px solid #d2d2d2",
              paddingBottom: "20px",
              marginTop: "20px",
            }}
          >
            <span
              style={{
                fontSize: "20px",
                marginRight: "20px",
                fontWeight: "bold",
              }}
            >
              난이도 Easy
            </span>
            <span
              style={{
                fontSize: "20px",
                marginRight: "20px",
                fontWeight: "bold",
              }}
            >
              인원 2-4인
            </span>
            <span
              style={{
                fontSize: "20px",
                marginRight: "20px",
                fontWeight: "bold",
              }}
            >
              게임시간 20분
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BoardGameInfo;
