"use client";
import { useRouter, usePathname } from "next/navigation";

const MenuHeader = () => {
  const router = useRouter();
  const pathname = usePathname();

  const getCategoryFromPath = () => {
    const paths = pathname.split("/");
    return paths[paths.length - 1] || "전체메뉴";
  };

  // const selectedMenu = getCategoryFromPath(); // 사용되지 않음

  const menuList = [
    { name: "전체메뉴", path: "/redbutton/menu/drink" },
    { name: "커피", path: "/redbutton/menu/drink/coffee" },
    { name: "라떼", path: "/redbutton/menu/drink/latte" },
    { name: "티", path: "/redbutton/menu/drink/tea" },
    { name: "에이드", path: "/redbutton/menu/drink/ade" },
    { name: "쉐이크,스무디", path: "/redbutton/menu/drink/smoothie" },
    { name: "소다", path: "/redbutton/menu/drink/soda" },
  ];

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
          {menuList.map((menu) => (
            <span
              key={menu.name}
              onClick={() => router.push(menu.path)}
              className={`cursor-pointer ${
                pathname.includes(menu.path)
                  ? "text-[#7b5c40] underline"
                  : "text-[#979797]"
              }`}
            >
              {menu.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuHeader;
