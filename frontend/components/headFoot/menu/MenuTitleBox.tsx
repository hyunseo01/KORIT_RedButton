type MenuTitleBoxProps = {
  title: string;
  subTitle: string;
};

const MenuTitleBox = ({ title, subTitle }: MenuTitleBoxProps) => {
  return (
    <div style={{ textAlign: "center", margin: "50px 0" }}>
      <h1>{title}</h1>
      <span>{subTitle}</span>
    </div>
  );
};

export default MenuTitleBox;
