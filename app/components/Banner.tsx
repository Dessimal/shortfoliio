import { man, vectorOne } from "@/constant";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section className="my-32 flex flex-col sm:flex-row bg-blue relative">
      <div className="mx-auto max-w-[1200px] flex sm:flex-row justify-between">
        <div className=" w-full py-32 flex flex-col gap-8 ">
          <h3 className="font-bold text-3xl text-white max-w-[588px]">
            Becoming a house owner with{" "}
            <span className="text-accent">
              investment properties just for you
            </span>
          </h3>
          <p className="text-xs text-white max-w-[588px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using &apos;Content here,
            content here&apos;, making it look like readable English.
          </p>
          <button className="border-solid border-2 border-white text-white rounded-full py-2 px-4 max-w-[186px]">
            Explore investment
          </button>
        </div>
        <div className="relative sm:w-[80vw] sm:h-[485px]  ">
          <Image
            src={vectorOne}
            alt="vector graphic"
            layout="fill"
            objectFit="contain"
            className="h-full w-full"
          />
          <div className="border-red-500 border-2 sm:w-[691px] sm:h-[882px] border-solid absolute top-0 -left-14">
            <Image
              src={man}
              alt="picture of a man holding a toy house"
              width={691}
              height={882}
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
