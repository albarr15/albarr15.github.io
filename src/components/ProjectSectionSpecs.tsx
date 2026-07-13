import { Building2, Calendar, Laptop, Layers, Toolbox } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import type { ProjectCardProps } from "./ProjectCard";
import { DateRange } from "@/lib/DateRange";
import { Badge } from "./ui/badge";

interface ProjectSectionSpecsProps extends ProjectCardProps {}

export default function ProjectSectionSpecs(props: ProjectSectionSpecsProps) {
  const dateRange = DateRange(props.startDate, props.endDate);

  return (
    <div className="w-full flex gap-6 flex-col">
      <span className="font-semibold text-lg/snug">{props.title}</span>
      <Separator />
      {props.companyName && (
        <div className="flex gap-2">
          <div className="flex gap-2 min-w-40 text-muted-foreground">
            <Building2 strokeWidth={1.5} />
            Company
          </div>
          {props.companyName}
        </div>
      )}
      <div className="flex gap-2">
        <div className="flex gap-2 min-w-40 text-muted-foreground">
          <Calendar strokeWidth={1.5} />
          Timeline
        </div>
        {dateRange}
      </div>
      <div className="flex gap-2">
        <div className="flex gap-2 min-w-40 text-muted-foreground">
          <Laptop strokeWidth={1.5} />
          Project Type
        </div>
        {props.projectType}
      </div>
      {props.techStack && (
        <div className="flex gap-2">
          <div className="flex gap-2 min-w-40 text-muted-foreground">
            <Layers strokeWidth={1.5} />
            Tech Stack
          </div>
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
      )}

      <div className="flex gap-2">
        <div className="flex gap-2 min-w-40 text-muted-foreground">
          <Toolbox strokeWidth={1.5} />
          Tools
        </div>
        <div className="flex flex-wrap gap-2">
          {props.tools?.map((tool) => (
            <Badge
              key={tool}
              variant={"secondary"}
              className="font-normal text-muted-foreground"
            >
              {tool}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
