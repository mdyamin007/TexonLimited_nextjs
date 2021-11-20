import React from "react";
import "./styles.css";
import ProgressBar from "../ProgressBar";

const Skills = () => {
  window.addEventListener("load", (e) => {
    const progress_bars = document.querySelectorAll(".progress__bar");
    progress_bars.forEach((progress_bar) => {
      progress_bar.classList.remove("-translate-x-full");
      progress_bar.classList.add("translate-x-0");
    });
  });
  return (
    <section className="relative">
      <img
        className="object-cover"
        style={{ height: "45rem", width: "100%" }}
        src="https://jahangirseven.com/uptech/wp-content/uploads/sites/19/2020/07/socex-cover_50_2_75.jpg"
      />
      <div className="absolute top-0 bg-opacity-70 left-0 w-full h-full bg-black"></div>
      <div className="absolute -top-16 left-0 w-full lg:w-3/5 mx-2 lg:mx-0 h-3/4 bg-gray-900">
        <div className="absolute top-0 left-0 z-0 w-full h-full our-skills"></div>
        <div className="z-10 p-12">
          <p className="inline bg-blue-600 px-2 py-1 rounded-full text-sm uppercase text-white font-semibold">
            Our Skils
          </p>
          <h1 className="my-6 text-white w-auto text-4xl font-semibold">
            Meet Texon skills
          </h1>
          <span className="text-white font-light break-words">
            Seneration essdi anlietta, interdum nisl nec, fringilla ex enta
            roun. Curabitur in lacus massa. Phasellus pretium blandit.
          </span>
          <div className="my-8">
            <ProgressBar title={"Social Media Marketing"} percentage={92} />
            <ProgressBar title={"Web Development"} percentage={84} />
            <ProgressBar title={"Web Design"} percentage={87} />
            <ProgressBar title={"SEO"} percentage={82} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
