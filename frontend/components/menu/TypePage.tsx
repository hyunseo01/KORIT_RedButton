"use client";

import { useParams } from "next/navigation";
import MenuList from "@/components/menu/MenuList";

export default function TypePage() {
  const { type } = useParams(); //undefined, string , string[]

  if (type == undefined) return <div>ㅗ</div>;
  if (typeof type == "object") return <div>ㅗ</div>;
  return <MenuList type={type} />;
}
