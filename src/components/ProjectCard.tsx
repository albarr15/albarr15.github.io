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
      <div className="flex flex-col gap-1.5">
        <div>
          <div>
            <span className="text-muted-foreground uppercase font-semibold">
              {dateRange}
            </span>
          </div>

          <span className="font-semibold text-lg">{props.title}</span>
          <Github
            className="inline-block ml-3 mb-2 stroke-3 hover:"
            size={16}
          />
          <ArrowUpRight
            className="inline-block mb-2 stroke-3 hover:"
            size={16}
          />
        </div>
        <p className="text-muted-foreground font-light">
          A responsive single-page application for typing practice using classic
          literature, featuring real-time WPM, typing time, and accuracy
          metrics.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <img
          src={props.imgSrc}
          alt="Typrtxt Practice Typing Test Interface"
          className="shadow-md rounded-md"
        />

        <Button asChild size="sm" variant="outline" className="fill-container">
          <a
            href="https://typrtxt.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <Globe /> View Live
          </a>
        </Button>
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
