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
      "image": image.asset->url, 
      description, 
      pieces
    }`,
  );
}

// export async function getCollectionBySlug(slug: string): Promise<Collection> {
//   const client = createClient({
//     projectId: "nkuwkr79",

//     dataset: "production",

//     apiVersion: "2026-05-26",

//     useCdn: false,
//   });

//   console.log("This is the slug:", slug);

//   return client.fetch(
//     groq`*[_type == "collection" && slug == $slug][0]{
//     _id,
//     _createdAt,
//     "slug": slug.current,
//     name,
//     description,
//     "image": image.asset->url,
//     pieces
//     }`,
//     { slug },
//   );
// }

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
        "image": image.asset->url,  
        status, 
        description
      }
    }`,
    { slug },
  );

  return collection;
}
