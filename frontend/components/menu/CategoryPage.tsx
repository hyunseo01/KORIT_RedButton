"use client";

import MenuTitleBox from "@/components/menu/MenuTitleBox";
import MenuList from "@/components/menu/MenuList";

type Props = { category: "snack" | "set" };

const titleMap = {
  snack: { title: "SNACK / FOOD", subTitle: "스낵 / 푸드" },
  set: { title: "SET MENU", subTitle: "세트메뉴" },
};

export default function CategoryPage({ category }: Props) {
  return (
    <div className="max-w-[1050px] mx-auto py-20">
      <MenuTitleBox
        title={titleMap[category].title}
        subTitle={titleMap[category].subTitle}
      />
      <MenuList category={titleMap[category].subTitle} />
    </div>
  );
}
