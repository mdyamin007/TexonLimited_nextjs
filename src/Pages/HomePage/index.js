import React, { useState } from "react";
import About from "../../components/About";
import Banner from "../../components/Banner";
import Hero from "../../components/Hero";
import Hero2 from "../../components/Hero2";
import NavBar from "../../components/NavBar";
import Services from "../../components/Services";
import Services2 from "../../components/Services2";
import SideBar from "../../components/SideBar";
import WhatWeDo from "../../components/WhatWeDo";

const HomePage = () => {
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
    { menu: "Contact" },
  ];

  return (
    <>
      <NavBar setSideBarIsOpen={setSideBarIsOpen} menus={menus} />
      <SideBar
        sideBarIsOpen={sideBarIsOpen}
        setSideBarIsOpen={setSideBarIsOpen}
        menus={menus}
      />
      <Hero />
      <Services />
      <About />
      <Services2 />
      <WhatWeDo />
      <Banner />
      <Hero2 />
    </>
  );
};

export default HomePage;
