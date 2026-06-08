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
      options: {
        source: "name",
        maxLength: 96,
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
              options: {
                source: "name",
                maxLength: 96,
              },
            },
            {
              name: "coverImage",
              title: "coverImage",
              type: "image",
              options: {
                hotspot: "true",
              },
            },
            {
              name: "images",
              title: "Piece images",
              type: "array",

              of: [
                {
                  type: "image",
                  options: {
                    hotspot: "true",
                  },
                },
              ],
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
            {
              name: "material",
              title: "Material",
              type: "string",
            },
            {
              name: "dimensions",
              title: "Dimensions",
              type: "object",

              fields: [
                {
                  name: "width",
                  title: "Width",
                  type: "number",
                },
                {
                  name: "height",
                  title: "Height",
                  type: "number",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default collection;
