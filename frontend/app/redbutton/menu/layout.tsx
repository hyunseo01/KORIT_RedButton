"use client";

import MenuHeader from "@/components/menu/MenuHeader";
import MobileMenuDrinkSelect from "@/components/mobileMenuPage/MobileMenuDrinkSelect";
import MobileMenuFoodSelect from "@/components/mobileMenuPage/MobileMenuSelect";
import { useEffect, useState } from "react";

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <>
          <div className="bg-[#EDECEA] border-b border-b-[#D2D2D2]">
            <div className="flex flex-col flex-1 justify-center items-center gap-4 py-[20px] ">
              <div className="flex items-center gap-2">
                <MobileMenuFoodSelect />
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-2">
                  <MobileMenuDrinkSelect />
                </div>
              </div>
            </div>
          </div>
          {children}
        </>
      ) : (
        <>
          <MenuHeader />
          {children}
        </>
      )}
    </>
  );
}
