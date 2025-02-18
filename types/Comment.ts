export type Comment = {
  _id: string;
  _type: "comment";
  _createdAt: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  subscriber: boolean;
};
