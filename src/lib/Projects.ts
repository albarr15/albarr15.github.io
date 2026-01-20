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

export function Projects(): Project[] {
  let projects = new Array<Project>();

  const typrtxtProject: Project = {
    startDate: new Date(2025, 10),
    endDate: new Date(2025, 13),
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

  projects.push(typrtxtProject);

  return projects;
}
