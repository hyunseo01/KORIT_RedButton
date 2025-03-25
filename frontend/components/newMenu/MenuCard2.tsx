import PickMenu from "../main/pick/subcomponents/PickMenu";
type MenuCard2Props = {
  image: string;
  nameKo: string;
  nameEN: string;
  onClick: () => void;
};

const MenuCard2 = ({ image, nameKo, nameEN, onClick }: MenuCard2Props) => {
  return (
    <div style={{ cursor: "pointer", width: "240px" }} onClick={() => onClick}>
      <PickMenu image={image} KoName={nameKo} EnName={nameEN} />
    </div>
  );
};

export default MenuCard2;
