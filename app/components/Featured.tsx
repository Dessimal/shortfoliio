import React from "react";
import { Card, SectionHeading } from "./constant";
import { propertyOne } from "@/constant";

const Featured = () => {
  const properties = [
    {
      id: 1,
      picture: propertyOne,
      title: "Luxury 3 Bedroom Flat",
      Location: "Lekki phase 2, Lagos State",
      Features: [{ id: 1, beds: "3 Beds", baths: "2 Baths" }],
    },
    {
      id: 2,
      picture: propertyOne,
      title: "Luxury 3 Bedroom Flat",
      Location: "Lekki phase 2, Lagos State",
      Features: [{ id: 1, beds: "3 Beds", baths: "2 Baths" }],
    },
    {
      id: 3,
      picture: propertyOne,
      title: "Luxury 3 Bedroom Flat",
      Location: "Lekki phase 2, Lagos State",
      Features: [{ id: 1, beds: "3 Beds", baths: "2 Baths" }],
    },
    {
      id: 4,
      picture: propertyOne,
      title: "Luxury 3 Bedroom Flat",
      Location: "Lekki phase 2, Lagos State",
      Features: [{ id: 1, beds: "3 Beds", baths: "2 Baths" }],
    },
  ];

  return (
    <section className=" w-full sectionClasses">
      <div className="mx-auto">
        <SectionHeading
          mainHeading="Featured Listings"
          subheading="Check a comprehensive listing of our featured Listings"
        />
        <div className="grid grid-cols-1 sm:grid-flow-row sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {properties.map(({ title, picture, Features, Location }) => (
            <Card
              key={title}
              title={title}
              picture={picture}
              Features={Features}
              Location={Location}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
