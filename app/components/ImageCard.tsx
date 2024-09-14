import Image, { StaticImageData } from "next/image";
import React from "react";

// Define the props type, allowing picture to be a string (URL) or StaticImageData (imported image)
interface ImageCardProps {
  picture: string | StaticImageData;
  title: string;
  description: string;
}

const ImageCard: React.FC<ImageCardProps> = ({
  picture,
  title,
  description,
}) => {
  return (
    <div className="border-solid rounded-xl relative">
      <Image
        className="rounded-xl"
        src={picture} // This supports both string URLs and imported images
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
