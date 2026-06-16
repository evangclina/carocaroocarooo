import imageUrlBuilder from "@sanity/image-url";
import { client } from "../sanity/config/client-config";

const builder = imageUrlBuilder(client);

export function urlFor(source: string) {
  return builder.image(source);
}
