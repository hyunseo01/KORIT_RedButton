"use client";

import { useState } from "react";
import Header from "./Header";
import HeaderMenu from "./HeaderMenu";

const HeaderFinal = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMouseEnter = () => setIsMenuOpen(true);
  const handleMouseLeave = () => setIsMenuOpen(false);

  return (
    <div onMouseLeave={handleMouseLeave}>
      <Header onBrandHover={handleMouseEnter} />
      {isMenuOpen && <HeaderMenu />}
    </div>
  );
};

export default HeaderFinal;
