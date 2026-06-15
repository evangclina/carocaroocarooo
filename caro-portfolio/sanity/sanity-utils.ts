import { Collection } from "@/types/Collection";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

export async function getCollections(): Promise<Collection[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "collection"]{
      _id, 
      _createdAt,
      name, 
      "slug": slug.current,
      pieces
    }`,
  );
}

export async function getCollectionBySlug(slug: string): Promise<Collection> {
  const collection = await createClient(clientConfig).fetch(
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
        images[]{
          _id, 
          "url": asset->url, 
          "width": asset->metadata.dimensions.width, 
          "height": asset->metadata.dimensions.height
        },
        status, 
        description, 
        material, 
        dimensions
      }
    }`,
    { slug },
  );

  return collection;
}

export async function getInfoImage() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "infoImage"][0]{
      _id, 
      "portrait": {
          _id, 
          "url": portrait.asset->url, 
          "width": portrait.asset->metadata.dimensions.width, 
          "height": portrait.asset->metadata.dimensions.height
        },
    }`,
  );
}
