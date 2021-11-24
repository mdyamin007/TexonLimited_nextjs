import React, { useState } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);
  const menus = [
    {
      menu: "Home",
      subMenus: [
        { page: "Home1", link: "#" },
        { page: "Home2", link: "#" },
        { page: "Home3", link: "#" },
        { page: "Home4", link: "#" },
      ],
    },
    {
      menu: "News",
      subMenus: [
        { page: "Right Sidebar", link: "#" },
        { page: "Left Sidebar", link: "#" },
      ],
    },
    {
      menu: "Services",
      subMenus: [
        { page: "Digital marketing", link: "#" },
        { page: "Graphic design", link: "#" },
        { page: "Security systems", link: "#" },
        { page: "Internet services", link: "#" },
        { page: "Optimizing System", link: "#" },
        { page: "Web development", link: "#" },
      ],
    },
    {
      menu: "Pages",
      subMenus: [
        { page: "About us", link: "/about" },
        { page: "Careers", link: "/careers" },
        { page: "Team", link: "/team" },
        { page: "Contact", link: "/contact" },
        { page: "FAQ", link: "/faq" },
        { page: "Pricing", link: "/pricing" },
      ],
    },
    {
      menu: "Shop",
      subMenus: [
        { page: "Products", link: "#" },
        { page: "Cart", link: "#" },
        { page: "Checkout", link: "#" },
        { page: "My account", link: "#" },
      ],
    },
    { menu: "Contact", link: "/contact" },
  ];

  return (
    <>
      <NavBar setSideBarIsOpen={setSideBarIsOpen} menus={menus} />
      <SideBar
        sideBarIsOpen={sideBarIsOpen}
        setSideBarIsOpen={setSideBarIsOpen}
        menus={menus}
      />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
