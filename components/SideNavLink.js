import React, { useState } from "react";
import Link from "next/link";

const SideNavLink = ({ menu }) => {
  const [show, setShow] = useState(false);
  if (!menu.subMenus) {
    return (
      <div className="flex justify-between py-2">
        <Link href={menu.link}>
          <p className="text-gray-700 text-lg">{menu.menu}</p>
        </Link>
      </div>
    );
  }
  return (
    <>
      <div className="flex justify-between py-2">
        <p className="text-gray-700 text-lg">{menu.menu}</p>
        {show ? (
          <div className="bg-blue-100 p-1" onClick={() => setShow(!show)}>
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
                d="M20 12H4"
              />
            </svg>
          </div>
        ) : (
          <div className="bg-blue-100 p-1" onClick={() => setShow(!show)}>
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
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
        )}
      </div>
      {show && (
        <>
          {menu.subMenus.map((subMenu) => (
            <div className="text-gray-700 text-lg py-4">{subMenu}</div>
          ))}
        </>
      )}
    </>
  );
};

export default SideNavLink;
