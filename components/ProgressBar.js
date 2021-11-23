import React from "react";

const ProgressBar = ({ title, percentage }) => {
  return (
    <div className="relative pt-1">
      <div className="flex mb-2 items-center justify-between">
        <div>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-blue-600">
            {title}
          </span>
        </div>
        <div className="text-right">
          <span className="text-xs font-semibold inline-block text-blue-600">
            {percentage}%
          </span>
        </div>
      </div>
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
        <div
          style={{ width: `${percentage}%` }}
          className="progress__bar shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600 transition-transform duration-1000 ease-linear transform -translate-x-full delay-500"
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
