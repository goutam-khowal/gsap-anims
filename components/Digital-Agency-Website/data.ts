import { CaseStudies, GetProposalProps, ServiceProps } from "./types";

export const services: ServiceProps[] = [
  {
    title: "Search Engine Optimization",
    description: "Learn More",
    descClr: "#000",
    img: "https://cdn.prod.website-files.com/668f86cc3182e34c72358df9/66aa7ea148298d9725f96f94_SEO_Image.svg",
    iconBg: "#b9ff66",
    cardBg: "#F3F3F3",
    headingBg: "#b9ff66",
    iconClr: "#000",
  },
  {
    title: "Pay Per Click Advertising",
    description: "Learn More",
    descClr: "#000",
    img: "https://cdn.prod.website-files.com/668f86cc3182e34c72358df9/66aa9497ddb01c1c4066be55_PPC_Image.svg",
    iconBg: "#000",
    cardBg: "#b9ff66",
    headingBg: "#fff",
    iconClr: "#b9ff66",
  },
  {
    title: "Social Media Marketing",
    description: "Learn More",
    descClr: "#fff",
    img: "https://cdn.prod.website-files.com/668f86cc3182e34c72358df9/66aa97e9f7c085764d086011_SocialMedia_Image.svg",
    iconBg: "#b9ff66",
    cardBg: "#555555",
    headingBg: "#b9ff66",
    iconClr: "#000",
  },
  {
    title: "Email Marketing",
    description: "Learn More",
    descClr: "#000",
    img: "https://cdn.prod.website-files.com/668f86cc3182e34c72358df9/66aa9c06136c230e98d7bb63_EmailMarketing_Image.svg",
    iconBg: "#b9ff66",
    cardBg: "#f3f3f3",
    headingBg: "#b9ff66",
    iconClr: "#000",
  },
  {
    title: "Content Creation",
    description: "Learn More",
    descClr: "#000",
    img: "https://cdn.prod.website-files.com/668f86cc3182e34c72358df9/66aa9e045f63c6513a70eb19_ContentCreation_Image.svg",
    iconBg: "#000",
    cardBg: "#b9ff66",
    headingBg: "#FFFFFF",
    iconClr: "#b9ff66",
  },
  {
    title: "Analytics & Tracking",
    description: "Learn More",
    descClr: "#fff",
    img: "https://cdn.prod.website-files.com/668f86cc3182e34c72358df9/66aaa15977ff9e94caa248f2_Analytics_Image.svg",
    iconBg: "#b9ff66",
    cardBg: "#555555",
    headingBg: "#FFFFFF",
    iconClr: "#000",
  },
];

export const GetProposalCompData: GetProposalProps = {
  heading: "Let's make things happen",
  paragraph:
    "Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.",
  btnText: "Get your free proposal",
};

export const CaseStudyData: CaseStudies = {
  heading: "Case Studies",
  paragraph:
    "Explore real-life examples of our proven Digital Marketing success through our case studies.",
  caseStdList: [
    {
      id: 1,
      description:
        "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
      urlToCaseStudy: "#",
    },
    {
      id: 2,
      description:
        "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
      urlToCaseStudy: "#",
    },
    {
      id: 3,
      description:
        "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
      urlToCaseStudy: "#",
    },
  ],
};
