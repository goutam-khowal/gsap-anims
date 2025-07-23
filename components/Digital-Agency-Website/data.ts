import {
  CaseStudies,
  Proposal,
  Services,
  Team,
  Testimonies,
  WorkingProcess,
} from "./types";

export const services: Services = {
  heading: "Services",
  paragraph:
    " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque molestiae voluptas dolore! voluptas dolore!",
  services: [
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
  ],
};

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

export const teamSection: Team = {
  heading: "Our Team",
  paragraph:
    "Meet the skilled and experienced team behind our successful digital marketing strategies",
  members: [
    {
      image: "https://tr.web.img2.acsta.net/pictures/17/06/14/13/48/489688.jpg",
      name: "I can't see him",
      designation: "17x🏆",
      experience: "Never Give Up",
    },
    {
      image:
        "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Uttpal Bhardwaj",
      designation: "Venture Capitalist",
      experience:
        "Over 15 years of experience investing in early-stage startups and scaling innovative technology companies across diverse sectors.",
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
