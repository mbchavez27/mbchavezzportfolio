import { createBrowserRouter } from "react-router";
import Home from "./Home";
import ExperiencePage from "./pages/ExperiencePage";
import PapersPage from "./pages/PapersPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProductionsPage from "./pages/ProductionsPage";
import CaseStudyComingSoon from "./pages/CaseStudyComingSoon";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
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
    Component: CaseStudyComingSoon,
  },
]);
