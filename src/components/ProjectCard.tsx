type ProjectCardProps = {
  startDate: Date;
  endDate: Date;
  title: string;
  desc: string;
  liveLink?: string;
  repoLink?: string;
  techStack: string[];
  imgSrc?: string;
};

import { DateRange } from "@/lib/DateRange";
import { ArrowUpRight, Globe, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export default function ProjectCard(props: ProjectCardProps) {
  const dateRange = DateRange(props.startDate, props.endDate);
  const [isHovered, setIsHovered] = useState(false);

  // TODO: Update bg according to fast-average-color of image, move badges and links, add separate page per project
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <div>
          <span className="text-muted-foreground uppercase font-semibold">
            {dateRange}
          </span>
        </div>
        {props.imgSrc && (
          <div
            className="relative rounded-md overflow-clip"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={props.imgSrc}
              alt="Typrtxt Practice Typing Test Interface"
              className={`shadow-md ${isHovered ? "scale-105 transition duration-300" : "scale-100 transition duration-300"}`}
            />
            <div className="absolute bottom-0 left-0">
              <div className="flex flex-col gap-2 bg-linear-to-t from-black/40  via-black/10 to-transparent backdrop-blur-3xl p-3">
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
                    <span className="font-semibold text-lg/snug hover:text-primary hover:underline">
                      {props.title}
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground font-light">{props.desc}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className={`self-start transition-all duration-300 ${
                    isHovered
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2 pointer-events-none h-0 overflow-hidden"
                  }`}
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
          {props.techStack.map((tech) => (
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
