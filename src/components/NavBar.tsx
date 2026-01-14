import { useIsMobile } from "@/hooks/useIsMobile";
import MobileNavBar from "@/components/MobileNavBar";

export default function NavBar() {
  const isMobile = useIsMobile();

  return <>{isMobile ? <MobileNavBar /> : ""}</>;
}
