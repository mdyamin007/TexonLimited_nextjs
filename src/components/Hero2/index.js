import React from "react";

const Hero2 = () => {
  return (
    <section className="text-gray-600 body-font mb-32">
      <div className="relative">
        <div className="bg-wave-overlay w-full h-full z-0 absolute top-0 left-0"></div>
        <div className="relative container mx-auto flex px-10 py-24 z-10 lg:flex-row flex-col items-center">
          <div className="lg:flex-grow lg:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-start lg:text-left mb-16 lg:mb-0 ">
            <div className="bg-blue-600 px-4 py-1 text-white rounded-full font-semibold mb-12">
              Modern Solutions
            </div>
            <p className="title-font md:text-5xl text-4xl mb-8 font-light text-gray-900">
              Pro IT solutions for <br />
              <span className="font-extrabold">your business</span>
            </p>
            <p className="mb-8 leading-relaxed">
              Rutlentesque at posuere tellus. Ut sed dui justo. Phasellus
              scelerisque turpis arcu, ut pulvinar lectus tristique non. ia
              faucibus nunc, vel pellentesque nibh condimentum non.
            </p>
            <div className="flex flex-col space-y-2">
              <div className="flex flex-col lg:flex-row justify-start lg:items-center">
                <div className="w-20 h-20 inline-flex  items-center justify-center rounded-full bg-blue-600 text-white mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                  </svg>
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-gray-700 font-semibold text-base">
                    Responsive & Mobile friendly design
                  </p>
                  <p className="text-gray-400 font-normal text-base">
                    Arincatulum rutrum, nisl nec consectetur convallis, tellus
                    lacus consequat eget facilisis lopi.
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row justify-start lg:items-center">
                <div className="w-20 h-20 inline-flex  items-center justify-center rounded-full bg-blue-600 text-white mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-gray-700 font-semibold text-base">
                    Extended features & Lifetime updates
                  </p>
                  <p className="text-gray-400 font-normal text-base">
                    Vestibulum rutrum, nisl nec consectetur convallis, tellus
                    lacus consequat eget facilisis arcu
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://jahangirseven.com/uptech/wp-content/uploads/sites/19/2020/06/scx01.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
