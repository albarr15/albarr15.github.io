export type Project = {
  startDate: Date;
  endDate: Date;
  title: string;
  desc: string;
  liveLink?: string;
  repoLink?: string;
  techStack: string[];
  imgSrc?: string;
};
import typrtxtImg from "@/assets/projects/Typing Practice Site 1.png";
import shizImg from "@/assets/projects/Distributed Enrollment System 1.png";
import whfImg from "@/assets/projects/What Haffen Fella 1.png";

export function Projects(): Project[] {
  let projects = new Array<Project>();

  const typrtxtProject: Project = {
    startDate: new Date(2025, 8),
    endDate: new Date(2025, 11),
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
  };

  projects.push(typrtxtProject);
  projects.push(shizProject);
  projects.push(whfProject);

  return projects;
}
