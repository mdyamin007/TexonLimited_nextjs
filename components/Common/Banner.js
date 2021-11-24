import React from "react";

const Banner = ({ text }) => {
  return (
    <div className="w-full relative pt-20">
      <img
        src="https://jahangirseven.com/uptech/wp-content/uploads/sites/19/2019/12/uptechbanner01.jpg"
        alt="Banner"
        className="object-cover w-full"
      />
      <div className="absolute h-full w-full top-0 left-0 bg-black bg-opacity-50" />
      <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center">
        <h1 className="md:text-8xl text-4xl font-bold text-white">{text}</h1>
      </div>
    </div>
  );
};

export default Banner;
