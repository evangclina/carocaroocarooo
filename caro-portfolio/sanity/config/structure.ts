import { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Info Page")
        .child(S.document().schemaType("infoImage").documentId("infoImage")),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== "infoImage",
      ),
    ]);
