type SkillsLogoGridProps = {
  title: string;
  children?: React.ReactNode;
};

export default function SkillsLogoGrid(props: SkillsLogoGridProps) {
  return (
    <div className="flex flex-col gap-2 py-4">
      <span className="text-muted-foreground uppercase font-bold">
        {props.title}
      </span>
      <div className="grid grid-flow-row grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-5">
        {props.children}
      </div>
    </div>
  );
}
