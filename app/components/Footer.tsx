import React from "react";
import { footerLinks } from "@/constant";
import { shortfolioVector } from "@/constant";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="pb-8 pt-16 pb-32 px-4 grid grid-flow-row sm:grid-flow-row w-full gap-10 bg-primary text-white">
      <div className="max-w-[1440px] grid grid-flow-row sm:grid-flow-col sm:grid-cols-4 justify-between gap-6 ">
        {footerLinks.map(({ id, title, links }) => (
          <div key={id}>
            <h4 className="text-lg font-bold text-white mb-6">{title}</h4>
            {links.map((link) => (
              <p className="mb-4" key={link}>
                {link}
              </p>
            ))}
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col gap-6">
        <p className="text-white text-sm ">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using &apos;Content here, content here&apos;,
          making it look like readable English. Many desktop publishing packages
          and web page editors now use Lorem Ipsum as their default model text,
          and a search for &apos;lorem ipsum&apos; will uncover many web sites
          still in their infancy. Various versions have evolved over the years,
          sometimes by accident, sometimes on purpose (injected humour and the
          like).
        </p>
      </div>
      <div className="border-[.3px] w-full border-solid border-gray-600 " />
      <p className="text-sm text-white">©Shortfolio 2024 All Rights Reserved</p>
      <div>
        <Image
          src={shortfolioVector}
          width={1440}
          height={400}
          alt="shortfolio"
        />
      </div>
    </section>
  );
};

export default Footer;
