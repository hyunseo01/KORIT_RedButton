"use client";

import { menuList1, menuList2, menuList3 } from "@/data/menuData/menuData";
import { useRouter, usePathname } from "next/navigation";

type MenuHeaderProps = { category: "drink" | "snack" | "set" };

const MenuHeader = ({ category }: MenuHeaderProps) => {
  const router = useRouter();
  const pathname = usePathname();

  // category 값 검증
  if (!["drink", "snack", "set"].includes(category)) {
    return (
      <div className="text-center text-[50px] py-[100px]">Invalid category</div>
    );
  }

  // menus 기본값 설정
  const menus =
    {
      drink: menuList1,
      snack: menuList2,
      set: menuList3,
    }[category] || [];

  return (
    <div>
      <div
        className="w-full h-[212px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://redbutton.co.kr/wp-content/uploads/2023/12/MENU.jpg')",
        }}
      >
        <em className="text-[#EDECEA] text-[56px] leading-[74px] flex justify-center transform -translate-x-[100px] translate-y-[60px]">
          BEVERAGE
        </em>
      </div>

      <div className="bg-[#EDECEA] h-[90px] py-[28px]">
        <div className="flex gap-[20px] justify-center items-center pt-[5px] text-[18px]">
          {menus.map((menu) => {
            const isActive = pathname === menu.path;
            return (
              <span
                key={menu.name}
                onClick={() => router.push(menu.path)}
                className={`cursor-pointer ${
                  isActive
                    ? "underline text-[#7b5c40] font-bold"
                    : "text-[#979797]"
                }`}
              >
                {menu.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MenuHeader;
