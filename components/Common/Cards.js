import React from "react";

const Cards = () => {
  return (
    <div className="relative -mt-10 container mx-auto flex lg:flex-row flex-col mb-32">
      <div className="w-full lg:w-1/3 mx-3 my-3 bg-white p-8 rounded-md hover:border-b-2  hover:border-blue-700">
        <div className="flex space-x-4">
          <img src="https://jahangirseven.com/uptech/wp-content/uploads/sites/19/2020/02/chchworldpng.png" />
          <div>
            <h1 className="text-gray-700 text-xl font-semibold">
              Global service
            </h1>
            <p className="text-gray-700 text-base font-thin">
              Ultra creta demin sia amet, consectetur adipiscing.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/3 mx-3 my-3 bg-white p-8 rounded-md hover:border-b-2  hover:border-blue-700">
        <div className="flex space-x-4">
          <img src="https://jahangirseven.com/uptech/wp-content/uploads/sites/19/2020/02/code-2vhhhh4.png" />
          <div>
            <h1 className="text-gray-700 text-xl font-semibold">
              Easy to integrate
            </h1>
            <p className="text-gray-700 text-base font-thin">
              Ultra creta demin sia amet, consectetur adipiscing.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/3 mx-3 my-3 bg-white p-8 rounded-md hover:border-b-2  hover:border-blue-700">
        <div className="flex space-x-4">
          <img src="https://jahangirseven.com/uptech/wp-content/uploads/sites/19/2020/02/cchhch4sport-team.png" />
          <div>
            <h1 className="text-gray-700 text-xl font-semibold">
              Customer support
            </h1>
            <p className="text-gray-700 text-base font-thin">
              Ultra creta demin sia amet, consectetur adipiscing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
