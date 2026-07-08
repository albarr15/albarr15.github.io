import MobileNavBar from "@/components/MobileNavBar";
import MainSection from "@/components/MainSection";

import BackgroundSection from "@/components/BackgroundSection";
import SkillsTechSection from "@/components/SkillsTechSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperiencesSection from "@/components/ExperiencesSection";

import DotGrid from "@/components/DotGrid";
import ABBESection from "./components/Sections/ABBESection";
import { useState, useEffect } from "react";
import { DetailsSectionContext } from "./contexts/DetailsSectionContext";

function App() {
  const [pendingScroll, setPendingScroll] = useState("");
  const [selectedProject, setSelectedProject] = useState("");

  useEffect(() => {
    if (selectedProject == "" && pendingScroll) {
      const section = document.getElementById(pendingScroll);
      if (section) {
        section.scrollIntoView();
      }
    }
  }, [pendingScroll, selectedProject]);

  const scrollToSection = (id: string) => {
    if (selectedProject != "") {
      setSelectedProject("");
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });

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
      <div className="min-w-118">
        <MobileNavBar />
        <div className="px-12 max-w-3xl lg:max-w-7xl mx-auto">
          <div className="gap-3 flex flex-col lg:flex-row lg:gap-12">
            <aside className="lg:w-1/3 lg:shrink-0 lg:sticky lg:h-screen lg:top-0">
              <div className="lg:h-screen lg:justify-center lg:py-0 flex flex-col">
                <MainSection />
                <hr />
                <div className="hidden lg:flex lg:flex-col lg:items-start lg:gap-6 lg:mt-12">
                  <button
                    onClick={() => scrollToSection("background")}
                    className="relative fit-content hover:after:absolute hover:after:bg-accent
                  hover:after:inset-0 hover:after:-z-10 hover:px-4 hover:font-bold py-1
                  transition-all duration-300"
                  >
                    Background
                  </button>
                  <button
                    onClick={() => scrollToSection("experiences")}
                    className="relative fit-content hover:after:absolute hover:after:bg-accent
                  hover:after:inset-0 hover:after:-z-10 hover:px-4 hover:font-bold py-1
                  transition-all duration-300"
                  >
                    Experiences
                  </button>
                  <button
                    onClick={() => scrollToSection("skills")}
                    className="relative fit-content hover:after:absolute hover:after:bg-accent
                  hover:after:inset-0 hover:after:-z-10 hover:px-4 hover:font-bold py-1
                  transition-all duration-300"
                  >
                    Skills & Technologies
                  </button>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="relative fit-content hover:after:absolute hover:after:bg-accent
                  hover:after:inset-0 hover:after:-z-10 hover:px-4 hover:font-bold py-1
                  transition-all duration-300"
                  >
                    Projects
                  </button>
                </div>
              </div>
            </aside>
            <main className="py-10 flex flex-col gap-24 pb-77">
              <DetailsSectionContext.Provider
                value={{ selectedProject, setSelectedProject }}
              >
                {selectedProject == "" && (
                  <>
                    <BackgroundSection />
                    <ExperiencesSection />
                    <SkillsTechSection />
                    <ProjectsSection />
                  </>
                )}

                {selectedProject == "ABBE" && <ABBESection />}
              </DetailsSectionContext.Provider>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
