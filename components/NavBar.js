import React, { useState } from "react";
import NavLink from "./NavLink";

const NavBar = ({ setSideBarIsOpen, menus }) => {
  return (
    <header className="text-gray-600 body-font ">
      <div className=" z-40 bg-white w-full flex justify-between fixed z-10 py-5 px-5 lg:px-12 items-center">
        {/* Logo and Brand Name  */}
        <div>
          <a
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-3xl font-extrabold">Texon Limited</span>
          </a>
        </div>

        {/* Nav Links */}
        <nav className="md:ml-auto hidden lg:flex flex-wrap items-center text-xl justify-center font-semibold">
          {menus.map((menu) => (
            <NavLink menu={menu} />
          ))}
        </nav>
        {/* Search & Cart Logo  */}
        <div className="flex">
          <a
            role="button"
            className="ml-4 transition-transform duration-300 ease-in-out transform hover:rotate-90"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </a>
          <a
            role="button"
            className="relative flex ml-4 transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="absolute -right-1 -top-2 rounded-full bg-blue-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm leading-tight text-center">
              0
            </span>
          </a>
          <a
            role="button"
            onClick={() => setSideBarIsOpen((prev) => !prev)}
            className="ml-4 transition-transform duration-300 ease-in-out transform hover:scale-125"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </a>
        </div>

        {/* Button */}
        <button className="bg-blue-700 hidden lg:inline text-white ml-4 px-4 py-2 rounded text-lg hover:bg-blue-800">
          Start now!
        </button>
      </div>
    </header>
  );
};

export default NavBar;
