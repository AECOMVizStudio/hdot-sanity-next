const homePage = {
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required().error("Title is required"),
    },
    {
      name: "photoGallery",
      title: "Photo Gallery",
      type: "array",
      of: [{ type: "image" }],
    },

    {
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        {
          type: "object",
          name: "section",
          title: "Section",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule: any) =>
                Rule.required().error("Section title is required"),
            },
            {
              name: "content",
              title: "Content",
              type: "array",
              of: [{ type: "block" }],
            },
            {
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
            },
            {
              name: "altText",
              title: "Alt Text",
              type: "string",
              description: "Describe the image for accessibility.",
              validation: (Rule: any) =>
                Rule.required().error("Alt text is required"),
            },
            {
              name: "imageIsOnRight",
              title: "Image on Right",
              type: "boolean",
              description:
                "If checked, the image will appear on the right side.",
            },
            {
              name: "buttonText",
              title: "Button Text",
              type: "string",
              description: "Text displayed on the button.",
            },
            {
              name: "buttonLink",
              title: "Button Link",
              type: "url",
              description: "URL the button will link to.",
              validation: (Rule: any) =>
                Rule.uri({
                  scheme: ["http", "https", "mailto", "tel"],
                }),
            },
          ],
        },
      ],
    },
  ],
};

export default homePage;
