import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Solutions",
    newTab: false,
    submenu: [
      {
        id: 11,
        title: "Case Studies",
        path: "/blog",
        newTab: false
      },
      {
        id: 12,
        title: "Model Compression",
        path: "",
        newTab: false
      },
      {
        id: 13,
        title: "Model Selection",
        path: "",
        newTab: false
      },
      {
        id: 14,
        title: "Expert Service",
        path: "",
        newTab: false
      },
    ],
  },
  {
    id: 2,
    title: "Product",
    newTab: true,
    submenu: [
      {
        id: 21,
        title: "TinyML Hub",
        path: "https://tinymlhub.com",
        newTab: true
      }
    ],
  },
  {
    id: 3,
    title: "Company",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "About Us",
        path: "",
        newTab: false
      },
      {
        id: 32,
        title: "Careers",
        path: "",
        newTab: false
      },
    ],
  }
];
export default menuData;
