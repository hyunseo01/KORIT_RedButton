"use client";

import { useEffect, useState } from "react";
import MenuCard from "@/components/menu/MenuCard";
import MenuInfo from "@/components/menu/subcomponents/MenuInfo";

type Props = {
  category?: string; // "snack", "set", "drink" 등
  type?: string; // "coffee", "latte" 등 (음료에서 사용)
};

type MenuItem = {
  menuno: number;
  image: string;
  koname: string;
  enname: string;
  drinktype: string;
};

const typeToKorean: { [key: string]: string } = {
  coffee: "커피",
  latte: "라떼",
  tea: "티",
  ade: "에이드 & 쥬스",
  smoothie: "쉐이크 & 스무디",
  soda: "소다",
};

export default function MenuList({ category, type }: Props) {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    fetch("http://localhost:8080/menu/findall.do")
      .then((r) => r.json())
      .then(setItems)
      .catch(() => alert("서버 켜주세요"));
  }, []);

  const filtered =
    type && typeToKorean[type as keyof typeof typeToKorean]
      ? items.filter(
          (i) => i.drinktype === typeToKorean[type as keyof typeof typeToKorean]
        )
      : category
      ? items.filter((i) => i.drinktype === category)
      : items;

  const rows: MenuItem[][] = [];
  for (let i = 0; i < filtered.length; i += 4) {
    rows.push(filtered.slice(i, i + 4));
  }

  return (
    <div className="max-w-[1050px] mx-auto py-20 space-y-[74px] ">
      {rows.map((row, rowIdx) => {
        const rowStart = rowIdx * 4;
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

            {/* 선택된 메뉴 상세 정보 */}
            {selectedIndex != null &&
              selectedIndex >= rowStart &&
              selectedIndex < rowStart + row.length && (
                <div className="col-span-4 bg-[#F0EFED] h-[400px] flex items-center">
                  <MenuInfo
                    {...filtered[selectedIndex]}
                    onClose={() => setSelectedIndex(null)}
                    info=""
                    allergy=""
                  />
                </div>
              )}
          </div>
        );
      })}
    </div>
  );
}
