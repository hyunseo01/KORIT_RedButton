"use client";

import { useState } from "react";
import MenuList2 from "@/components/newMenu/MenuList2";
import SetName from "@/components/newMenu/detail/SetName";
import { menuConfig, NewMenuDrinkProps } from "@/types/menuType/menuType";

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
