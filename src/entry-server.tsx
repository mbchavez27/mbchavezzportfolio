import { renderToString } from "react-dom/server";
import { createStaticHandler, createStaticRouter, StaticRouterProvider } from "react-router";
import { routes } from "./app/routes";
import { logs } from "./features/logs/data/logs.data";
import { visibleLogs } from "./features/logs/domain/logs.domain";

const STATIC_PATHS = [
  "/",
  "/experience",
  "/papers",
  "/projects",
  "/productions",
  "/logs",
  "/case-study/coming-soon",
] as const;

/** Every URL the build writes an HTML file for: the fixed pages plus one per published log. */
export function prerenderPaths(): string[] {
  return [...STATIC_PATHS, ...visibleLogs(logs, false).map((log) => `/logs/${log.slug}`)];
}

/**
 * Renders one path to the HTML that goes inside #root. No route has a loader, so there is no data
 * to hand over: hydrate={false} leaves out the hydration <script> the client tree would not render.
 */
export async function render(path: string): Promise<string> {
  const handler = createStaticHandler(routes);
  const context = await handler.query(new Request(new URL(path, "http://localhost")));
  if (context instanceof Response) throw new Error(`Prerendering ${path} returned a redirect or error response`);
  if (context.errors) throw new Error(`Prerendering ${path} failed: ${JSON.stringify(context.errors)}`);

  const router = createStaticRouter(handler.dataRoutes, context);
  return renderToString(<StaticRouterProvider router={router} context={context} hydrate={false} />);
}
