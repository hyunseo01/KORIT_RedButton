"use client";

import { useState } from "react";
import MenuList2 from "@/components/newMenu/MenuList2";
import SetName from "@/components/newMenu/detail/SetName";

type NewMenuDrinkClientProps = {
  config: {
    title: string;
    subTitle: string;
  };
};

const NewMenuDrinkClient = ({ config }: NewMenuDrinkClientProps) => {
  const [selected, setSelected] = useState<number | null>(null);

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

export default NewMenuDrinkClient;
