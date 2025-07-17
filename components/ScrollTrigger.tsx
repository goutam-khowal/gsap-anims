"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function ScrollTriggerPage() {
  useEffect(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Clear previous triggers on hot reload (optional but helps in dev)
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    // gsap.to("#page1 #box1", {
    //   rotate: 540,
    //   borderRadius: "10 500 10",
    //   duration: 1.8,
    //   scale: 0,
    //   opacity: 0,
    //   scrollTrigger: {
    //     trigger: "#page1 #box1",
    //     scroller: "body",
    //     start: "bottom 45%",
    //     markers: true,
    //     scrub: 2,
    //   },
    // });
    gsap.to("#page1 #firstBoxText", {
      xPercent: -95, // More GSAP-friendly
      scrollTrigger: {
        trigger: "#page1",
        scroller: "body",
        start: "top 0%",
        end: "top -150%",
        scrub: 2,
        pin: true,
        // pinSpacing: false, // Optional
        markers: true,
      },
    });
    gsap.from("#page2 #box2", {
      rotate: 540,
      borderRadius: "10 500 10",
      duration: 1.8,
      scale: 0,
      opacity: 0,
      scrollTrigger: {
        trigger: "#page2 #box2",
        scroller: "body",
        start: "top 60%",
        end: "bottom center",
        toggleActions: "play none none none",
        markers: true,
        scrub: 2,
      },
    });
    gsap.from("#page3 #box3", {
      rotate: 540,
      borderRadius: "10 500 10",
      duration: 1.8,
      scale: 0,
      opacity: 0,
      scrollTrigger: {
        trigger: "#page3 #box3",
        scroller: "body",
        start: "top 60%",
        end: "bottom center",
        toggleActions: "play none none none",
        markers: true,
        scrub: 2,
      },
    });
  });
  return (
    <>
      {/* Pin */}
      <section
        id="page1"
        className="overflow-x-hidden w-screen h-[100vh] flex  items-center bg-blue-300 px-10"
      >
        {/* <div
          className="w-30 h-30 bg-violet-700 flex justify-center items-center"
          id="box1"
        > */}
        <h1
          id="firstBoxText"
          className="text-[30vw] font-bold whitespace-nowrap font-[gilroy] text-shadow-lg text-shadow-gray-600 text-gray-800"
        >
          Happy Birthday
        </h1>
        {/* </div> */}
      </section>
      <section
        id="page2"
        className="overflow-hidden w-screen h-[100vh] flex justify-center items-center bg-violet-700"
      >
        <div
          className="w-30 h-30 bg-orange-600 flex justify-center items-center"
          id="box2"
        >
          <h1>Happy Birthday</h1>
        </div>
      </section>
      <section
        id="page3"
        className="overflow-hidden w-screen h-[100vh] flex justify-center items-center bg-purple-300"
      >
        <div
          className="w-30 h-30 bg-white flex justify-center items-center "
          id="box3"
        >
          <h1>Happy Birthday</h1>
        </div>
      </section>
    </>
  );
}

export default ScrollTriggerPage;
