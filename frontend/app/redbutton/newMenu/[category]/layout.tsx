"use client";

import MenuHeader from "@/components/newMenu/MenuHeader";
import { useEffect, useState } from "react";

type LayoutProps = { children: React.ReactNode; params: { category: string } };

export default function Layout({ children, params }: LayoutProps) {
  const { category } = params;
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
      <>
        {!isMobile ? (
          <>
            <div>
              <MenuHeader
                category={
                  category == "drink"
                    ? "drink"
                    : category == "snack"
                    ? "snack"
                    : category == "set"
                    ? "set"
                    : "drink"
                }
              />
              {children}
            </div>
          </>
        ) : (
          <>
            {/* <MenuHeader /> */}
            {children}
          </>
        )}
      </>
    </>
  );
}
