import React from "react";
import FAQCard from "./FAQCard";

const FAQ = () => {
  return (
    <div className="flex items-center justify-center w-full pb-32">
      <div className="w-full items-center justify-center flex flex-col space-y-4">
        <FAQCard
          question={"Where is your address ?"}
          answers={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
          }
        />
        <FAQCard
          question={"What do you do ?"}
          answers={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
          }
        />
        <FAQCard
          question={"Who I should select your company ?"}
          answers={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
          }
        />
        <FAQCard
          question={"Who I should select your jj?"}
          answers={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
          }
        />
      </div>
    </div>
  );
};

export default FAQ;
