"use client";

import GamePageImage from "@/components/gamePage/GamePageImage";
import GamePageMap from "@/components/gamePage/GamePageMap";
import GamePageNav from "@/components/gamePage/GamePageNav";
import MobileGamePageMap from "@/components/mobileGamePage/MobileGamePageMap";
import { useEffect, useState } from "react";

const Page = () => {
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
    <div>
      {isMobile ? (
        <MobileGamePageMap />
      ) : (
        <>
          <GamePageImage />
          <GamePageNav />
          <GamePageMap />
        </>
      )}
    </div>
  );
};

export default Page;
