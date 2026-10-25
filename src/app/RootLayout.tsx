import { Outlet } from "react-router";
import RouteProgress from "./RouteProgress";
import ScrollToTop from "./ScrollToTop";

export default function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <RouteProgress />
      <Outlet />
    </>
  );
}
