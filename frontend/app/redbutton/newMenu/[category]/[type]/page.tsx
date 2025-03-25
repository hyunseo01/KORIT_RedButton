"use client";

import { useState } from "react";
import MenuList2 from "@/components/newMenu/MenuList2";
import SetName from "@/components/newMenu/detail/SetName";

export type NewMenuDrinkProps = {
  params: { type: string };
};

const menuConfig: Record<string, { title: string; subTitle: string }> = {
  coffee: { title: "COFFEE", subTitle: "커피" },
  latte: { title: "LATTE", subTitle: "라떼" },
  tea: { title: "TEA", subTitle: "티" },
  ade: { title: "ADE & JUICE", subTitle: "에이드 & 쥬스" },
  shake: { title: "SHAKE & SMOOTHIE", subTitle: "쉐이크 & 스무디" },
  soda: { title: "SODA", subTitle: "소다" },
};

const NewMenuDrinkPage = ({ params: { type } }: NewMenuDrinkProps) => {
  const [selected, setSelected] = useState<number | null>(null);
  const config = menuConfig[type];

  if (!config) return <div>사공사낫파운드(음료)</div>;

  return (
    <div className="py-[45px]">
      <SetName title={config.title} subTitle={config.subTitle} />
      <MenuList2
        filterFn={(v) => v.drinktype === config.subTitle}
        select={selected}
        onSelected={setSelected}
      />
    </div>
  );
};

export default NewMenuDrinkPage;
