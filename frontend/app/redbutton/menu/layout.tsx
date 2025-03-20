"use client";
import MenuHeader from "@/components/menu/MenuHeader";

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <MenuHeader />
      {children}
    </div>
  );
}
