import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";

const NavLink = ({ menu }) => {
  const [active, setActive] = useState(false);
  const handleActive = () => {
    setActive(!active);
  };

  if (menu.subMenus) {
    return (
      <div
        onMouseEnter={handleActive}
        onMouseLeave={handleActive}
        className="relative inline-block text-left"
      >
        <div className="transition-all duration-300 ease-in-out transform border-b border-transparent hover:border-b hover:border-blue-700 hover:translate-y-1">
          <button className="inline-flex justify-center w-full px-2 py-2 bg-white text-lg text-gray-600 font-semibold hover:text-blue-800">
            {menu.menu}
            <ChevronDownIcon
              className="-mr-1 ml-2 h-5 w-5"
              aria-hidden="true"
            />
          </button>
        </div>

        <div
          className={
            active
              ? "origin-top-right absolute right-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              : "hidden"
          }
        >
          <div className="bg-white py-2 px-6 text-gray-600">
            {menu.subMenus &&
              menu.subMenus.map((subMenu) => (
                <div className="px-2 py-3 hover:bg-blue-100 hover:text-blue-600 font-normal">
                  <a href="#">{subMenu}</a>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="relative inline-block text-left">
        <div className="transition-all duration-300 ease-in-out border-b border-transparent hover:border-b hover:border-blue-700">
          <button className="inline-flex justify-center w-full px-2 py-2 bg-white text-lg text-gray-600 font-semibold hover:text-blue-800">
            {menu.menu}
          </button>
        </div>
      </div>
    );
  }
};

export default NavLink;
