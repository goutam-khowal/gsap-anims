"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Box = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<HTMLParagraphElement[]>([]);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "sine.inOut", repeat: -1, yoyo: true },
    });

    tl.to(boxRef.current, {
      x: 600,
      duration: 4,
      rotate: 180,
      borderRadius: "50%",
      repeatDelay: 0.5,
    }).from(
      linesRef.current,
      {
        opacity: 0,
        y: 20,
        duration: 2.5,
        stagger: 0.3,
        repeatDelay: 1.125,
      },
      "<"
    );
  }, []);

  return (
    <div
      ref={boxRef}
      className="w-32 h-32 bg-red-500 rounded flex flex-col items-center justify-center text-amber-50 text-2xl font-bold font-serif"
    >
      {["Happy", "Birthday", "Dear"].map((line, idx) => (
        <p
          className="text-sm mb-1"
          key={idx}
          ref={(el) => {
            if (el) linesRef.current[idx] = el;
          }}
        >
          {line}
        </p>
      ))}
    </div>
  );
};

export default Box;
