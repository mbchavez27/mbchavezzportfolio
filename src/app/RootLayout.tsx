import { Outlet } from "react-router";
import ScrollToTop from "./ScrollToTop";

export default function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}
