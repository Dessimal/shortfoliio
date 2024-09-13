import React from "react";
import { pictureOne } from "../assets/constants";
import { Card, SectionHeading } from "./constant";

const Featured = () => {
  const properties = [
    {
      id: 1,
      picture: pictureOne,
      title: "Luxury 3 Bedroom Flat",
      Location: "Lekki phase 2, Lagos State",
      Features: [{ id: 1, beds: "3 Beds", baths: "2 Baths" }],
    },
    {
      id: 2,
      picture: pictureOne,
      title: "Luxury 3 Bedroom Flat",
      Location: "Lekki phase 2, Lagos State",
      Features: [{ id: 1, beds: "3 Beds", baths: "2 Baths" }],
    },
    {
      id: 3,
      picture: pictureOne,
      title: "Luxury 3 Bedroom Flat",
      Location: "Lekki phase 2, Lagos State",
      Features: [{ id: 1, beds: "3 Beds", baths: "2 Baths" }],
    },
    {
      id: 4,
      picture: pictureOne,
      title: "Luxury 3 Bedroom Flat",
      Location: "Lekki phase 2, Lagos State",
      Features: [{ id: 1, beds: "3 Beds", baths: "2 Baths" }],
    },
  ];

  return (
    <section className=" w-full sectionClasses">
      <SectionHeading />
      <h2 className="font-bold text-3xl text-slate-950">Featured Listings</h2>
      <p className="text-gray-500 mb-7">
        Check a comprehensive listing of our featured Listings
      </p>
      <div className="grid grid-flow-col md:grid-flow-row md:grid-cols-2 lg:grid-cols-4 gap-4">
        {properties.map(({ title, picture, Features, Location }) => (
          <Card
            key={title}
            picture={picture}
            Features={Features}
            Location={Location}
          />
        ))}
      </div>
    </section>
  );
};

export default Featured;
