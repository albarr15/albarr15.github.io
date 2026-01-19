type ProjectCardProps = {
  startDate: Date;
  endDate?: Date;
  title: string;
  desc: string;
  liveLink?: string;
  repoLink?: string;
  techStack: string[];
};

export default function ProjectCard(props: ProjectCardProps) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const startMonth = months[props.startDate.getMonth()];
  const startYear = props.startDate.getFullYear();
  const endMonth = props.endDate ? months[props.endDate.getMonth()] : null;
  const endYear = props.endDate ? props.endDate.getFullYear() : null;

  return (
    <div className="flex flex-col">
      <span className="text-muted-foreground">
        {startMonth} - {endMonth} {endYear}
      </span>
    </div>
  );
}
