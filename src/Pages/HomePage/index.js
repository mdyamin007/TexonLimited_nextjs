import React, { useState } from "react";
import About from "../../components/About";
import Banner from "../../components/Banner";
import FAQ from "../../components/FAQ";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Hero2 from "../../components/Hero2";
import Hero3 from "../../components/Hero3";
import NavBar from "../../components/NavBar";
import Pricing from "../../components/Pricing";
import Services from "../../components/Services";
import Services2 from "../../components/Services2";
import SideBar from "../../components/SideBar";
import Skills from "../../components/Skills";
import Sponsors from "../../components/Sponsors";
import Team from "../../components/Team";
import Team2 from "../../components/Team2";
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
      <Skills />
      <Team />
      <Hero3 />
      <Team2 />
      <Sponsors />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
};

export default HomePage;
