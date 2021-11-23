import React, { useState } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);
  const menus = [
    { menu: "Home", subMenus: ["Home1", "Home2", "Home3", "Home4"] },
    { menu: "News", subMenus: ["Right Sidebar", "Left Sidebar"] },
    {
      menu: "Services",
      subMenus: [
        "Digital marketing",
        "Graphic design",
        "Security systems",
        "Internet services",
        "Optimizing System",
        "Web development",
      ],
    },
    {
      menu: "Pages",
      subMenus: ["About us", "Careers", "Team", "Contact", "FAQ"],
    },
    { menu: "Shop", subMenus: ["Products", "Cart", "Checkout", "My account"] },
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
