import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "nkuwkr79",

  dataset: "production",

  title: "carocaroocarooo",

  apiVersion: "2026-05-26",

  basePath: "/admin",

  plugins: [structureTool()],

  schema: { types: schemas },
});

export default config;
