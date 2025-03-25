"use client";

import { useEffect, useState } from "react";
import MenuCard from "@/components/menu/MenuCard";
import MenuInfo from "@/components/menu/subcomponents/MenuInfo";
import {
  categoryToKorean,
  MenuItem,
  Props,
  typeToKorean,
} from "@/types/menuType/menuType";

export default function MenuList({ category, type }: Props) {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    fetch("http://localhost:8080/menu/findall.do")
      .then((r) => r.json())
      .then(setItems)
      .catch(() => alert("서버 켜주세요"));
  }, []);

  const filtered = (() => {
    if (type && typeToKorean[type]) {
      return items.filter((i) => i.drinktype === typeToKorean[type]);
    }
    if (category) {
      const normalized = category.replace(/\s/g, ""); //공백제거

      const target = categoryToKorean[normalized] ?? normalized;
      return items.filter((i) => i.drinktype === target);
    }
    return items;
  })();

  const rows: MenuItem[][] = [];
  for (let i = 0; i < filtered.length; i += 4) {
    rows.push(filtered.slice(i, i + 4));
  }

  return (
    <div className="max-w-[1050px] mx-auto py-20 space-y-[74px]">
      {rows.map((row, rowIdx) => {
        const start = rowIdx * 4;
        return (
          <div key={rowIdx}>
            {/* 메뉴 카드 (한 줄에 4개) */}
            <div className="grid grid-cols-4 gap-x-5">
              {row.map((i, idx) => {
                const globalIdx = rowStart + idx;
                return (
                  <MenuCard
                    key={i.menuno}
                    image={i.image}
                    nameKo={i.koname}
                    nameEN={i.enname}
                    onClick={() =>
                      setSelectedIndex(
                        globalIdx === selectedIndex ? null : globalIdx
                      )
                    }
                  />
                );
              })}
            </div>

            {selectedIndex !== null &&
              selectedIndex >= start &&
              selectedIndex < start + row.length && (
                <div className="col-span-4 bg-[#F0EFED] h-[400px] flex items-center">
                  <MenuInfo
                    {...filtered[selectedIndex]}
                    onClose={() => setSelectedIndex(null)}
                    info={filtered[selectedIndex].info}
                    allergy={filtered[selectedIndex].allergy}
                  />
                </div>
              )}
          </div>
        );
      })}
    </div>
  );
}
