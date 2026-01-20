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
  return (
    <>
      <nav className="100dvw flex justify-between sticky top-0 z-50 bg-white/30 backdrop-blur-sm h-16 items-center">
        <Link to={"/"}>
          clarissa<span className="font-bold">albarr</span>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Menu />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Main</DropdownMenuItem>
            <DropdownMenuItem>Background</DropdownMenuItem>
            <DropdownMenuItem>Skills & Technologies</DropdownMenuItem>
            <DropdownMenuItem>Projects</DropdownMenuItem>
            <DropdownMenuItem>Experience</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </>
  );
}
