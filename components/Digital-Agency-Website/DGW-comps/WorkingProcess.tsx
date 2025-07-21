"use client";

import { useState } from "react";
import { AccordionStatus, WorkingProcess } from "../types";
import clsx from "clsx";

const WorkingProcessComp: React.FC<WorkingProcess> = ({
  heading,
  paragraph,
  processList,
}) => {
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
  return (
    <section>
      <div className="w-full flex max-sm:flex-col items-center mt-14 px-5 gap-x-5">
        <h1 className="text-black w-full text-center px-2 py-2 text-3xl font-bold rounded-md bg-[#9AE975]">
          {heading}
        </h1>
        <p className="text-center m-0 p-0 w-full text-base font-semibold py-8">
          {paragraph}
        </p>
      </div>
      <div className="flex flex-col items-center w-full px-5 gap-y-10">
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
              <div className="flex items-center justify-between">
                <div className="flex gap-x-4.5 items-center ">
                  <h1 className="">{"0" + String(wp.id) + " "}</h1>
                  <h1 className="">{wp.title}</h1>
                </div>
                <i
                  onClick={() => handleAccordionToggle(index)}
                  className={clsx(
                    "ri-arrow-down-s-fill duration-300 transition-transform rounded-full px-2 py-1 outline-1 ",
                    isOpen ? "rotate-180 bg-white" : "rotate-0 bg-[#b9ff69]"
                  )}
                ></i>
              </div>
              {/* Fading Border */}
              <div className="relative w-[90%] mx-auto">
                {/* Actual bordered element */}
                <div
                  className={clsx(
                    "border-b border-[#888888] w-full mt-8",
                    !isOpen && "hidden"
                  )}
                />

                {/* Left fade */}
                <div className="absolute left-0 top-0 h-px w-6 bg-gradient-to-r from-[#b9ff69] to-transparent pointer-events-none" />

                {/* Right fade */}
                <div className="absolute right-0 top-0 h-px w-6 bg-gradient-to-l from-[#b9ff69] to-transparent pointer-events-none" />
              </div>
              {/* Accordion content */}
              <div
                className={clsx(
                  "overflow-hidden transition-all duration-300 ease-in-out px-5",
                  isOpen
                    ? "max-h-96 opacity-100 mt-4  py-4"
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
