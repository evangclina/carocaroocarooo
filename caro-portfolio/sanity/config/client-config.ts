import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "nkuwkr79",

  dataset: "production",

  apiVersion: "2026-05-26",

  useCdn: false,
});
