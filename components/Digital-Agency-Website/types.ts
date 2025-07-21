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

export type Proposal = {
  heading: string;
  paragraph: string;
  buttonText: string; // Renamed from 'btnText'
};

export type CaseStudies = {
  heading: string;
  paragraph: string;
  caseStudyList: CaseStudy[]; // Renamed from 'caseStdList'
};

export type CaseStudy = {
  id: number;
  description: string;
  url: string; // Renamed from 'urlToCaseStudy'
};

export type WorkingProcess = {
  heading: string;
  paragraph: string;
  processList: WorkingProcessStep[]; // Renamed from 'WPList'
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

export type TeamSection = {
  heading: string;
  paragraph: string;
  members: TeamMember[]; // Renamed from 'teamMembers'
};

export type TeamMember = {
  image: string; // Renamed from 'img'
  name: string;
  designation: string;
  experience: string; // Renamed from 'exp'
};
