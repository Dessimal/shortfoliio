import { Bath, Bed, MapPin } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface Feature {
  id: number;
  beds: string;
  baths: string;
}

interface CardProps {
  id: number;
  picture: string | StaticImageData; // Allow both string and StaticImageData
  title: string;
  Location: string;
  Features: Feature[];
}

const Card: React.FC<CardProps> = ({
  id,
  picture,
  title,
  Location,
  Features,
}: CardProps) => {
  // Explicitly define types for the destructured props
  return (
    <div key={id} className="flex flex-col gap-2">
      <Image
        src={picture} // This works for both URLs and imported images
        alt={title}
        className="max-w-full rounded-xl"
        width={282}
        height={214}
      />
      <h4 className="text-xl font-bold">{title}</h4>
      <span className="text-gray-500 flex items-center">
        <MapPin className="mr-1" />
        {Location}
      </span>
      <span>
        {Features.map((feature) => (
          <div key={feature.id} className="flex flex-row gap-4 text-gray-500">
            <span className="flex items-center gap-1">
              <Bed />
              {feature.beds}
            </span>{" "}
            <span className="cardDescriptionClasses">
              <Bath />
              {feature.baths}
            </span>
          </div>
        ))}
      </span>
    </div>
  );
};

export default Card;
