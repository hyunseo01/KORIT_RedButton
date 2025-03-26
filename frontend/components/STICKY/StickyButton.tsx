"use client";
import React from "react";
import { useMediaQuery } from "react-responsive";

const StickyButton: React.FC = () => {
  const isPC = useMediaQuery({ minWidth: 767 }); // 화면 크기가 767px 이상이면 true

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
      {isPC && (
        <img
          className="fixed bottom-[100px] right-[100px] w-[64px] h-[64px] z-50 cursor-pointer"
          src="https://redbutton.co.kr/wp-content/uploads/2021/04/TOP_button.png"
          alt="Scroll to Top"
          onClick={scrollToTop}
        />
      )}
    </div>
  );
};

export default StickyButton;
