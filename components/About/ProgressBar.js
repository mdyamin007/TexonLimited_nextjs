import React from "react";

const ProgressBar = ({ percentage, title }) => {
  return (
    <>
      <div className="flex mb-2 items-center justify-between">
        <div>
          <span className="text-sm font-semibold inline-block text-gray-700  text-white ">
            {title}
          </span>
        </div>
      </div>
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-yellow-200">
        <div
          style={{ width: `${percentage}%`, backgroundColor: "#FF3C00" }}
          className="progress__bar shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center transition-transform duration-1000 ease-linear transform -translate-x-full delay-500"
        ></div>
      </div>
    </>
  );
};

export default ProgressBar;
