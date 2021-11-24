import React from "react";
import Map from "../Common/Map";

const AboutAddress = () => {
  return (
    <div className="bg-gray-900 p-20">
      <div className="flex flex-col space-x-4 lg:flex-row">
        <div
          style={{
            backgroundColor: "#1f242e",
          }}
          className="p-6 w-full lg:w-1/3"
        >
          <div className="flex space-x-4">
            <div
              style={{ backgroundColor: "#41454F" }}
              className="h-20 w-20 rounded-full inline-flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex flex-col justify-center text-left">
              <h4 className="text-base text-white font-semibold uppercase my-1">
                Address
              </h4>
              <p className="text-base text-white">Baku , Azerbaijan : 28 May</p>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#1f242e",
          }}
          className="p-6 w-full lg:w-1/3"
        >
          <div className="flex space-x-4">
            <div
              style={{ backgroundColor: "#41454F" }}
              className="h-20 w-20 rounded-full inline-flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <div className="flex flex-col justify-center text-left">
              <h4 className="text-base text-white font-semibold uppercase my-1">
                Phone
              </h4>
              <p className="text-base text-white">+012 345 56 89 / 77 99</p>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#1f242e",
          }}
          className="p-6 w-full lg:w-1/3"
        >
          <div className="flex space-x-4">
            <div
              style={{ backgroundColor: "#41454F" }}
              className="h-20 w-20 rounded-full inline-flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="flex flex-col justify-center text-left">
              <h4 className="text-base text-white font-semibold uppercase my-1">
                Mail
              </h4>
              <p className="text-base text-white">editor@uptech.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Map />
      </div>
    </div>
  );
};

export default AboutAddress;
