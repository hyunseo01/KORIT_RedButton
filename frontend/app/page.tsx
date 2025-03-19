import NS from "@/components/notice/NS";
import Pick from "@/components/pick/Pick";
import ImageSlider from "@/components/slide/slider";
import SubImageSlider from "@/components/slide/sub/subslider";
import StoreSearch from "@/components/store/StoreSearch";

export default function Home() {
  //이거 홈
  return (
    <>
      <ImageSlider />
      <NS />
      <Pick />
      <SubImageSlider />
      <StoreSearch />
      <div></div>
    </>
  );
}
