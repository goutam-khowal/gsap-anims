"use client";

import React, { useRef } from "react";
import { CaseStudies } from "../types";
import Link from "next/link";
import clsx from "clsx";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimHeadingPara from "./AnimtedComponents/AnimHeadingPara";

const CaseStudiesComp: React.FC<CaseStudies> = ({
  heading,
  paragraph,
  caseStudyList,
}) => {
  const mainSectionRef = useRef<HTMLElement>(null);
  const secondSubSectionRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    if (!secondSubSectionRef || !mainSectionRef.current) return;

    const tlSecondSubSection = gsap.timeline({
      scrollTrigger: {
        trigger: secondSubSectionRef.current,
        scroller: "body",
        start: "top 80%",
        end: "top center",
        // markers: true,
        toggleActions: "play none none none",
        scrub: 2,
      },
    });
    if (!secondSubSectionRef.current) return;

    // Get all direct children as an array
    if (!secondSubSectionRef.current) return;
    const secondSection = Array.from(secondSubSectionRef.current.children);

    // Animate all children with a stagger for "waterfall" effect
    tlSecondSubSection.from(secondSection, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
    });
  });

  return (
    <section
      ref={mainSectionRef}
      className="w-full px-10 max-sm:px-5 text-black  mb-24 py-5"
    >
      <AnimHeadingPara heading={heading} paragraph={paragraph} />
      <div
        ref={secondSubSectionRef}
        className="flex max-sm:flex-col overflow-hidden rounded-2xl bg-black"
      >
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
