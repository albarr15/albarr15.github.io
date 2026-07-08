import { createContext } from "react";

export const DetailsSectionContext = createContext({
  selectedProject: "",
  setSelectedProject: (project: string) => {},
});
