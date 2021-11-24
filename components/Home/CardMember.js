import React from "react";

const CardMember = ({ profile_pic, profile_name, designation, about }) => {
  return (
    <div className="xl:w-1/3 md:w-1/2 p-4 animate-none hover:animate-bounce-once flex-grow">
      <div className="bg-white shadow-lg p-6 rounded">
        <div className="flex my-4">
          <img src={profile_pic} className="h-20 w-20 object-cover" />
          <div className="ml-3 flex flex-col justify-center items-start">
            <h2 className="text-xl text-gray-700 font-semibold title-font">
              {profile_name}
            </h2>
            <p className="text-sm font-normal text-blue-600 uppercase">
              {designation}
            </p>
          </div>
        </div>

        <p className="my-2 leading-relaxed text-base text-gray-400">{about}</p>
        <p className="mx-2 text-xl text-yellow-400">★★★★★</p>
      </div>
    </div>
  );
};

export default CardMember;
