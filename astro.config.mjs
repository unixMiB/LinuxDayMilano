import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import Icons from "unplugin-icons/vite";
import yaml from "@rollup/plugin-yaml";
import { imagetools } from "vite-imagetools";

import sitemap from "@astrojs/sitemap";

const defaultStyle =
  "height: 1em; vertical-align: -.125em; baseline-shift: -2.5px; overflow: visible";

export default defineConfig({
  integrations: [react(), sitemap()],
  vite: {
    plugins: [
      Icons({
        compiler: "jsx",
        jsx: "react",
        defaultStyle,
      }),
      Icons({
        compiler: "astro",
        defaultStyle,
      }),
      yaml(),
      imagetools(),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: [
            "import",
            "mixed-decls",
            "color-functions",
            "global-builtin",
          ],
        },
      },
    },
  },
  site: "https://linuxdaymilano.org",
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
