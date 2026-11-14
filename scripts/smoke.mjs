// Serves the built site with `vite preview` and checks that every page responds with its
// prerendered content, that unknown paths get the empty app shell, and that the assets the
// pages reference load. Run after `npm run build`.
import { spawn } from "node:child_process";
import { existsSync } from "node:fs";

const PORT = 4173;
const BASE = `http://localhost:${PORT}`;
// Each prerendered page and text its HTML must contain before any JavaScript runs.
const PAGES = {
  "/": "Max Benedict Chavez",
  "/experience": ">Experience<",
  "/papers": ">Papers<",
  "/projects": ">Engineering<",
  "/productions": ">Productions<",
  "/logs": ">Logs<",
  "/case-study/coming-soon": "Coming Soon",
};

if (!existsSync("dist/index.html")) {
  console.error("dist/index.html not found. Run `npm run build` first.");
  process.exit(1);
}

// Run vite's own entry with this Node, so killing `server` stops the actual server process.
const VITE_BIN = "node_modules/vite/bin/vite.js";
const server = spawn(process.execPath, [VITE_BIN, "preview", "--port", String(PORT), "--strictPort"], {
  stdio: ["ignore", "ignore", "inherit"],
});

async function waitForServer(timeoutMs = 15_000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    try {
      await fetch(BASE);
      return;
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 250));
    }
  }
  throw new Error(`Preview server did not start on ${BASE}`);
}

async function check(path, validate) {
  const res = await fetch(BASE + path, { headers: { accept: "text/html,*/*" } });
  const body = await res.text();
  if (!res.ok) throw new Error(`${path} returned ${res.status}`);
  validate?.(body);
  console.log(`ok  ${path}`);
  return body;
}

const isPrerendered = (path, text) => (body) => {
  if (body.includes('<div id="root"></div>')) throw new Error(`${path} served an empty shell, not prerendered HTML`);
  if (!body.includes(text)) throw new Error(`${path} is missing its content (${text})`);
};
const isEmptyShell = (path) => (body) => {
  if (!body.includes('<div id="root"></div>')) throw new Error(`${path} should get the empty app shell (404.html)`);
};

let failed = false;
try {
  await waitForServer();
  const assets = new Set();
  for (const [route, text] of Object.entries(PAGES)) {
    const html = await check(route, isPrerendered(route, text));
    for (const [, asset] of html.matchAll(/"(\/assets\/[^"]+)"/g)) assets.add(asset);
  }
  await check("/no-such-page", isEmptyShell("/no-such-page"));
  if (assets.size === 0) throw new Error("the pages reference no /assets/ files");
  for (const asset of assets) await check(asset);
} catch (error) {
  failed = true;
  console.error(`FAIL ${error.message}`);
} finally {
  server.kill();
}
process.exit(failed ? 1 : 0);
