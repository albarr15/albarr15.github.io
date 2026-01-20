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

export default function ProjectCard(props: ProjectCardProps) {
  const dateRange = DateRange(props.startDate, props.endDate);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div>
          <div>
            <span className="text-muted-foreground uppercase font-semibold">
              {dateRange}
            </span>
          </div>

          {props.repoLink ? (
            <a
              href={props.repoLink}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-lg/snug hover:text-primary hover:underline"
            >
              {props.title}

              <Github className="inline-block ml-2 mb-1 stroke-3" size={16} />
              <ArrowUpRight className="inline-block mb-1 stroke-3" size={16} />
            </a>
          ) : (
            <span className="font-semibold text-lg/snug hover:text-primary hover:underline">
              {props.title}
            </span>
          )}
        </div>
        <p className="text-muted-foreground font-light">{props.desc}</p>
      </div>
      <div className="flex flex-col gap-3">
        {props.imgSrc && (
          <img
            src={props.imgSrc}
            alt="Typrtxt Practice Typing Test Interface"
            className="shadow-md rounded-md"
          />
        )}
        {props.liveLink && (
          <Button
            asChild
            size="sm"
            variant="outline"
            className="fill-container"
          >
            <a
              href="https://typrtxt.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
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
