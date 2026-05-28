import { createClient, groq } from "next-sanity";

export async function getCollections() {
  const client = createClient({
    projectId: "nkuwkr79",

    dataset: "production",

    apiVersion: "2026-05-26",
  });

  return client.fetch(
    groq`*[_type == "collection"]{
      _id, 
      _createdAt,
      name, 
      "slug": slug.current, 
      "image": image.asset->url, 
      description, 
      pieces
    }`,
  );
}
