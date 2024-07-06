import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Solutions",
    path: "/blog",
    newTab: false,
  },
  {
    id: 2,
    title: "Product",
    path: "https://tinymlhub.com",
    newTab: true,
  },
  {
    id: 3,
    title: "More",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "About",
        path: "",
        newTab: false
      },
    ],
  },
  {
    id: 4,
    title: "Login",
    path: "https://tinymlhub.com",
    newTab: true,
  },
];
export default menuData;
