import Head from "next/head";
import React, { useState } from "react";
import Pricing from "../components/Common/Pricing";
import About from "../components/Home/About";
import Banner from "../components/Home/Banner";
import FAQ from "../components/Home/FAQ";
import Hero from "../components/Home/Hero";
import Hero2 from "../components/Home/Hero2";
import Hero3 from "../components/Home/Hero3";
import Services from "../components/Home/Services";
import Services2 from "../components/Home/Services2";
import Skills from "../components/Home/Skills";
import Sponsors from "../components/Home/Sponsors";
import Team from "../components/Home/Team";
import Team2 from "../components/Home/Team2";
import WhatWeDo from "../components/Home/WhatWeDo";

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
    </>
  );
}
