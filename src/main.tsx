import { createRoot, hydrateRoot } from "react-dom/client";
import { createBrowserRouter, matchRoutes, RouterProvider } from "react-router";
import { routes } from "./app/routes";
import "./styles/index.css";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Missing #root element in index.html");

/**
 * Loads the lazy page modules for the current URL up front, so the first render already has the
 * page: hydration then matches the prerendered HTML, and nothing renders blank while a chunk loads.
 */
async function loadMatchedPages(): Promise<void> {
  const matches = matchRoutes(routes, window.location) ?? [];
  await Promise.all(
    matches.map(async ({ route }) => {
      if (typeof route.lazy !== "function") return;
      const loaded = await route.lazy();
      Object.assign(route, { ...loaded, lazy: undefined });
    }),
  );
}

// Pages read query strings (e.g. /logs?tag=llm) during render, but the build prerenders each path
// without one, so those URLs and unknown paths (served the empty 404.html shell) render from scratch.
const isPrerendered = rootElement.hasChildNodes() && window.location.search === "";

await loadMatchedPages();
const app = <RouterProvider router={createBrowserRouter(routes)} />;

if (isPrerendered) {
  hydrateRoot(rootElement, app);
} else {
  rootElement.replaceChildren();
  createRoot(rootElement).render(app);
}
