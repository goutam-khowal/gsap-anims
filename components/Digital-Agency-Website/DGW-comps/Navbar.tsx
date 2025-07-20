"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import clsx from "clsx";
import Link from "next/link";

const Navbar = () => {
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Refs for all animated elements
  const sidebarLinesRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const closeIconRef = useRef<HTMLElement>(null);
  const navItemsRef = useRef<HTMLUListElement>(null);
  const requestBtnRef = useRef<HTMLButtonElement>(null);
  const brandIconRef = useRef<HTMLElement>(null);
  const brandLettersRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    const tl = timeline.current;

    // Sidebar open animation
    tl.to(sidebarLinesRef.current, {
      rotateZ: -90,
      duration: 0.3,
      ease: "power2.inOut",
    });

    tl.to(
      sidebarRef.current,
      {
        right: 0,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.2"
    );

    tl.from(
      closeIconRef.current,
      {
        rotate: 720,
        duration: 1.2,
        ease: "back.out(1.5)",
        transformOrigin: "center",
      },
      "-=0.3"
    );

    if (navItemsRef.current) {
      tl.from(
        [...navItemsRef.current.children],
        {
          x: 40,
          opacity: 0,
          duration: 0.25,
          stagger: 0.12,
          ease: "power2.out",
        },
        "-=1.2"
      );
    }

    tl.from(
      requestBtnRef.current,
      {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.8"
    );

    // Brand animation
    const brandTimeline = gsap.timeline();

    brandTimeline.from(brandLettersRef.current, {
      opacity: 0,
      y: 15,
      duration: 0.2,
      ease: "power2.out",
      stagger: 0.1,
    });

    brandTimeline.from(
      brandIconRef.current,
      {
        rotate: -90,
        opacity: 0,
        x: -20,
        duration: 0.4,
        ease: "back.out(1.5)",
      },
      "-=0.7"
    );

    brandTimeline.from(
      sidebarLinesRef.current,
      {
        opacity: 0,
        x: 20,
        duration: 0.3,
        ease: "power2.out",
      },
      "-=0.3"
    );
  }, []);

  function openSideBar() {
    timeline.current?.play();
    setIsVisible(true);
    document.body.style.overflow = "hidden";
  }

  function closeSideBar() {
    timeline.current?.reverse();
    setIsVisible(false);
    document.body.style.overflow = "unset";
  }

  return (
    <>
      {/* Navbar */}
      <nav className="text-black top-0 px-3 py-5 w-full flex justify-between overflow-hidden">
        <h1 className="text-2xl font-bold">
          <i
            ref={brandIconRef}
            className="ri-shining-2-fill rotate-45 text-2xl inline-block"
          ></i>
          <span>
            {"BlizzardX".split("").map((char, i) => (
              <span
                key={i}
                ref={(el) => {
                  if (el) brandLettersRef.current[i] = el;
                }}
                className="brand-letter"
              >
                {char}
              </span>
            ))}
          </span>
        </h1>

        <i
          ref={sidebarLinesRef}
          onClick={openSideBar}
          className="ri-menu-3-fill text-2xl font-bold md:hidden"
        ></i>
      </nav>

      {/* Sidebar background overlay */}
      <div
        onClick={closeSideBar}
        className={clsx(
          "fixed inset-0 transition-opacity duration-300 z-[9998] md:hidden",
          {
            "bg-black/50 visible opacity-100": isVisible,
            "bg-transparent invisible opacity-0": !isVisible,
          }
        )}
      ></div>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className="text-black fixed -right-full top-0 sm:w-[50%] w-full max-h-screen h-[100dvh] outline-1 bg-gray-200 px-10 py-20 z-[9999] overflow-hidden md:hidden"
      >
        <ul
          ref={navItemsRef}
          className="list-none font-[china] font-bold text-3xl flex flex-col gap-y-4"
        >
          <li>
            <Link href={"#"}>About</Link> us
          </li>
          <li>
            <Link href={"#"}>Services</Link>
          </li>
          <li>
            <Link href={"#"}>Use Cases</Link>
          </li>
          <li>
            <Link href={"#"}>Pricing</Link>
          </li>
          <li>
            <Link href={"#"}>Blog</Link>
          </li>
        </ul>

        <button
          ref={requestBtnRef}
          className="absolute bottom-10 -translate-x-1/2 right-1/2 left-1/2 bg-black rounded-xl text-white w-[90%] py-6 mt-8 whitespace-nowrap text-xl font-[china] font-semibold"
        >
          Request a quote
        </button>

        <i
          ref={closeIconRef}
          onClick={closeSideBar}
          className="ri-close-fill absolute top-5 right-5 bg-[#9AE975] rounded-full text-3xl px-1 py-0.5 shadow-xs shadow-black"
        ></i>
      </div>
    </>
  );
};

export default Navbar;
