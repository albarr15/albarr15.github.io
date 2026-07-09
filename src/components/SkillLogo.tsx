type SkillLogoProps = {
  skillName: string;
  icon: any;
  iconMono?: any;
};

import { useState } from "react";

export default function SkillLogo(props: SkillLogoProps) {
  const [isHovered, setIsHovered] = useState(false);
  const hasMono = Boolean(props.iconMono);

  return (
    <>
      <div
        className="bg-card flex h-22 w-22 justify-center items-center flex-col transition-transform border border-muted-foreground/20
      rounded-sm hover:scale-105"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <div className="relative w-9 h-9">
          {hasMono ? (
            <>
              <img
                src={props.iconMono}
                alt={props.skillName + " logo."}
                width="50"
                height="50"
                className={`absolute inset-0 transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-100"}`}
              />
              <img
                src={props.icon}
                alt={props.skillName + " logo."}
                width="50"
                height="50"
                className={`absolute inset-0 transition-opacity duration-300 ${!isHovered ? "opacity-0" : "opacity-100"}`}
              />
            </>
          ) : (
            <div className="flex justify-center items-center w-full h-full">
              <img
                src={props.icon}
                alt={props.skillName + " logo."}
                width="40"
                height="40"
                className="brightness-0 invert"
              />
            </div>
          )}
        </div>

        <span className=" mt-2 text-center text-xs leading-tight h-4 flex items-center justify-center">
          {props.skillName}
        </span>
      </div>
    </>
  );
}
