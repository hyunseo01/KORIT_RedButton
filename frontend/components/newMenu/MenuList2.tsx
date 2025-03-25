"use client";
import { useEffect, useState } from "react";
import MenuCard2 from "./MenuCard2";
import MenuInfo2 from "./MenuInfo2";

export type MenuItem = {
  id: number;
  image: string;
  koname: string;
  enname: string;
  info: string;
  allergy: string;
};

type MenuList2Props = {
  filterFn?: (item: MenuItem) => boolean;
};

const MenuList2 = ({ filterFn = () => true }: MenuList2Props) => {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    fetch("http://localhost:8080/menu/findall.do")
      .then((res) => res.json())
      .then((data: MenuItem[]) => setItems(data))
      .catch(() => alert("서버를 켜주세요"));
  }, []);

  return (
    <>
      {items.filter(filterFn).map((v) => (
        <div key={v.id}>
          <MenuCard2
            image={v.image}
            nameKo={v.koname}
            nameEN={v.enname}
            onClick={() => setSelected(v.id)}
          />
          {selected == v.id && (
            <MenuInfo2
              image={v.image}
              KoName={v.koname}
              EnName={v.enname}
              info={v.info}
              allergy={v.allergy}
            />
          )}
          {/* {if(selected == v.id) {
            <MenuInfo2
              image={v.image}
                KoName={v.koname}
                EnName={v.enname}
                info={v.info}
                allergy={v.allergy}
            />
          }} */}
        </div>
      ))}
    </>
  );
};

export default MenuList2;

// "use client";

// import { useEffect, useState } from "react";
// import MenuCard2 from "./MenuCard2";
// import MenuDetail from "./MenuDetail";
// import { MenuItem } from "@/types/menuType";
// import clsx from "clsx";

// const MenuList2 = () => {
//   const [items, setItems] = useState<MenuItem[]>([]);
//   const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

//   useEffect(() => {
//     fetch("http://localhost:8080/menu/findall.do")
//       .then((res) => res.json())
//       .then((data: MenuItem[]) => setItems(data))
//       .catch(() => alert("서버 켜주세요"));
//   }, []);

//   return (
//     <div className="flex flex-wrap gap-5 row-gap-[74px] justify-center max-w-[1050px] mx-auto py-[84px] pb-[160px] bg-[#F8F7F5]">
//       {items.map((item, i) => (
//         <div key={item.id} className="w-[240px]">
//           <MenuCard2
//             image={item.image}
//             nameKo={item.koname}
//             nameEN={item.enname}
//             onClick={() => setSelectedIndex(selectedIndex === i ? null : i)}
//           />

//           {/* 행의 마지막(4개마다) 혹은 마지막 아이템 뒤에 상세 삽입 */}
//           {(i % 4 === 3 || i === items.length - 1) &&
//             selectedIndex !== null &&
//             selectedIndex >= i - (i % 4) &&
//             selectedIndex <= i && (
//               <div className="w-full mt-[20px]">
//                 <MenuDetail {...items[selectedIndex]} />
//               </div>
//             )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MenuList2;
