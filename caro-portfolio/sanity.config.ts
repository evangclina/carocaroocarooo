import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { structure } from "./sanity/config/structure";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "nkuwkr79",

  dataset: "production",

  title: "carocaroocarooo",

  apiVersion: "2026-05-26",

  basePath: "/admin",

  plugins: [structureTool({ structure })],

  schema: { types: schemas },

  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === "global") {
        return prev.filter((item) => item.templateId !== "infoImage");
      }
      return prev;
    },
  },
});

export default config;
