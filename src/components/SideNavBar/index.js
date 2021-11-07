import React, { useState } from "react";
import SideNavLink from "../SideNavLink";

const SideNavBar = ({ menus }) => {
  return (
    <div className="py-10 px-6">
      <div className="flex flex-col space-y-2 divide-y divide-gray-200">
        {menus.map((menu) => (
          <SideNavLink menu={menu} />
        ))}
      </div>
    </div>
  );
};

export default SideNavBar;
