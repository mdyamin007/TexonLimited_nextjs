import React, { useState } from "react";

const FAQCard = ({ question, answers }) => {
  const [expand, setExpand] = useState(false);

  const handleExpand = () => {
    setExpand((prev) => setExpand(!prev));
  };

  return (
    <>
      <div
        onClick={handleExpand}
        className="w-1/2 cursor-pointer px-10 py-6 bg-white"
      >
        <div className="flex justify-between items-center">
          <p
            className={
              "text-base font-semibold " +
              (expand ? "text-blue-700" : "text-gray-700")
            }
          >
            {question}
          </p>
          {expand ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
        {expand && (
          <div className="mt-4">
            <p className="text-gray-700 text-base">{answers}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default FAQCard;
