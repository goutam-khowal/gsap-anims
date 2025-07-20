import "remixicon/fonts/remixicon.css";
import Services from "./DGW-comps/Services";
import BrandStripAnim from "./DGW-comps/BrandStripAnim";
import Navbar from "./DGW-comps/Navbar";

function AgencyWebsite() {
  return (
    <div className="overflow-x-hidden relative">
      <Navbar />
      <section id="page1" className="text-black">
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
        {/* Infinite Image Scroll */}
        <BrandStripAnim />
        {/* Services */}
        <Services />
        {/* Get Proposal Card */}
        <div>
          <h1>Let's make things happen</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ad inventore mollitia molestias cupiditate quos, esse
            quae eaque corrupti non.
          </p>
          <button>Get your Proposal</button>
        </div>
        {/* Case Studies */}
        <div>
          <h1>Case Studies</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            quaerat eos dolores unde optio!
          </p>
          <div>
            <div></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AgencyWebsite;
