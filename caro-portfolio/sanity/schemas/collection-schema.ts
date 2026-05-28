const collection = {
  name: "collection",

  title: "Collections",

  type: "document",

  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "slug",
      type: "slug",
    },
    {
      name: "description",
      title: "Collection description",
      type: "text",
    },
    {
      name: "image",
      title: "Collection Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "pieces",
      title: "Pieces",
      type: "array",

      of: [
        {
          type: "object",

          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
            },
            {
              name: "slug",
              title: "Slug",
              type: "string",
            },
            {
              name: "image",
              title: "Piece image",
              type: "image",

              options: {
                hotspot: true,
              },
            },
            {
              name: "status",
              title: "Status",
              type: "string",

              options: {
                list: [
                  {
                    title: "Available",
                    value: "available",
                  },
                  {
                    title: "Sold",
                    value: "sold",
                  },
                ],
                layout: "radio",
              },

              initialValue: "available",
            },
            {
              name: "description",
              title: "Piece description",
              type: "text",
            },
          ],
        },
      ],
    },
  ],
};

export default collection;
