"use client";

import { useState } from "react";
import Header from "./Header";

import HeaderSub from "./HeaderSub";
import { useMediaQuery } from "usehooks-ts";
import HeaderResponsive from "../mobileHeaderFooter/HeaderResponsive";

const HeaderFinal = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMouseEnter = () => setIsMenuOpen(true);
  const handleMouseLeave = () => setIsMenuOpen(false);
  const matches = useMediaQuery("(max-width: 767px)");

  return (
    <div onMouseLeave={handleMouseLeave}>
      {matches ? (
        <HeaderResponsive />
      ) : (
        <Header onBrandHover={handleMouseEnter} />
      )}
      {isMenuOpen && <HeaderSub />}
    </div>
  );
};

export default HeaderFinal;
