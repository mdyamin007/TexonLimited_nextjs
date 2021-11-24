import React from "react";
import Head from "next/head";
import Banner from "../components/Common/Banner";
import Cards from "../components/Common/Cards";
import Team from "../components/Team/Team";
import TeamTitle from "../components/Team/TeamTitle";

const team = () => {
  return (
    <>
      <Head>
        <title>Our Team | Texon Limited </title>
      </Head>
      <section className="relative">
        <div className="bg-gray-100">
          <Banner text={"Our team"} />
          <Cards />
          <TeamTitle />
          <Team />
        </div>
      </section>
    </>
  );
};

export default team;
