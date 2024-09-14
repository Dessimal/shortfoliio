import React from "react";
import SectionHeading from "./SectionHeading";
import { abuja, lagos, rivers } from "../../constant";
import ImageCard from "./ImageCard";

const Locations = () => {
  const locations = [
    {
      id: 1,
      picture: abuja,
      title: "Abuja",
      description: "243 properties",
    },
    {
      id: 2,
      picture: lagos,
      title: "Lagos",
      description: "245 properties",
    },
    {
      id: 3,
      picture: rivers,
      title: "Rivers",
      description: "242 properties",
    },
    {
      id: 4,
      picture: abuja,
      title: "Abuja",
      description: "250 properties",
    },
  ];

  return (
    <section className=" w-full sectionClasses">
      <div className="mx-auto">
        <SectionHeading
          mainHeading="Top Locations"
          subheading="Discover the most popular and highly recommended locations for your short stays."
        />
        <div className="grid grid-cols-1 sm:grid-flow-row sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {locations.map(({ id, picture, title, description }) => (
            <ImageCard
              key={id}
              picture={picture}
              title={title}
              description={description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
