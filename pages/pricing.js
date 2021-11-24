import React from "react";
import Head from "next/head";
import Banner from "../components/Common/Banner";
import Cards from "../components/Common/Cards";
import Pricing from "../components/Common/Pricing";

const pricing = () => {
  return (
    <>
      <Head>
        <title>Pricing plans | Texon Limited</title>
      </Head>
      <section className="relative">
        <Banner text={"Pricing plans"} />
        <Cards />
        <Pricing />
      </section>
    </>
  );
};

export default pricing;
