import { defineField, defineType } from "sanity";

export default defineType({
  name: "commentsPage",
  title: "Comments Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      validation: (Rule) => Rule.required().error("Title is required"),
    }),
    defineField({
      name: "description",
      title: "Page Description",
      type: "array",
      of: [{ type: "block" }], // Allows rich text formatting if needed
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      fields: [
        defineField({
          name: "alt",
          title: "Alternative Text",
          type: "string",
          description: "Describe the image for accessibility and SEO.",
          validation: (Rule) => Rule.required().error("Alt text is required"),
        }),
      ],
    }),
    defineField({
      name: "formSubtitle",
      title: "Form Subtitle",
      type: "string",
    }),
    defineField({
      name: "formFields",
      title: "Form Fields",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Name Field",
              type: "string",
              validation: (Rule) => Rule.required().error("Name is required"),
            }),
            defineField({
              name: "email",
              title: "Email Field",
              type: "string",
              validation: (Rule) =>
                Rule.required().error("A valid email address is required"),
            }),
            defineField({
              name: "subject",
              title: "Subject Field",
              type: "string",
            }),
            defineField({
              name: "message",
              title: "Message Field",
              type: "text",
              validation: (Rule) =>
                Rule.required().error("Message is required"),
            }),
            defineField({
              name: "subscriber",
              title: "Add to Email List",
              type: "boolean",
            }),
          ],
        },
      ],
    }),
  ],
});
