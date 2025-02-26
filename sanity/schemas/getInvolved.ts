import { defineField } from "sanity";

const getInvolved = {
  name: "getInvolved",
  title: "Get Involved",
  type: "document",
  fields: [
    defineField({
      name: "pageTitle",
      title: "Page Title",
      type: "string",
      validation: (Rule) => Rule.required().error("Page title is required"),
    }),
    defineField({
      name: "upcomingEvents",
      title: "Upcoming Events Title",
      type: "string",
      validation: (Rule) =>
        Rule.required().error("Upcoming Events Title is required"),
    }),
    {
      name: "upcomingEventsList",
      title: "Upcoming Events List",
      type: "array",
      of: [
        {
          type: "object",
          name: "pastEvent",
          title: "Past Event",
          fields: [
            defineField({
              name: "upcomingTitle",
              title: "Event Title",
              type: "string",
              validation: (Rule) =>
                Rule.required().error("Event title is required"),
            }),
            defineField({
              name: "upcomingSubtitle",
              title: "Event Subitle",
              type: "string",
              description: "This field is optional",
            }),
            defineField({
              name: "upcomingDescription",
              title: "Event Description",
              type: "array",
              of: [{ type: "block" }],
            }),
            defineField({
              name: "upcomingDateTime",
              title: "Event Date and Time",
              type: "string",
            }),
            defineField({
              name: "upcomingLink",
              title: "Event Link",
              type: "url",
            }),
            defineField({
              name: "upcomingDocumentsSectionTitle",
              title: "Related Documents Title",
              type: "string",
            }),
            {
              name: "upcomingDocumentsList",
              title: "Upcoming Event Documents",
              type: "object",
              fields: [
                {
                  type: "object",
                  name: "documentItem",
                  title: "Document item",
                  fields: [
                    defineField({
                      name: "title",
                      title: "Document Title",
                      type: "string",
                      validation: (Rule) =>
                        Rule.required().error("Document title is required"),
                    }),
                    {
                      name: "file",
                      title: "PDF File",
                      type: "file",
                      description: "Upload a PDF file",
                      options: { accept: ".pdf" },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    defineField({
      name: "pastEvents",
      title: "Past Events Title",
      type: "string",
      validation: (Rule) =>
        Rule.required().error("Upcoming Events Title is required"),
    }),
    {
      name: "pastEventsList",
      title: "Past Events List",
      type: "array",
      of: [
        {
          type: "object",
          name: "pastEvent",
          title: "Past Event",
          fields: [
            defineField({
              name: "pastTitle",
              title: "Event Title",
              type: "string",
              validation: (Rule) =>
                Rule.required().error("Event title is required"),
            }),
            defineField({
              name: "pastSubtitle",
              title: "Event Subitle",
              type: "string",
              description: "This field is optional",
            }),
            defineField({
              name: "pastDescription",
              title: "Event Description",
              type: "array",
              of: [{ type: "block" }],
            }),
            defineField({
              name: "pastDateTime",
              title: "Event Date and Time",
              type: "string",
            }),
            defineField({
              name: "pastLink",
              title: "Event Link",
              type: "url",
            }),
            defineField({
              name: "pastDocumentsSectionTitle",
              title: "Related Documents Title",
              type: "string",
            }),
          ],
        },

        {
          name: "pastDocumentsList",
          title: "Past Event Documents",
          type: "object",
          fields: [
            {
              type: "object",
              name: "documentItem",
              title: "Document item",
              fields: [
                defineField({
                  name: "title",
                  title: "Document Title",
                  type: "string",
                  validation: (Rule) =>
                    Rule.required().error("Document title is required"),
                }),
                {
                  name: "file",
                  title: "PDF File",
                  type: "file",
                  description: "Upload a PDF file",
                  options: { accept: ".pdf" },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default getInvolved;
