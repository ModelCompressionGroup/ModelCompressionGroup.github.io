import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Solutions",
    newTab: false,
    submenu: [
      {
        id: 11,
        title: "Use Cases",
        path: "/blog",
        newTab: false
      },
      {
        id: 12,
        title: "Model Optimization",
        path: "https://tinymlhub.com",
        newTab: false
      },
      {
        id: 13,
        title: "Small Language Models (SLM)",
        path: "/blog/posts/0-small-language-models",
        newTab: false
      }
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
        path: "/company/about",
        newTab: false
      },
      {
        id: 32,
        title: "Contact",
        path: "/company/contact",
        newTab: false
      },
    ],
  }
];
export default menuData;
