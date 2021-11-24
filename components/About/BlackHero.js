import React from "react";

const BlackHero = () => {
  return (
    <div className="relative w-full" style={{ height: "30rem" }}>
      <div className="absolute w-full bg-black h-full top-0 left-0 transform -rotate-3" />
      <div className="relative p-32 ">
        <div>
          <h1 className="md:text-6xl text-4xl leading-10 mb-4 font-bold text-white">
            Everybody wants to be Texon.
          </h1>
          <h1 className="md:text-6xl text-4xl leading-10 mb-4 font-bold text-white">
            But no one can’t be!
          </h1>
        </div>
        <div className="hidden lg:block my-10">
          <p className="text-white text-base">
            Etiam id orci quam. Mauris efficitur a metus eu pellentesque.
          </p>
          <p className="text-white text-base">
            Nam quis porttitor leo vel cursusodio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlackHero;
