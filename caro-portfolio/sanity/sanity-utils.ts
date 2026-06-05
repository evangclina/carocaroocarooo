import { Collection } from "@/types/Collection";
import { createClient, groq } from "next-sanity";

export async function getCollections(): Promise<Collection[]> {
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
      "image": {
        "url": image.asset->url, 
        "width": image.asset->metadata.dimensions.width, 
        "height": image.asset->metadata.dimensions.height
      }, 
      description, 
      pieces
    }`,
  );
}

export async function getCollectionBySlug(slug: string): Promise<Collection> {
  const client = createClient({
    projectId: "nkuwkr79",

    dataset: "production",

    apiVersion: "2026-05-26",

    useCdn: false,
  });

  const collection = await client.fetch(
    `*[_type == "collection" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      description,
      pieces[]{
        name, 
        slug, 
        "image": {
          "url": image.asset->url, 
          "width": image.asset->metadata.dimensions.width, 
          "height": image.asset->metadata.dimensions.height
        },  
        status, 
        description
      }
    }`,
    { slug },
  );

  return collection;
}
