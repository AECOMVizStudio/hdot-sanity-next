// export type CommentsPage = {
//   _id: string;
//   _type: "commentsPage";
//   _createdAt: string;
//   title: string;
//   description?: string;
//   mainImage: {
//     asset: {
//       _id: string;
//       url: string;
//     };
//     alt: string;
//   };
//   formSubtitle?: string;
//   formFields: Record<string, unknown>;
// };

export type CommentsPage = {
  _id: string;
  _type: "commentsPage";
  _createdAt: string;

  title: string;
  description: string;
  formSubtitle: string;
  mainImage: {
    asset: {
      _id: string;
      url: string;
    };
    alt: string; // Optional in case it's missing
  };
  formFields: {
    name: string;
    email: string;
    subject: string;
    message: string;
    subscriber: string;
  };
};
