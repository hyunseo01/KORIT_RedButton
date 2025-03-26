import ClientLayout from "@/components/newMenu/ClientLayout";
import MenuHeader from "@/components/newMenu/MenuHeader";

type LayoutProps = {
  children: React.ReactNode;
  params: { category: "drink" | "snack" | "set" };
};

export default async function Layout({ children, params }: LayoutProps) {
  const { category } = await params;

  const isValidCategory = ["drink", "snack", "set"].includes(category);

  if (!isValidCategory) {
    return (
      <div className="text-center text-[50px] py-[100px]">404 NOT FOUND</div>
    );
  }

  return (
    <div>
      <MenuHeader category={category} />
      <ClientLayout>{children}</ClientLayout>
    </div>
  );
}
