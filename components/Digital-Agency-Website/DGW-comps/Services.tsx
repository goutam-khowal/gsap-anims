"use client";

import { services } from "@/components/Digital-Agency-Website/data";
import Service from "./Service";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import AnimHeadingPara from "./AnimtedComponents/AnimHeadingPara";

gsap.registerPlugin(ScrollTrigger);

function Services() {
  // One main container ref wrapping section
  const mainSectionRef = useRef(null);
  // Individual refs for heading and paragraph for scroll animation
  // const firstSubSectionH1 = useRef(null);
  // const firstSubSectionP = useRef(null);

  // Array ref to collect all card refs
  const cardsRefs = useRef([]);

  // Ref callback to collect cards refs without duplication
  function addToRefs(el) {
    if (el && !cardsRefs.current.includes(el)) {
      cardsRefs.current.push(el);
    }
  }

  // Animate each card individually as it scrolls into view without duplication and resetting refs
  useGSAP(
    () => {
      if (!cardsRefs.current.length) return;

      cardsRefs.current.forEach((card) => {
        gsap.from(card, {
          y: 60,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top center",
            toggleActions: "play none none none",
            scrub: 2,
            // markers: true,
          },
        });
      });
    },
    { scope: mainSectionRef }
  );

  return (
    // Main container with ref
    <section ref={mainSectionRef} className="pt-8 mb-24 px-10 max-sm:px-5">
      {/* Heading Comp*/}
      <AnimHeadingPara
        heading={services.heading}
        paragraph={services.paragraph}
      />
      {/* Services Cards */}
      <div
        id="service-cards-wrapper"
        className="flex flex-col items-center w-full"
      >
        {services.services.map((service, index) => (
          <div key={index} ref={addToRefs} className="service-card w-full">
            <Service
              title={service.title}
              description={service.description}
              descriptionColor={service.descriptionColor}
              iconBackground={service.iconBackground}
              iconColor={service.iconColor}
              cardBackground={service.cardBackground}
              headingBackground={service.headingBackground}
              image={service.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
