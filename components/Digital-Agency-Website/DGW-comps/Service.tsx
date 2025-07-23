import React from "react";
import { Service } from "../types"; // adjust path as needed
import Image from "next/image";

const ServiceComp: React.FC<Service> = ({
  title,
  description,
  descriptionColor,
  image,
  iconBackground,
  iconColor,
  cardBackground,
  headingBackground,
}) => {
  return (
    <div
      className="border border-gray-300 rounded-2xl shadow-[0_8px_#333] w-full mb-10 "
      style={{ backgroundColor: cardBackground }}
    >
      {/* Title */}
      <div className="pt-5 px-5">
        <h1
          className="px-2 py-1 text-2xl w-fit rounded-xl font-semibold"
          style={{ backgroundColor: headingBackground }}
        >
          {title.split(" ").slice(0, -1).join(" ")}
        </h1>
        <h1
          className="px-2 py-1 text-2xl w-fit rounded-xl font-semibold"
          style={{ backgroundColor: headingBackground }}
        >
          {title.split(" ").slice(-1)}
        </h1>
      </div>
      <div className="flex justify-end w-full px-5 my-1">
        {/* Service Image */}
        <div className="mr-6">
          <Image
            height={500}
            width={500}
            className="w-[150px] h-[150px] object-contain"
            src={image}
            alt="service-icon"
          />
        </div>
      </div>
      {/* Icon + Image Section */}
      <div className="w-full px-5 mb-5 flex items-center gap-2">
        {/* Arrow Icon */}
        <i
          className="ri-arrow-right-up-line text-2xl rounded-full px-2 py-1"
          style={{
            backgroundColor: iconBackground,
            color: iconColor,
          }}
        ></i>
        <span className="text-xl" style={{ color: descriptionColor }}>
          {description}
        </span>
      </div>
    </div>
  );
};

export default ServiceComp;
