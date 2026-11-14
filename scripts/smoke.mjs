// Serves the built site with `vite preview` and checks that every route and
// the assets the app shell references respond. Run after `npm run build`.
import { spawn } from "node:child_process";
import { existsSync } from "node:fs";

const PORT = 4173;
const BASE = `http://localhost:${PORT}`;
const ROUTES = [
  "/",
  "/experience",
  "/papers",
  "/projects",
  "/productions",
  "/logs",
  "/logs/some-post",
  "/case-study/coming-soon",
];

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
  const res = await fetch(BASE + path);
  const body = await res.text();
  if (!res.ok) throw new Error(`${path} returned ${res.status}`);
  validate?.(body);
  console.log(`ok  ${path}`);
  return body;
}

const hasAppShell = (path) => (body) => {
  if (!body.includes('id="root"')) throw new Error(`${path} did not serve the app shell`);
};

let failed = false;
try {
  await waitForServer();
  for (const route of ROUTES) {
    const html = await check(route, hasAppShell(route));
    if (route === "/") {
      const assets = [...html.matchAll(/(?:src|href)="(\/assets\/[^"]+)"/g)].map((m) => m[1]);
      if (assets.length === 0) throw new Error("app shell references no /assets/ files");
      for (const asset of assets) await check(asset);
    }
  }
} catch (error) {
  failed = true;
  console.error(`FAIL ${error.message}`);
} finally {
  server.kill();
}
process.exit(failed ? 1 : 0);
