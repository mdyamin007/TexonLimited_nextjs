import Head from "next/head";
import React, { useState } from "react";
import About from "../components/About";
import Banner from "../components/Banner";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Hero2 from "../components/Hero2";
import Hero3 from "../components/Hero3";
import Pricing from "../components/Pricing";
import Services from "../components/Services";
import Services2 from "../components/Services2";
import Skills from "../components/Skills";
import Sponsors from "../components/Sponsors";
import Team from "../components/Team";
import Team2 from "../components/Team2";
import WhatWeDo from "../components/WhatWeDo";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Texon Limited</title>
      </Head>

      <Hero />
      <Services />
      <About />
      <Services2 />
      <WhatWeDo />
      <Banner />
      <Hero2 />
      <Skills />
      <Team />
      <Hero3 />
      <Team2 />
      <Sponsors />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}
