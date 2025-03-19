"use client"; // 이 컴포넌트를 클라이언트에서만 렌더링하도록 지정

import React from "react";

const StickyButton: React.FC = () => {
  // 클릭 시 페이지 상단으로 1초 동안 스크롤하는 함수
  const scrollToTop = () => {
    const scrollDuration = 250;
    const startTime = performance.now();
    const startScroll = window.scrollY;

    const scrollStep = (timestamp: number) => {
      const elapsedTime = timestamp - startTime;
      const progress = Math.min(elapsedTime / scrollDuration, 1); // 0 ~ 1 사이 값으로 변화

      window.scrollTo(0, startScroll * (1 - progress)); // 시작 위치에서 진행된 만큼 계산하여 이동

      if (progress < 1) {
        requestAnimationFrame(scrollStep); // 계속해서 다음 프레임에서 호출
      }
    };

    requestAnimationFrame(scrollStep); // 애니메이션 시작
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
          cursor: "pointer", // 마우스 커서가 손 모양으로 보이게
        }}
        src="https://redbutton.co.kr/wp-content/uploads/2021/04/TOP_button.png"
        alt="Scroll to Top"
        onClick={scrollToTop} // 버튼 클릭 시 스크롤 함수 실행
      />
    </div>
  );
};

export default StickyButton;
