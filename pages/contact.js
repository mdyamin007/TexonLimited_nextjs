import React from "react";
import Head from "next/head";
import ContactBanner from "../components/ContactBanner";
import ContactCard from "../components/ContactCard";
import ContactInformation from "../components/ContactInformation";
import ContactMap from "../components/ContactMap";
import ContactAddressCards from "../components/ContactAddressCards";
import ContactForm from "../components/ContactForm";

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact | Texon Limited </title>
      </Head>

      <div className="bg-gray-100">
        <section className="relative">
          <ContactBanner />
          <ContactCard />
        </section>
        <ContactInformation />
        <ContactMap />
        <ContactAddressCards />
        <ContactForm />
      </div>
    </>
  );
};

export default contact;
