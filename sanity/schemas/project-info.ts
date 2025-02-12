const projectInfo = {
  name: "projectInfo",
  title: "Project Information",
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
      name: "projectBackgroundText",
      title: "Project Background Text",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "projectBackgroundImage",
      title: "Project Background Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "altText",
          title: "Alt Text",
          type: "string",
          description: "Describe the image for accessibility.",
          validation: (Rule: any) =>
            Rule.required().error("Alt text is required"),
        },
      ],
    },
    {
      name: "projectPurposeNeedText",
      title: "Project Purpose/Need Text",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "projectPurposeNeedImage",
      title: "Project Purpose/Need Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "altText",
          title: "Alt Text",
          type: "string",
          description: "Describe the image for accessibility.",
          validation: (Rule: any) =>
            Rule.required().error("Alt text is required"),
        },
      ],
    },
    {
      name: "projectTimelineText",
      title: "Project Timeline Text",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "projectTimelineImage",
      title: "Project Timeline Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "altText",
          title: "Alt Text",
          type: "string",
          description: "Describe the image for accessibility.",
          validation: (Rule: any) =>
            Rule.required().error("Alt text is required"),
        },
      ],
    },
    {
      name: "buttonText",
      title: "Button Text",
      type: "string",
    },
    {
      name: "buttonLink",
      title: "Button Link",
      type: "url",
      validation: (Rule: any) =>
        Rule.uri({
          allowRelative: true,
          scheme: ["http", "https", "mailto", "tel"],
        }).error("Only relative URLs are allowed"),
    },
  ],
};

export default projectInfo;
