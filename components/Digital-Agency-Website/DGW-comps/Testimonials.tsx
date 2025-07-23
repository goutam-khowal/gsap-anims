"use client";

import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import clsx from "clsx";
import { Testimonies } from "../types";
import AnimHeadingPara from "./AnimtedComponents/AnimHeadingPara";

const Testimonials: React.FC<Testimonies> = ({
  heading,
  paragraph,
  testimonyList,
}) => {
  const slideRef = useRef(null);
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right"); // or "left"
  const isFirstRender = useRef(true);

  // Set initial visibility on first mount
  useEffect(() => {
    if (slideRef.current) {
      gsap.set(slideRef.current, { opacity: 1, x: 0 });
    }
  }, []);

  // Animate slides ONLY when currentIndex changes (not on first render)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (!slideRef.current) return;
    // Animate from the proper direction
    gsap.fromTo(
      slideRef.current,
      {
        opacity: 0,
        x: direction === "left" ? -100 : 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
      }
    );
  }, [currentIndex, direction]);

  // Carousel Handlers
  function handleLeft() {
    setDirection("left");
    setCurrentIndex((prev) =>
      prev === 0 ? testimonyList.length - 1 : prev - 1
    );
  }
  function handleRight() {
    setDirection("right");
    setCurrentIndex((prev) =>
      prev === testimonyList.length - 1 ? 0 : prev + 1
    );
  }

  // Auto-advance
  useEffect(() => {
    if (!testimonyList.length) return;
    const interval = setInterval(() => {
      setDirection("right");
      setCurrentIndex((prev) =>
        prev === testimonyList.length - 1 ? 0 : prev + 1
      );
    }, 1000 * 10);
    return () => clearInterval(interval);
  }, [testimonyList.length]);

  // Defensive check for empty list
  const currentTestimony =
    testimonyList.length > 0
      ? testimonyList[currentIndex]
      : {
          description: "No testimonials yet.",
          name: "",
          designation: "",
        };

  return (
    <section className="py-5 max-sm:px-5 px-10  mb-24">
      <AnimHeadingPara heading={heading} paragraph={paragraph} />
      <div className="relative">
        {/* Left Button */}
        <div
          onMouseEnter={() => setShowLeftBtn(true)}
          onMouseLeave={() => setShowLeftBtn(false)}
          className="h-full w-[40%] left-5 top-0 absolute text-4xl z-1 flex items-center justify-start px-5"
        >
          <i
            id="leftBtn"
            onClick={handleLeft}
            className={clsx(
              "ri-arrow-left-s-line bg-white/40 rounded-full p-2 sm:p-4 transition-opacity duration-300",
              showLeftBtn ? "opacity-100 visible" : "opacity-0 invisible"
            )}
          />
        </div>
        {/* Slide */}
        <div className="flex w-fit bg-black rounded-2xl overflow-hidden">
          <div className="flex rounded-2xl overflow-hidden w-fit min-h-[300px] ">
            <div
              ref={slideRef}
              className="min-w-full text-white mr-10 px-10 py-10 max-h-[calc(70vh)] flex flex-col justify-center "
            >
              <p className="text-center">{currentTestimony.description}</p>
              <p className="mt-10 text-center text-sm italic font-bold">
                {currentTestimony.name}
              </p>
              <p className="text-center text-sm italic">
                {currentTestimony.designation}
              </p>
            </div>
          </div>
        </div>
        {/* Right Button */}
        <div
          onMouseEnter={() => setShowRightBtn(true)}
          onMouseLeave={() => setShowRightBtn(false)}
          className="h-full w-[40%] right-5 top-0 absolute text-4xl z-1 flex items-center justify-end px-5"
        >
          <i
            id="rightBtn"
            onClick={handleRight}
            className={clsx(
              "ri-arrow-right-s-line bg-white/40 rounded-full p-2 sm:p-4 transition-opacity duration-300",
              showRightBtn ? "opacity-100 visible" : "opacity-0 invisible"
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
