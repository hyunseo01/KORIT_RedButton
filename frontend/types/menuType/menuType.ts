export type MenuInfoProps = {
  koname: string;
  enname: string;
  image: string;
  info: string;
  allergy: string;
  onClose: () => void;
};

export type Props = {
  category?: string;
  type?: string;
};

export type MenuItem = {
  menuno: number;
  image: string;
  koname: string;
  enname: string;
  info: string;
  allergy: string;
  drinktype: string;
};

export const typeToKorean: Record<string, string> = {
  coffee: "커피",
  latte: "라떼",
  tea: "티",
  ade: "에이드 & 쥬스",
  smoothie: "쉐이크 & 스무디",
  soda: "소다",
};

export const categoryToKorean: Record<string, string> = {
  snack: "스낵/푸드",
  set: "세트",
  drink: "음료",
};

export const types = ["coffee", "latte", "tea", "ade", "smoothie", "soda"];

export type MenuCardProps = {
  image: string;
  nameKo: string;
  nameEN: string;
  onClick: () => void;
};

export type MenuTitleBoxProps = {
  title: string;
  subTitle: string;
};
