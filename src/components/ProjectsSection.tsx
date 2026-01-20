import SectionWrapper from "@/components/SectionWrapper";
import ProjectCard from "@/components/ProjectCard";

import typrtxtImg from "@/assets/projects/Typing Practice Site 1.png";

export default function ProjectsSection() {
  const sampleStart = new Date(2023, 1, 19);
  const sampleEnd = new Date(2026, 2, 22);

  return (
    <SectionWrapper id="projects" title="Projects">
      <div className="flex flex-col gap-14">
        <ProjectCard
          startDate={sampleStart}
          endDate={sampleEnd}
          title="typrtxt: Typing Practice Site using Classic Literature"
          desc="A responsive single-page application for typing practice using classic literature, featuring real-time WPM, typing time, and accuracy metrics."
          techStack={[
            "Vue",
            "TypeScript",
            "Supabase",
            "DaisyUI",
            "epubjs",
            "Vue Router",
          ]}
          imgSrc={typrtxtImg}
          repoLink="https://github.com/albarr15/typrtxt"
          liveLink="https://typrtxt.vercel.app/"
        />

        <ProjectCard
          startDate={sampleStart}
          endDate={sampleEnd}
          title="typrtxt: Typing Practice Site using Classic Literature"
          desc="A responsive single-page application for typing practice using classic literature, featuring real-time WPM, typing time, and accuracy metrics."
          techStack={[
            "Vue",
            "TypeScript",
            "Supabase",
            "DaisyUI",
            "epubjs",
            "Vue Router",
          ]}
          imgSrc={typrtxtImg}
          repoLink="https://github.com/albarr15/typrtxt"
          liveLink="https://typrtxt.vercel.app/"
        />
      </div>
    </SectionWrapper>
  );
}
