"use client";

import React from "react";

const StickyButton: React.FC = () => {
  const scrollToTop = () => {
    const scrollDuration = 250;
    const startTime = performance.now();
    const startScroll = window.scrollY;

    const scrollStep = (timestamp: number) => {
      const elapsedTime = timestamp - startTime;
      const progress = Math.min(elapsedTime / scrollDuration, 1);

      window.scrollTo(0, startScroll * (1 - progress));

      if (progress < 1) {
        requestAnimationFrame(scrollStep);
      }
    };

    requestAnimationFrame(scrollStep);
  };

  return (
    <div>
      <img
        style={{
          position: "fixed",
          width: "64px",
          height: "64px",
          zIndex: "99",
          bottom: "100px",
          right: "100px",
          cursor: "pointer",
        }}
        src="https://redbutton.co.kr/wp-content/uploads/2021/04/TOP_button.png"
        alt="Scroll to Top"
        onClick={scrollToTop}
      />
    </div>
  );
};

export default StickyButton;
