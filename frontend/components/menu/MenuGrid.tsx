type MenuGridProps = {
  menu: any;
};

const MenuGrid = ({ menu }: MenuGridProps) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        width: "100%",
        maxWidth: "1050px",
        margin: "0 auto",
        rowGap: "74px",
      }}
    >
      {menu}
    </div>
  );
};

export default MenuGrid;
