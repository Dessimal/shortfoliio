import React from "react";
import SectionHeading from "./SectionHeading";
import { MoveRight } from "lucide-react";
import Card from "./Card";
import { newListings } from "@/constant";
import Link from "next/link";

const ProductList = () => {
  return (
    <div className="w-full mx-auto px-1">
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
    </div>
  );
};

export default ProductList;
