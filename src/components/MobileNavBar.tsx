import { Menu } from "lucide-react";

import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function MobileNavBar() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView();
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };
  return (
    <>
      <nav className="100dvw flex justify-between sticky top-0 z-50 bg-white/30 backdrop-blur-sm h-16 items-center md:hidden">
        <div onClick={() => scrollToTop()} className="cursor-pointer">
          clarissa<span className="font-bold">albarr</span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Menu />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => scrollToTop()}>
              Main
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => scrollToSection("background")}>
              Background
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => scrollToSection("skills")}>
              Skills & Technologies
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => scrollToSection("projects")}>
              Projects
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => scrollToSection("experiences")}>
              Experience
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </>
  );
}
