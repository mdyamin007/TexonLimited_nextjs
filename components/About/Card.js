import React from "react";

const Card = ({ imageUrl, title, details }) => {
  return (
    <div className="w-full bg-white p-8 shadow-lg rounded-md hover:transform hover:-translate-y-4 transition duration-300 ease-linear">
      <div className="flex flex-col flex-shrink space-y-4 w-full">
        <img className="h-14 w-14" src={imageUrl} />
        <div className="mb-4">
          <h1 className="text-gray-700 text-xl mb-2 font-semibold">{title}</h1>
          <p className="text-gray-700 text-base font-thin break-words">
            {details}
          </p>
        </div>
        <button
          style={{ backgroundColor: "#FF3C00" }}
          className="text-white h-10 w-2/5 transform hover:translate-y-2 transition duration-300 ease-linear"
        >
          Start now
        </button>
      </div>
    </div>
  );
};

export default Card;
