import NewMenuDrinkClient from "@/components/newMenu/NewMenuDrinkClient";
import { menuConfig, NewMenuDrinkProps } from "@/types/menuType/menuType";

const NewMenuDrinkPage = async ({ params }: NewMenuDrinkProps) => {
  const { type } = await params;

  // 메뉴 설정 가져오기
  const config = menuConfig[type];
  if (!config) {
    return (
      <div className="text-center text-[50px] py-[100px]">
        404 NOT FOUND (음료)
      </div>
    );
  }

  // 클라이언트 컴포넌트로 데이터 전달
  return (
    <div>
      <NewMenuDrinkClient config={config} />
    </div>
  );
};

export default NewMenuDrinkPage;
