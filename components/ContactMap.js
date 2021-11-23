import React from "react";

const ContactMap = () => {
  return (
    <div
      style={{
        overflow: "hidden",
        paddingBottom: "56.25%",
        position: "relative",
        height: "0",
      }}
    >
      <iframe
        style={{
          left: "0",
          top: "0",
          height: "100%",
          width: "100%",
          position: "absolute",
        }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.3746759455653!2d90.4159995145677!3d24.017849284458276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755da4eced0c537%3A0x8d54b38a823b5212!2z4Kai4Ka-4KaV4Ka-IOCmquCnjeCmsOCmleCnjOCmtuCmsiDgppMg4Kaq4KeN4Kaw4Kav4KeB4KaV4KeN4Kak4Ka_IOCmrOCmv-CmtuCnjeCmrOCmrOCmv-CmpuCnjeCmr-CmvuCmsuCmr-CmvCAo4Kah4KeB4Kef4KeH4KafKSwg4KaX4Ka-4Kac4KeA4Kaq4KeB4Kaw!5e0!3m2!1sbn!2sbd!4v1637663474989!5m2!1sbn!2sbd"
        width="600"
        height="450"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default ContactMap;
