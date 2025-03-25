export type MenuItem = {
  menuno: number;
  image: string;
  koname: string;
  enname: string;
  info: string;
  allergy: string;
  drinktype: string;
};

export type MenuList2Props = {
  filterFn: (item: MenuItem) => boolean;
  select: number | null;
  onSelected: (menuno: number | null) => void;
};

export type MenuCard2Props = {
  image: string;
  nameKo: string;
  nameEN: string;
  onClick: () => void;
};

export type MenuInfo2Props = {
  image: string;
  KoName: string;
  EnName: string;
  info: string;
  allergy: string;
  onClose: () => void;
};

export type SetNameProps = {
  title: string;
  subTitle: string;
};

export type NewMenuProps = {
  params: { category: string };
};
