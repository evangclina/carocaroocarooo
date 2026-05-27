import { defineConfig } from "sanity";

import { structureTool } from "sanity/structure";

const config = defineConfig({
  projectId: "nkuwkr79",

  dataset: "production",

  title: "carocaroocarooo",

  apiVersion: "2026-05-26",

  basePath: "/admin",

  plugins: [structureTool()],
});

export default config;
