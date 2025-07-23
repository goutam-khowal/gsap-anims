"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";

function CursorScaleOnImage() {
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const imageEl = imageWrapperRef.current;

    const handleEnter = () => {
      const cursor = document.querySelector("#custom-cursor") as HTMLDivElement;
      const text = cursor?.querySelector("#cursor-text") as HTMLDivElement;

      gsap.to(cursor, {
        scale: 2,
        duration: 0.3,
        ease: "power2.out",
      });

      if (text) {
        text.innerText = "Achhi Photo Hai Na?";
        text.classList.add("opacity-100");
        text.classList.remove("opacity-0");
      }
    };

    const handleLeave = () => {
      const cursor = document.querySelector("#custom-cursor") as HTMLDivElement;
      const text = cursor?.querySelector("#cursor-text") as HTMLDivElement;

      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });

      if (text) {
        text.innerText = "";
        text.classList.add("opacity-0");
        text.classList.remove("opacity-100");
      }
    };

    if (imageEl) {
      imageEl.addEventListener("mouseenter", handleEnter);
      imageEl.addEventListener("mouseleave", handleLeave);
    }

    return () => {
      if (imageEl) {
        imageEl.removeEventListener("mouseenter", handleEnter);
        imageEl.removeEventListener("mouseleave", handleLeave);
      }
    };
  }, []);

  return (
    <section className="w-screen h-[100vh] bg-amber-200 flex items-center justify-center relative">
      <div className="w-[800px] h-[450px] relative">
        {/* Overlay absolutely positioned inside the wrapper */}
        {/* <div
          id="overlay"
          className="absolute inset-0 bg-[#ff005555] pointer-events-none z-10"
        ></div> */}

        {/* Wrapper and Image */}
        <div className="h-full w-full" ref={imageWrapperRef}>
          <Image
            src="https://images.pexels.com/photos/2753486/pexels-photo-2753486.jpeg?_gl=1*4ohrs4*_ga*MTYzNTcxMjUxNS4xNzUyNzYyMTMz*_ga_8JE65Q40S6*czE3NTI3NjIxMzIkbzEkZzEkdDE3NTI3NjIxODkkajMkbDAkaDA."
            height={450}
            width={800}
            alt="Image"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}

export default CursorScaleOnImage;
