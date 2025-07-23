"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function SVGElement() {
  const stringRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Clear previous triggers on hot reload (optional but helps in dev)
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    let path = `M 10 200 Q 400 200 790 200`;
    const finalPath = `M 10 200 Q 400 200 790 200`;

    svgRef.current?.addEventListener("mousemove", function (dets) {
      path = `M 10 200 Q ${dets.x} ${dets.y} 790 200`;

      gsap.to("svg path", {
        attr: {
          d: path,
        },
        duration: 0.3,
        ease: "power3.out",
      });
    });
    svgRef.current?.addEventListener("mouseleave", () => {
      gsap.to("svg path", {
        attr: { d: finalPath },
        duration: 1.5,
        ease: "elastic.out(1,0.2)",
      });
    });
  });

  return (
    <div className="h-[100vh] w-screen">
      <svg ref={svgRef} viewBox="0 0 800 400" width="100%" height={400}>
        <path
          ref={stringRef}
          d="M 10 200 Q 400 200 790 200"
          fill="transparent"
          stroke="goldenrod"
          strokeWidth={2}
        />
      </svg>
    </div>
  );
}

export default SVGElement;
