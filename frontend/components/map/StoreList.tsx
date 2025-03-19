type StoreListProps = {
  storeName: string;
  address: string;
  phone: string;
};
const StoreList = ({ storeName, address, phone }: StoreListProps) => {
  return (
    <div
      style={{
        display: "flex",
        height: "150px",
        justifyContent: "space-between",
      }}
    >
      <h1
        style={{
          width: "200px",
          textAlign: "center",
          alignContent: "center",
          color: "#d71414",
          fontSize: "22px",
          fontWeight: "bold",
          padding: "15px",
        }}
      >
        {storeName}
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "627px",
          justifyContent: "center",
          padding: "15px 15px 15px 76px",
        }}
      >
        <span>{address}</span>
        <span>
          <strong>{phone}</strong>
        </span>
      </div>
      <div
        style={{
          display: "flex",
          width: "366px",
          height: "150px",
          alignItems: "center",
          padding: "15px",
        }}
      >
        <button
          style={{
            backgroundColor: "#edecea",
            color: "#979797",
            fontSize: "16px",
            border: " 1px solid #d2d2d2",
            padding: "8px 20px 10px 20px",
            fontWeight: "700",
            height: "44px",
          }}
        >
          매장 보유게임 검색
        </button>
        <button
          style={{
            backgroundColor: "#af8967",
            color: "#f5f4f2",
            fontSize: "16px",
            border: " 1px solid #af8967",
            padding: "8px 20px 10px 20px",
            fontWeight: "700",
            height: "44px",
            marginLeft: "17px",
          }}
        >
          자세히 보기
        </button>
      </div>
    </div>
  );
};

export default StoreList;
