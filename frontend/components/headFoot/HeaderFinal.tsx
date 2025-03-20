"use client";

import { useState } from "react";
import Header from "./Header";

import HeaderSub from "./HeaderSub";

const HeaderFinal = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMouseEnter = () => setIsMenuOpen(true);
  const handleMouseLeave = () => setIsMenuOpen(false);

  return (
    <div onMouseLeave={handleMouseLeave}>
      <Header onBrandHover={handleMouseEnter} />

      {isMenuOpen && <HeaderSub />}
    </div>
  );
};

export default HeaderFinal;
