"use client";

import MenuAll from "@/components/menu/MenuAll";
import React from "react";

type CategoryPageProps = {
  params: { category: string };
};

const CategoryPage = ({ params }: CategoryPageProps) => {
  const { category } = params;
  const validCategories = ["coffee", "latte", "tea", "ade", "smoothie", "soda"];
  const isValidCategory = validCategories.includes(category);

  return <MenuAll category={isValidCategory ? category : null} />;
};

export default CategoryPage;
