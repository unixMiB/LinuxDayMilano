import { defineCollection } from "astro:content";
// import { z } from "astro/zod";
import { glob } from "astro/loaders";

const schedules = defineCollection({
  loader: glob({
    base: "./src/schedules",
    pattern: "*.yml",
  }),
});

// Expose your defined collection to Astro
// with the `collections` export
export const collections = { schedules };
