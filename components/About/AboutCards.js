import React from "react";
import Card from "./Card";

const AboutCards = () => {
  const cardsInfo = [
    {
      imageUrl:
        "https://jahangirseven.com/uptech/wp-content/uploads/sites/19/2020/02/monitor.png",
      title: "Web Development",
      details:
        "Nullam tincidunt augue eget dui volu tpat, vitae ultri ces lectus posuere. Duis urna lacus, efficitur non.",
    },
    {
      imageUrl:
        "https://jahangirseven.com/uptech/wp-content/uploads/sites/19/2020/02/uptchskills.png",
      title: "Optimizing system",
      details:
        "Nullam tincidunt augue eget dui volu tpat, vitae ultri ces lectus posuere. Duis urna lacus, efficitur non.",
    },
    {
      imageUrl:
        "https://jahangirseven.com/uptech/wp-content/uploads/sites/19/2020/02/uptchshield-4.png",
      title: "Security systems",
      details:
        "Nullam tincidunt augue eget dui volu tpat, vitae ultri ces lectus posuere. Duis urna lacus, efficitur non.",
    },
    {
      imageUrl:
        "https://jahangirseven.com/uptech/wp-content/uploads/sites/19/2020/02/prchwrlddd.png",
      title: "Global service",
      details:
        "Nullam tincidunt augue eget dui volu tpat, vitae ultri ces lectus posuere. Duis urna lacus, efficitur non.",
    },
    {
      imageUrl:
        "https://jahangirseven.com/uptech/wp-content/uploads/sites/19/2020/02/uptchgraphic-design.png",
      title: "Graphic design",
      details:
        "Nullam tincidunt augue eget dui volu tpat, vitae ultri ces lectus posuere. Duis urna lacus, efficitur non.",
    },
    {
      imageUrl:
        "https://jahangirseven.com/uptech/wp-content/uploads/sites/19/2020/02/uptchcampaign.png",
      title: "Digital marketing",
      details:
        "Nullam tincidunt augue eget dui volu tpat, vitae ultri ces lectus posuere. Duis urna lacus, efficitur non.",
    },
  ];

  return (
    <div className="relative -mt-20 mx-auto space-x-1 container grid grid-cols-1 lg:grid-cols-3 gap-4 mb-32">
      {cardsInfo.map((card, index) => (
        <Card
          key={index}
          imageUrl={card.imageUrl}
          title={card.title}
          details={card.details}
        />
      ))}
    </div>
  );
};

export default AboutCards;
