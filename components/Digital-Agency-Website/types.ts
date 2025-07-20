export type ServiceProps = {
  title: string;
  description: string;
  descClr: string;
  img: string;
  iconBg: string;
  iconClr: string;
  cardBg: string;
  headingBg: string;
};

export type GetProposalProps = {
  heading: string;
  paragraph: string;
  btnText: string;
};

export type CaseStudies = {
  heading: string;
  paragraph: string;
  caseStdList: CaseStudiesData[];
};

type CaseStudiesData = {
  id: number;
  description: string;
  urlToCaseStudy: string;
};

type WorkingProcessData = {
  id: number;
  title: string;
  description: string;
};

export type WorkingProcesses = {
  heading: string;
  paragraph: string;
  WPList: WorkingProcessData[];
};

type AccordionState = {
  id: number;
  state: boolean;
};
