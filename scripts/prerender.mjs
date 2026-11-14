// Runs after both Vite builds: renders every route to static HTML inside dist/, so pages paint
// before any JavaScript runs. The client (src/main.tsx) then hydrates that markup.
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const DIST = "dist";
const SERVER_DIST = "dist-server";
const ROOT = '<div id="root"></div>';

const template = readFileSync(path.join(DIST, "index.html"), "utf8");
if (!template.includes(ROOT)) throw new Error(`dist/index.html has no empty ${ROOT} to render into`);

const ENTRY_SCRIPT = /^[ \t]*<script type="module" crossorigin src="([^"]+)"><\/script>\r?\n?/m;
const MODULE_PRELOAD = /^[ \t]*<link rel="modulepreload" crossorigin href="([^"]+)">\r?\n?/gm;

/**
 * A prerendered page is complete without JavaScript, which only adds interactivity (the portrait
 * glitch, rotating roles, scroll curtains). So its scripts start downloading once the page has
 * loaded and painted, leaving the network to the HTML, CSS, fonts and images of the first view.
 */
function deferScripts(html) {
  const entry = ENTRY_SCRIPT.exec(html)?.[1];
  if (!entry) throw new Error("dist/index.html has no module entry script to defer");
  const preloads = [...html.matchAll(MODULE_PRELOAD)].map((match) => match[1]);
  const loader = `<script type="module">
      const start = () => {
        for (const href of ${JSON.stringify(preloads)}) {
          document.head.append(Object.assign(document.createElement("link"), { rel: "modulepreload", href }));
        }
        import(${JSON.stringify(entry)});
      };
      // The callback of a requestAnimationFrame runs before the next paint, so a timeout from there lands after it.
      const afterPaint = () => requestAnimationFrame(() => setTimeout(start, 0));
      if (document.readyState === "complete") afterPaint();
      else addEventListener("load", afterPaint, { once: true });
    </script>
`;
  return html.replace(MODULE_PRELOAD, "").replace(ENTRY_SCRIPT, `    ${loader}`);
}

// Tags marked data-only-on="/path" in index.html (like the hero portrait preload) stay on that page only.
const ONLY_ON = /^[ \t]*<[^>]*data-only-on="([^"]*)"[^>]*>\r?\n?/gm;
const templateFor = (route) => template.replace(ONLY_ON, (tag, only) => (only === route ? tag : ""));

// Unknown URLs get the plain app shell (Cloudflare Pages serves 404.html for them; so does nginx).
writeFileSync(path.join(DIST, "404.html"), templateFor(null));

const { render, prerenderPaths } = await import(pathToFileURL(path.resolve(SERVER_DIST, "entry-server.js")).href);

for (const route of prerenderPaths()) {
  const html = deferScripts(templateFor(route)).replace(ROOT, `<div id="root">${await render(route)}</div>`);
  // /projects -> projects.html, which Cloudflare Pages serves at /projects itself; a projects/index.html
  // would make it redirect every visit to /projects/ first.
  const file = route === "/" ? path.join(DIST, "index.html") : path.join(DIST, `${route}.html`);
  mkdirSync(path.dirname(file), { recursive: true });
  writeFileSync(file, html);
  console.log(`prerendered ${route}`);
}

rmSync(SERVER_DIST, { recursive: true, force: true });
