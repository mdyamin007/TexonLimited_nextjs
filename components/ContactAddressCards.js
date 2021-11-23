import React from "react";

const ContactAddressCards = () => {
  return (
    <section>
      <div className="container flex flex-col lg:flex-row  mx-auto px-10 rounded -my-14 lg:-my-32">
        <div className="transform hover:-translate-y-6 transition-transform duration-300 ease-in-out relative p-10 flex flex-col items-center justify-center w-full lg:w-1/3 mx-3 my-2">
          <div className="relative z-10 h-14 w-14 rounded-full bg-blue-500 inline-flex text-center items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="relative z-10 flex flex-col justify-center items-center">
            <h2 className="uppercase text-base font-semibold text-white my-2">
              Office Address
            </h2>
            <p className="text-white">Baku , Azerbijan. 28 may ms.Bulbul</p>
            <p className="text-white">ave 77 AZE PTC 1000</p>
          </div>
          <div className="h-full w-full absolute top-0 left-0 bg-blue-900 "></div>
          <img
            className="absolute top-0 left-0 h-full opacity-10 w-full object-cover"
            src="https://jahangirseven.com/uptech/wp-content/uploads/sites/19/2020/02/upth-img-02.png"
          />
        </div>
        <div className="transform hover:-translate-y-6 transition-transform duration-300 ease-in-out relative p-10 flex flex-col items-center justify-center w-full lg:w-1/3 mx-3 my-2">
          <div className="relative z-10 h-14 w-14 rounded-full bg-blue-500 inline-flex text-center items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </div>
          <div className="relative z-10 flex flex-col justify-center items-center">
            <h2 className="uppercase text-base font-semibold text-white my-2">
              Phone Number
            </h2>
            <p className="text-white">+012 321 54 76 00 (London)</p>
            <p className="text-white">+012 345 67 89 00 (Baku)</p>
          </div>
          <div className="h-full w-full absolute top-0 left-0 bg-blue-900 "></div>
          <img
            className="absolute top-0 left-0 h-full opacity-10 w-full object-cover"
            src="https://jahangirseven.com/uptech/wp-content/uploads/sites/19/2020/02/upth-img-02.png"
          />
        </div>
        <div className="transform hover:-translate-y-6 transition-transform duration-300 ease-in-out relative p-10 flex flex-col items-center justify-center w-full lg:w-1/3 mx-3 my-2">
          <div className="relative z-10 h-14 w-14 rounded-full bg-blue-500 inline-flex text-center items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="relative z-10 flex flex-col justify-center items-center">
            <h2 className="uppercase text-base font-semibold text-white my-2">
              Our Mail
            </h2>
            <p className="text-white">contact@uptech.co</p>
            <p className="text-white">hello@uptech.co</p>
          </div>
          <div className="h-full w-full absolute top-0 left-0 bg-blue-900 "></div>
          <img
            className="absolute top-0 left-0 h-full opacity-10 w-full object-cover"
            src="https://jahangirseven.com/uptech/wp-content/uploads/sites/19/2020/02/upth-img-02.png"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactAddressCards;
