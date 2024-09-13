import Image from "next/image";
import React from "react";

const ImageCard = ({ picture, title, description }) => {
  return (
    <div className="border-solid rounded-xl relative">
      <Image
        className="rounded-xl"
        src={picture}
        alt={title}
        width={2000}
        height={1000}
      />
      <h4 className="absolute bottom-10 left-12 font-bold text-lg text-white">
        {title}
      </h4>
      <p className="absolute bottom-1 left-12 text-white text-xs">
        {description}
      </p>
    </div>
  );
};

export default ImageCard;
