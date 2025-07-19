"use client";

import Image from "next/image";
import loveCursor from "@/public/love-cursor.png";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    // <div
    //   ref={cursorRef}
    //   className="w-2 h-5 bg-white border-5 border-gray-950 border-double fixed top-0 left-0 z-[9999] pointer-events-none rounded-full"
    // >
    <div
      ref={cursorRef}
      id={"custom-cursor"}
      className="fixed top-[-15px] left-[-10px] z-[9999] pointer-events-none origin-center"
    >
      <div className="relative h-full w-full">
        <Image src={loveCursor} width={30} height={30} alt="cursor" />
        <div
          ref={textRef}
          id="cursor-text"
          className="text-[5px] text-white bg-black px-2 py-1 rounded-full opacity-0 transition-all duration-200 fixed"
        >
          {/* Text will be updated here */}
        </div>
      </div>
    </div>
  );
}

export default CustomCursor;
