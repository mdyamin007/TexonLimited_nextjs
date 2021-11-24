import React from "react";

const BlackHero2 = () => {
  return (
    <div className="relative bg-gray-900 p-48">
      <div className="flex lg:flex-row flex-col justify-around">
        <div className="border-r border-dotted border-white px-10 flex flex-col justify-center items-center">
          <h1 className="text-white text-6xl my-2">598+</h1>
          <p className="text-sm uppercase text-white">Downloads</p>
        </div>
        <div className="border-r border-dotted border-white px-10 flex flex-col justify-center items-center">
          <h1 className="text-white text-6xl my-2">108 +</h1>
          <p className="text-sm uppercase text-white">Reviews</p>
        </div>
        <div className="border-r border-dotted border-white px-10 flex flex-col justify-center items-center">
          <h1 className="text-white text-6xl my-2">127+</h1>
          <p className="text-sm uppercase text-white">Team Members</p>
        </div>
        <div className="border-r border-dotted border-white px-10 flex flex-col justify-center items-center">
          <h1 className="text-white text-6xl my-2">263+</h1>
          <p className="text-sm uppercase text-white">Awards</p>
        </div>
      </div>
      <img
        src="https://jahangirseven.com/uptech/wp-content/uploads/sites/19/2020/02/uptchbanner1600.jpg"
        className="absolute top-0 left-0 w-full h-full opacity-10 object-cover "
      />
    </div>
  );
};

export default BlackHero2;
