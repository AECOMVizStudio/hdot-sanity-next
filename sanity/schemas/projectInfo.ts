import { defineField } from "sanity";

// process page - formerly project info

const projectInfo = {
  name: "projectInfo",
  title: "Process Page - Formerly Project Info",
  type: "document",
  fields: [
    {
      name: "pageTitle",
      title: "Page Title",
      type: "string",
      validation: (Rule: any) =>
        Rule.required().error("Page title is required"),
    },
    {
      name: "cards",
      title: "Info Cards",
      type: "array",
      of: [
        {
          type: "object",
          name: "card",
          title: "Info Card",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
          
            defineField({
              name: "subtitle",
              title: "Subtitle",
              type: "string",
              description: "2nd line of the title for the card",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "alt",
              title: "Alt text",
              type: "string",

              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "subheading",
              title: "Subheading",
              type: "string",

              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "bulletPoints",
              title: "Bullet Points",
              type: "array",
              of: [{ type: "string" }],
              validation: (Rule) => Rule.max(3),
            }),

            defineField({
              name: "buttonText",
              title: "Button Text",
              type: "string",
              description:
                "Text for the button - if left blank, no button will be displayed",
            }),
            defineField({
              name: "buttonLink",
              title: "Button Link",
              type: "url",
              description:
                "Link for the button - for internal links, use the relative path. ex: /process",
              validation: (Rule) => Rule.uri({ allowRelative: true }),
            }),
          ],
        },
      ],
    },
  ],
};

export default projectInfo;
