import "remixicon/fonts/remixicon.css";
import Services from "./DGW-comps/Services";
import BrandStripAnim from "./DGW-comps/BrandStripAnim";
import Navbar from "./DGW-comps/Navbar";
import GetProposalComp from "./DGW-comps/GetProposalComp";
import { caseStudies, workingProcess, proposal, teamSection } from "./data";
import CaseStudiesComp from "./DGW-comps/CaseStudies";
import WorkingProcess from "./DGW-comps/WorkingProcess";
import TeamSectionComp from "./DGW-comps/TeamSection";

function AgencyWebsite() {
  return (
    <div className="overflow-x-hidden relative">
      <Navbar />
      <section id="page1" className="text-black">
        {/* Hero */}
        <div className="w-full px-5 font-[china] flex flex-col gap-y-2 items-center pt-18">
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
        <GetProposalComp
          heading={proposal.heading}
          paragraph={proposal.paragraph}
          buttonText={proposal.buttonText}
        />
        {/* Case Studies */}
        <CaseStudiesComp
          heading={caseStudies.heading}
          paragraph={caseStudies.paragraph}
          caseStudyList={caseStudies.caseStudyList}
        />
        {/* Working Process */}
        <WorkingProcess
          heading={workingProcess.heading}
          paragraph={workingProcess.paragraph}
          processList={workingProcess.processList}
        />
        {/* Team Section */}
        <TeamSectionComp
          heading={teamSection.heading}
          paragraph={teamSection.paragraph}
          members={teamSection.members}
        />
      </section>
    </div>
  );
}

export default AgencyWebsite;
