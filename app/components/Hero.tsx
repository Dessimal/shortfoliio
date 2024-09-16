import Image from "next/image";
import React from "react";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <section className="relative bg-living-room bg-center h-screen w-full flex flex-col gap-3 items-center justify-center py-6 px-6 sm:px-16">
      <div>
        <div className="uppercase text-xs font-bold text-slate-700 text-center">
          Planning a weekend escape or a quick business trip?
        </div>
        <h1 className="text-center text-3xl md:text-5xl font-customSemibold">
          Discover Your Ideal{" "}
          <span className="text-center text-blue">ShortStay</span> Destination
        </h1>
      </div>
      <p className="text-center text-sm font-semibold">
        Our platform offers a wide selection of short stay accommodation
        tailored to your needs. From cozy apartments to luxurious villas
      </p>

      <SearchBar />
    </section>
  );
};

export default Hero;
