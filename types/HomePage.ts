import { PortableTextBlock } from "next-sanity";

export type HomePage = {
  _id: string;
  _createdAt: Date;
  title: string;
  photoGallery: {
    asset: {
      _id: string;
      url: string;
    };
  }[];
  projectOverview: PortableTextBlock[];
  projectUpdates: PortableTextBlock[];
  leaveComment: PortableTextBlock[];
};
