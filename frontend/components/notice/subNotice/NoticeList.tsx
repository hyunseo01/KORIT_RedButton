type NoticeListProps = {
  title: string;
  category: string;
};

const NoticeList = ({ title, category }: NoticeListProps) => {
  return (
    <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
      <span style={{ fontSize: "16px" }}>{title}</span>
      <span style={{ fontSize: "14px", color: "#949494" }}>{category}</span>
    </div>
  );
};

export default NoticeList;
