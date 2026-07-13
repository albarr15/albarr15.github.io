import SectionWrapper from "@/components/SectionWrapper";

export default function BackgroundSection() {
  return (
    <SectionWrapper id="background" title="Background">
      <div className="flex flex-col gap-6 text-justify">
        <p>
          From coding HTML on paper in my Grade 7 Web Development elective
          class, I've always longed to both design and build my own
          applications. That curiosity led me to web development, where I picked
          up Figma, React, Angular, Vue, and TypeScript along the way,
          constantly chasing the satisfaction of seeing something I envisioned
          actually come to life.
        </p>

        <p>
          Currently, I'm a 4th-year CS student at De La Salle University Manila,
          graduating this October 2026. I recently completed an internship at
          ABBE Technology Solutions where I designed and shipped features for a
          live HRIS platform, which taught me a lot about what it actually means
          to own something from wireframe to production.
        </p>

        <p>
          When I'm not coding, I'm probably reading on my pocket e-reader or
          building another keyboard...
        </p>
      </div>
    </SectionWrapper>
  );
}
