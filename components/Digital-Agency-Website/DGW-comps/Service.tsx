import React from "react";
import { ServiceProps } from "../types"; // adjust path as needed

const Service: React.FC<ServiceProps> = ({
  title,
  description,
  img,
  iconBg,
  iconClr,
  cardBg,
  headingBg,
}) => {
  return (
    <div
      className="border border-gray-300 rounded-2xl shadow-[0_8px_#333] w-full mb-10"
      style={{ backgroundColor: cardBg }}
    >
      {/* Title */}
      <div className="pt-10 px-10">
        <h1
          className="px-2 py-1 text-2xl w-fit rounded-xl font-semibold"
          style={{ backgroundColor: headingBg }}
        >
          {title}
        </h1>
      </div>

      {/* Icon + Image Section */}
      <div className="flex justify-between items-end w-full px-10">
        {/* Arrow Icon */}
        <i
          className="ri-arrow-right-up-line text-2xl rounded-full px-2 py-1 h-max mb-10"
          style={{
            backgroundColor: iconBg,
            color: iconClr,
          }}
        ></i>

        {/* Service Image */}
        <div className="my-10">
          <img
            className="w-[140px] h-[120px] object-contain"
            src={img}
            alt="service-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
