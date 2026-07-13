export interface ProjectCardProps extends Project {
  className?: string;
}

import { type Project } from "@/lib/Projects";
import { DateRange } from "@/lib/DateRange";
import { ArrowUpRight, Globe, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useContext, useState } from "react";
import { DetailsSectionContext } from "@/contexts/DetailsSectionContext";
import { scrollToTop } from "@/utils/Scroll";

export default function ProjectCard(props: ProjectCardProps) {
  const dateRange = DateRange(props.startDate, props.endDate);
  const [isHovered, setIsHovered] = useState(false);
  const { setSelectedProject } = useContext(DetailsSectionContext);

  const handleProjectDetailsClick = (project: string) => {
    setSelectedProject(project);
    scrollToTop();
  };

  return (
    <div className={`flex flex-col gap-6 ${props.className ?? ""}`}>
      <div className="flex flex-col gap-3">
        <div>
          <span className="text-muted-foreground uppercase font-semibold">
            {dateRange}
          </span>
        </div>
        {props.imgSrc && (
          <div
            className="relative rounded-md overflow-clip "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {props.project && (
              <div
                className="absolute inset-0 z-20 cursor-pointer"
                onClick={() => {
                  if (props.project) {
                    handleProjectDetailsClick(props.project);
                  }
                }}
              ></div>
            )}
            <div className="absolute inset-0 bg-background/10 z-10"></div>
            <img
              src={props.imgSrc}
              alt={props.altText}
              className={`shadow-md ${isHovered ? "scale-105 transition duration-300" : "scale-100 transition duration-300"}`}
            />
            <div className="absolute bottom-0 left-0 z-30">
              <div className="flex flex-col gap-2 bg-linear-to-t from-background via-background/90 to-transparent p-3">
                <div>
                  {props.repoLink ? (
                    <a
                      href={props.repoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-lg/snug hover:text-primary hover:underline"
                    >
                      {props.title}

                      <Github
                        className="inline-block ml-2 mb-1 stroke-3"
                        size={16}
                      />
                      <ArrowUpRight
                        className="inline-block mb-1 stroke-3"
                        size={16}
                      />
                    </a>
                  ) : (
                    <span className="font-semibold text-lg/snug">
                      {props.title}
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground font-light">{props.desc}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className={`self-start transition-all duration-300 ${
                    isHovered && props.project
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2 pointer-events-none h-0 overflow-hidden"
                  }`}
                  onClick={() => {
                    if (props.project) {
                      handleProjectDetailsClick(props.project);
                    }
                  }}
                >
                  Learn more <ArrowUpRight />
                </Button>
              </div>
            </div>
          </div>
        )}
        {props.liveLink && (
          <Button
            asChild
            size="sm"
            variant="outline"
            className="fill-container"
          >
            <a href={props.liveLink} target="_blank" rel="noreferrer">
              <Globe /> View Live
            </a>
          </Button>
        )}

        <div className="flex flex-wrap gap-2">
          {props.techStack?.map((tech) => (
            <Badge
              key={tech}
              variant={"secondary"}
              className="font-normal text-muted-foreground"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
