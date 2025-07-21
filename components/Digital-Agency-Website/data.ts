import {
  CaseStudies,
  Proposal,
  Service,
  TeamSection,
  WorkingProcess,
} from "./types";

export const services: Service[] = [
  {
    title: "Search Engine Optimization",
    description: "Learn More",
    descriptionColor: "#000",
    image:
      "https://cdn.prod.website-files.com/668f86cc3182e34c72358df9/66aa7ea148298d9725f96f94_SEO_Image.svg",
    iconBackground: "#b9ff66",
    cardBackground: "#F3F3F3",
    headingBackground: "#b9ff66",
    iconColor: "#000",
  },
  {
    title: "Pay Per Click Advertising",
    description: "Learn More",
    descriptionColor: "#000",
    image:
      "https://cdn.prod.website-files.com/668f86cc3182e34c72358df9/66aa9497ddb01c1c4066be55_PPC_Image.svg",
    iconBackground: "#000",
    cardBackground: "#b9ff66",
    headingBackground: "#fff",
    iconColor: "#b9ff66",
  },
  {
    title: "Social Media Marketing",
    description: "Learn More",
    descriptionColor: "#fff",
    image:
      "https://cdn.prod.website-files.com/668f86cc3182e34c72358df9/66aa97e9f7c085764d086011_SocialMedia_Image.svg",
    iconBackground: "#b9ff66",
    cardBackground: "#555555",
    headingBackground: "#b9ff66",
    iconColor: "#000",
  },
  {
    title: "Email Marketing",
    description: "Learn More",
    descriptionColor: "#000",
    image:
      "https://cdn.prod.website-files.com/668f86cc3182e34c72358df9/66aa9c06136c230e98d7bb63_EmailMarketing_Image.svg",
    iconBackground: "#b9ff66",
    cardBackground: "#f3f3f3",
    headingBackground: "#b9ff66",
    iconColor: "#000",
  },
  {
    title: "Content Creation",
    description: "Learn More",
    descriptionColor: "#000",
    image:
      "https://cdn.prod.website-files.com/668f86cc3182e34c72358df9/66aa9e045f63c6513a70eb19_ContentCreation_Image.svg",
    iconBackground: "#000",
    cardBackground: "#b9ff66",
    headingBackground: "#FFFFFF",
    iconColor: "#b9ff66",
  },
  {
    title: "Analytics & Tracking",
    description: "Learn More",
    descriptionColor: "#fff",
    image:
      "https://cdn.prod.website-files.com/668f86cc3182e34c72358df9/66aaa15977ff9e94caa248f2_Analytics_Image.svg",
    iconBackground: "#b9ff66",
    cardBackground: "#555555",
    headingBackground: "#FFFFFF",
    iconColor: "#000",
  },
];

export const proposal: Proposal = {
  heading: "Let's make things happen",
  paragraph:
    "Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.",
  buttonText: "Get your free proposal",
};

export const caseStudies: CaseStudies = {
  heading: "Case Studies",
  paragraph:
    "Explore real-life examples of our proven Digital Marketing success through our case studies.",
  caseStudyList: [
    {
      id: 1,
      description:
        "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
      url: "#",
    },
    {
      id: 2,
      description:
        "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
      url: "#",
    },
    {
      id: 3,
      description:
        "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
      url: "#",
    },
  ],
};

export const workingProcess: WorkingProcess = {
  heading: "Our working process",
  paragraph: "Step-by-step guide to achieving your Business Goals",
  processList: [
    {
      id: 1,
      title: "Consultation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique...",
    },
    {
      id: 2,
      title: "Research and Strategy Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique...",
    },
    {
      id: 3,
      title: "Implementation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique...",
    },
    {
      id: 4,
      title: "Monitoring and Optimization",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique...",
    },
    {
      id: 5,
      title: "Reporting and Communication",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique...",
    },
    {
      id: 6,
      title: "Continual Improvement",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique...",
    },
  ],
};

export const teamSection: TeamSection = {
  heading: "Our Team",
  paragraph:
    "Meet the skilled and experienced team behind our successful digital marketing strategies",
  members: [
    {
      image:
        "https://generationiron.com/wp-content/uploads/2024/10/Jason-Statham-workout-routine.jpg",
      name: "Goutam Khowal",
      designation: "CEO ka boss",
      experience: "10000+ years of leadership and strategic experience.",
    },
    {
      image: "https://m.media-amazon.com/images/I/51633hpyAiL.jpg",
      name: "Uttpal Bhardwaj",
      designation: "CEO ka boss",
      experience: "9999.99+ years of executive-level decision-making experience.",
    },
    {
      image:
        "https://images.pexels.com/photos/9840896/pexels-photo-9840896.jpeg",
      name: "John Smith",
      designation: "CEO & Founder",
      experience:
        "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    },
    {
      image:
        "https://images.pexels.com/photos/9178860/pexels-photo-9178860.jpeg",
      name: "Jane Doe",
      designation: "Director of Operations",
      experience:
        "7+ years of experience in project management and team leadership. Strong organisational and communication skills",
    },
    {
      image:
        "https://images.pexels.com/photos/7972568/pexels-photo-7972568.jpeg",
      name: "Michael Brown",
      designation: "Senior SEO Specialist",
      experience:
        "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimisation",
    },
    {
      image:
        "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg",
      name: "Emily Johnson",
      designation: "PPC Manager",
      experience:
        "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    },
    {
      image:
        "https://images.pexels.com/photos/33018574/pexels-photo-33018574.jpeg",
      name: "Brian Williams",
      designation: "Social Media Specialist",
      experience:
        "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analysing metrics, and building engagement",
    },
    {
      image:
        "https://images.pexels.com/photos/33019997/pexels-photo-33019997.jpeg",
      name: "Sarah Kim",
      designation: "Content Creator",
      experience:
        "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
    },
  ],
};
