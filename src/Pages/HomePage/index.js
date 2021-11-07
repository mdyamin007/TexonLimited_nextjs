import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";

const HomePage = () => {
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);

  return (
    <>
      <NavBar setSideBarIsOpen={setSideBarIsOpen} />
      <SideBar
        sideBarIsOpen={sideBarIsOpen}
        setSideBarIsOpen={setSideBarIsOpen}
      />
    </>
  );
};

export default HomePage;
