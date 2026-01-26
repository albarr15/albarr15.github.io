import MobileNavBar from "@/components/MobileNavBar";
import MainSection from "@/components/MainSection";

import BackgroundSection from "@/components/BackgroundSection";
import SkillsTechSection from "@/components/SkillsTechSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperiencesSection from "@/components/ExperiencesSection";

function App() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView();
    }
  };

  return (
    <>
      <MobileNavBar />
      <div className="px-8 max-w-3xl md:max-w-7xl mx-auto">
        <div className="gap-3 flex flex-col md:flex-row md:gap-12">
          <aside className="md:w-1/3 md:shrink-0 md:sticky md:h-screen md:top-0">
            <div className="md:h-screen md:justify-center md:py-0 flex flex-col">
              <MainSection />
              <hr />
              <div className="hidden md:flex md:flex-col md:items-start md:gap-6 md:mt-12">
                <button onClick={() => scrollToSection("background")}>
                  Background
                </button>
                <button onClick={() => scrollToSection("skills")}>
                  Skills & Technologies
                </button>
                <button onClick={() => scrollToSection("projects")}>
                  Projects
                </button>
                <button onClick={() => scrollToSection("experiences")}>
                  Experience
                </button>
              </div>
            </div>
          </aside>
          <main className="py-10">
            <BackgroundSection />
            <SkillsTechSection />
            <ProjectsSection />
            <ExperiencesSection />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
