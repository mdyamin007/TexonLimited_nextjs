import React from "react";

const ContactInformation = () => {
  return (
    <section className="text-gray-600 body-font mb-32">
      <div className="container mx-auto flex px-20 py-2 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://jahangirseven.com/uptech/wp-content/uploads/sites/19/2020/01/img-01.jpg"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <p className="my-10 uppercase text-base font-semibold">
            Contact Information
          </p>
          <h1 className="title-font sm:text-4xl text-3xl mb-10 font-medium text-gray-900">
            You can visit Uptech
            <br className="hidden lg:inline-block" />
            <span className="font-bold"> for booking</span>
          </h1>
          <p className="mb-8 leading-relaxed">
            Pellentesque at posuere tellus. Ut sed dui justo. Phasellus
            scelerisque turpis arcu, ut pulvinar lectus tristique non. Nam
            laoreet, risus vel laoreet laoreet, mauris risus porta velit, id
            imperdiet ante nisi in ante. Integer consectetur in nisi mattis
            tincidunt. Donec lacinia faucibus nunc, vel pellentesque nibh
            condimentum non.
          </p>
          <div className="flex justify-center">
            <button
              className="inline-flex text-white border-0 py-3 px-10 focus:outline-none rounded transition-transform duration-300 ease-linear transform hover:translate-y-2 text-lg"
              style={{ backgroundColor: "#FF3C00" }}
            >
              Start now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInformation;
