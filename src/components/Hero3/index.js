import React from "react";

const Hero3 = () => {
  return (
    <section className="text-gray-600 body-font mb-32">
      <div className="relative">
        <div className="bg-wave-overlay w-full h-full z-0 absolute top-0 left-0"></div>
        <div className="relative container mx-auto flex px-10 py-24 z-10 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mr-8">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://jahangirseven.com/uptech/wp-content/uploads/sites/19/2020/12/nxt-section-img54325.png"
            />
          </div>
          <div className=" lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div className="bg-blue-600 px-4 py-1 text-white rounded-full font-semibold mb-12">
              Fast Growing Company
            </div>
            <p className="title-font md:text-6xl text-4xl mb-8 font-light text-gray-900">
              <span className="font-extrabold">Best rated</span> Startup of the
              last year
            </p>
            <p className="mb-8 leading-relaxed">
              Pellentesque at posuere tellus. Ut sed dui justo. Phasellus
              scelerisque turpis arcu, ut pulvinar lectus tristique non. ia
              faucibus nunc, vel pellentesque nibh condimentum non.
            </p>
            <div>
              <ul className="list-none">
                <li className="my-1">
                  <span className="pr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-yellow-600 inline "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-900 text-lg font-normal">
                    Professional Technology services
                  </span>
                </li>
                <li className="my-1">
                  <span className="pr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-yellow-600 inline "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-900 text-lg font-normal">
                    Digital marketing & Strong Strategies
                  </span>
                </li>
                <li className="my-1">
                  <span className="pr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-yellow-600 inline "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-900 text-lg font-normal">
                    Search engine optimization
                  </span>
                </li>
                <li className="my-1">
                  <span className="pr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-yellow-600 inline "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-900 text-lg font-normal">
                    Technology systems for you business
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3;
