import GameSearch from "./subNotice/GameSearch";
import Notice from "./subNotice/Notice";

const NS = () => {
  return (
    <div className="flex">
      <div className="w-1/2 md:block hidden">
        <Notice />
      </div>
      <div className="md:w-1/2 w-full">
        <GameSearch />
      </div>
    </div>
  );
};

export default NS;
