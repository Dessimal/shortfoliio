import ProductList from "@/app/components/ProductList";
import SearchBar from "@/app/components/SearchBar";
import SectionHeading from "@/app/components/SectionHeading";
import React from "react";

const page = () => {
  return (
    <section className="sectionClasses bg-grey">
      <div className="flex flex-col justify-center items-center gap-8 w-full rounded-xl bg-secondary py-8">
        <h1 className="font-3xl lg:font-5xl font-customSemibold text-center ">
          Explore our Apartments
        </h1>
        <p className="text- text-gray-500">
          See all our Listed Houses available for shortlet on our platform
        </p>
        <SearchBar />
      </div>
      <section className="pt-32">
        <SectionHeading mainHeading="All Listings" marginBottom="mb-0" />
        <ProductList />
      </section>
    </section>
  );
};

export default page;
