import SectionWrapper from "@/components/SectionWrapper";
import ProjectCard from "@/components/ProjectCard";

import { Projects } from "@/lib/Projects";
import type { Project } from "@/lib/Projects";

export default function ProjectsSection() {
  const projects: Project[] = Projects();

  return (
    <SectionWrapper id="projects" title="Projects">
      <div className="flex flex-col gap-14">
        {projects.map((project: Project, idx: number) => (
          <ProjectCard
            key={idx}
            startDate={project.startDate}
            endDate={project.endDate}
            title={project.title}
            desc={project.desc}
            liveLink={project.liveLink}
            repoLink={project.repoLink}
            techStack={project.techStack}
            imgSrc={project.imgSrc}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
