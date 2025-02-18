export type CommentsPage = {
  _id: string;
  _type: "commentsPage";
  _createdAt: string;
  title: string;
  description?: string;
  mainImage: {
    asset: {
      _id: string;
      url: string;
    };
    alt: string;
  };
  formSubtitle?: string;
  formFields: Record<string, unknown>; // More flexible for potential future changes
};
