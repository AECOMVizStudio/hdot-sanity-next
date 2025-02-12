const faq = {
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required().error("Title is required"),
    },
    {
      name: "questions",
      title: "Questions",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "question",
              title: "Question",
              type: "string",
              validation: (Rule: any) =>
                Rule.required().error("Question is required"),
            },
            {
              name: "answer",
              title: "Answer",
              type: "array",
              of: [{ type: "block" }],
              validation: (Rule: any) =>
                Rule.required().error("Answer is required"),
            },
          ],
        },
      ],
    },
  ],
};

export default faq;
