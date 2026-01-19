import SectionWrapper from "@/components/SectionWrapper";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsSection() {
  const sampleStart = new Date(2026, 0, 19);
  const sampleEnd = new Date(2026, 1, 14);

  return (
    <SectionWrapper id="projects" title="Projects">
      <ProjectCard
        startDate={sampleStart}
        endDate={sampleEnd}
        title="typrtxt"
        desc="A responsive single-page application for typing practice using classic literature, featuring real-time WPM, typing time, and accuracy metrics."
        techStack={[
          "Vue",
          "TypeScript",
          "Supabase",
          "DaisyUI",
          "epubjs",
          "Vue Router",
        ]}
      />
    </SectionWrapper>
  );
}
