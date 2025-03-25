"use client";

import { useEffect, useState } from "react";
import MenuCard2 from "./MenuCard2";
import MenuInfo2 from "./MenuInfo2";
import clsx from "clsx";
import { MenuItem, MenuList2Props } from "@/types/menuType/menuType";

const MenuList2 = ({ filterFn, select, onSelected }: MenuList2Props) => {
  const [items, setItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/menu/findall.do")
      .then((res) => res.json())
      .then((data: MenuItem[]) => setItems(data))
      .catch(() => alert("서버를 켜주세요"));
  }, []);

  return (
    <div className="flex flex-wrap gap-5 mt-[50px] max-w-[1050px] mx-auto">
      {items.filter(filterFn).map((v) => (
        <div
          key={v.menuno}
          className={clsx("flex flex-col w-[240px]", {
            "mb-[480px]": select === v.menuno,
            "mb-[20px]": select !== v.menuno,
          })}
        >
          <MenuCard2
            image={v.image}
            nameKo={v.koname}
            nameEN={v.enname}
            onClick={() => onSelected(select === v.menuno ? null : v.menuno)}
          />

          {select === v.menuno && (
            <div className="w-full py-[20px] mt-[20px]">
              <div className="w-screen">
                <MenuInfo2
                  image={v.image}
                  KoName={v.koname}
                  EnName={v.enname}
                  info={v.info}
                  allergy={v.allergy}
                  onClose={() => onSelected(null)}
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MenuList2;
