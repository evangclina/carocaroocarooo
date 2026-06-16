const infoPage = {
  name: "infoImage",
  title: "Info Image",
  type: "document",

  fields: [
    {
      name: "title",
      type: "string",
      initialValue: "Info Page",
      hidden: true,
    },
    {
      name: "portrait",
      title: "Portrait",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],

  preview: {
    select: {
      title: "title",
      media: "portrait",
    },
    prepare() {
      return {
        title: "Info Page Portrait",
      };
    },
  },
};

export default infoPage;
