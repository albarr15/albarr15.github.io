import SectionWrapper from "@/components/SectionWrapper";

import SkillsLogosWrapper from "@/components/SkillsLogosWrapper";
import SkillLogo from "@/components/SkillLogo";

import Skills from "@/lib/Skills";

export default function SkillsTechSection() {
  const skills = Skills;

  return (
    <SectionWrapper id="skills" title="Skills & Technologies">
      <SkillsLogosWrapper>
        {skills.map((skill) => (
          <SkillLogo
            key={skill.name}
            skillName={skill.name}
            icon={skill.icon}
            iconMono={skill.iconMono}
          />
        ))}
      </SkillsLogosWrapper>
    </SectionWrapper>
  );
}
