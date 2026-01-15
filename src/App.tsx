import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import MobileNavBar from "./components/MobileNavBar";
import MainSection from "@/components/MainSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MobileNavBar />
      <div className="gap-3 flex flex-col">
        <MainSection />
      </div>
    </>
  );
}

export default App;
