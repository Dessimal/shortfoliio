import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-living-room bg-center h-screen w-full flex flex-col gap-3 items-center justify-center py-6 py-16">
      <div>
        <div className="uppercase text-slate-700 text-center">
          Planning a weekend escape or a quick business trip?
        </div>
        <h1 className="text-center text-5xl text-slate-950 font-bold">
          Discover Your Ideal{" "}
          <span className="text-center text-blue">ShortStay</span> Destination
        </h1>
      </div>
      <p className="text-center font-semibold">
        Our platform offers a wide selection of short stay accommodation
        tailored to your needs. From cozy apartments to luxurious villas
      </p>

      <div>
        {" "}
        <form className="w-full border-solid border-green-700">
          <input
            className="w-full py-3 px-2 border-solid border-red-700 rounded-2xl my-4"
            type="search"
            name=""
            id=""
            placeholder="Search for shortstays by type, size or amenities"
          />
        </form>
      </div>
    </section>
  );
};

export default Hero;
