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

export type Services = HeadingAndParagraph & {
  services: Service[];
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
