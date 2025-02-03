// schemas/commentsPage.js

export default {
  name: "commentsPage",
  title: "Comments Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Page Title",
      type: "string",
      validation: (Rule: any) => Rule.required().error("Title is required"),
    },
    {
      name: "description",
      title: "Page Description",
      type: "text",
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true, // Allows for image cropping in the studio
      },
    },
    {
      name: "formSubtitle",
      title: "Form Subtitle",
      type: "string",
    },

    {
      name: "formFields",
      title: "Form Fields",
      type: "object",
      fields: [
        {
          name: "name",
          title: "Name Field",
          type: "string",
        },
        {
          name: "email",
          title: "Email Field",
          type: "string",
        },
        {
          name: "subject",
          title: "Subject Field",
          type: "string",
        },
        {
          name: "message",
          title: "Message Field",
          type: "text",
        },
      ],
    },
  ],
};
