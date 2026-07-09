import DotGrid from "./DotGrid";
import { Outlet } from "react-router-dom";
import MobileNavBar from "./MobileNavBar";
import { DetailsSectionContext } from "@/contexts/DetailsSectionContext";
import { useState } from "react";

export default function MainLayout() {
  const [selectedProject, setSelectedProject] = useState("");

  return (
    <>
      <div className="fixed inset-0 -z-30">
        <DotGrid
          dotSize={4}
          gap={34}
          baseColor="#1e1f35"
          activeColor="#312f5e"
          proximity={150}
          speedTrigger={10}
          shockRadius={190}
          shockStrength={1}
          maxSpeed={3500}
          resistance={1100}
          returnDuration={2.9}
        />
      </div>
      <DetailsSectionContext.Provider
        value={{ selectedProject, setSelectedProject }}
      >
        <div className="min-w-118">
          <MobileNavBar />
          <div className="px-12 max-w-3xl lg:max-w-7xl mx-auto">
            <Outlet />
          </div>
        </div>
      </DetailsSectionContext.Provider>
    </>
  );
}
