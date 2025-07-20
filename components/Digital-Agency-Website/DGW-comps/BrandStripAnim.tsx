"use client";

import { useEffect, useRef, useState } from "react";
import { brandLogos } from "@/components/Digital-Agency-Website/images";
import Image from "next/image";
import { gsap } from "gsap";

function BrandStripAnim() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) {
      return;
    }
    const marquee = marqueeRef.current;
    const marqueeReverse = marqueeRef2.current;

    const totalWidth = marquee.scrollWidth / 2;

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

    marquee?.addEventListener("mouseenter", () => {
      marqAnim.pause();
    });
    marquee?.addEventListener("mouseleave", () => {
      marqAnim.play();
    });
  }, []);
  return (
    // {/* Infinite Scroll Images */}
    <div className="my-5">
      <div className="w-[100vw] whitespace-nowrap box-border h-[80px] ">
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
        </div>
      </div>
      <div className="w-[100vw] whitespace-nowrap box-border h-[80px]">
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
        </div>
      </div>
    </div>
  );
}

export default BrandStripAnim;
