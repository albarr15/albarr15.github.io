type SkillsLogosWrapperProps = {
  children?: React.ReactNode;
};

export default function SkillsLogosWrapper(props: SkillsLogosWrapperProps) {
  return (
    <div className="flex flex-col gap-2 py-4">
      <div className="flex flex-wrap gap-5">{props.children}</div>
    </div>
  );
}
