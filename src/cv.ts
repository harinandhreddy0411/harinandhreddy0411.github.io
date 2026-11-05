import cvJson from './cv.json';

export interface Cv {
  name: string;
  headline: string;
  contact: { email: string; github: string; linkedin: string };
  education: { title: string; detail: string; when: string }[];
  openSource: { title: string; points: string[] };
  projects: { title: string; detail: string }[];
  skills: { label: string; items: string }[];
  coursework: string;
  activities: string[];
}

export const cv: Cv = cvJson;
export const cvPdfPath = './HarinandhReddy_Areti_CV.pdf';
