type ProjectCardProps = {
  startDate: Date;
  endDate: Date;
  title: string;
  desc: string;
  liveLink?: string;
  repoLink?: string;
  techStack: string[];
};

import { DateRange } from "@/lib/DateRange";

export default function ProjectCard(props: ProjectCardProps) {
  const dateRange = DateRange(props.startDate, props.endDate);

  return (
    <div className="flex flex-col">
      <span className="text-muted-foreground">{dateRange}</span>
    </div>
  );
}
