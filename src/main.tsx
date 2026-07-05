import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.tsx";
import TyprtxtPage from "@/pages/TyprtxtPage.tsx";
import ShizUniversityPage from "./pages/ShizUniversityPage.tsx";
import ABBEPage from "./pages/ABBEPage.tsx";
import WhatHaffenPage from "./pages/WhatHaffenPage.tsx";
import MainLayout from "./components/MainLayout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: App },
      { path: "typrtxt", Component: TyprtxtPage },
      { path: "abbe", Component: ABBEPage },
      { path: "what_haffen_fella", Component: WhatHaffenPage },
      { path: "shiz", Component: ShizUniversityPage },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
