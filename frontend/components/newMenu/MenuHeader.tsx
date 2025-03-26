"use client";
import { menuList } from "@/data/menuData/menuData";
import { useRouter, usePathname } from "next/navigation";

const MenuHeader = () => {
  const router = useRouter();
  const pathname = usePathname();

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
          {menuList.map((menu, index) => {
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
