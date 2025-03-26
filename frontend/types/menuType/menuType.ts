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
  params: Promise<{ category: string }>;
};
export type NewMenuDrinkProps = {
  params: Promise<{ type: string }>;
};

export type NewMenuPageProps = {
  params: Promise<{ category: string }>;
};
export const menuConfig: Record<string, { title: string; subTitle: string }> = {
  coffee: { title: "COFFEE", subTitle: "커피" },
  latte: { title: "LATTE", subTitle: "라떼" },
  tea: { title: "TEA", subTitle: "티" },
  ade: { title: "ADE & JUICE", subTitle: "에이드 & 쥬스" },
  shake: { title: "SHAKE & SMOOTHIE", subTitle: "쉐이크 & 스무디" },
  soda: { title: "SODA", subTitle: "소다" },
};
export const pageConfig: Record<
  string,
  { title?: string; subTitles: string[] }
> = {
  drink: {
    title: "DRINK MENU",
    subTitles: [
      "커피",
      "라떼",
      "티",
      "에이드 & 쥬스",
      "쉐이크 & 스무디",
      "소다",
    ],
  },
  snack: {
    title: "SNACK MENU",
    subTitles: ["스낵/푸드"],
  },
  set: {
    title: "SET MENU",
    subTitles: ["세트메뉴"],
  },
};
