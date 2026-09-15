import { Collection } from "@/types/Collection";
import { groq } from "next-sanity";
import { client } from "./config/client-config";

type Locale = "es" | "en";

export async function getCollections(locale: Locale): Promise<Collection[]> {
  return client.fetch(
    groq`*[_type == "collection"]{
      _id, 
      _createdAt,
      "name": select(
        $locale == "en" => name.en,
        name.es
      ),
      "slug": slug.current,
      pieces
    }`,
    {locale}
  );
}

export async function getCollectionBySlug(slug: string, locale: Locale): Promise<Collection> {

  const collection = await client.fetch(
    `*[_type == "collection" && slug.current == $slug][0]{
      _id,
      _createdAt,
      "name": name[$locale],
      "slug": slug.current,
      pieces[]{
        "name": select(
          $locale == "en" => name.en,
          name.es
        ),
        slug, 
        images[]{
          _id, 
          "url": asset->url, 
          "width": asset->metadata.dimensions.width, 
          "height": asset->metadata.dimensions.height
        },
        status, 
        "description": select(
          $locale == "en" => description.en,
          description.es
        ), 
        "material": select(
          $locale == "en" => material.en, 
          material.es
        ), 
        dimensions
      }
    }`,
    { slug, locale },
  );
  
  return collection;
}

export async function getInfoImage() {
  return client.fetch(
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
