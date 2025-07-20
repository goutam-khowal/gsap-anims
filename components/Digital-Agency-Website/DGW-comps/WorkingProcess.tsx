"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AccordionState, WorkingProcesses } from "../types";
import clsx from "clsx";

const WorkingProcessComp: React.FC<WorkingProcesses> = ({
  heading,
  paragraph,
  WPList,
}) => {
  function stateSeeder() {
    return WPList.map((item, index) => ({
      id: index,
      state: false,
    }));
  }

  function handleAccordionToggle(accKey: number) {
    setIsAccordionOpen((prev) =>
      prev?.map((item, idx) =>
        idx === accKey
          ? { ...item, state: !item.state }
          : { ...item, state: false }
      )
    );
  }

  const [isAccordionOpen, setIsAccordionOpen] =
    useState<AccordionState[]>(stateSeeder);
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
      <div className="flex flex-col items-center w-full px-5 gap-5">
        {WPList.map((wp, index) => {
          const isOpen = isAccordionOpen?.[index]?.state;
          return (
            <div
              key={index}
              className={clsx(
                isOpen ? "bg-[#b9ff69]" : "bg-[#f5f5f5]",
                "text-black w-full min-h-20 h-fit py-5 px-5 rounded-2xl border-2 transition-colors duration-200"
              )}
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-x-2 items-start">
                  <h1 className="font-bold">{"0" + String(wp.id + 1) + " "}</h1>
                  <h1 className="font-bold">{wp.title}</h1>
                </div>
                <i
                  onClick={() => handleAccordionToggle(index)}
                  className={clsx(
                    isOpen ? "rotate-0 bg-white" : "rotate-180 bg-[#b9ff69]",
                    "ri-arrow-down-s-fill duration-800 transition-transform rounded-full px-2 py-1 outline-1"
                  )}
                ></i>
              </div>

              {/* Accordion content */}
              <div
                className={clsx(
                  "overflow-hidden transition-all duration-800 ease-in-out",
                  isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                )}
              >
                <p>{wp.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WorkingProcessComp;
