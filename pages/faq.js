import React from "react";
import Head from "next/head";
import Banner from "../components/Common/Banner";
import Cards from "../components/Common/Cards";
import FAQTitle from "../components/FAQ/FAQTitle";
import FAQ from "../components/FAQ/FAQ";

const faq = () => {
  return (
    <>
      <Head>
        <title>FAQ | Texon Limited</title>
      </Head>

      <section className="relative">
        <div className="bg-gray-100">
          <Banner text={"FAQ"} />
          <Cards />
          <FAQTitle />
          <FAQ />
        </div>
      </section>
    </>
  );
};

export default faq;
