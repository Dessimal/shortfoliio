import React from "react";
import SectionHeading from "./SectionHeading";
import { MoveRight } from "lucide-react";
import Card from "./Card";
import { newListings } from "@/constant";

const ProductList = () => {
  return (
    <section className="w-full sectionClasses">
      <div className="w-full flex flex-col justify-center sm:flex-row sm:justify-between items-center">
        <SectionHeading mainHeading="New Listings" subheading="" />
        <button className="px-6 py-4 flex flex-row items-center justify-center gap-4 rounded-full bg-transparent border-solid border-2 border-gray-500 text-slate-950 mb-8 sm:mb-0">
          <p>View Listings</p>
          <MoveRight />
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-flow-row sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {newListings.map(({ title, picture, Features, Location, id }) => (
          <Card
            key={id}
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

export default ProductList;
