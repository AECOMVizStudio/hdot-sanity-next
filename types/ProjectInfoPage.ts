import { PortableTextBlock } from "next-sanity";

export interface Card {
  _key: string;
  title: string;
  image: {
    asset: {
      _id: string;
      url: string;
    };
  };
  alt: string;
  bulletPoints: string[];
  detailedDescription: PortableTextBlock[];
}

export interface ProjectInfo {
  _id: string;
  pageTitle: string;
  cards: Card[];
}
