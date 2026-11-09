import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const frontendDir = path.dirname(fileURLToPath(import.meta.url));

// index.html lives at the repo root (next to backend/, docs/, frontend/), so Vite's root is one level up.
export default defineConfig({
  root: path.resolve(frontendDir, ".."),
  publicDir: path.resolve(frontendDir, "public"),
  cacheDir: path.resolve(frontendDir, "node_modules/.vite"),
  plugins: [react(), tailwindcss()],
  build: {
    outDir: path.resolve(frontendDir, "dist"),
    emptyOutDir: true,
  },
  server: {
    port: 5173,
  },
});
