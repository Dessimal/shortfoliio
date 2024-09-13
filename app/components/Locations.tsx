import React from "react";
import SectionHeading from "./SectionHeading";
import { abuja, lagos, rivers } from "../assets/constants";
import ImageCard from "./ImageCard";

const Locations = () => {
  const locations = [
    {
      id: 1,
      picture: abuja,
      title: "Abuja",
      description: "an awesome place to be",
    },
    {
      id: 2,
      picture: lagos,
      title: "Lagos",
      description: "an awesome place to be",
    },
    {
      id: 3,
      picture: rivers,
      title: "Rivers",
      description: "an awesome place to be",
    },
    {
      id: 4,
      picture: abuja,
      title: "Abuja",
      description: "an awesome place to be",
    },
  ];

  return (
    <section className="sectionClasses">
      <SectionHeading
        mainHeading="Top Locations"
        subheading="Discover the most popular and highly recommended locations for your short stays."
      />
      <div className="grid grid-flow-col md:grid-flow-row md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-scroll">
        {locations.map(({ id, picture, title, description }) => (
          <ImageCard
            key={id}
            picture={picture}
            title={title}
            description={description}
          />
        ))}
      </div>
    </section>
  );
};

export default Locations;
