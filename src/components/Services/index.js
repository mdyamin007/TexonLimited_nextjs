import React from "react";

const Services = () => {
  return (
    <div className="container mx-auto px-12 my-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div>
          <h1 className="text-4xl md:text-5xl text-gray-600 font-semibold my-2">
            Texon provides you
            <br />
            with <span className="text-blue-600">next level</span> technology
          </h1>
          <p className="font-normal text-lg text-gray-500 my-5">
            Penta curitus aren, consectetur adipiscing eli ut elit tellus,{" "}
            <br />
            luctus nec ullamcorper mattis,pulvinar.
          </p>
        </div>
        <div>
          <button className="rounded py-3 px-6 mr-6 bg-green-500 text-white font-normal text-lg hover:bg-blue-500 transition-background duration-300 ease-in-out">
            Contact us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline"
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

      <div className="lg:grid lg:grid-cols-3 lg:gap-4 my-10">
        <div className="relative w-full h-64">
          <img
            className="w-full h-full object-cover"
            src="http://www.smartthingscentre.com/images/demo/course/web.jpg"
          />
          <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-25 hover:bg-opacity-75 transition duration-500 ease-in-out"></div>
          <h1 className="absolute bottom-4 text-white font-bold text-xl left-16">
            Web development services
          </h1>
        </div>

        <div className="relative w-full h-64">
          <img
            className="w-full h-full object-contain"
            src="https://prototypum.com/wp-content/uploads/2021/03/63A6507-2-web-1536x1024.jpg"
          />
          <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-25 hover:bg-opacity-75 transition duration-500 ease-in-out"></div>
          <h1 className="absolute bottom-4 text-white font-bold text-xl left-16">
            Professional Design solutions
          </h1>
        </div>

        <div className="relative w-full h-64">
          <img
            className="w-full h-full object-contain"
            src="https://www.dimensionscloud.com/wp-content/uploads/2020/11/Server-Security-1--1024x802.png"
          />
          <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-25 hover:bg-opacity-75 transition duration-500 ease-in-out"></div>
          <h1 className="absolute bottom-4 text-white font-bold text-xl left-16">
            Cyber security solutions
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Services;
