"use client";

import "remixicon/fonts/remixicon.css";
import { brandLogos } from "@/utils/images";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { time } from "console";
import Link from "next/link";
import clsx from "clsx";
import { useState } from "react";

function AgencyWebsite() {
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    const tl = timeline.current;

    tl.to("#sidebar-lines", {
      rotateZ: -90,
      duration: 0.35, // was 0.6
    });

    tl.to(
      "#navbar-hidden",
      {
        right: 0,
        duration: 0.7, // was 1
      },
      "-=0.3" // was -=0.45
    );

    tl.from(
      "#navbar-hidden #closeIconSB",
      {
        rotate: 720,
        duration: 1.5, // was 2.5
        ease: "back.out",
      },
      "-=0.3" // was -=0.5
    );

    tl.from(
      "#navbar-hidden li",
      {
        x: 40,
        opacity: 0,
        duration: 0.3, // was 0.45
        stagger: 0.15, // was 0.2
      },
      "-=1.4" // was -=2.5
    );

    tl.from(
      "#navbar-hidden button",
      {
        opacity: 0,
        duration: 0.7, // was 1.5
      },
      "-=1" // was -=1.5
    );

    const logoStrip = gsap.timeline({
      repeat: -1,
    });

    logoStrip.to("#brand-logos1", {
      x: "-100%",
      duration: 6,
      ease: "none",
    });
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
    <div className="overflow-x-hidden relative">
      <section id="page1" className="text-black">
        {/* Navbar */}
        <nav
          id="navbar"
          className="bg-red-500 top-0 px-3 py-5  w-full flex justify-between"
        >
          <h1 className="text-2xl font-bold">
            <i className="ri-shining-2-fill rotate-45 text-2xl inline-block"></i>
            BlizzardX
          </h1>
          <i
            id="sidebar-lines"
            onClick={openSideBar}
            className="ri-menu-3-fill text-2xl font-bold md:hidden"
          ></i>

          <div className="max-md:hidden">
            <h4>About us</h4>
            <h4>Services</h4>
            <h4>Use Cases</h4>
            <h4>Pricing</h4>
            <h4>Blog</h4>
            <button>Request a quote</button>
          </div>
        </nav>
        {/* Hidden Sidebar Background Overlay */}
        <div
          id="sb-bg-overlay"
          onClick={closeSideBar}
          className={clsx(
            "fixed inset-0 transition-opacity duration-300 z-[9998] md:hidden", // full-screen overlay
            {
              "bg-black/50 visible opacity-100": isVisible, // show
              "bg-transparent invisible opacity-0": !isVisible, // hide
            }
          )}
        ></div>

        {/* Hidden Sidebar */}
        <div
          id="navbar-hidden"
          className="fixed -right-full top-0 sm:w-[50%] w-full max-h-screen h-[100dvh] outline-1 bg-gray-200 px-10 py-20 z-[9999] overflow-hidden md:hidden"
        >
          <ul className="list-none font-[china] font-bold text-3xl flex flex-col gap-y-4">
            <li>
              <Link href={"#"} className="">
                About
              </Link>{" "}
              us
            </li>
            <li>
              <Link href={"#"} className="">
                Services
              </Link>
            </li>
            <li>
              <Link href={"#"} className="">
                Use Cases
              </Link>
            </li>
            <li>
              <Link href={"#"} className="">
                Pricing
              </Link>
            </li>
            <li>
              <Link href={"#"} className=""></Link> Blog
            </li>
          </ul>
          <button
            className="absolute bottom-10
             -translate-x-1/2
            right-1/2 
            left-1/2 
            bg-black rounded-xl text-white w-[90%] py-6 mt-8 whitespace-nowrap text-xl font-[china] font-semibold"
          >
            Request a quote
          </button>
          <i
            id="closeIconSB"
            onClick={closeSideBar}
            className="ri-close-fill absolute top-5 right-5 bg-[#9AE975] rounded-full text-3xl px-1 py-0.5 shadow-xs shadow-black"
          ></i>
        </div>
        {/* Hero */}
        <div className="w-full px-5 font-[china] flex flex-col gap-y-2 items-center">
          <h1 className="font-extrabold text-4xl py-5">
            Navigating the digital landscape for success
          </h1>
          <div>
            <img
              src="https://neodrafts.com/_astro/hero12.Wth7asPL_ZjRIO9.svg"
              alt="Bhopu"
            />
          </div>
          <p className="font-semibold text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus eos quis suscipit porro asperiores totam ducimus.
            Necessitatibus, beatae?
          </p>
          <button className="bg-black rounded-xl text-white w-full py-4 whitespace-nowrap text-lg font-[china] font-semibold">
            Book a consultation
          </button>
        </div>

        {/* Section 1 - Images */}
        <div className="w-[100vw] py-20">
          <div id="brand-logos1" className="flex gap-10 px-20 h-12">
            {brandLogos.map((item, key) => (
              <Image
                key={key}
                src={item.data.src}
                alt={item.name}
                width={150}
                height={80}
              />
            ))}
            {brandLogos.map((item, key) => (
              <Image
                key={key}
                src={item.data.src}
                alt={item.name}
                width={150}
                height={80}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AgencyWebsite;
