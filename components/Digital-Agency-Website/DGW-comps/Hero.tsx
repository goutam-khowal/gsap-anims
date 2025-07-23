"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";

const Hero = () => {
  const heroImageRef = useRef<HTMLImageElement>(null);
  const heroHeadingRef = useRef<HTMLHeadingElement>(null);
  const heroParaRef = useRef<HTMLParagraphElement>(null);
  const heroBtnRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    if (!heroHeadingRef.current) return;
    const rect = heroHeadingRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset + rect.top - 500;
    window.scrollTo({ top: scrollTop, behavior: "instant" });
  }, []);

  useGSAP(() => {
    if (!heroHeadingRef.current) return;

    const tl = gsap.timeline({ delay: 1 });

    tl.from(heroHeadingRef.current, {
      x: 100,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
    });

    if (!heroImageRef.current) return;
    tl.from(
      heroImageRef.current,
      {
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.4"
    );

    if (!heroParaRef.current) return;
    tl.from(
      heroParaRef.current,
      {
        x: -100,
        opacity: 0,
        duration: 0.4,
        ease: "power3.out",
      },
      "-=0.6"
    );

    if (!heroBtnRef.current) return;
    tl.from(
      heroBtnRef.current,
      {
        y: -25,
        opacity: 0,
        duration: 0.4,
        ease: "power3.out",
      },
      "-=0.35"
    );
  });

  return (
    <section
      id="page1"
      className="text-black mt-16 mb-24 sm:py-30 pt-5  px-10 max-sm:px-5"
    >
      {/* Hero */}
      <div className="w-full font-[china] flex flex-col gap-y-2 items-center sm:grid sm:grid-cols-2 sm:gap-5 ">
        <div className="flex flex-col justify-evenly h-full max-sm:gap-y-4">
          <h1 ref={heroHeadingRef} className="font-extrabold text-4xl">
            Navigating the digital landscape for success
          </h1>
          <div className="w-full  min-sm:hidden">
            <Image
              height={500}
              width={500}
              ref={heroImageRef}
              src="https://neodrafts.com/_astro/hero12.Wth7asPL_ZjRIO9.svg"
              alt="Bhopu"
            />
          </div>
          <p ref={heroParaRef} className="font-semibold text-left max-sm:my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus eos quis suscipit porro asperiores totam ducimus.
            Necessitatibus, beatae?
          </p>
          <button
            ref={heroBtnRef}
            className="bg-black rounded-xl text-white w-full py-4 whitespace-nowrap text-lg font-[china] font-semibold my-1"
          >
            Book a consultation
          </button>
        </div>
        <div className="w-full  max-sm:hidden">
          <Image
            height={500}
            width={500}
            ref={heroImageRef}
            src="https://neodrafts.com/_astro/hero12.Wth7asPL_ZjRIO9.svg"
            alt="Bhopu"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
