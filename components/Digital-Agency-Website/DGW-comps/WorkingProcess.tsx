"use client";

import { useRef, useState } from "react";
import { AccordionStatus, WorkingProcess } from "../types";
import clsx from "clsx";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimHeadingPara from "./AnimtedComponents/AnimHeadingPara";

gsap.registerPlugin(ScrollTrigger);

const WorkingProcessComp: React.FC<WorkingProcess> = ({
  heading,
  paragraph,
  processList,
}) => {
  const mainSectionRef = useRef(null);
  const firstSubSectionH1 = useRef(null);
  const firstSubSectionP = useRef(null);
  const secondSubSectionRef = useRef(null);

  useGSAP(
    () => {
      if (
        !mainSectionRef.current ||
        !firstSubSectionH1.current ||
        !firstSubSectionP.current
      )
        return;

      const tlFirstSubSection = gsap.timeline({
        scrollTrigger: {
          trigger: mainSectionRef.current,
          scroller: "body",
          start: "top 60%",
          end: "top 40%",
          // markers: true,
          toggleActions: "play none none none",
          scrub: 2,
        },
      });

      tlFirstSubSection.from(firstSubSectionH1.current, {
        opacity: 0,
        duration: 0.5,
        x: -50,
        ease: "power2.out",
      });
      tlFirstSubSection.from(
        firstSubSectionP.current,
        {
          x: 50,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.4"
      );
    }
    // { scope: mainSectionRef }
  );

  useGSAP(() => {
    if (!mainSectionRef.current || !secondSubSectionRef.current) return;

    const children = Array.from(secondSubSectionRef.current.children);

    const tlSecondSubSection = gsap.timeline({
      scrollTrigger: {
        trigger: secondSubSectionRef.current,
        scroller: "body",
        start: "top center",
        end: "bottom 80%",
        markers: true,
        toggleActions: "play none none none",
        scrub: 2,
      },
    });

    tlSecondSubSection.from(children, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
    });
  });

  // Accordion state management (unchanged)
  function stateSeeder() {
    return processList.map((item, index) => ({
      id: index,
      isOpen: false,
    }));
  }

  function handleAccordionToggle(accKey: number) {
    setIsAccordionOpen((prev) =>
      prev?.map((item, idx) =>
        idx === accKey
          ? { ...item, isOpen: !item.isOpen }
          : { ...item, isOpen: false }
      )
    );
  }

  const [isAccordionOpen, setIsAccordionOpen] =
    useState<AccordionStatus[]>(stateSeeder);

  // JSX unchanged
  return (
    <section
      id="service-main-section"
      ref={mainSectionRef}
      className="mb-24 pt-5 max-sm:px-5 px-10"
    >
      <AnimHeadingPara heading={heading} paragraph={paragraph} />
      <div
        ref={secondSubSectionRef}
        className="flex flex-col items-center w-full gap-y-10 pb-10"
      >
        {processList.map((wp, index) => {
          const isOpen = isAccordionOpen?.[index]?.isOpen;
          return (
            <div
              key={index}
              className={clsx(
                isOpen ? "bg-[#b9ff69]" : "bg-[#f5f5f5]",
                "text-black w-full min-h-20 h-fit py-10 px-5 rounded-2xl border-2 transition-colors duration-300 shadow-[0px_10px]"
              )}
            >
              {/* Accordion content unchanged */}
              <div className="flex items-center justify-between">
                <div className="flex gap-x-4.5 items-center ">
                  <h1>{"0" + String(wp.id) + " "}</h1>
                  <h1>{wp.title}</h1>
                </div>
                <i
                  onClick={() => handleAccordionToggle(index)}
                  className={clsx(
                    "ri-arrow-down-s-fill duration-300 transition-transform rounded-full px-2 py-1 outline-1 ",
                    isOpen ? "rotate-180 bg-white" : "rotate-0 bg-[#b9ff69]"
                  )}
                />
              </div>
              <div className="relative w-[90%] mx-auto">
                <div
                  className={clsx(
                    "border-b border-[#888888] w-full mt-8",
                    !isOpen && "hidden"
                  )}
                />
                <div className="absolute left-0 top-0 h-px w-6 bg-gradient-to-r from-[#b9ff69] to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 h-px w-6 bg-gradient-to-l from-[#b9ff69] to-transparent pointer-events-none" />
              </div>
              <div
                className={clsx(
                  "overflow-hidden transition-all duration-300 ease-in-out px-5",
                  isOpen
                    ? "max-h-96 opacity-100 mt-4 py-4"
                    : "max-h-0 opacity-0"
                )}
              >
                <p className="font-light text-sm font-[china]">
                  {wp.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WorkingProcessComp;
