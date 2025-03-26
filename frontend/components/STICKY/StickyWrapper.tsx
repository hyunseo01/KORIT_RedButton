"use client";

import dynamic from "next/dynamic";

// StickyButton 을 클라이언트 전용으로 로드 (SSR 비활성화)
const StickyButton = dynamic(() => import("@/components/STICKY/StickyButton"), {
  ssr: false,
});

export default function StickyWrapper() {
  return <StickyButton />;
}
