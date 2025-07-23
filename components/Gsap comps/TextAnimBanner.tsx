"use client";

import { gsap } from "gsap";
import MarqueeList from "@/components/Gsap comps/MarqueeList";
import { useEffect, useRef } from "react";

function TextAnimBanner() {
  const rtlRef = useRef<gsap.core.Tween | null>(null);
  const ltrRef = useRef<gsap.core.Tween | null>(null);
  const imageTween = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    // Create two separate timelines

    imageTween.current = gsap.to(".image", {
      rotate: 180,
      paused: true,
    });

    const fullYear = 60 * 60 * 24 * 365;

    function handleScrollDown() {
      ltrRef.current?.kill();
      rtlRef.current?.kill();

      // Apply will-change optimization before animation starts
      gsap.set(".marquee", { willChange: "transform" });

      rtlRef.current = gsap.to(".marquee", {
        translateX: "-200%",
        duration: fullYear,
        ease: "none",
        force3D: true, // ⬅️ Enable GPU acceleration
      });

      imageTween.current?.play();
    }

    function handleScrollUp() {
      rtlRef.current?.kill();
      ltrRef.current?.kill();

      // Apply will-change optimization before animation starts
      gsap.set(".marquee", { willChange: "transform" });

      ltrRef.current = gsap.to(".marquee", {
        translateX: 0,
        duration: fullYear,
        ease: "none",
        force3D: true, // ⬅️ Enable GPU acceleration
      });

      imageTween.current?.reverse();
    }

    function handleWheel(event: WheelEvent) {
      if (event.deltaY > 0) {
        handleScrollDown();
      } else {
        handleScrollUp();
      }
    }

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  // useEffect(() => {
  //   const fullYear = 60 * 60 * 24 * 365;

  //   const marquee = document.querySelector(".marquee");

  //   // Pre-create both timelines
  //   rtlRef.current = gsap.to(marquee, {
  //     xPercent: -100,
  //     duration: fullYear,
  //     ease: "none",
  //     paused: true,
  //   });

  //   ltrRef.current = gsap.to(marquee, {
  //     xPercent: 100,
  //     duration: fullYear,
  //     ease: "none",
  //     paused: true,
  //   });

  //   imageTween.current = gsap.to(".image", {
  //     rotate: 180,
  //     duration: 0.5,
  //     paused: true,
  //   });

  //   function handleScrollDown() {
  //     ltrRef.current?.pause();
  //     rtlRef.current?.play();
  //     imageTween.current?.play();
  //   }

  //   function handleScrollUp() {
  //     rtlRef.current?.pause();
  //     ltrRef.current?.play();
  //     imageTween.current?.reverse();
  //   }

  //   function handleWheel(event: WheelEvent) {
  //     if (event.deltaY > 0) {
  //       handleScrollDown();
  //     } else {
  //       handleScrollUp();
  //     }
  //   }

  //   window.addEventListener("wheel", handleWheel);

  //   return () => {
  //     window.removeEventListener("wheel", handleWheel);
  //     rtlRef.current?.kill();
  //     ltrRef.current?.kill();
  //     imageTween.current?.kill();
  //   };
  // }, []);

  // useEffect(() => {
  //   // new anim setup
  //   // Create two separate timelines

  //   imageTween.current = gsap.to(".image", {
  //     rotate: 180,
  //     paused: true,
  //   });

  //   const fullYear = 60 * 60 * 24 * 365;

  //   function handleScrollDown() {
  //     ltrRef.current?.kill(); // Kill any left-to-right animation
  //     rtlRef.current?.kill(); // Kill previous rtl if re-triggered

  //     rtlRef.current = gsap.to(".marquee", {
  //       xPercent: -100,
  //       duration: fullYear,
  //       ease: "none",
  //       // repeat: -1,
  //     });

  //     imageTween.current?.play();
  //   }

  //   function handleScrollUp() {
  //     rtlRef.current?.kill(); // Kill any right-to-left animation
  //     ltrRef.current?.kill(); // Kill previous ltr if re-triggered

  //     ltrRef.current = gsap.to(".marquee", {
  //       xPercent: 100,
  //       duration: fullYear,
  //       ease: "none",
  //       // repeat: -1,
  //     });

  //     imageTween.current?.reverse();
  //   }

  //   function handleWheel(event: WheelEvent) {
  //     if (event.deltaY > 0) {
  //       handleScrollDown();
  //     } else {
  //       handleScrollUp();
  //     }
  //   }

  //   window.addEventListener("wheel", handleWheel);

  //   // Cleanup to remove the listener on unmount
  //   return () => {
  //     window.removeEventListener("wheel", handleWheel);
  //   };
  // }, []);

  return (
    <>
      <div className="page1 h-[100vh] w-full border-1 border-amber-300"></div>
      <div className="page2 h-[100vh] w-full border-1 border-amber-300">
        <div
          id="move"
          className=" bg-[#D9FF06] flex py-[3vw] px-0 overflow-x-hidden "
        >
          <MarqueeList />
        </div>
      </div>
      <div className="page3 h-[100vh] w-full border-1 border-amber-300"></div>
    </>
  );
}

export default TextAnimBanner;
