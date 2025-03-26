"use client";

import { useState } from "react";
import SetName from "@/components/newMenu/detail/SetName";
import MenuList2 from "@/components/newMenu/MenuList2";
import { NewMenuProps, pageConfig } from "@/types/menuType/menuType";

const NewMenuPage = ({ params: { category } }: NewMenuProps) => {
  const [selected, setSelected] = useState<number | null>(null);
  const config = pageConfig[category];

  if (!config)
    return (
      <div className="text-center text-[50px] py-[100px]">404 NOT FOUND</div>
    );

  return (
    <div className="py-[45px] space-y-12 max-w-[1050px] mx-auto">
      {config.subTitles.map((subTitle) => (
        <section key={subTitle}>
          {config.title && <SetName title={config.title} subTitle={subTitle} />}
          <MenuList2
            filterFn={(v) => v.drinktype === subTitle}
            select={selected}
            onSelected={setSelected}
          />
        </section>
      ))}
    </div>
  );
};

export default NewMenuPage;
