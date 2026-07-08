import { Button } from "@/components/ui/button";
import { Mail, File } from "lucide-react";
import resumePDF from "@/assets/docs/Albarracin, Clarissa.pdf";

export default function MainSection() {
  const EMAIL_ADDRESS = "clarissa.albarracin@gmail.com";
  const MAILTO_URL = `mailto:${EMAIL_ADDRESS}`;

  return (
    <div className="flex flex-col gap-6 py-14 md:py-7">
      <section id="main" className="flex flex-col gap-2">
        <div className="text-2xl gap-2 flex">
          <span>Hi!</span>
          <span>👋</span>
        </div>
        <div className="text-2xl">
          I'm <span className="font-bold">Clarissa Albarracin</span>,
        </div>
        <p>
          a frontend developer with a UX mindset, bridging design and code to
          build polished and intuitive web experiences.
        </p>
      </section>

      <div className="flex flex-wrap  items-center justify-center gap-3">
        <a href={resumePDF} download>
          <Button variant="outline" size="sm">
            <File /> Download Resume
          </Button>
        </a>
        <a href={MAILTO_URL}>
          <Button variant="default" size="sm">
            <Mail /> Get in touch
          </Button>
        </a>
      </div>
    </div>
  );
}
