"use client";

import "remixicon/fonts/remixicon.css";
import { brandLogos } from "@/utils/images";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

function CoolLandingPage() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const initializeAnimations = () => {
      const tl = gsap.timeline();

      tl.from("nav h1,nav h4,nav button", {
        y: -30,
        opacity: 0,
        delay: 0.5,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out",
      });
      tl.from(".center-part1 h1", {
        x: -300,
        opacity: 0,
        duration: 0.5,
        ease: "power.out",
      });
      tl.from(".center-part1 p", {
        x: -100,
        opacity: 0,
        duration: 0.35,
        ease: "power.out",
      });
      tl.from(".center-part1 button", {
        opacity: 0,
        duration: 0.4,
        ease: "power.out",
      });
      tl.from(
        ".center-part2 img",
        {
          opacity: 0,
          duration: 0.5,
          ease: "power.out",
        },
        "-=.5"
      );
      tl.from(
        ".section1Images img",
        {
          opacity: 0,
          y: 30,
          stagger: 0.15,
          duration: 0.6,
          ease: "power.out",
        },
        "-=.5"
      );

      const tl2Slow = gsap.timeline({
        scrollTrigger: {
          trigger: "#page2",
          scroller: "body",
          start: "top 50%",
          end: "top 0",
          markers: false, // Set to false for production
          scrub: 2,
        },
      });

      const tl2Fast = gsap.timeline({
        scrollTrigger: {
          trigger: ".services",
          scroller: "body",
          start: "top 30%",
          end: "top 0",
          markers: false, // Set to false for production
          scrub: 0,
        },
      });

      tl2Slow.from(".services", {
        y: 30,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });

      tl2Fast.from(
        ".elem.line1.left",
        {
          x: -250,
          opacity: 0,
          duration: 1,
        },
        "anim1"
      );

      tl2Fast.from(
        ".elem.line1.right",
        {
          x: 250,
          opacity: 0,
          duration: 1,
        },
        "anim1"
      );
      tl2Fast.from(
        ".elem.line2.left",
        {
          x: -250,
          opacity: 0,
          duration: 1,
        },
        "anim2"
      );

      tl2Fast.from(
        ".elem.line2.right",
        {
          x: 250,
          opacity: 0,
          duration: 1,
        },
        "anim2"
      );
      tl2Fast.from(
        ".elem.line3.left",
        {
          x: -250,
          opacity: 0,
          duration: 1,
        },
        "anim3"
      );

      tl2Fast.from(
        ".elem.line3.right",
        {
          x: 250,
          opacity: 0,
          duration: 1,
        },
        "anim3"
      );
      tl2Fast.from(
        ".elem.line4.left",
        {
          x: -250,
          opacity: 0,
          duration: 1,
        },
        "anim4"
      );

      tl2Fast.from(
        ".elem.line4.right",
        {
          x: 250,
          opacity: 0,
          duration: 1,
        },
        "anim4"
      );

      // Return cleanup function
      return () => {
        // Kill all ScrollTrigger instances to prevent memory leaks
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        // Kill all timelines
        tl.kill();
        tl2Slow.kill();
        tl2Fast.kill();
      };
    };
    const cleanup = initializeAnimations();
    // useEffect Cleanup Function
    return cleanup;
  }, []);
  return (
    <>
      <section
        id="page1"
        className="w-full h-screen relative font-[gilroy] bg-white text-black"
      >
        {/* Navbar */}
        <nav className="flex items-center justify-between px-[60px] py-3">
          <h1 className="text-2xl font-semibold gap-0.5 flex items-center">
            <i className="ri-shining-2-fill rotate-45 inline-block"></i>
            WizardZ
          </h1>
          <div className="part2 flex items-center justify-center gap-x-4">
            <h4 className="text-base font-semibold">About us</h4>
            <h4 className="text-base font-semibold">Services</h4>
            <h4 className="text-base font-semibold">Use Cases</h4>
            <h4 className="text-base font-semibold">Pricing</h4>
            <h4 className="text-base font-semibold">Blog</h4>
            <button className="px-4 py-2 rounded-lg border-1 bg-transparent text-sm">
              Request a quote
            </button>
          </div>
        </nav>

        {/* Center */}
        <div className="center flex grow px-[60px] py-6 h-[70%]">
          {/* Center Part - 1 */}
          <div className="center-part1 h-full w-[40%] ">
            <h1 className="text-6xl font-[china] leading-[1.2]">
              Navigating the digital landscape for success
            </h1>
            <p className="text-2xl w-[95%] mt-8 mb-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis tempora accusantium maiores odit aut fugiat provident
              cumque consequuntur sit? Ducimus.
            </p>
            <button className="bg-black text-white rounded-xl px-5 py-3 text-lg font-semibold border-none">
              Book a consultation
            </button>
          </div>
          {/* Center Part - 2 */}
          <div className="center-part2 w-[60%] relative h-full flex justify-end items-center">
            <img
              className="h-[90%] object-contain"
              src="https://neodrafts.com/_astro/hero12.Wth7asPL_ZjRIO9.svg"
              alt="Bhopu"
            />
          </div>
        </div>

        {/* Section 1 - Images */}
        <div className="section1Images flex items-center justify-between px-[80px] py-3 h-[15%]">
          {brandLogos.map((item, key) => (
            <Image
              className="object-contain"
              key={key}
              src={item.data.src}
              alt={item.name}
              width={120}
              height={60}
            />
          ))}
        </div>
      </section>

      <section id="page2" className="section2 mt-35 flex flex-col">
        {/* Services header section */}
        <div className="services bg-[#f8f9fa] py-16 px-[120px] flex items-start justify-start gap-[50px]">
          <h3 className="font-semibold bg-[#9AE975] py-[10px] px-[10px] rounded-xl text-6xl text-black font-[china]">
            Services
          </h3>
          <p className="text-xl text-black font-semibold w-[40%] leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
            explicabo quasi, quia autem exercitationem iste deleniti fugiat fuga
            vero modi!
          </p>
        </div>
        {/* Services cards container */}
        <div className="container min-h-[80%] w-full py-10 px-20 flex flex-wrap justify-between gap-y-15 self-center">
          {/* Card 1 - SEO (Light) */}
          <div className="elem line1 left w-[47%] h-[400px] bg-gradient-to-br from-white to-gray-100 border-2 border-black rounded-[20px] transition-transform duration-300 hover:scale-[1.02] shrink-0 flex shadow-[0px_10px_#333]">
            <div className="elem-part1 flex flex-col w-[50%] h-full items-start justify-between p-6 text-white">
              <h2 className="text-2xl w-[80%] font-semibold  px-[5px] bg-[#9AE975] rounded text-black">
                Search Engine Optimization
              </h2>
              <h4 className="text-3xl font-semibold flex items-center gap-5 text-black">
                <i className="ri-arrow-right-up-line px-1.5 py-1 bg-black text-white rounded-full"></i>{" "}
                Learn More
              </h4>
            </div>
            <div className="elem-part2 w-[50%] h-full flex items-end justify-end pr-4 pb-4">
              <img
                src={"https://neodrafts.com/_astro/hero12.Wth7asPL_ZjRIO9.svg"}
                alt="SEO Illustration"
                className="h-full object-contain"
              />
            </div>
          </div>

          {/* Card 2 - SMM (Black) */}
          <div className="elem line1 right w-[47%] h-[400px] bg-black border-2 border-black rounded-[20px] transition-transform duration-300 hover:scale-[1.02] shrink-0 flex shadow-[0px_10px_#333]">
            <div className="elem-part1 flex flex-col w-[50%] h-full items-start justify-between p-6 text-white">
              <h2 className="text-2xl w-[80%] font-semibold  px-[5px] bg-[#9AE975] rounded text-black">
                Social Media Marketing
              </h2>
              <h4 className="text-3xl font-semibold flex items-center gap-5">
                <i className="ri-arrow-right-up-line px-1.5 py-1 bg-white text-black rounded-full"></i>{" "}
                Learn More
              </h4>
            </div>
            <div className="elem-part2 w-[50%] h-full flex items-end justify-end pr-4 pb-4">
              <img
                src={"https://neodrafts.com/_astro/hero12.Wth7asPL_ZjRIO9.svg"}
                alt="SMM Illustration"
                className="h-full object-contain"
              />
            </div>
          </div>

          {/* Card 3 - PPC (Light) */}
          <div className="elem line2 left w-[47%] h-[400px] bg-black border-2 border-black rounded-[20px] transition-transform duration-300 hover:scale-[1.02] shrink-0 flex shadow-[0px_10px_#333]">
            <div className="elem-part1 flex flex-col w-[50%] h-full items-start justify-between p-6 text-white">
              <h2 className="text-2xl w-[80%] font-semibold  px-[5px] bg-[#9AE975] rounded text-black">
                Pay Per Click Advertisement
              </h2>
              <h4 className="text-3xl font-semibold flex items-center gap-5">
                <i className="ri-arrow-right-up-line px-1.5 py-1 bg-black text-white rounded-full"></i>{" "}
                Learn More
              </h4>
            </div>
            <div className="elem-part2 w-[50%] h-full flex items-end justify-end pr-4 pb-4">
              <img
                src={"https://neodrafts.com/_astro/hero12.Wth7asPL_ZjRIO9.svg"}
                alt="PPC Illustration"
                className="h-full object-contain"
              />
            </div>
          </div>

          {/* Card 4 - Email (Black) */}
          <div className="elem line2 right w-[47%] h-[400px] bg-gradient-to-br from-white to-gray-100 border-2 border-black rounded-[20px] transition-transform duration-300 hover:scale-[1.02] shrink-0 flex shadow-[0px_10px_#333]">
            <div className="elem-part1 flex flex-col w-[50%] h-full items-start justify-between p-6 text-white">
              <h2 className="text-2xl w-[80%] font-semibold  px-[5px] bg-[#9AE975] rounded text-black">
                E-mail Marketing
              </h2>
              <h4 className="text-3xl font-semibold flex items-center gap-5 text-black">
                <i className="ri-arrow-right-up-line px-1.5 py-1 bg-black text-white rounded-full"></i>{" "}
                Learn More
              </h4>
            </div>
            <div className="elem-part2 w-[50%] h-full flex items-end justify-end pr-4 pb-4">
              <img
                src={"https://neodrafts.com/_astro/hero12.Wth7asPL_ZjRIO9.svg"}
                alt="Email Marketing Illustration"
                className="h-full object-contain"
              />
            </div>
          </div>
          {/* Card 1 - SEO (Light) */}
          <div className="elem line3 left w-[47%] h-[400px] bg-gradient-to-br from-white to-gray-100 border-2 border-black rounded-[20px] transition-transform duration-300 hover:scale-[1.02] shrink-0 flex shadow-[0px_10px_#333]">
            <div className="elem-part1 flex flex-col w-[50%] h-full items-start justify-between p-6 text-white">
              <h2 className="text-2xl w-[80%] font-semibold  px-[5px] bg-[#9AE975] rounded text-black">
                Search Engine Optimization
              </h2>
              <h4 className="text-3xl font-semibold flex items-center gap-5 text-black">
                <i className="ri-arrow-right-up-line px-1.5 py-1 bg-black text-white rounded-full"></i>{" "}
                Learn More
              </h4>
            </div>
            <div className="elem-part2 w-[50%] h-full flex items-end justify-end pr-4 pb-4">
              <img
                src={"https://neodrafts.com/_astro/hero12.Wth7asPL_ZjRIO9.svg"}
                alt="SEO Illustration"
                className="h-full object-contain"
              />
            </div>
          </div>

          {/* Card 2 - SMM (Black) */}
          <div className="elem line3 right w-[47%] h-[400px] bg-black border-2 border-black rounded-[20px] transition-transform duration-300 hover:scale-[1.02] shrink-0 flex shadow-[0px_10px_#333]">
            <div className="elem-part1 flex flex-col w-[50%] h-full items-start justify-between p-6 text-white">
              <h2 className="text-2xl w-[80%] font-semibold  px-[5px] bg-[#9AE975] rounded text-black">
                Social Media Marketing
              </h2>
              <h4 className="text-3xl font-semibold flex items-center gap-5">
                <i className="ri-arrow-right-up-line px-1.5 py-1 bg-white text-black rounded-full"></i>{" "}
                Learn More
              </h4>
            </div>
            <div className="elem-part2 w-[50%] h-full flex items-end justify-end pr-4 pb-4">
              <img
                src={"https://neodrafts.com/_astro/hero12.Wth7asPL_ZjRIO9.svg"}
                alt="SMM Illustration"
                className="h-full object-contain"
              />
            </div>
          </div>

          {/* Card 3 - PPC (Light) */}
          <div className="elem line4 left w-[47%] h-[400px] bg-black border-2 border-black rounded-[20px] transition-transform duration-300 hover:scale-[1.02] shrink-0 flex shadow-[0px_10px_#333]">
            <div className="elem-part1 flex flex-col w-[50%] h-full items-start justify-between p-6 text-white">
              <h2 className="text-2xl w-[80%] font-semibold  px-[5px] bg-[#9AE975] rounded text-black">
                Pay Per Click Advertisement
              </h2>
              <h4 className="text-3xl font-semibold flex items-center gap-5">
                <i className="ri-arrow-right-up-line px-1.5 py-1 bg-black text-white rounded-full"></i>{" "}
                Learn More
              </h4>
            </div>
            <div className="elem-part2 w-[50%] h-full flex items-end justify-end pr-4 pb-4">
              <img
                src={"https://neodrafts.com/_astro/hero12.Wth7asPL_ZjRIO9.svg"}
                alt="PPC Illustration"
                className="h-full object-contain"
              />
            </div>
          </div>

          {/* Card 4 - Email (Black) */}
          <div className="elem line4 right w-[47%] h-[400px] bg-gradient-to-br from-white to-gray-100 border-2 border-black rounded-[20px] transition-transform duration-300 hover:scale-[1.02] shrink-0 flex shadow-[0px_10px_#333]">
            <div className="elem-part1 flex flex-col w-[50%] h-full items-start justify-between p-6 text-white">
              <h2 className="text-2xl w-[80%] font-semibold  px-[5px] bg-[#9AE975] rounded text-black">
                E-mail Marketing
              </h2>
              <h4 className="text-3xl font-semibold flex items-center gap-5 text-black">
                <i className="ri-arrow-right-up-line px-1.5 py-1 bg-black text-white rounded-full"></i>{" "}
                Learn More
              </h4>
            </div>
            <div className="elem-part2 w-[50%] h-full flex items-end justify-end pr-4 pb-4">
              <img
                src={"https://neodrafts.com/_astro/hero12.Wth7asPL_ZjRIO9.svg"}
                alt="Email Marketing Illustration"
                className="h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CoolLandingPage;
