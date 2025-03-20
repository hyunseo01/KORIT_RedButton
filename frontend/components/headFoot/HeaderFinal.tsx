"use client";

import { useState } from "react";
import Header from "./Header";
// import HeaderMenu from "./HeaderMenu9(삭제가능)";
import HeaderMenu2 from "./HeaderMenu2";

const HeaderFinal = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMouseEnter = () => setIsMenuOpen(true);
  const handleMouseLeave = () => setIsMenuOpen(false);

  return (
    <div onMouseLeave={handleMouseLeave}>
      <Header onBrandHover={handleMouseEnter} />
      {/* {isMenuOpen && <HeaderMenu />} */}
      {isMenuOpen && <HeaderMenu2 />}
    </div>
  );
};

export default HeaderFinal;
