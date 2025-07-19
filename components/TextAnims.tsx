"use client";

import { gsap } from "gsap";
import "remixicon/fonts/remixicon.css";
import React, { useEffect, useRef, useState } from "react";

function TextAnims() {
  const textToAnimateRef = useRef<HTMLHeadingElement>(null);
  //   const [splittedText, setSplittedText] = useState<string[]>([]);
  //   setSplittedText(name.split(""));

  useEffect(() => {
    if (!textToAnimateRef.current) {
      return;
    }
    const h1 = textToAnimateRef.current;
    function breakText() {
      const name = h1.textContent;
      let splittedText = name.split("");

      let clutter = "";
      splittedText.forEach((elem, key) => {
        const length = splittedText.length;
        const mid = length / 2;
        if (key < mid) {
          clutter += `<span class="left">${elem}</span>`;
        } else {
          clutter += `<span class="right">${elem}</span>`;
        }
      });
      h1.innerHTML = clutter;
    }
    breakText();
    gsap.from(h1.querySelectorAll(".left"), {
      opacity: 0,
      y: 80,
      duration: 1,
      delay: 0.5,
      ease: "power4.out",
      stagger: {
        amount: 0.25,
        from: "start",
      },
    });

    gsap.from(h1.querySelectorAll(".right"), {
      opacity: 0,
      y: 80,
      duration: 1,
      delay: 0.5,
      ease: "power4.out",
      stagger: {
        amount: 0.25,
        from: "end",
      },
    });

    // Optional cleanup (e.g., if you later add event listeners or observers)
    return () => {};
  }, []);

  return (
    <div className="flex items-center justify-center min-h-[100vh] w-screen bg-pink-300">
      <h1
        id="h1TextAnimsPage"
        ref={textToAnimateRef}
        className={
          "text-6xl font-semibold text-white px-6 py-4 overflow-hidden font-sans"
        }
      >
        Happy-Birthday
      </h1>
    </div>
  );
}

export default TextAnims;
