import SectionWrapper from "@/components/SectionWrapper";
import { Experiences } from "@/lib/Experiences";
import type { Experience } from "@/lib/Experiences";
import ExperienceCard from "@/components/ExperienceCard";

export default function ExperiencesSection() {
  const experiences: Experience[] = Experiences();

  return (
    <SectionWrapper id="experiences" title="Experiences">
      <div className="flex flex-col gap-8">
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
