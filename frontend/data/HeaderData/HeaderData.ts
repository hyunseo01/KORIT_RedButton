type HeaderSubItem = {
  name: string;
  href: string;
  list: string[];
};

export const HeaderSubData: HeaderSubItem[] = [
  {
    name: "BRAND",
    href: "/redbutton/brand",
    list: ["레드버튼 소개", "레드버튼 멤버십 앱", "연혁", "채용안내"],
  },
  {
    name: "BOARD GAME",
    href: "/redbutton/game",
    list: ["레드버튼 전용 앱", "보드게임 찾기"],
  },
  {
    name: "MENU",
    href: "/redbutton/menu",
    list: ["음료", "스낵/푸드", "세트메뉴"],
  },
  {
    name: "STORE",
    href: "/redbutton/store",
    list: ["매장 찾기"],
  },
  {
    name: "CONTACT",
    href: "/redbutton/contact",
    list: ["공지사항", "제휴/제안", "자주묻는질문", "고객의견"],
  },
];
