import MobileNavBar from "@/components/MobileNavBar";
import MainSection from "@/components/MainSection";

import BackgroundSection from "@/components/BackgroundSection";
import SkillsTechSection from "@/components/SkillsTechSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperiencesSection from "@/components/ExperiencesSection";

import DotGrid from "@/components/DotGrid";

function App() {
  const scrollToSection = (id: string) => {
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
        <div className="px-12 max-w-3xl md:max-w-7xl mx-auto">
          <div className="gap-3 flex flex-col md:flex-row md:gap-12">
            <aside className="md:w-1/3 md:shrink-0 md:sticky md:h-screen md:top-0">
              <div className="md:h-screen md:justify-center md:py-0 flex flex-col">
                <MainSection />
                <hr />
                <div className="hidden md:flex md:flex-col md:items-start md:gap-6 md:mt-12">
                  <button
                    onClick={() => scrollToSection("background")}
                    className="relative fit-content hover:after:absolute hover:after:bg-accent
                  hover:after:inset-0 hover:after:-z-10 hover:px-4 hover:font-bold py-1
                  transition-all duration-300"
                  >
                    Background
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
                  <button
                    onClick={() => scrollToSection("experiences")}
                    className="relative fit-content hover:after:absolute hover:after:bg-accent
                  hover:after:inset-0 hover:after:-z-10 hover:px-4 hover:font-bold py-1
                  transition-all duration-300"
                  >
                    Experiences
                  </button>
                </div>
              </div>
            </aside>
            <main className="py-10 flex flex-col gap-24 pb-77">
              <BackgroundSection />
              <SkillsTechSection />
              <ProjectsSection />
              <ExperiencesSection />
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
