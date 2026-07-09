import { Ghost, Menu } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { scrollToTop } from "@/utils/Scroll";
import { useContext, useEffect, useState } from "react";
import { DetailsSectionContext } from "@/contexts/DetailsSectionContext";
import Signature from "@/assets/Signature.svg";
import { Button } from "./ui/button";

export default function MobileNavBar() {
  const [pendingScroll, setPendingScroll] = useState("");
  const { selectedProject, setSelectedProject } = useContext(
    DetailsSectionContext,
  );

  useEffect(() => {
    if (selectedProject == "" && pendingScroll) {
      setTimeout(() => {
        const section = document.getElementById(pendingScroll);
        if (section) {
          section.scrollIntoView();
        }
        setPendingScroll("");
      }, 200);
    }
  }, [pendingScroll, selectedProject]);

  const scrollToSection = (id: string) => {
    if (selectedProject != "") {
      setSelectedProject("");
      scrollToTop();

      // indicate for pending scrolls to main sections by their ids
      setPendingScroll(id);
      return;
    }

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView();
    }
  };

  return (
    <>
      <nav className="100dvw px-12 flex justify-between sticky top-0 z-50 bg-background/30 backdrop-blur-sm h-16 items-center lg:hidden">
        <div onClick={() => scrollToTop()} className="cursor-pointer ">
          <Button variant={"ghost"} className="h-fit">
            <img src={Signature} className="h-11" />
          </Button>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Menu />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => scrollToSection("background")}>
              Background
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => scrollToSection("experiences")}>
              Experiences
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => scrollToSection("projects")}>
              Projects
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => scrollToSection("skills")}>
              Skills & Technologies
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </>
  );
}
