import Head from "next/head";
import React from "react";
import About from "../components/About/About";
import BlackHero from "../components/About/BlackHero";
import Banner from "../components/Common/Banner";
import AboutCards from "../components/About/AboutCards";
import Cards from "../components/Common/Cards";
import BlackHero2 from "../components/About/BlackHero2";
import Pricing from "../components/Common/Pricing";
import AboutAddress from "../components/About/AboutAddress";

const about = () => {
  return (
    <>
      <Head>
        <title>About us | Texon Limited</title>
      </Head>

      <section className="relative">
        <Banner text={"About us"} />
        <Cards />
        <About />
        <BlackHero />
        <AboutCards />
        <BlackHero2 />
        <Pricing />
        <AboutAddress />
      </section>
    </>
  );
};

export default about;
