import { defineField } from "sanity";
const homePage = {
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Page title displayed top center of Home page",
      validation: (Rule: any) => Rule.required().error("Title is required"),
    },
    {
      name: "titleLine2",
      title: "Title Line 2",
      type: "string",
      description: "Displayed beneath top center of Home page",
    },
    {
      name: "titleLine3",
      title: "Title Line 3",
      type: "string",
      description: "Displayed beneath title line 2 of Home page",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
    {
      name: "headerButtonText",
      title: "Header Button Text",
      type: "string",
      description: "Text displayed on the button.",
    },
    {
      name: "headerButtonLink",
      title: "Header Button Link",
      type: "url",
      description: "Site page the button will link to.",
      validation: (Rule: any) =>
        Rule.uri({
          allowRelative: true,
          scheme: ["http", "https", "mailto", "tel"],
        }).error("Only relative URLs are allowed"),
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
              validation: (Rule: any) =>
                Rule.required().error("Image is required"),
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
              name: "isIcon",
              title: "Is this an icon?",
              type: "boolean",
              description:
                "If checked, the sizing of the image will be adjusted to fit the icon size.",
            },

            {
              name: "isTimeline",
              title: "Is this a timeline?",
              type: "boolean",
              description:
                "Check this true ONLY if this section is a timeline, very important.",
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
                  allowRelative: true,
                  scheme: ["http", "https", "mailto", "tel"],
                }).error("Only relative URLs are allowed"),
            },
          ],
        },
      ],
    },
  ],
};

export default homePage;
