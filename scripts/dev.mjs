#!/usr/bin/env node
/**
 * Start Next.js dev server on a fixed port (3000).
 * Stops any process already listening on that port so localhost always shows the latest code.
 */
import { spawn, execSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const HOST = "127.0.0.1";
const PORT = 3000;

function killPort(port) {
  try {
    const out = execSync(`lsof -ti :${port}`, { encoding: "utf8" }).trim();
    if (!out) return;
    for (const pid of out.split(/\s+/)) {
      try {
        process.kill(Number(pid), "SIGTERM");
      } catch {
        /* already gone */
      }
    }
    execSync("sleep 0.5");
  } catch {
    /* nothing listening */
  }
}

killPort(PORT);

console.log(`\n  EnRing dev → http://${HOST}:${PORT}\n`);

const child = spawn(
  "npx",
  ["next", "dev", "-H", HOST, "-p", String(PORT)],
  { stdio: "inherit", shell: false, cwd: root }
);

child.on("exit", (code) => process.exit(code ?? 0));
