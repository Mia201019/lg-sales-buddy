// Static SPA build for GitHub Pages (no server / Cloudflare needed).
// Used by:  npm run build:pages   ->  output in dist/client
// The Lovable config (vite.config.ts) is left untouched for Lovable hosting.
import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

// e.g. "/lg-sales-buddy/" for https://<user>.github.io/lg-sales-buddy/
const base = process.env.VITE_BASE_PATH ?? "/";

export default defineConfig({
  base,
  resolve: { dedupe: ["react", "react-dom", "@tanstack/react-router"] },
  plugins: [
    tsConfigPaths(),
    tanstackStart({
      spa: {
        enabled: true,
        prerender: { outputPath: "/index.html", crawlLinks: false },
      },
    }),
    viteReact(),
    tailwindcss(),
  ],
});
