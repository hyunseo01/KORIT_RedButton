import MenuHeader from "./MenuHeader";

type MenuHeadProps = {
  category: "drink" | "snack" | "set";
};

const MenuHead = ({ category }: MenuHeadProps) => {
  return (
    <>
      <div>
        <MenuHeader
          category={
            category == "drink"
              ? "drink"
              : category == "snack"
              ? "snack"
              : category == "set"
              ? "set"
              : "drink"
          }
        />
      </div>
    </>
  );
};

export default MenuHead;
