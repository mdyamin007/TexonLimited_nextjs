import React from "react";
import Card from "./Card";

const JobCards = () => {
  return (
    <div className="container mx-auto flex flex-wrap flex-col lg:flex-row pb-32">
      <Card
        jobTitle={"Back-end developer"}
        jobLocation={"New York office"}
        jobDetails={
          "Vestibulum rutrum, nisl nec consectetur convallis, tellus lacus consequat  eget facilisis arcu."
        }
      />
      <Card
        jobTitle={"UI Designer"}
        jobLocation={"Baku office"}
        jobDetails={
          "Vestibulum rutrum, nisl nec consectetur convallis, tellus lacus consequat  eget facilisis arcu."
        }
      />
      <Card
        jobTitle={"WordPress developer"}
        jobLocation={"Roma office"}
        jobDetails={
          "Vestibulum rutrum, nisl nec consectetur convallis, tellus lacus consequat  eget facilisis arcu."
        }
      />
      <Card
        jobTitle={"Software architect"}
        jobLocation={"Chicago office"}
        jobDetails={
          "Vestibulum rutrum, nisl nec consectetur convallis, tellus lacus consequat  eget facilisis arcu."
        }
      />
      <Card
        jobTitle={"Graphic designer"}
        jobLocation={"Paris office"}
        jobDetails={
          "Vestibulum rutrum, nisl nec consectetur convallis, tellus lacus consequat  eget facilisis arcu."
        }
      />
      <Card
        jobTitle={"Sound engineer"}
        jobLocation={"Baku office"}
        jobDetails={
          "Vestibulum rutrum, nisl nec consectetur convallis, tellus lacus consequat  eget facilisis arcu."
        }
      />
    </div>
  );
};

export default JobCards;
