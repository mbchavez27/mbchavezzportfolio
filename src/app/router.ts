import { createBrowserRouter } from "react-router";
import CaseStudyComingSoonPage from "@/pages/CaseStudyComingSoonPage";
import ExperiencePage from "@/pages/ExperiencePage";
import HomePage from "@/pages/HomePage";
import PapersPage from "@/pages/PapersPage";
import ProductionsPage from "@/pages/ProductionsPage";
import ProjectsPage from "@/pages/ProjectsPage";

export const router = createBrowserRouter([
  { path: "/", Component: HomePage },
  { path: "/experience", Component: ExperiencePage },
  { path: "/papers", Component: PapersPage },
  { path: "/projects", Component: ProjectsPage },
  { path: "/productions", Component: ProductionsPage },
  { path: "/case-study/coming-soon", Component: CaseStudyComingSoonPage },
]);
