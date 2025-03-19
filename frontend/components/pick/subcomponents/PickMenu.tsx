type PickMenuProps = {
  image: string;
  KoName: string;
  EnName: string;
};
export const PickMenuArr = [
  {
    image:
      "https://redbutton.co.kr/wp-content/uploads/2024/09/%EB%BD%95%EB%94%B0-%EC%89%90%EC%9D%B4%ED%81%AC%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80.png",
    Koname: "뽕따 쉐이크",
    EnName: "Cream Soda Shake",
  },
  {
    image:
      "https://redbutton.co.kr/wp-content/uploads/2024/09/%EC%B9%B4%EB%9D%BC%EB%A9%9C-%ED%8C%9D%EC%BD%98-%EC%89%90%EC%9D%B4%ED%81%AC%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80.png",
    Koname: "카라멜 팝콘 쉐이크",
    EnName: "Caramel Popcorn Shake",
  },
  {
    image:
      "https://redbutton.co.kr/wp-content/uploads/2024/09/%EC%B8%84%EB%9F%AC%EC%8A%A4.png",
    Koname: "누텔라 쫀득 츄러스",
    EnName: "Nutella Chewy Churros",
  },
  {
    image:
      "https://redbutton.co.kr/wp-content/uploads/2024/09/%EC%8A%A4%EB%85%B8%EC%9E%89%EC%8A%88%ED%94%84%EB%A6%BC%EC%B9%98%ED%82%A8-1.png",
    Koname: "스노윙 슈프림 순살치킨",
    EnName: "Snowing Supreme Boneless Chicken",
  },
];

const PickMenu = ({ image, KoName, EnName }: PickMenuProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        style={{ width: "240px", height: "270px", backgroundColor: "#EDECEA" }}
        src={image}
        alt=""
      />
      <span
        style={{ fontSize: "20px", marginTop: "20px", fontWeight: "700  " }}
      >
        {KoName}
      </span>
      <span style={{ fontSize: "17px" }}>{EnName}</span>
    </div>
  );
};

export default PickMenu;
