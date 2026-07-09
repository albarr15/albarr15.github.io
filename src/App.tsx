import MainSection from "@/components/MainSection";

import BackgroundSection from "@/components/BackgroundSection";
import SkillsTechSection from "@/components/SkillsTechSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import ABBESection from "./components/Sections/ABBESection";
import { useState, useEffect, useContext } from "react";
import { DetailsSectionContext } from "./contexts/DetailsSectionContext";
import { scrollToTop } from "./utils/Scroll";
import { ArrowUp } from "lucide-react";
import { Button } from "./components/ui/button";

function App() {
  const [pendingScroll, setPendingScroll] = useState("");
  const { selectedProject, setSelectedProject } = useContext(
    DetailsSectionContext,
  );

  useEffect(() => {
    if (selectedProject == "" && pendingScroll) {
      const section = document.getElementById(pendingScroll);
      if (section) {
        section.scrollIntoView();
      }
      setPendingScroll("");
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
      <DetailsSectionContext.Provider
        value={{ selectedProject, setSelectedProject }}
      >
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
                  onClick={() => scrollToSection("projects")}
                  className="relative fit-content hover:after:absolute hover:after:bg-accent
                  hover:after:inset-0 hover:after:-z-10 hover:px-4 hover:font-bold py-1
                  transition-all duration-300"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="relative fit-content hover:after:absolute hover:after:bg-accent
                  hover:after:inset-0 hover:after:-z-10 hover:px-4 hover:font-bold py-1
                  transition-all duration-300"
                >
                  Skills & Technologies
                </button>
              </div>
            </div>
          </aside>
          <main className="py-10 flex flex-col gap-24 pb-77">
            {selectedProject == "" && (
              <>
                <BackgroundSection />
                <ExperiencesSection />
                <ProjectsSection />
                <SkillsTechSection />
                <Button
                  variant={"outline"}
                  onClick={() => scrollToTop()}
                  className="w-full"
                >
                  <ArrowUp />
                  Go Back to Top
                </Button>
              </>
            )}

            {selectedProject == "ABBE" && <ABBESection />}
          </main>
        </div>
      </DetailsSectionContext.Provider>
    </>
  );
}

export default App;
