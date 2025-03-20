import NS from "@/components/main/notice/NS";
import Pick from "@/components/main/pick/Pick";
import ImageSlider from "@/components/main/slider/slider";
import SubImageSlider from "@/components/main/slider/motionslider/subslider";
import StoreSearch from "@/components/main/store/StoreSearch";

export default function Home() {
  //이거 홈
  return (
    <>
      <ImageSlider />
      <NS />
      <Pick />
      <SubImageSlider />
      <StoreSearch />
    </>
  );
}
