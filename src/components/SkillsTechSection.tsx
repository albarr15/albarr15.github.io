import SectionWrapper from "@/components/SectionWrapper";
import SkillsLogosWrapper from "@/components/SkillsLogosWrapper";
import SkillLogo from "@/components/SkillLogo";

import Skills from "@/lib/Skills";

import CornerUpRight from "@/assets/logos/corner-up-right.svg";
import Layers from "@/assets/logos/layers.svg";
import LayoutPanelLeft from "@/assets/logos/layout-panel-left.svg";
import Users from "@/assets/logos/users.svg";

const CATEGORY_ORDER = ["Frontend & UI", "Design", "Backend & Data", "Tools"];

export default function SkillsTechSection() {
  const grouped = CATEGORY_ORDER.map((category) => ({
    category,
    items: Skills.filter((skill) => skill.category === category),
  }));

  const DESIGN_SKILLS = [
    { name: "Wireframing", icon: LayoutPanelLeft },
    { name: "Prototyping", icon: CornerUpRight },
    { name: "Design systems", icon: Layers },
    { name: "Usability testing", icon: Users },
  ];

  return (
    <SectionWrapper id="skills" title="Skills & Technologies">
      {grouped.map(({ category, items }) => (
        <div key={category} className="autoShow mb-8">
          <p>{category}</p>

          <SkillsLogosWrapper>
            {items.map((skill) => (
              <div key={skill.name} className="autoShow">
                <SkillLogo
                  skillName={skill.name}
                  icon={skill.icon}
                  iconMono={skill.iconMono}
                />
              </div>
            ))}

            {category === "Design" &&
              DESIGN_SKILLS.map((skill) => (
                <div className="autoShow" key={skill.name}>
                  <SkillLogo skillName={skill.name} icon={skill.icon} />
                </div>
              ))}
          </SkillsLogosWrapper>
        </div>
      ))}
    </SectionWrapper>
  );
}
