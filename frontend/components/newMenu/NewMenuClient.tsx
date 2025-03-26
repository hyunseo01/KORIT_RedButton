"use client";

import { useState } from "react";
import SetName from "@/components/newMenu/detail/SetName";
import MenuList2 from "@/components/newMenu/MenuList2";

export type NewMenuClientProps = {
  category: string;
  config: {
    title: string | string[];
    subTitles: string[];
  };
};

const NewMenuClient = ({ category, config }: NewMenuClientProps) => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="py-[45px] space-y-12 max-w-[1050px] mx-auto">
      {config.subTitles.map((subTitle, index) => (
        <section key={subTitle}>
          {config.title && (
            <SetName
              title={
                Array.isArray(config.title) ? config.title[index] : config.title
              }
              subTitle={subTitle}
            />
          )}
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

export default NewMenuClient;
