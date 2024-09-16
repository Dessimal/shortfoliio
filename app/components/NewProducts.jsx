import React from "react";
import SectionHeading from "./SectionHeading";
import { MoveRight } from "lucide-react";
import Card from "./Card";
import { newListings } from "@/constant";
import Link from "next/link";

const NewProducts = () => {
  return (
    <section className="w-full sectionClasses">
      <div className="w-full flex flex-col justify-center sm:flex-row sm:justify-between items-center">
        <SectionHeading mainHeading="New Listings" subheading="" />
        <Link
          href={"/explore"}
          className="px-6 py-4 flex flex-row items-center justify-center gap-4 rounded-full bg-transparent border-solid border-2 border-gray-500 text-slate-950 mb-8 sm:mb-0">
          <p>View Listings</p>
          <MoveRight />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-flow-row sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {newListings.map(({ title, picture, Features, Location, id }) => (
          <Card
            key={id} // Add key
            id={id} // Pass the id to the Card component
            title={title}
            picture={picture}
            Features={Features}
            Location={Location}
          />
        ))}
      </div>
    </section>
  );
};

export default NewProducts;
