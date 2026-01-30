import SectionWrapper from "@/components/SectionWrapper";

export default function BackgroundSection() {
  return (
    <SectionWrapper id="background" title="Background">
      <div className="flex flex-col gap-6 text-justify">
        <p>
          I've always been passionate about the creative side of things. I
          dabbled in graphic design and video editing which soon led me to
          crafting over 460+ projects for 40+ unique clients worldwide. I also
          love building stuff be it custom keyboards or web applications. Soon,
          I found front-end development to be the perfect middle ground,
          combining my eye for design with my technical skills.
        </p>
        <p>
          Currently, I'm a 4th-year Computer Science student majoring in
          Software Technology at De La Salle University Manila. I also recently
          finished Harvard's CS50x: Introduction to Computer Science course,
          which gave me a great foundation to back up what I've been learning. 
        </p>
        <p>
          Whether I'm working on my projects or just building another keyboard,
          I'm passionate about crafting things that not only look great, but
          work great.
        </p>
      </div>
    </SectionWrapper>
  );
}
