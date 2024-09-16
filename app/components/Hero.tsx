import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-living-room bg-center h-screen w-full flex flex-col gap-3 items-center justify-center py-6 py-16">
      <div>
        <div className="uppercase font-bold text-slate-700 text-center">
          Planning a weekend escape or a quick business trip?
        </div>
        <h1 className="text-center text-5xl font-customSemibold">
          Discover Your Ideal{" "}
          <span className="text-center text-blue">ShortStay</span> Destination
        </h1>
      </div>
      <p className="text-center font-semibold">
        Our platform offers a wide selection of short stay accommodation
        tailored to your needs. From cozy apartments to luxurious villas
      </p>

      <div className="w-full px-16 flex flex-col justify-center items-center">
        <input
          className="w-full max-w-[793px] py-3 px-4 border-solid rounded-full my-4 mx-auto"
          type="search"
          name=""
          id=""
          placeholder="Search for shortstays by type, size or amenities"
        />
      </div>
    </section>
  );
};

export default Hero;
