import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.tsx";
import TyprtxtPage from "@/pages/TyprtxtPage.tsx";
import ShizUniversityPage from "./pages/ShizUniversityPage.tsx";
import ABBEPage from "./pages/ABBEPage.tsx";
import WhatHaffenPage from "./pages/WhatHaffenPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/typrtxt", element: <TyprtxtPage /> },
  { path: "/shiz", element: <ShizUniversityPage /> },
  { path: "/what_haffen_fella", element: <WhatHaffenPage /> },
  { path: "/abbe", element: <ABBEPage /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
