"use client";
import React, { useEffect, useState } from "react";
import MenuTitleBox from "./MenuTitleBox";
import MenuGrid from "./MenuGrid";
import MenuCard from "./MenuCard";

const MenuAll = () => {
  const [menuData, setMenuData] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState(null); //클릭했을떄다

  useEffect(() => {
    fetch("http://localhost:8080/menu/findall.do")
      .then((r) => r.json())
      .then((data) => setMenuData(data))
      .catch((e) => {
        return alert("서버 켜라"), console.error("Error : ", e);
      });
  }, []);

  const handleCardClick = (menu: any) => {
    setSelectedMenu(selectedMenu == menu ? null : menu);
  };

  console.log(menuData);

  const coffeeData = menuData.filter((v) => v.drinktype == "커피");
  const latteeData = menuData.filter((v) => v.drinktype == "라떼");
  const teaData = menuData.filter((v) => v.drinktype == "티");
  const adeData = menuData.filter((v) => v.drinktype == "에이드 & 쥬스");
  const smoothieData = menuData.filter((v) => v.drinktype == "쉐이크 & 스무디");
  const sodaData = menuData.filter((v) => v.drinktype == "소다");

  return (
    <div style={{ width: "100%", maxWidth: "1050px", margin: "200px auto" }}>
      <div>
        <MenuTitleBox title="COFFEE" subTitle="커피" />
        <MenuGrid
          menu={coffeeData.map((v) => (
            <MenuCard
              key={v.menuno}
              image={v.image}
              nameKo={v.koname}
              nameEN={v.enname}
            />
          ))}
        ></MenuGrid>
      </div>
      <div>
        <MenuTitleBox title="LATTEE" subTitle="라떼" />
        <MenuGrid
          menu={latteeData.map((v) => (
            <MenuCard
              key={v.menuno}
              image={v.image}
              nameKo={v.koname}
              nameEN={v.enname}
            />
          ))}
        ></MenuGrid>
      </div>
      <div>
        <MenuTitleBox title="TEA" subTitle="티" />
        <MenuGrid
          menu={teaData.map((v) => (
            <MenuCard
              key={v.menuno}
              image={v.image}
              nameKo={v.koname}
              nameEN={v.enname}
            />
          ))}
        ></MenuGrid>
      </div>
      <div>
        <MenuTitleBox title="ADE & JUICE" subTitle="에이드 & 쥬스" />
        <MenuGrid
          menu={adeData.map((v) => (
            <MenuCard
              key={v.menuno}
              image={v.image}
              nameKo={v.koname}
              nameEN={v.enname}
            />
          ))}
        ></MenuGrid>
      </div>
      <div>
        <MenuTitleBox title="SHAKE & SMOOTHIE" subTitle="쉐이크 & 스무디" />
        <MenuGrid
          menu={smoothieData.map((v) => (
            <MenuCard
              key={v.menuno}
              image={v.image}
              nameKo={v.koname}
              nameEN={v.enname}
            />
          ))}
        ></MenuGrid>
      </div>
      <div>
        <MenuTitleBox title="SODA" subTitle="소다" />
        <MenuGrid
          menu={sodaData.map((v) => (
            <MenuCard
              key={v.menuno}
              image={v.image}
              nameKo={v.koname}
              nameEN={v.enname}
            />
          ))}
        ></MenuGrid>
      </div>
    </div>
  );
};

export default MenuAll;
