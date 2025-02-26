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
      name: "upcomingEventsTitle",
      title: "Upcoming Events Title",
      type: "string",
      validation: (Rule) =>
        Rule.required().error("Upcoming Events Title is required"),
    }),
    defineField({
      name: "upcomingEventsSubtitle",
      title: "Upcoming Events Subtitle",
      type: "string",
      description: "This field is optional",
    }),
    {
      name: "upcomingEventsList",
      title: "Upcoming Events List",
      type: "array",
      of: [
        {
          type: "object",
          name: "upcomingEvent",
          title: "Upcoming Event",
          fields: [
            defineField({
              name: "title",
              title: "Event Title",
              type: "string",
              validation: (Rule) =>
                Rule.required().error("Event title is required"),
            }),
            defineField({
              name: "subtitle",
              title: "Event Subtitle",
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
              description: "For example, 'Agenda' or 'Minutes'",
            }),
            {
              name: "upcomingDocumentsList",
              title: "Upcoming Event Documents",
              type: "object",
              fields: [
                {
                  name: "documentItem",
                  title: "Document item",
                  type: "array",
                  of: [
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
      ],
    },
    defineField({
      name: "pastEventsTitle",
      title: "Past Events Title",
      type: "string",
      validation: (Rule) =>
        Rule.required().error("Past Events Title is required"),
    }),
    defineField({
      name: "pastEventsSubtitle",
      title: "Event Subtitle",
      type: "string",
      description: "This field is optional",
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
              name: "title",
              title: "Event Title",
              type: "string",
              validation: (Rule) =>
                Rule.required().error("Event title is required"),
            }),
            defineField({
              name: "subtitle",
              title: "Event Subitle",
              type: "string",
              description: "This field is optional",
            }),
            defineField({
              name: "description",
              title: "Event Description",
              type: "array",
              of: [{ type: "block" }],
            }),
            defineField({
              name: "dateTime",
              title: "Event Date and Time",
              type: "string",
            }),
            defineField({
              name: "link",
              title: "Event Link",
              type: "url",
            }),
            defineField({
              name: "documentsSectionTitle",
              title: "Related Documents Title",
              type: "string",
              description: "For example, 'Agenda' or 'Minutes'",
            }),
            {
              name: "documentsList",
              title: "Past Event Documents",
              type: "object",
              fields: [
                {
                  name: "documentItem",
                  title: "Document item",
                  type: "array",
                  of: [
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
      ],
    },
  ],
};

export default getInvolved;
