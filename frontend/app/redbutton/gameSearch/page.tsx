import GamePageImage from "@/components/gamePage/GamePageImage";
import GamePageMap from "@/components/gamePage/GamePageMap";
import GamePageNav from "@/components/gamePage/GamePageNav";
import GamePageSearch from "@/components/gamePage/GamePageSearch";

const page = () => {
  return (
    <div>
      <GamePageImage />
      <GamePageNav />
      <GamePageSearch />
      <GamePageMap />
    </div>
  );
};

export default page;
