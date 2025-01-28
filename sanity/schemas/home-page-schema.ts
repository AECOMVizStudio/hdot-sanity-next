const homePage = {
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required().error("Title is required"),
    },
    {
      name: "photoGallery",
      title: "Photo Gallery",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "projectOverview",
      title: "Project Overview",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "projectUpdates",
      title: "Project Updates & Events",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "leaveComment",
      title: "Leave a Comment",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default homePage;
