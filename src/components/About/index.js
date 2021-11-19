import React from "react";
import "./styles.css";

const About = () => {
  return (
    <section className="text-gray-600 body-font mb-32">
      <div className="relative">
        <div className="bg-wave-overlay w-full h-full z-0 absolute top-0 left-0"></div>
        <div className="relative container mx-auto flex px-5 py-24 z-10 md:flex-row flex-col items-center">
          <div className=" lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div className="bg-blue-600 px-4 py-1 text-white rounded-full font-semibold mb-12">
              About Texon
            </div>
            <p className="title-font md:text-5xl text-4xl mb-8 font-light text-gray-900">
              Texon is a powerful <br />
              <span className="font-extrabold">Startup theme</span>
            </p>
            <p className="mb-8 leading-relaxed">
              Pellentesque at posuere tellus. Ut sed dui justo. Phasellus
              scelerisque turpis arcu, ut pulvinar lectus tristique non. Nam
              laoreet, risus vel laoreet laoreet, mauris risus porta velit, id
              imperdiet ante nisi in ante. Integer consectetur in nisi mattis
              tincidunt. Donec lacinia faucibus nunc, vel pellentesque nibh
              condimentum non.{" "}
            </p>
            <div className="flex justify-start items-center">
              <img
                src="https://jahangirseven.com/uptech/wp-content/uploads/sites/19/2020/01/uptech-testimonta-one-2522312.png"
                className="rounded-full"
              />
              <div className="ml-4">
                <p className="text-gray-700 font-semibold text-base">
                  Marcos Romean Diangle
                </p>
                <p className="text-gray-400 font-normal text-base">
                  Founder of Texon
                </p>
              </div>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://jahangirseven.com/uptech/wp-content/uploads/sites/19/2020/12/nxtscmg2-2.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
