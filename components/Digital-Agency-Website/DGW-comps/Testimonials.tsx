"use client";

import React, { useRef, useState, useEffect } from "react";
import { Testimonies } from "../types";
import { gsap } from "gsap";
import clsx from "clsx";

const Testimonials: React.FC<Testimonies> = ({
  heading,
  paragraph,
  testimonyList,
}) => {
  const leftBtnRef = useRef<HTMLDivElement>(null);
  const rightBtnRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);
  const ltrTweenRef = useRef<GSAPTween>(null);
  const rtlTweenRef = useRef<GSAPTween>(null);
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Animate slide in whenever index changes
  useEffect(() => {
    if (!slideRef.current) return;
    const leftToRightTween = gsap.fromTo(
      slideRef.current,
      { x: -100, opacity: 0, duration: 0.8, ease: "power2.out" },
      { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    );
    leftToRightTween.pause();

    const rightToLeftTween = gsap.fromTo(
      slideRef.current,
      { x: 100, opacity: 0, duration: 0.8, ease: "power2.out" },
      { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    );
    rightToLeftTween.pause();

    ltrTweenRef.current = leftToRightTween;
    rtlTweenRef.current = rightToLeftTween;
  }, [currentIndex]);

  function carouselClickHandler(id: string) {
    if (id === "leftBtn") {
      setCurrentIndex((prev) =>
        prev === 0 ? testimonyList.length - 1 : prev - 1
      );
      ltrTweenRef.current?.play();
    } else if (id === "rightBtn") {
      setCurrentIndex((prev) =>
        prev === testimonyList.length - 1 ? 0 : prev + 1
      );
      rtlTweenRef.current?.play();
    }
  }

  useEffect(() => {
    // Start an interval for auto-advancing the slide every 5s
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonyList.length - 1 ? 0 : prev + 1
      );
      rtlTweenRef.current?.play();
    }, 1000 * 15);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, [testimonyList.length]);

  return (
    <section className="pb-30 px-5">
      <div className="w-full flex max-sm:flex-col items-center mt-14 px-5 gap-x-5">
        <h1 className="text-black w-full text-center px-2 py-2 text-3xl font-bold rounded-md bg-[#9AE975]">
          {heading}
        </h1>
        <p className="text-center m-0 p-0 w-full text-base font-semibold py-8">
          {paragraph}
        </p>
      </div>
      <div className="relative px-5">
        {/* Left Hover and Button */}
        <div
          onMouseEnter={() => setShowLeftBtn(true)}
          onMouseLeave={() => setShowLeftBtn(false)}
          className="h-full w-[40%] left-5 top-0 absolute text-4xl z-1 flex items-center justify-start px-5"
        >
          <i
            ref={leftBtnRef}
            id="leftBtn"
            onClick={(e) => carouselClickHandler(e.currentTarget.id)}
            className={clsx(
              "ri-arrow-left-s-line bg-white/40 rounded-full p-2 sm:p-4 transition-opacity duration-300",
              showLeftBtn ? "opacity-100 visible" : "opacity-0 invisible"
            )}
          />
        </div>

        <div className="flex w-fit bg-black rounded-2xl overflow-hidden">
          {/* Slide */}
          <div className="flex  rounded-2xl overflow-hidden w-fit min-h-[300px] ">
            <div
              ref={slideRef}
              className="min-w-full text-white mr-10 px-10 py-10 max-h-[calc(70vh)] flex flex-col justify-center "
            >
              <p className="text-center">
                {testimonyList[currentIndex].description}
              </p>
              <p className="mt-10 text-center text-sm italic font-bold">
                {testimonyList[currentIndex].name}
              </p>
              <p className="text-center text-sm italic">
                {testimonyList[currentIndex].designation}
              </p>
            </div>
          </div>
        </div>
        {/* Right Hover and Button */}
        <div
          onMouseEnter={() => setShowRightBtn(true)}
          onMouseLeave={() => setShowRightBtn(false)}
          className="h-full w-[40%] right-5 top-0 absolute text-4xl z-1 flex items-center justify-end px-5"
        >
          <i
            ref={rightBtnRef}
            id="rightBtn"
            onClick={(e) => carouselClickHandler(e.currentTarget.id)}
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
