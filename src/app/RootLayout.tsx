import { Outlet } from "react-router";
import RouteTransition from "./RouteTransition";
import ScrollToTop from "./ScrollToTop";

export default function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <RouteTransition />
      <Outlet />
    </>
  );
}
