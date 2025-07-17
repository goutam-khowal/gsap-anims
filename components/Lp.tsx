"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

function Lp() {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.from("#h1Lp", {
      y: -30,
      duration: 1,
      opacity: 0,
      ease: "sine",
    })
      .from(".liLp", {
        y: 30,
        duration: 1,
        opacity: 0,
        stagger: 0.3,
        ease: "sine.in",
      })
      .from("#divLp", {
        duration: 2,
        opacity: 0,
        scale: 0.88,
        ease: "back.out",
        rotateX: 180,
      });
  }, []);

  return (
    <>
      <nav className="w-screen flex  items-center justify-between px-5 py-5">
        <h1 id="h1Lp" className="font-bold text-xl">
          {/* Smriti🪷 */}
          Hello
        </h1>
        <ul className="flex">
          <li className="liLp mx-2">Home</li>
          <li className="liLp mx-2">About</li>
          <li className="liLp mx-2">Contact</li>
        </ul>
      </nav>
      <div
        id="divLp"
        className="absolute text-6xl whitespace-nowrap top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2"
      >
        Happy Birthday
        {/* Smriti🪷 */}
      </div>
    </>
  );
}

export default Lp;
