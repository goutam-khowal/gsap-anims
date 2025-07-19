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
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeRef2 = useRef<HTMLDivElement>(null);

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

    // const logoStrip = gsap.timeline({
    //   repeat: -1,
    // });

    // logoStrip.to("#brand-logos1", {
    //   x: "-100%",
    //   duration: 6,
    //   ease: "none",
    // });

    const marquee = marqueeRef.current;
    const marqueeReverse = marqueeRef2.current;

    const totalWidth = marquee.scrollWidth / 2;

    const marqAnim = gsap.fromTo(
      marquee,
      { x: 0 },
      {
        x: -totalWidth,
        duration: 10,
        ease: "none",
        repeat: -1,
      }
    );
    const marqAnim2 = gsap.fromTo(
      marqueeReverse,
      { x: -totalWidth },
      {
        x: 0,
        duration: 10,
        ease: "none",
        repeat: -1,
      }
    );

    marquee?.addEventListener("mouseenter", () => {
      marqAnim.pause();
    });
    marquee?.addEventListener("mouseleave", () => {
      marqAnim.play();
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
          className="top-0 px-3 py-5  w-full flex justify-between"
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
          <p className="font-semibold text-left my-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus eos quis suscipit porro asperiores totam ducimus.
            Necessitatibus, beatae?
          </p>
          <button className="bg-black rounded-xl text-white w-full py-4 whitespace-nowrap text-lg font-[china] font-semibold my-1">
            Book a consultation
          </button>
        </div>
      </section>
      {/* Section 2 - Services */}
      <section className="text-black font-[china] py-5">
        {/* Infinite Scroll Images */}
        <div className="my-5">
          <div className="w-[100vw] whitespace-nowrap box-border h-[80px] ">
            <div ref={marqueeRef} className="inline-block whitespace-nowrap">
              {/* <div id="marquee" className="flex gap-10 px-20 h-12 "> */}
              {brandLogos.map((item, key) => (
                <Image
                  className="inline-block mr-10"
                  key={key}
                  src={item.data.src}
                  alt={item.name}
                  width={100}
                  height={80}
                />
              ))}
              {brandLogos.map((item, key) => (
                <Image
                  className="inline-block mr-10"
                  key={key}
                  src={item.data.src}
                  alt={item.name}
                  width={100}
                  height={80}
                />
              ))}
            </div>
          </div>
          <div className="w-[100vw] whitespace-nowrap box-border h-[80px]">
            <div ref={marqueeRef2} className="inline-block whitespace-nowrap">
              {/* <div id="marquee" className="flex gap-10 px-20 h-12 "> */}
              {brandLogos.map((item, key) => (
                <Image
                  className="inline-block mr-10"
                  key={key}
                  src={item.data.src}
                  alt={item.name}
                  width={100}
                  height={80}
                />
              ))}
              {brandLogos.map((item, key) => (
                <Image
                  className="inline-block mr-10"
                  key={key}
                  src={item.data.src}
                  alt={item.name}
                  width={100}
                  height={80}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Services */}
        <div className="w-full flex flex-col items-center mt-14">
          <h1 className="text-black  px-2 py-1 text-3xl font-bold rounded-md bg-[#9AE975]">
            Services
          </h1>
          <p className="text-center m-0 p-0 w-full text-base font-semibold py-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
            molestiae voluptas dolore! voluptas dolore!
          </p>
        </div>
        {/* Cards */}
        <div className="flex flex-col items-center w-full px-5">
          {/* Card 1 */}
          <div className="border-1 rounded-2xl shadow-[0_8px_#333] w-full bg-gray-100 mb-10">
            <div className="self-start justify-start pt-10 px-10">
              <h1 className="px-1.5 py-.5 text-2xl w-fit rounded-xl bg-[#9AE975]">
                Search Engine
              </h1>
              <h1 className="px-1.5 py-.5 text-2xl w-fit rounded-xl bg-[#9AE975]">
                Optimization
              </h1>
            </div>
            <div className="flex justify-between w-full px-15 items-end">
              <i className="ri-arrow-right-up-long-fill text-2xl bg-black text-[#9AE975] rounded-full px-2 py-1 h-max mb-10"></i>
              <div className=" my-10 self-center">
                <img
                  className="w-35 h-30 object-cover"
                  src="https://cdn.prod.website-files.com/668f86cc3182e34c72358df9/66aa7ea148298d9725f96f94_SEO_Image.svg"
                  alt="asd"
                />
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="border-1 rounded-2xl shadow-[0_8px_#333] w-full bg-gray-100 mb-10">
            <div className="self-start justify-start pt-10 px-10">
              <h1 className="px-1.5 py-.5 text-2xl w-fit rounded-xl bg-[#9AE975]">
                Pay Per Click
              </h1>
              <h1 className="px-1.5 py-.5 text-2xl w-fit rounded-xl bg-[#9AE975]">
                Advertisement
              </h1>
            </div>
            <div className="flex justify-between w-full px-15 items-end">
              <i className="ri-arrow-right-up-long-fill text-2xl bg-black text-[#9AE975] rounded-full px-2 py-1 h-max mb-10"></i>
              <div className=" my-10 self-center">
                <img
                  className="w-35 h-30 object-cover"
                  src="https://cdn.prod.website-files.com/668f86cc3182e34c72358df9/66aa9497ddb01c1c4066be55_PPC_Image.svg"
                  alt="asd"
                />
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="border-1 rounded-2xl shadow-[0_8px_#333] w-full bg-gray-100 mb-10">
            <div className="self-start justify-start pt-10 px-10">
              <h1 className="px-1.5 py-.5 text-2xl w-fit rounded-xl bg-[#9AE975]">
                Social Media
              </h1>
              <h1 className="px-1.5 py-.5 text-2xl w-fit rounded-xl bg-[#9AE975]">
                Marketing
              </h1>
            </div>
            <div className="flex justify-between w-full px-15 items-end">
              <i className="ri-arrow-right-up-long-fill text-2xl bg-black text-[#9AE975] rounded-full px-2 py-1 h-max mb-10"></i>
              <div className=" my-10 self-center">
                <img
                  className="w-35 h-30 object-cover"
                  src="https://cdn.prod.website-files.com/668f86cc3182e34c72358df9/66aa97e9f7c085764d086011_SocialMedia_Image.svg"
                  alt="asd"
                />
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="border-1 rounded-2xl shadow-[0_8px_#333] w-full bg-gray-100 mb-10">
            <div className="self-start justify-start pt-10 px-10">
              <h1 className="px-1.5 py-.5 text-2xl w-fit rounded-xl bg-[#9AE975]">
                Search engine
              </h1>
              <h1 className="px-1.5 py-.5 text-2xl w-fit rounded-xl bg-[#9AE975]">
                optimization
              </h1>
            </div>
            <div className="flex justify-between w-full px-15 items-end">
              <i className="ri-arrow-right-up-long-fill text-2xl bg-black text-[#9AE975] rounded-full px-2 py-1 h-max mb-10"></i>
              <div className=" my-10 self-center">
                <img
                  className="w-35 h-30 object-cover"
                  src="https://cdn.prod.website-files.com/668f86cc3182e34c72358df9/66aa9c06136c230e98d7bb63_EmailMarketing_Image.svg"
                  alt="asd"
                />
              </div>
            </div>
          </div>
          {/* Card 5 */}
          <div className="border-1 rounded-2xl shadow-[0_8px_#333] w-full bg-gray-100 mb-10">
            <div className="self-start justify-start pt-10 px-10">
              <h1 className="px-1.5 py-.5 text-2xl w-fit rounded-xl bg-[#9AE975]">
                Content
              </h1>
              <h1 className="px-1.5 py-.5 text-2xl w-fit rounded-xl bg-[#9AE975]">
                Creation
              </h1>
            </div>
            <div className="flex justify-between w-full px-15 items-end">
              <i className="ri-arrow-right-up-long-fill text-2xl bg-black text-[#9AE975] rounded-full px-2 py-1 h-max mb-10"></i>
              <div className=" my-10 self-center">
                <img
                  className="w-35 h-30 object-cover"
                  src="https://cdn.prod.website-files.com/668f86cc3182e34c72358df9/66aa9e045f63c6513a70eb19_ContentCreation_Image.svg"
                  alt="asd"
                />
              </div>
            </div>
          </div>
          {/* Card 6 */}
          <div className="border-1 rounded-2xl shadow-[0_8px_#333] w-full bg-gray-100 mb-10">
            <div className="self-start justify-start pt-10 px-10">
              <h1 className="px-1.5 py-.5 text-2xl w-fit rounded-xl bg-[#9AE975]">
                Content
              </h1>
              <h1 className="px-1.5 py-.5 text-2xl w-fit rounded-xl bg-[#9AE975]">
                Creation
              </h1>
            </div>
            <div className="flex justify-between w-full px-15 items-end">
              <i className="ri-arrow-right-up-long-fill text-2xl bg-black text-[#9AE975] rounded-full px-2 py-1 h-max mb-10"></i>
              <div className=" my-10 self-center">
                <img
                  className="w-35 h-30 object-cover"
                  src="https://cdn.prod.website-files.com/668f86cc3182e34c72358df9/66aaa15977ff9e94caa248f2_Analytics_Image.svg"
                  alt="asd"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AgencyWebsite;
