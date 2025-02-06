const documentsPage = {
  name: "documentsPage",
  title: "Documents Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Main Title",
      type: "string",
      validation: (Rule: any) =>
        Rule.required().error("Main title is required"),
    },
    {
      name: "subSections",
      title: "Sub Sections",
      type: "array",
      of: [
        {
          type: "object",
          name: "subSection",
          title: "Sub Section",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule: any) =>
                Rule.required().error("Sub-section title is required"),
            },
            {
              name: "documentLibrary",
              title: "Documents",
              type: "array",
              of: [
                {
                  type: "object",
                  name: "document-item",
                  title: "Document-item",
                  fields: [
                    {
                      name: "title",
                      title: "Document Title",
                      type: "string",
                      validation: (Rule: any) =>
                        Rule.required().error("Document title is required"),
                    },
                    {
                      name: "file",
                      title: "PDF File",
                      type: "file",
                      description:
                        "Upload a PDF file, or provide an external link below.",
                      options: { accept: ".pdf" },
                    },
                    {
                      name: "externalLink",
                      title: "External Link",
                      type: "url",
                      description: "Optional external link instead of a PDF.",
                    },
                    {
                      name: "description",
                      title: "Description",
                      type: "text",
                      description: "Short summary of the document (optional).",
                    },
                  ],
                  preview: {
                    select: {
                      title: "title",
                    },
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default documentsPage;
