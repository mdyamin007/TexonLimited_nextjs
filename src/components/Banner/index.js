import React from "react";

const Banner = () => {
  return (
    <section className="mb-12">
      <div className="container mx-auto px-12">
        <div className="relative h-40 w-full">
          <img
            className="w-full h-full object-cover"
            src="https://jahangirseven.com/uptech/wp-content/uploads/sites/19/2020/07/socex-cover_50_2_75.jpg"
          />
          <div className="absolute h-full w-full top-0 left-0 bg-black bg-opacity-70" />
          <div className="absolute top-0 left-0 h-full w-full">
            <div className="flex justify-around text-white items-center h-full w-full">
              <p className="text-base md:text-lg lg:text-xl font-semibold">
                Our company offers you most professional technology services
              </p>
              <button className="bg-green-500 flex md:text-base text-sm hover:bg-blue-600 px-1 py-1 md:pl-6 md:pr-3 md:py-3">
                Read more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 m-1"
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

export default Banner;
