import GamePageImage from "@/components/gamePage/GamePageImage";
import GamePageMap from "@/components/gamePage/GamePageMap";
import GamePageNav from "@/components/gamePage/GamePageNav";

const page = () => {
  return (
    <div>
      <GamePageImage />
      <GamePageNav />
      <GamePageMap />
    </div>
  );
};

export default page;
