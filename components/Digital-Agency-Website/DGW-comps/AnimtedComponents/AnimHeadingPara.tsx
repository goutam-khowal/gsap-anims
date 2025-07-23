"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

type AnimHeadingParaProps = {
  heading: string;
  paragraph: string;
  // Add more props if needed
};

const AnimHeadingPara: React.FC<AnimHeadingParaProps> = ({
  heading,
  paragraph,
}) => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useGSAP(
    () => {
      if (!containerRef.current || !headingRef.current || !paragraphRef.current)
        return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 100%",
          end: "top 60%",
          toggleActions: "play none none none",
          scrub: 2,
          // markers: true,
        },
        defaults: { ease: "power2.out" },
      });

      tl.from(headingRef.current, {
        opacity: 0,
        x: -100,
        duration: 0.8,
        ease: "power2.out",
      }).from(
        paragraphRef.current,
        {
          opacity: 0,
          x: 100,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4"
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="w-full flex max-sm:flex-col items-center gap-x-5"
    >
      <h1
        ref={headingRef}
        className="text-black w-full text-center px-2 py-2 text-3xl font-extrabold rounded-md bg-[#B9ff69]"
      >
        {heading}
      </h1>
      <p
        ref={paragraphRef}
        className="text-center m-0 p-0 w-full text-base font-semibold my-8"
      >
        {paragraph}
      </p>
    </section>
  );
};

export default AnimHeadingPara;
