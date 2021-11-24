import React from "react";
import Head from "next/head";
import Banner from "../components/Common/Banner";
import Cards from "../components/Common/Cards";
import TitleCards from "../components/Careers/TitleCards";
import JobCards from "../components/Careers/JobCards";

const careers = () => {
  return (
    <>
      <Head>
        <title>Careers | Texon Limited </title>
      </Head>

      <div className="bg-gray-100">
        <section className="relative">
          <Banner text={"Careers"} />
          <Cards />
          <TitleCards />
          <JobCards />
        </section>
      </div>
    </>
  );
};

export default careers;
