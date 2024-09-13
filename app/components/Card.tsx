import Image from "next/image";
import React from "react";

const Card = ({ id, picture, title, Location, Features }) => {
  return (
    <div key={id} className="flex flex-col gap-4">
      <Image
        src={picture}
        alt={title}
        className="max-w-full rounded-xl"
        width={282}
        height={214}
      />
      <h4>{title}</h4>
      <span>{Location}</span>
      <span>
        {Features.map((feature) => (
          <div key={feature.id} className="flex flex-row gap-4">
            <span>{feature.beds}</span> <span>{feature.baths}</span>
          </div>
        ))}
      </span>
    </div>
  );
};

export default Card;
