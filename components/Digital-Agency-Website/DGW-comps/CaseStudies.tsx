import React from "react";
import { CaseStudies } from "../types";
import Link from "next/link";
import clsx from "clsx";

const CaseStudiesComp: React.FC<CaseStudies> = ({
  heading,
  paragraph,
  caseStudyList,
}) => {
  return (
    <section className="w-full px-5 text-black">
      <div className="flex w-full max-sm:flex-col items-center mt-14 gap-x-5">
        <h1 className="bg-[#b9ff69] w-full text-center px-2 py-2 text-3xl font-bold rounded-md">
          {heading}
        </h1>
        <p className="w-full leading-6 py-5 text-center m-0 text-base font-semibold">
          {paragraph}
        </p>
      </div>
      <div className="flex max-sm:flex-col overflow-hidden rounded-2xl bg-black">
        {caseStudyList.map((cs, index) => (
          <div
            key={index}
            className={clsx(
              "px-5 py-8 bg-black text-white",
              index !== caseStudyList.length - 1 && "border-b border-[#fff]",
              index % caseStudyList.length !== caseStudyList.length - 1 &&
                "border-r border-[#fff]"
            )}
          >
            <p className="pb-5">{cs.description}</p>
            <Link href={cs.url} className="text-[#b9ff69]">
              Learn More{" "}
              <i className="ri-arrow-right-up-line text-2xl rounded-full px-2 py-1"></i>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudiesComp;
