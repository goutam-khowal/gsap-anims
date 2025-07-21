export type Service = {
  title: string;
  description: string;
  descriptionColor: string; // Renamed from 'descClr'
  image: string; // Renamed from 'img'
  iconBackground: string; // Renamed from 'iconBg'
  iconColor: string; // Renamed from 'iconClr'
  cardBackground: string; // Renamed from 'cardBg'
  headingBackground: string; // Renamed from 'headingBg'
};

export type CaseStudy = {
  id: number;
  description: string;
  url: string; // Renamed from 'urlToCaseStudy'
};

export type WorkingProcessStep = {
  id: number;
  title: string;
  description: string;
};

export type AccordionStatus = {
  id: number;
  isOpen: boolean; // Renamed from 'state' for boolean clarity
};

export type TeamMember = {
  image: string; // Renamed from 'img'
  name: string;
  designation: string;
  experience: string; // Renamed from 'exp'
};

export type HeadingAndParagraph = {
  heading: string;
  paragraph: string;
};

export type Proposal = HeadingAndParagraph & {
  buttonText: string;
};

export type CaseStudies = HeadingAndParagraph & {
  caseStudyList: CaseStudy[];
};

export type WorkingProcess = HeadingAndParagraph & {
  processList: WorkingProcessStep[];
};

export type Team = HeadingAndParagraph & {
  members: TeamMember[];
};

export type Testimony = {
  description: string;
  name: string;
  designation: string;
};

export type Testimonies = HeadingAndParagraph & {
  testimonyList: Testimony[];
};

export const testimonies: Testimonies = {
  heading: "Testimonials",
  paragraph:
    "Hear from our satisfied clients: Read our testimonials to learn more about our Digital Marketing services",
  testimonyList: [
    {
      description:
        '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
      name: "John Smith",
      designation: "Marketing Director at XYZ Corp",
    },
    {
      description:
        '"Positivus exceeded our expectations with their innovative strategies. Our brand visibility has grown tremendously since we partnered with them. Outstanding service and amazing results!"',
      name: "Sarah Williams",
      designation: "CEO at NovaTech Solutions",
    },
    {
      description:
        '"The communication and expertise from Positivus was top notch. They delivered on every promise and helped us scale our social media outreach to new heights."',
      name: "Carlos Mendoza",
      designation: "Head of Communications at GreenLeaf",
    },
    {
      description:
        '"We love working with Positivus. Their creative campaigns and attention to detail drove high engagement and real measurable impact for our business."',
      name: "Emily Chen",
      designation: "Digital Strategist at FreshBites",
    },
    {
      description:
        '"Within just a few months, our online conversions doubled thanks to the comprehensive approach from the Positivus team. Highly recommended!"',
      name: "Rajesh Patel",
      designation: "E-commerce Manager at Craftsy",
    },
    {
      description:
        '"Positivus took the time to understand our unique business needs and delivered a tailored strategy that worked perfectly. We could not be happier with the partnership."',
      name: "Linda Thompson",
      designation: "Operations Lead at Urban Market",
    },
    {
      description:
        '"I am thoroughly impressed by the professionalism and results Positivus brought to our digital campaigns. Their team was approachable and knowledgeable."',
      name: "Michael O’Sullivan",
      designation: "CMO at BrightPath Logistics",
    },
    {
      description:
        '"From SEO to paid ads, the team at Positivus shines in all aspects of digital marketing. We saw growth across every channel and a clear return on investment."',
      name: "Aisha Farouk",
      designation: "Brand Manager at FitNation",
    },
    {
      description:
        '"Reliable, effective, and innovative—Positivus transformed our online presence and customer engagement. We look forward to continued collaboration."',
      name: "Tom Miller",
      designation: "Product Owner at EZWare Solutions",
    },
    {
      description:
        '"The dedication and creativity of Positivus set them apart. Our campaigns have never looked better, and the results speak for themselves!"',
      name: "Julia Lam",
      designation: "Founder at Artistry Lane",
    },
  ],
};
