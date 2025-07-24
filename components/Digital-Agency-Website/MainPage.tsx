import "remixicon/fonts/remixicon.css";
import Services from "./DGW-comps/Services";
import BrandStripAnim from "./DGW-comps/BrandStripAnim";
import GetProposalComp from "./DGW-comps/GetProposalComp";
import {
  caseStudies,
  workingProcess,
  proposal,
  teamSection,
  testimonies,
} from "./data";
import CaseStudiesComp from "./DGW-comps/CaseStudies";
import WorkingProcess from "./DGW-comps/WorkingProcess";
import TeamSectionComp from "./DGW-comps/TeamSection";
import Testimonials from "./DGW-comps/Testimonials";
import ContactComp from "./DGW-comps/ContactComp";
import Hero from "./DGW-comps/Hero";
import Footer from "./DGW-comps/Footer";

function AgencyWebsite() {
  return (
    <div className="overflow-x-hidden relative max-w-[1000px] mx-auto">
      <section className="text-black font-[china]">
        <Hero />
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
        {/* Testimonials */}
        <Testimonials
          heading={testimonies.heading}
          paragraph={testimonies.paragraph}
          testimonyList={testimonies.testimonyList}
        />
        {/* Contact */}
        <ContactComp />
        {/* Footer */}
        <Footer />
      </section>
    </div>
  );
}

export default AgencyWebsite;
