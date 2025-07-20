"use client";

import { gsap } from "gsap";
import "remixicon/fonts/remixicon.css";

import React, { useEffect, useRef } from "react";

function NavbarComp() {
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true });

    tl.current.to("#full", {
      right: 0,
      duration: 0.5,
      ease: "power3.out",
    });
    tl.current.from("#full h4", {
      x: 100,
      y: 40,
      duration: 0.3,
      stagger: 0.15,
      opacity: 0,
      ease: "power3.out",
    });
    tl.current.from("#full i", {
      opacity: 0,
      rotate: 360,
      duration: 0.6,
      ease: "back.out(2)",
    });
  }, []);

  const showSideBar = () => {
    tl.current?.play();
  };

  const hideSideBar = () => {
    // tl.current?.reverse(1.5);
    tl.current?.reverse();
  };

  return (
    <div
      id="main"
      className="h-[100vh] w-full relative bg-[url('https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?_gl=1*1js1y1z*_ga*MTYzNTcxMjUxNS4xNzUyNzYyMTMz*_ga_8JE65Q40S6*czE3NTI3NzM1MjMkbzMkZzEkdDE3NTI3NzM1NTgkajI1JGwwJGgw')] bg-cover bg-center"
    >
      <div
        id="nav"
        className="flex items-center justify-between p-6 text-white"
      >
        <h2 className="text-xl font-bold">Goutam</h2>
        <i
          onClick={showSideBar}
          className="ri-menu-3-fill text-xl font-bold"
        ></i>
      </div>
      <div
        id="full"
        className="h-full w-[40%] max-w-[400px] bg-white/1 backdrop-blur-2xl absolute -right-[40%] top-0 py-15 px-8 "
      >
        <h4 className="text-gray-900 text-shadow-sm text-shadow-gray-600 text-2xl font-semibold mb-4">
          Home
        </h4>
        <h4 className="text-gray-900 text-shadow-sm text-shadow-gray-600 text-2xl font-semibold mb-4">
          About
        </h4>
        <h4 className="text-gray-900 text-shadow-sm text-shadow-gray-600 text-2xl font-semibold mb-4">
          Contact
        </h4>
        <h4 className="text-gray-900 text-shadow-sm text-shadow-gray-600 text-2xl font-semibold mb-4">
          Services
        </h4>
        <h4 className="text-gray-900 text-shadow-sm text-shadow-gray-600 text-2xl font-semibold mb-4">
          Projects
        </h4>
        <h4 className="text-gray-900 text-shadow-sm text-shadow-gray-600 text-2xl font-semibold mb-4">
          Blogs
        </h4>
        <i
          onClick={hideSideBar}
          className="ri-close-fill absolute top-4 right-8
         bg-white font-semibold text-lg text-black px-1 rounded-full"
        ></i>
      </div>
    </div>
  );
}

export default NavbarComp;
