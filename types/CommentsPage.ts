// types/HomePage.ts

export type CommentsPage = {
  _id: string;
  _createdAt: Date;
  title: string;
  description: string;
  mainImage: {
    asset: {
      _id: string;
      url: string;
    };
    alt: string;
  };

  formSubtitle: string;

  formFields: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
};
