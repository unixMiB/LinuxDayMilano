import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import Icons from "unplugin-icons/vite";
import yaml from "@rollup/plugin-yaml";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  integrations: [react(), sitemap()],
  vite: {
    plugins: [
      Icons({
        compiler: "jsx",
        jsx: "react",
      }),
      Icons({
        compiler: "astro",
      }),
      yaml(),
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
  image: {
    imageresponsivestyles: true,
  },
});
