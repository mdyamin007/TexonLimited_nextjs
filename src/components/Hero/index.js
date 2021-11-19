import React from "react";
import heroImage from "../../assets/hero1.png";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font mb-32">
      <div className="relative">
        <div className="bg-wave-overlay w-full h-full z-0 absolute top-0 left-0 mt-10"></div>
        <div className="relative container mx-auto flex px-5 z-10 py-32 md:24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font md:text-4xl lg:text-6xl text-4xl mb-4 font-bold text-gray-900">
              Pro <span className="font-extrabold">technology&nbsp;</span>
              <br className="hidden lg:inline-block" />
              services and solutions
            </h1>
            <p className="mb-8 leading-relaxed">
              Maecenas at justo et eros tincidunt venenatis ing eli ut elit{" "}
              <br />
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Explore Texon Ltd.
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={heroImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
