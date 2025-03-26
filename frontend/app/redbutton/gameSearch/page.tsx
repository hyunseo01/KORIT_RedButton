"use client";

import GamePageImage from "@/components/gamePage/GamePageImage";
import GamePageMap from "@/components/gamePage/GamePageMap";
import GamePageNav from "@/components/gamePage/GamePageNav";

const Page = () => {
  return (
    <div>
      <GamePageImage />
      <GamePageNav />
      <GamePageMap />
    </div>
  );
};

export default Page;
