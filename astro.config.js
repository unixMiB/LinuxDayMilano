import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import Icons from "unplugin-icons/vite";
import IconsAstro from "unplugin-icons/vite";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // ...
  integrations: [react(), sitemap(), IconsAstro({ compiler: "astro" })],
  vite: {
    plugins: [
      Icons({
        compiler: "jsx",
      }),
    ],
  },
  redirects: {
    "/2018": "/schedule?year=2018",
    "/2019": "/schedule?year=2019",
    "/2022": "/schedule?year=2022",
    "/2023": "/schedule?year=2023",
    "/2024": "/schedule?year=2024",
    "/2025": "/schedule?year=2025",
    "/2026": "/schedule?year=2026",
  },
});
