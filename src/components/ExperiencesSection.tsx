import SectionWrapper from "@/components/SectionWrapper";
import { Experiences } from "@/lib/Experiences";
import type { Experience } from "@/lib/Experiences";
import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "./ProjectCard";
import abbeHRISImg from "@/assets/projects/ABBE/ABBE HRIS/1.png";

export default function ExperiencesSection({
  onABBEClick,
}: {
  onABBEClick: () => void;
}) {
  const experiences: Experience[] = Experiences();

  const abbeExp: Experience = {
    startDate: new Date(2026, 3),
    endDate: new Date(2026, 5),
    position:
      "Web Development and UI/UX Intern at ABBE Technology Solutions, Inc.",
    desc:
      "Built and shipped the Work Schedules feature for an HRIS platform using Angular and .NET, integrating " +
      "RESTful APIs for CRUD operations, custom date-range filtering, and multi-schedule editing across admin " +
      "and employee views",
  };

  return (
    <SectionWrapper id="experiences" title="Experiences">
      <div className="flex flex-col gap-8">
        <ProjectCard
          startDate={abbeExp.startDate}
          endDate={abbeExp.endDate}
          title={abbeExp.position}
          desc={abbeExp.desc}
          techStack={["Angular", ".NET", "TypeScript", "C#", "PostgreSQL"]}
          imgSrc={abbeHRISImg}
          altText={abbeExp.position}
          onABBEClick={onABBEClick}
        />
        {experiences.map((exp: Experience, idx: number) => (
          <ExperienceCard
            key={idx}
            startDate={exp.startDate}
            endDate={exp.endDate}
            position={exp.position}
            desc={exp.desc}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
