"use client";

import { gsap } from "gsap";
import { useRef } from "react";
import { brandLogos } from "@/components/Digital-Agency-Website/images";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

function BrandStripAnim() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeRef2 = useRef<HTMLDivElement>(null);
  const brandStripRef = useRef(null);

  useGSAP(() => {
    if (!brandStripRef) return;

    gsap.from(brandStripRef.current, {
      opacity: 0,
      y: -10,
      duration: 1,
      ease: "circ.out",
      scrollTrigger: {
        trigger: brandStripRef.current,
        scroller: "body",
        start: "top 70%",
        end: "bottom center",
        scrub: 1,
        // markers: true,
      },
    });

    if (!marqueeRef.current) {
      return;
    }
    const marquee = marqueeRef.current;
    const marqueeReverse = marqueeRef2.current;

    const totalWidth = marquee.scrollWidth / 4;

    const marqAnim = gsap.fromTo(
      marquee,
      { x: 0 },
      {
        x: -totalWidth,
        duration: 10,
        ease: "none",
        repeat: -1,
      }
    );
    const marqAnim2 = gsap.fromTo(
      marqueeReverse,
      { x: -totalWidth },
      {
        x: 0,
        duration: 10,
        ease: "none",
        repeat: -1,
      }
    );

    marqueeRef2.current?.addEventListener("mouseenter", () => {
      marqAnim2.pause();
    });
    marqueeRef2.current?.addEventListener("mouseleave", () => {
      marqAnim2.play();
    });
    marquee?.addEventListener("mouseenter", () => {
      marqAnim.pause();
    });
    marquee?.addEventListener("mouseleave", () => {
      marqAnim.play();
    });
  });

  return (
    // {/* Infinite Scroll Images */}
    <section
      ref={brandStripRef}
      id="infinity-scroll"
      className=" mb-24 pb-6 px-10 max-sm:px-5 relative"
    >
      <div className="absolute top-0 left-0 z-50 bg-gradient-to-l from-transparent via-white/80  to-white  h-full w-[30%] "></div>
      <div className="absolute top-0 right-0 bg-gradient-to-r from-transparent via-white/80  to-white z-50 h-full w-[30%]"></div>
      <div className="whitespace-nowrap box-border h-[80px]">
        <div ref={marqueeRef} className="inline-block whitespace-nowrap">
          {/* <div id="marquee" className="flex gap-10 px-20 h-12 "> */}
          {brandLogos.map((item, key) => (
            <Image
              className="inline-block mr-10"
              key={key}
              src={item.data.src}
              alt={item.name}
              width={100}
              height={80}
            />
          ))}
          {brandLogos.map((item, key) => (
            <Image
              className="inline-block mr-10"
              key={key}
              src={item.data.src}
              alt={item.name}
              width={100}
              height={80}
            />
          ))}
          {brandLogos.map((item, key) => (
            <Image
              className="inline-block mr-10"
              key={key}
              src={item.data.src}
              alt={item.name}
              width={100}
              height={80}
            />
          ))}
          {brandLogos.map((item, key) => (
            <Image
              className="inline-block mr-10"
              key={key}
              src={item.data.src}
              alt={item.name}
              width={100}
              height={80}
            />
          ))}
        </div>
      </div>
      <div className="whitespace-nowrap box-border h-[80px]">
        <div ref={marqueeRef2} className="inline-block whitespace-nowrap">
          {/* <div id="marquee" className="flex gap-10 px-20 h-12 "> */}
          {brandLogos.map((item, key) => (
            <Image
              className="inline-block mr-10"
              key={key}
              src={item.data.src}
              alt={item.name}
              width={100}
              height={80}
            />
          ))}
          {brandLogos.map((item, key) => (
            <Image
              className="inline-block mr-10"
              key={key}
              src={item.data.src}
              alt={item.name}
              width={100}
              height={80}
            />
          ))}
          {brandLogos.map((item, key) => (
            <Image
              className="inline-block mr-10"
              key={key}
              src={item.data.src}
              alt={item.name}
              width={100}
              height={80}
            />
          ))}
          {brandLogos.map((item, key) => (
            <Image
              className="inline-block mr-10"
              key={key}
              src={item.data.src}
              alt={item.name}
              width={100}
              height={80}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandStripAnim;
