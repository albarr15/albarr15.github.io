type SkillsLogosWrapperProps = {
  title: string;
  children?: React.ReactNode;
};

export default function SkillsLogosWrapper(props: SkillsLogosWrapperProps) {
  return (
    <div className="flex flex-col gap-2 py-4">
      <span className="text-muted-foreground uppercase font-bold">
        {props.title}
      </span>
      <div className="flex flex-wrap gap-5">{props.children}</div>
    </div>
  );
}
