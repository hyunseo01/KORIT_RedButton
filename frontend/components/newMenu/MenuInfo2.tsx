type MenuInfo2Props = {
  image: string;
  KoName: string;
  EnName: string;
  info: string;
  allergy: string;
};

const MenuInfo2 = ({
  image,
  KoName,
  EnName,
  info,
  allergy,
}: MenuInfo2Props) => {
  return (
    <>
      <img src={image} alt={EnName} />
      <div>
        <span>{KoName}</span>
        <span>{EnName}</span>
        <div>
          <span>{info}</span>
          <span>** 제품의 취급 여부는 매장 별로 상이할 수 있습니다.</span>
          <span>** 알레르기 유발 식품 : {}</span>
        </div>
      </div>
    </>
  );
};

export default MenuInfo2;
