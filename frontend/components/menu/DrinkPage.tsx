"use client";

import MenuTitleBox from "@/components/menu/MenuTitleBox";
import MenuList from "@/components/menu/MenuList";
import { types } from "@/types/menuType/menuType";

const typeToKorean: { [key in (typeof types)[number]]: string } = {
  coffee: "커피",
  latte: "라떼",
  tea: "티",
  ade: "에이드 & 쥬스",
  smoothie: "쉐이크 & 스무디",
  soda: "소다",
};

export default function DrinkPage() {
  return (
    <div className="max-w-[1050px] mx-auto py-20 space-y-16">
      {types.map((type) => (
        <section key={type}>
          <MenuTitleBox
            title={type.toUpperCase()}
            subTitle={typeToKorean[type]}
          />
          <MenuList type={type} />
        </section>
      ))}
    </div>
  );
}
