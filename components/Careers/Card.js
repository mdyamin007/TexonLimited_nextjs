import React from "react";

const Card = ({ jobTitle, jobDetails, jobLocation }) => {
  return (
    <div className="w-full flex flex-col space-y-5 flex-1 lg:w-1/2 mx-4 my-4 bg-white px-10 py-16">
      <h1 className="text-3xl text-gray-800 font-semibold">{jobTitle}</h1>
      <p className="text-sm text-blue-600 font-semibold">{jobLocation}</p>
      <p className="text-sm text-gray-500 font-light ">{jobDetails}</p>
      <button className="w-48 h-14 font-semibold bg-blue-500 text-white transform hover:translate-y-2 transition-transform duration-300 ease-linear">
        Apply Now
      </button>
    </div>
  );
};

export default Card;
