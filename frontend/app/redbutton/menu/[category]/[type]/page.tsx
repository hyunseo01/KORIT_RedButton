"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import MenuCard from "@/components/menu/MenuCard";
import MenuInfo from "@/components/menu/subcomponents/MenuInfo";

const typeToKorean = {
  coffee: "커피",
  latte: "라떼",
  tea: "티",
  ade: "에이드 & 쥬스",
  smoothie: "쉐이크 & 스무디",
  soda: "소다",
};

export default function TypePage() {
  const { type } = useParams() as { type: string };
  const [items, setItems] = useState<any[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    fetch("http://localhost:8080/menu/findall.do")
      .then((r) => r.json())
      .then(setItems)
      .catch(() => alert("서버 켜주세요"));
  }, []);

  const filtered = items.filter((i) => i.drinktype === typeToKorean[type]);

  // 4개씩 묶어서 row 배열 생성
  const rows: any[][] = [];
  for (let i = 0; i < filtered.length; i += 4) {
    rows.push(filtered.slice(i, i + 4));
  }

  return (
    <div className="max-w-[1050px] mx-auto py-20 space-y-[74px]">
      {rows.map((row, rowIdx) => {
        const rowStart = rowIdx * 4;
        return (
          <div key={rowIdx} className="relative">
            <div className="grid grid-cols-4 gap-x-5">
              {row.map((item, idx) => {
                const globalIdx = rowStart + idx;
                return (
                  <div key={item.menuno} className="w-[240px]">
                    <MenuCard
                      image={item.image}
                      nameKo={item.koname}
                      nameEN={item.enname}
                      onClick={() =>
                        setSelectedIndex(
                          globalIdx === selectedIndex ? null : globalIdx
                        )
                      }
                    />
                  </div>
                );
              })}
            </div>

            {selectedIndex !== null &&
              selectedIndex >= rowStart &&
              selectedIndex < rowStart + row.length && (
                <div className="col-span-4 bg-[#F0EFED] h-[400px] flex items-center mt-[20px]">
                  <MenuInfo
                    {...filtered[selectedIndex]}
                    onClose={() => setSelectedIndex(null)}
                  />
                </div>
              )}
          </div>
        );
      })}
    </div>
  );
}
