"use client";

import { Proposal } from "../types";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const GetProposalComp = ({ heading, paragraph, buttonText }: Proposal) => {
  const mainSectionRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    if (!mainSectionRef.current) return;
    gsap.from(mainSectionRef.current, {
      opacity: 0,
      rotateX: 90,
      duration: 0.7,
      scrollTrigger: {
        trigger: mainSectionRef.current,
        scroller: "body",
        start: "top 80%",
        end: "top center",
        // markers: true,
        toggleActions: "play none none none",
        scrub: 2,
      },
    });
  });

  return (
    <section
      ref={mainSectionRef}
      className="w-full px-10 max-sm:px-5 mb-24 py-5"
    >
      <div className="bg-[#F3F3F3] px-5 py-10 rounded-2xl">
        <h1 className="text-3xl text-left font-extrabold w-full">{heading}</h1>
        <p className="text-[15px] text-gray-800 my-10 w-full">{paragraph}</p>
        <button
          className="w-full font-semibold bg-black text-white px-4 py-3 rounded-xl 
             hover:bg-[#b9ff69] hover:text-[#000] hover:shadow-[0px_10px_#000] 
             duration-300 transition-all"
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default GetProposalComp;
