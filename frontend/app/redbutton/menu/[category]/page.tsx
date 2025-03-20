"use client";

import { useParams } from "next/navigation";
import DrinkPage from "@/components/menu/DrinkPage";
import CategoryPage from "@/components/menu/CategoryPage";

export default function MenuCategoryPage() {
  const { category } = useParams() as { category: string };

  if (category === "drink") return <DrinkPage />;
  return <CategoryPage category={category as "snack" | "set"} />;
}
