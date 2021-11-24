import React, { useEffect } from "react";
import ProgressBar from "./ProgressBar";

const About = () => {
  useEffect(() => {
    window.addEventListener("load", (e) => {
      const progress_bars = document.querySelectorAll(".progress__bar");
      progress_bars.forEach((progress_bar) => {
        progress_bar.classList.remove("-translate-x-full");
        progress_bar.classList.add("translate-x-0");
      });
    });
  }, []);

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
          <div className="my-4 bg-blue-700 px-3 py-2 rounded">
            <p className=" uppercase text-sm text-white font-semibold">
              About us
            </p>
          </div>
          <h1 className="title-font sm:text-4xl text-3xl mb-10 font-medium text-gray-900">
            Expert IT solutions for
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
          <div className="relative w-full my-4">
            <ProgressBar
              percentage={92}
              title={"Programming & Design services"}
            />
            <ProgressBar
              percentage={80}
              title={"Data analytics & Cyber security"}
            />
            <ProgressBar percentage={87} title={"Hosting & Domain services"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
