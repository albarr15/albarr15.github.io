type SectionWrapperProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

export default function SectionWrapper(props: SectionWrapperProps) {
  return (
    <>
      <div className="flex flex-col pt-8 gap-6">
        <section
          id={props.id}
          className="flex flex-col gap-2 items-start  scroll-mt-24"
        >
          <span className="pb-5 font-medium">{props.title}</span>
          <div className="text-sm">{props.children}</div>
        </section>
      </div>
    </>
  );
}
