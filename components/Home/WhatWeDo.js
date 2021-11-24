import React from "react";

const WhatWeDo = () => {
  return (
    <section className="relative my-24">
      <div className="absolute bg-wave-overlay w-full h-full z-0 top-0 left-0 mt-10"></div>
      <div className="relative flex z-10 flex-col justify-center items-center mb-12">
        <p className="uppercase text-blue-600 font-bold text-sm mb-4">
          What We do
        </p>
        <h1 className="text-gray-700 font-bold text-4xl">
          We provide you with high quality
        </h1>
        <h1 className="text-gray-700 font-bold text-4xl mb-4">
          technology services
        </h1>
        <p className="text-gray-500">
          Nullam tincidunt augue eget dui volu tpat, vitae ultri ces
        </p>
        <p className="text-gray-500">
          lectus posuere. Duis urna lacus, efficitur non.
        </p>
      </div>

      <div className="relative z-10 container mx-auto px-10">
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-white shadow p-6 rounded">
              <div className="w-14 h-14 inline-flex items-center justify-center rounded-full bg-blue-600 text-white mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h2 className="text-2xl text-gray-900 font-semibold title-font mb-2">
                Web development
              </h2>
              <p className="leading-relaxed text-base text-gray-400">
                Septa ricadus augue eget dui volu tpat, vitae ultri lectus
                posuere. Duis urna deradture austrim.
              </p>
              <button className="bg-gray-200 pl-4 pr-2 hover:bg-blue-600 hover:text-white py-1 my-3 rounded-full text-gray-600 text-sm font-semibold">
                Read more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 inline"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-white shadow p-6 rounded">
              <div className="w-14 h-14 inline-flex items-center justify-center rounded-full bg-blue-600 text-white mb-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <h2 className="text-2xl text-gray-900 font-semibold title-font mb-2">
                User interface design
              </h2>
              <p className="leading-relaxed text-base text-gray-400">
                Nozzin amina eget dui volu tpat, vitae ces lectus posuere. Duis
                urna la solenas redas zen upita narum.
              </p>
              <button className="bg-gray-200 pl-4 pr-2 hover:bg-blue-600 hover:text-white py-1 my-3 rounded-full text-gray-600 text-sm font-semibold">
                Read more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 inline"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-white shadow p-6 rounded">
              <div className="w-14 h-14 inline-flex items-center justify-center rounded-full bg-blue-600 text-white mb-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h2 className="text-2xl text-gray-900 font-semibold title-font mb-2">
                Technical support
              </h2>
              <p className="leading-relaxed text-base text-gray-400">
                Artnet soprano augue eget dui volu tpat, vitae ultri ces lectus
                posuere. Duis urna lacus, efficitur non.
              </p>
              <button className="bg-gray-200 pl-4 pr-2 hover:bg-blue-600 hover:text-white py-1 my-3 rounded-full text-gray-600 text-sm font-semibold">
                Read more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 inline"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-white shadow p-6 rounded">
              <div className="w-14 h-14 inline-flex items-center justify-center rounded-full bg-blue-600 text-white mb-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                </svg>
              </div>
              <h2 className="text-2xl text-gray-900 font-semibold title-font mb-2">
                Web security services
              </h2>
              <p className="leading-relaxed text-base text-gray-400">
                Kondira fegranum augue eget dui volu tpat, vitae ultri ces
                lectus posuere. Duis urna deradture austrim.
              </p>
              <button className="bg-gray-200 pl-4 pr-2 hover:bg-blue-600 hover:text-white py-1 my-3 rounded-full text-gray-600 text-sm font-semibold">
                Read more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 inline"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-white shadow p-6 rounded">
              <div className="w-14 h-14 inline-flex items-center justify-center rounded-full bg-blue-600 text-white mb-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                </svg>
              </div>
              <h2 className="text-2xl text-gray-900 font-semibold title-font mb-2">
                Advertisement solutions​
              </h2>
              <p className="leading-relaxed text-base text-gray-400">
                Nubinna zetrin eget dui volu tpat, vitae ultri ces lectus
                posuere. Safi solenas negas. Inda rabus koletka rabinna.
              </p>
              <button className="bg-gray-200 pl-4 pr-2 hover:bg-blue-600 hover:text-white py-1 my-3 rounded-full text-gray-600 text-sm font-semibold">
                Read more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 inline"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-white shadow p-6 rounded">
              <div className="w-14 h-14 inline-flex items-center justify-center rounded-full bg-blue-600 text-white mb-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h2 className="text-2xl text-gray-900 font-semibold title-font mb-2">
                Mobile development
              </h2>
              <p className="leading-relaxed text-base text-gray-400">
                Anti arn augue eget dui volu tpat, vitae ultri ces lectus
                posuere. Duis urna lacus, noissec kodarin.
              </p>
              <button className="bg-gray-200 pl-4 pr-2 hover:bg-blue-600 hover:text-white py-1 my-3 rounded-full text-gray-600 text-sm font-semibold">
                Read more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 inline"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
