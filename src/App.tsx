import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import MobileNavBar from "@/components/MobileNavBar";
import MainSection from "@/components/MainSection";

import BackgroundSection from "@/components/BackgroundSection";
import SkillsTechSection from "@/components/SkillsTechSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MobileNavBar />
      <div className="gap-3 flex flex-col px-8 py-10">
        <MainSection />
        <BackgroundSection />
        <SkillsTechSection />
      </div>
    </>
  );
}

export default App;
