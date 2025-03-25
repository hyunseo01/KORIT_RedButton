"use client";

import { useState } from "react";
import SetName from "@/components/newMenu/detail/SetName";
import MenuList2 from "@/components/newMenu/MenuList2";
import { NewMenuProps } from "@/types/menuType/menuType";

const pageConfig: Record<string, { title?: string; subTitles: string[] }> = {
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

const NewMenuPage = ({ params: { category } }: NewMenuProps) => {
  const [selected, setSelected] = useState<number | null>(null);
  const config = pageConfig[category];

  if (!config)
    return (
      <div className="text-center text-[50px] py-[100px]">404 NOT FOUND</div>
    );

  return (
    <div className="py-[45px] space-y-12 max-w-[1050px] mx-auto">
      {config.subTitles.map((subTitle, idx) => (
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
