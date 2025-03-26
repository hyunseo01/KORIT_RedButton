"use client";

import KakaoMap from "@/components/map/Kakao";
import MobileStoreMap from "@/components/mobileStorePage/MobileStoreMap";
import { useEffect, useState } from "react";

const MapPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return <>{isMobile ? <MobileStoreMap /> : <KakaoMap />}</>;
};

export default MapPage;
