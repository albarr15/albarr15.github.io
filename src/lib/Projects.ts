export interface Project {
  startDate: Date;
  endDate: Date;
  title: string;
  desc: string;
  liveLink?: string;
  repoLink?: string;
  techStack?: string[];
  imgSrc?: string;
  altText: string;
  project?: string;
  projectType?: string;
  companyName?: string;
  tools?: string[];
}

import typrtxtImg from "@/assets/projects/594_1x_shots_so.png";
import shizImg from "@/assets/projects/826_1x_shots_so.png";
import whfImg from "@/assets/projects/48_1x_shots_so.png";
import bequikImg from "@/assets/projects/Bequik/951_1x_shots_so.png";
import abbeHRISImg from "@/assets/projects/ABBE/871_1x_shots_so.png";

export function Projects(): Project[] {
  let projects = new Array<Project>();

  const bequikProject: Project = {
    startDate: new Date(2026, 5),
    endDate: new Date(2026, 5),
    title: "Content Expansion of the Bequik Website",
    desc: "Explored and designed additional pages for Bequik's website to expand the site beyond a single landing page while staying consistent with the existing design.",
    tools: ["Figma"],
    altText: "Content Expansion of the Bequik Website",
    projectType: "User Interface & User Experience (UI&UX) Design ",
    companyName: "Bequik Information Solutions",
    imgSrc: bequikImg,
    project: "Bequik",
  };

  const abbeProject: Project = {
    startDate: new Date(2026, 3),
    endDate: new Date(2026, 5),
    title: "Designing and Developing the ABBE HRIS' Work Schedules feature",
    desc:
      "Built and shipped the Work Schedules feature for an HRIS platform using Angular and .NET, integrating " +
      "RESTful APIs for CRUD operations, custom date-range filtering, and multi-schedule editing across admin " +
      "and employee views.",
    techStack: ["Angular", ".NET", "TypeScript", "C#", "PostgreSQL", "Figma"],
    tools: ["WebStorm", "Rider", "Figma", "Postman", "DBeaver", "Docker"],
    altText: "Designing and Developing the ABBE HRIS' Work Schedules feature",
    projectType: "Enterprise Web Application (HRIS)",
    companyName: "ABBE Technology Solutions, Inc.",
    imgSrc: abbeHRISImg,
    project: "ABBE",
  };

  const typrtxtProject: Project = {
    startDate: new Date(2025, 8),
    endDate: new Date(2026, 0),
    title: "typrtxt: Typing Practice Site using Classic Literature",
    desc: "A responsive single-page application for typing practice using classic literature, featuring real-time WPM, typing time, and accuracy metrics.",
    liveLink: "https://typrtxt.vercel.app/",
    repoLink: "https://github.com/albarr15/typrtxt",
    techStack: [
      "Vue",
      "TypeScript",
      "Supabase",
      "DaisyUI",
      "epubjs",
      "Vue Router",
    ],
    imgSrc: typrtxtImg,
    altText: "typrtxt: Typing Practice Site using Classic Literature",
  };

  const shizProject: Project = {
    startDate: new Date(2025, 10),
    endDate: new Date(2025, 11),
    title: "Shiz University: Distributed Enrollment System",
    desc: "A web-based distributed enrollment system across multiple service nodes with role-based access control for students and teachers.",
    liveLink: undefined,
    repoLink: "https://github.com/r4eiou/STDISCM-P4",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "React",
      "PostgreSQL",
      "Docker",
      "Supabase",
    ],
    imgSrc: shizImg,
    altText: "Shiz University: Distributed Enrollment System",
  };

  const whfProject: Project = {
    startDate: new Date(2025, 6),
    endDate: new Date(2025, 8),
    title:
      "What Haffen Fella? : Emotion Detection in Journal Entries with Meme-based Feedback in Filipino",
    desc: "A Flask web application that analyzes user-written journal entries using an emotion detection model and responds with Filipino meme-based feedback to provide comfort and relatability.",
    liveLink:
      "https://huggingface.co/spaces/yuji11/empathy?fbclid=IwZXh0bgNhZW0CMTEAAR43StNUjX37FvTJX8Urzq0-5mBNPuwBwZvdxo0ChAaXxx_E07NlClEnmfQ9Lw_aem_QVm-WPGQgmclmrDCYVJngQ",
    repoLink: "https://github.com/Mikosantos/EMPATHY",
    techStack: ["Flask", "Python", "HTML", "CSS", "JavaScript"],
    imgSrc: whfImg,
    altText:
      "What Haffen Fella? : Emotion Detection in Journal Entries with Meme-based Feedback in Filipino",
  };

  projects.push(abbeProject);
  projects.push(bequikProject);
  projects.push(typrtxtProject);
  projects.push(shizProject);
  projects.push(whfProject);

  return projects;
}
