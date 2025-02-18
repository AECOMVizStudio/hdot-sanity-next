import { defineField, defineType } from "sanity";

export const commentSchema = defineType({
  name: "comments", // This is the type name (use this in your API)
  title: "User Submitted Comments",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "message",
      title: "Message",
      type: "text",
    }),
    defineField({
      name: "subject",
      title: "Subject",
      type: "string",
    }),
    defineField({
      name: "subscriber",
      title: "Subscribe to Newsletter",
      type: "boolean",
    }),
    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      options: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm",
        timeStep: 5,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
