type SkillLogoProps = {
  skillName: string;
  icon: any;
  iconMono?: any;
};

import { useState } from "react";

export default function SkillLogo(props: SkillLogoProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div
        className="bg-card flex h-28 w-28 justify-center items-center flex-col transition-transform border border-muted-foreground/20
      rounded-sm hover:scale-105"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <div className="relative w-12.5 h-12.5">
          <img
            src={props.iconMono}
            alt={props.skillName + "  logo."}
            width="50"
            height="50"
            className={`absolute inset-0 transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-100"}`}
          />
          <img
            src={props.icon}
            alt={props.skillName + "  logo."}
            width="50"
            height="50"
            className={`absolute inset-0 transition-opacity duration-300 ${!isHovered ? "opacity-0" : "opacity-100"}`}
          />
        </div>

        <span>{props.skillName}</span>
      </div>
    </>
  );
}
