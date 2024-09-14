import React from "react";

const CTA = () => {
  return (
    <section className="sectionPaddings">
      <div className="bg-accent max-w-[1200px] flex flex-col gap-6 px-16 py-16 rounded-2xl mx-auto">
        <div
          className="
        flex flex-col gap-6 items-center justify-center ">
          <h2 className="text-3xl text-center font-bold text-white">
            Don&apos;t be left out on our updates
          </h2>
          <p className="text-center text-sm text-white">
            We send updates on our weekly newsletter and we would love to keep
            you in the loop
          </p>
          <input
            type="email"
            name=""
            id=""
            className="border-solid rounded-full sm:w-[440px] sm:h-[48px] px-8 py-4 "
            placeholder="Enter your email"
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;
