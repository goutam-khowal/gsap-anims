// "use client"

import Image from "next/image";

const repeatCount = 60;

const marquees = Array.from({ length: repeatCount }).map((_, index) => (
  <div
    key={index}
    className="marquee w-[max-content] flex items-center gap-[3vw] px-[1.5vw] shrink-0  outline-1 outline-black "
  >
    <h1 className="text-black text-[4vw] font-[500] mx-10">{1}</h1>
    <div className="image inline-block will-change-transform h-[4.5vw] w-[4.5vw]">
      <Image
        src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
        fill
        alt={`marquee-arrow-${index}`}
      />
    </div>
  </div>
));

export default function MarqueeList() {
  return <div className="flex w-max">{marquees.map((marquee) => marquee)}</div>;
}
