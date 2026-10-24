import { createBrowserRouter } from "react-router";
import HomePage from "@/pages/HomePage";

/** Loads a page module only when its route is visited. */
const page = (load: () => Promise<{ default: React.ComponentType }>) => async () => ({
  Component: (await load()).default,
});

export const router = createBrowserRouter([
  { path: "/", Component: HomePage },
  { path: "/experience", lazy: page(() => import("@/pages/ExperiencePage")) },
  { path: "/papers", lazy: page(() => import("@/pages/PapersPage")) },
  { path: "/projects", lazy: page(() => import("@/pages/ProjectsPage")) },
  { path: "/productions", lazy: page(() => import("@/pages/ProductionsPage")) },
  { path: "/case-study/coming-soon", lazy: page(() => import("@/pages/CaseStudyComingSoonPage")) },
]);
