import BlackSheet from "./BlackSheet";
import HedaerSubResponsiveKOR from "./HeaderSubResponsiveKOR";
import HeaderSubResponsiveINFO from "./HeaderSubResponsiveINFO";
import HeaderSubResponsiveMENU from "./HeaderSubResponsiveMENU";

const HeaderSubResponsive2 = ({ close }: { close: () => void }) => {
  return (
    <>
      <BlackSheet close={close} />
      <div className="fixed top-0 right-0 z-[11]">
        <HedaerSubResponsiveKOR close={close} />
      </div>
      <nav className="fixed top-0 right-0 w-[40%] h-full bg-[#272422] text-white flex flex-col p-5 z-[5] text-[17px]">
        <HeaderSubResponsiveMENU close={close} />
        <HeaderSubResponsiveINFO />
      </nav>
    </>
  );
};

export default HeaderSubResponsive2;
