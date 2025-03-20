import GameSearch from "./subNotice/GameSearch";
import Notice from "./subNotice/Notice";

const NS = () => {
  return (
    <div className="flex">
      <div className="w-1/2">
        <Notice />
      </div>
      <div className="w-1/2">
        <GameSearch />
      </div>
    </div>
  );
};

export default NS;
