import { createBrowserRouter } from "react-router";
import HomePage from "@/pages/HomePage";
import ExperiencePage from "@/pages/ExperiencePage";
import PapersPage from "@/pages/PapersPage";
import ProjectsPage from "@/pages/ProjectsPage";
import ProductionsPage from "@/pages/ProductionsPage";
import CaseStudyComingSoonPage from "@/pages/CaseStudyComingSoonPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/experience",
    Component: ExperiencePage,
  },
  {
    path: "/papers",
    Component: PapersPage,
  },
  {
    path: "/projects",
    Component: ProjectsPage,
  },
  {
    path: "/productions",
    Component: ProductionsPage,
  },
  {
    path: "/case-study/coming-soon",
    Component: CaseStudyComingSoonPage,
  },
]);
