"use client";

import { useParams } from "next/navigation";
import MenuList from "@/components/menu/MenuList";

export default function TypePage() {
  const { type } = useParams() as { type: string };

  return <MenuList type={type} />;
}
