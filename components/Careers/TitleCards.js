import React from "react";

const TitleCards = () => {
  return (
    <div className="w-full my-32 flex flex-col items-center justify-center">
      <h5 className="uppercase my-4 text-sm text-gray-600 font-normal">
        Job Openings
      </h5>
      <h1 className="text-3xl lg:text-5xl text-gray-800 font-semibold mb-3">
        It’s the rightest time to join
      </h1>
      <h1 className="text-gray-500 italic text-3xl lg:text-5xl font-semibold">
        Texon family
      </h1>
      <div className="h-0.5 w-1/12 bg-yellow-600 my-14" />
    </div>
  );
};

export default TitleCards;
