import React from "react";
import SideNavBar from "../SideNavBar";

const SideBar = ({ sideBarIsOpen, setSideBarIsOpen, menus }) => {
  return (
    <>
      {sideBarIsOpen && (
        <div className="z-10 fixed inset-0 transition-opacity">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={() => setSideBarIsOpen(false)}
          ></div>
        </div>
      )}

      <aside
        className={
          (sideBarIsOpen ? "translate-x-0" : "translate-x-full") +
          " transform top-0 right-0 w-80 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
        }
      >
        <div className="bg-blue-900 px-8 py-4 flex">
          <h2 className="text-white font-bold text-3xl flex-grow">
            Texon Limited
          </h2>
          <div
            className="text-white py-1 transition-transform duration-400 cursor-pointer ease-linear transform hover:rotate-90"
            onClick={() => setSideBarIsOpen(false)}
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <div className="lg:hidden">
          <SideNavBar menus={menus} />
        </div>
        <div className="w-full my-6">
          <h2 className="text-gray-600 text-2xl mb-1 px-8 font-semibold">
            Contact Info
          </h2>
          <div className="flex space-x-1">
            <div className="w-10 bg-blue-900 h-0.5 ml-8 my-2"></div>
            <div className="w-4 bg-blue-900 h-0.5 ml-8 my-2"></div>
          </div>
        </div>
        <div className="w-full text-gray-600 py-4 px-10 text-xl">
          <div className="flex space-x-4 mb-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mt-1 h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clip-rule="evenodd"
              />
            </svg>
            <p>DUET, Gazipur</p>
          </div>
          <div className="flex space-x-4 mb-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mt-1 h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            <p>All days of the week</p>
          </div>
          <div className="flex space-x-4 mb-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mt-1 h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <p>+012 345 67 89 00</p>
          </div>
          <div className="flex space-x-4 mb-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mt-1 h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                clipRule="evenodd"
              />
            </svg>
            <p>contact@texonltd.com</p>
          </div>
          <div className="flex space-x-4 mb-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="mt-1 h-5 w-5"
              fill="currentColor"
            >
              <path d="M22.987 13.966c1.357-7.765-5.416-14.412-13.052-12.979-5.821-3.561-12.503 3.226-8.935 9.029-1.387 7.747 5.384 14.48 13.083 13.01 5.832 3.536 12.493-3.26 8.904-9.06zm-10.603 5.891c-3.181 0-6.378-1.448-6.362-3.941.005-.752.564-1.442 1.309-1.442 1.873 0 1.855 2.795 4.837 2.795 2.093 0 2.807-1.146 2.807-1.944 0-2.886-9.043-1.117-9.043-6.543 0-2.938 2.402-4.962 6.179-4.741 3.602.213 5.713 1.803 5.917 3.289.101.971-.542 1.727-1.659 1.727-1.628 0-1.795-2.181-4.6-2.181-1.266 0-2.334.528-2.334 1.674 0 2.395 8.99 1.005 8.99 6.276-.001 3.039-2.423 5.031-6.041 5.031z" />
            </svg>
            <p>hellotexon</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
