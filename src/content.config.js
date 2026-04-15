import { defineCollection } from "astro:content";
// import { z } from "astro/zod";
import { glob, file } from "astro/loaders";

// Example
// const blog = defineCollection({
//   loader: glob({ pattern: "**/*.md", base: "./src/data/blog" }),
//   schema: z.object({
//     title: z.string(),
//     permalink: z.string().optional(),
//   }),
// });

const siteMetadata = defineCollection({
  loader: file("src/assets/siteMetadata.yaml"),
});

// Expose your defined collection to Astro
// with the `collections` export
export const collections = { siteMetadata };
