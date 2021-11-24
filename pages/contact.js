import React from "react";
import Head from "next/head";
import ContactInformation from "../components/Contact/ContactInformation";
import ContactAddressCards from "../components/Contact/ContactAddressCards";
import ContactForm from "../components/Contact/ContactForm";
import Banner from "../components/Common/Banner";
import Cards from "../components/Common/Cards";
import Map from "../components/Common/Map";

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact | Texon Limited </title>
      </Head>

      <div className="bg-gray-100">
        <section className="relative">
          <Banner text={"Contact"} />
          <Cards />
        </section>
        <section>
          <ContactInformation />
          <Map />
          <ContactAddressCards />
          <ContactForm />
        </section>
      </div>
    </>
  );
};

export default contact;
