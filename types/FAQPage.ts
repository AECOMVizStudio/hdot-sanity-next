import { PortableTextBlock } from "sanity";

export type FAQ = {
  title: string;
  questions: {
    question: string;
    answer: PortableTextBlock[];
  }[];
};
