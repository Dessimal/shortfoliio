import React from "react";
import SectionHeading from "./SectionHeading";
import { MoveRight } from "lucide-react";
import Card from "./Card";
import { newListings } from "@/constant";

const ProductList = () => {
  return (
    <section className="sectionClasses">
      <div className="w-full flex flex-row justify-between items-center">
        <SectionHeading mainHeading="New Listings" subheading="" />
        <button className="px-6 py-4 flex flex-row items-center justify-center rounded-full bg-transparent border-solid border-gray-500 text-slate-950">
          View Listings
          <MoveRight className="ml-4" />
        </button>
      </div>
      <div className="border-solid border-red-500 w-full grid grid-flow-col grid-cols-1 md:grid-flow-row sm:grid-cols-2 xl:grid-cols-4 justify-between">
        {newListings.map(({ title, picture, Features, Location }) => (
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

export default ProductList;
