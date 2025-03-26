import NewMenuClient from "@/components/newMenu/NewMenuClient";
import { pageConfig } from "@/types/menuType/menuType";

type NewMenuPageProps = {
  params: { category: string };
};

const NewMenuPage = async ({ params }: NewMenuPageProps) => {
  const { category } = await params;

  // 서버에서 유효한 카테고리인지 확인
  if (!pageConfig[category]) {
    return (
      <div className="text-center text-[50px] py-[100px]">404 NOT FOUND</div>
    );
  }

  const config = pageConfig[category];

  // title이 undefined일 경우 기본값 설정
  const safeConfig = {
    ...config,
    title: config.title || "Default Title",
  };

  // 클라이언트 컴포넌트로 데이터 전달
  return <NewMenuClient category={category} config={safeConfig} />;
};

export default NewMenuPage;
