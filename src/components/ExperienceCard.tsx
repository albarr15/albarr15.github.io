export type ExperienceCardProps = {
  startDate: Date;
  endDate: Date;
  position: string;
  desc: string;
};

import { DateRange } from "@/lib/DateRange";

export default function ExperienceCard(props: ExperienceCardProps) {
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
          <span className="font-semibold text-lg/snug"> {props.position}</span>
        </div>
        <p className="text-muted-foreground font-light">{props.desc}</p>
      </div>
    </div>
  );
}
