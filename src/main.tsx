import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import TyprtxtPage from "@/components/TyprtxtPage.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShizUniversityPage from "./components/ShizUniversityPage.tsx";
import WhatHaffenPage from "./components/WhatHaffenPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/typrtxt", element: <TyprtxtPage /> },
  { path: "/shiz", element: <ShizUniversityPage /> },
  { path: "/what_haffen_fella", element: <WhatHaffenPage /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
