import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import Icons from "unplugin-icons/vite";
import IconsAstro from "unplugin-icons/vite";

export default defineConfig({
  // ...
  integrations: [react(), IconsAstro({ compiler: "astro" })],
  vite: {
    plugins: [
      Icons({
        compiler: "jsx",
      }),
    ],
  },
});
