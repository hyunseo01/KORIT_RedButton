// "use client";

// import React, { useEffect, useState } from "react";
// import MenuTitleBox from "../MenuTitleBox";
// import MenuGrid from "../MenuGrid";
// import MenuCard from "../MenuCard";

// type MenuAllProps = {
//   category: "coffee" | "latte" | "tea" | "ade" | "smoothie" | "soda" | null;
// };

// const nameChange: { [key: string]: string } = {
//   coffee: "커피",
//   latte: "라떼",
//   tea: "티",
//   ade: "에이드 & 쥬스",
//   smoothie: "쉐이크 & 스무디",
//   soda: "소다",
//   null: "",
// };

// const MenuAll = ({ category }: MenuAllProps) => {
//   const [menuData, setMenuData] = useState([]);
//   const [selectedMenu, setSelectedMenu] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:8080/menu/findall.do")
//       .then((r) => r.json())
//       .then((data) => setMenuData(data))
//       .catch((e) => {
//         alert("서버 켜라");
//         console.error("Error : ", e);
//       });
//   }, []);

//   const cardClick = (v: any) => {
//     setSelectedMenu((x) => (x == v ? null : v));
//   };

//   const filterCategory = (c: string) => {
//     return menuData.filter((v) => {
//       switch (c) {
//         case "coffee":
//           return v.drinktype == "커피";
//         case "latte":
//           return v.drinktype == "라떼";
//         case "tea":
//           return v.drinktype == "티";
//         case "ade":
//           return v.drinktype == "에이드 & 쥬스";
//         case "smoothie":
//           return v.drinktype == "쉐이크 & 스무디";
//         case "soda":
//           return v.drinktype == "소다";
//         default:
//           return false;
//       }
//     });
//   };

//   return (
//     <div style={{ width: "100%", maxWidth: "1050px", margin: "200px auto" }}>
//       {category ? (
//         <div>
//           <MenuTitleBox
//             title={category.toUpperCase()}
//             subTitle={nameChange[category] || category}
//           />
//           <MenuGrid
//             menu={filterCategory(category).map((i) => (
//               <MenuCard
//                 image={i.image}
//                 nameKo={i.koname}
//                 nameEN={i.enname}
//                 onClick={() => cardClick(i)}
//               />
//             ))}
//           />
//         </div>
//       ) : (
//         <>
//           {["coffee", "latte", "tea", "ade", "smoothie", "soda"].map((v) => (
//             <div>
//               <MenuTitleBox
//                 title={v.toUpperCase()}
//                 subTitle={nameChange[v] || v}
//               />
//               <MenuGrid
//                 menu={filterCategory(v).map((x) => (
//                   <MenuCard
//                     image={x.image}
//                     nameKo={x.koname}
//                     nameEN={x.enname}
//                     onClick={() => cardClick(x)}
//                   />
//                 ))}
//               />
//             </div>
//           ))}
//         </>
//       )}
//     </div>
//   );
// };

// export default MenuAll;
