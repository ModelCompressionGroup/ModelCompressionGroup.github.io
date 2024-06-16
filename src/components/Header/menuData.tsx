import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 33,
    title: "Case Studies",
    path: "/blog",
    newTab: false,
  },
  {
    id: 4,
    title: "Products",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "TinyML Hub",
        path: "https://tinymlhub.com",
        newTab: true
      },
      {
        id: 42,
        title: "Edge Model Architect",
        path: "",
        newTab: false,
      },
    ],
  },
];
export default menuData;
