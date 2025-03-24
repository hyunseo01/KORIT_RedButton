export const getCategoryFromPath = (pathname: string) => {
  const paths = pathname.split("/");
  return paths[paths.length - 1] || "전체메뉴";
};

export const textMaker = (pathname: string, path: string) =>
  pathname.includes(path) ? "text-[#7b5c40] underline" : "text-[#979797]";
